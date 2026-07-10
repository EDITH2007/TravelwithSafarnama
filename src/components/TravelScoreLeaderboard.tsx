import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Shield, ArrowUp, ArrowDown, Gamepad2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useConvex } from 'convex/react'
import { api } from '../../convex/_generated/api'

interface LeaderboardUser {
  name: string;
  username: string;
  score: number;
  avatar: string;
  isCurrentUser?: boolean;
  badge: string;
  change?: 'up' | 'down' | 'same';
}

export default function TravelScoreLeaderboard() {
  const { user, isMock, simulateMockTravelActivity } = useAuth()
  const convex = useConvex()

  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([])
  const prevScoresRef = useRef<{ [username: string]: number }>({})

  // Seed default travelers in database once on mount if in Live Mode
  useEffect(() => {
    if (!isMock) {
      convex.mutation(api.users.seedLeaderboard).catch((err) => {
        console.warn("Could not auto-seed database. This is normal if Convex backend functions are not deployed yet:", err);
      })
    }
  }, [isMock, convex])

  // Helper to calculate mock leaderboard for Mock Mode
  const calculateMockLeaderboard = (): LeaderboardUser[] => {
    const usersJson = localStorage.getItem('safarnama-mock-users')
    const mockUsersList = usersJson ? JSON.parse(usersJson) : []

    const calculatedList = mockUsersList.map((u: any) => {
      const visited = JSON.parse(localStorage.getItem(`safarnama-visited-${u._id}`) || '[]')
      const logs = JSON.parse(localStorage.getItem(`safarnama-visitedlogs-${u._id}`) || '[]')
      
      const blogsJson = localStorage.getItem('safarnama-global-blogs')
      const allBlogs = blogsJson ? JSON.parse(blogsJson) : []
      const userBlogs = allBlogs.filter((b: any) => b.uploadedByUsername === u.username)

      const expsJson = localStorage.getItem('safarnama-global-experiences')
      const allExps = expsJson ? JSON.parse(expsJson) : []
      const userExps = allExps.filter((e: any) => e.uploadedByUsername === u.username)

      // Calculate score
      const visitedPoints = visited.length * 100
      const detailedCount = logs.filter(
        (l: any) => l.visitedHighlights || l.foodName || l.experience
      ).length
      const logBonus = detailedCount * 50
      const blogPoints = userBlogs.length * 200
      const storyPoints = userExps.length * 150
      const baseScore = visitedPoints + logBonus + blogPoints + storyPoints

      // Last activity time
      let lastActivityTime = u._creationTime || Date.now()
      logs.forEach((l: any) => {
        if (l.date && l.date > lastActivityTime) lastActivityTime = l.date
      })
      userBlogs.forEach((b: any) => {
        const t = b._creationTime || (b.createdAt ? new Date(b.createdAt).getTime() : 0)
        if (t > lastActivityTime) lastActivityTime = t
      })

      // Decay score after 5 minutes of inactivity (1% per minute decay)
      const inactivityMs = Date.now() - lastActivityTime
      const inactivityMins = inactivityMs / (1000 * 60)
      let decayFactor = 1.0
      if (inactivityMins > 5) {
        decayFactor = Math.pow(0.99, inactivityMins - 5)
      }
      decayFactor = Math.max(0.1, decayFactor)
      const finalScore = Math.round(baseScore * decayFactor)

      const avatars = [
        '1535713875002',
        '1494790108377',
        '1507003211169',
        '1438761681033',
        '1500648767791',
        '1544005313',
      ]
      let hash = 0
      for (let i = 0; i < u.username.length; i++) {
        hash += u.username.charCodeAt(i)
      }
      const avatarUrl = u.username === 'somendra'
        ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
        : `https://images.unsplash.com/photo-${avatars[hash % avatars.length]}?w=100`

      return {
        name: u.username === user?.username ? `${u.name} (You)` : u.name,
        username: u.username,
        score: finalScore,
        avatar: avatarUrl,
        badge: getTravelBadge(finalScore),
        isCurrentUser: u.username === user?.username,
      }
    })

    calculatedList.sort((a: any, b: any) => b.score - a.score)
    return calculatedList
  }

  // Periodic simulations and leaderboard state refresh
  useEffect(() => {
    // 1. Travel Simulation Interval (every 15 seconds)
    const simInterval = setInterval(() => {
      if (isMock) {
        simulateMockTravelActivity()
      } else {
        convex.mutation(api.users.simulateActivity).catch((err) => {
          console.warn("Leaderboard background simulation failed, this is normal if backend functions are not deployed:", err)
        })
      }
    }, 15000)

    // 2. Leaderboard Recalculation & Ticking Interval
    const refreshLeaderboard = async () => {
      let currentList: LeaderboardUser[] = []

      if (isMock) {
        currentList = calculateMockLeaderboard()
      } else {
        try {
          const result = await convex.query(api.users.getLeaderboard)
          if (result) {
            currentList = result.map((u: any) => ({
              ...u,
              isCurrentUser: user?.username === u.username,
              name: u.username === user?.username ? `${u.name} (You)` : u.name,
            }))
          } else {
            currentList = calculateMockLeaderboard()
          }
        } catch (err) {
          // If Convex functions are not synced or error out, fall back to mock data
          currentList = calculateMockLeaderboard()
        }
      }

      // Compare with previous scores to show trend indicators
      const nextList = currentList.slice(0, 5).map((item) => {
        const prevScore = prevScoresRef.current[item.username]
        let change: 'up' | 'down' | 'same' = 'same'
        if (prevScore !== undefined) {
          if (item.score > prevScore) change = 'up'
          else if (item.score < prevScore) change = 'down'
        }
        return { ...item, change }
      })

      // Store new scores for next comparison (using Ref to avoid render loops)
      const nextScores: { [username: string]: number } = {}
      nextList.forEach((item) => {
        nextScores[item.username] = item.score
      })
      prevScoresRef.current = nextScores

      setLeaderboard(nextList)
    }

    refreshLeaderboard()
    // Poll/tick decay calculations every 3 seconds
    const refreshInterval = setInterval(refreshLeaderboard, 3000)

    return () => {
      clearInterval(simInterval)
      clearInterval(refreshInterval)
    }
  }, [isMock, user])

  function getTravelBadge(score: number): string {
    if (score >= 1200) return 'Globetrotter'
    if (score >= 800) return 'Pathfinder'
    if (score >= 400) return 'Explorer'
    if (score >= 200) return 'Wanderer'
    return 'Novice'
  }

  function getRankIcon(idx: number) {
    if (idx === 0) return <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
    if (idx === 1) return <Shield className="w-5 h-5 text-slate-400 fill-slate-400/20" />
    if (idx === 2) return <Shield className="w-5 h-5 text-amber-600 fill-amber-600/20" />
    return <span className="text-xs font-bold text-gray-400 w-5 text-center">{idx + 1}</span>
  }

  return (
    <section className="py-20 section-padding bg-slate-50 dark:bg-gray-950/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            Travel Score Leaderboard
          </span>
          <h2 className="heading-lg text-gray-900 dark:text-white">
            Community Explorer Standings
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto text-sm">
            Earn scores as you explore! Post stories (+150 pts), write blogs (+200 pts), and log visited places (+100 pts +50 detailed logs).
          </p>
        </motion.div>

        {/* Leaderboard Table Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/40 rounded-3xl p-6 shadow-xl space-y-4"
        >
          <div className="flex justify-between items-center pb-4 border-b border-gray-150 dark:border-gray-800/40">
            <h3 className="font-bold text-gray-900 dark:text-white text-base">Traveler Ranks</h3>
            <div className="flex gap-4 text-xs font-semibold text-gray-400">
              <span>Points Earned</span>
            </div>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-800/40">
            {leaderboard.map((traveler, index) => (
              <motion.div
                key={traveler.username}
                layout
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`flex items-center justify-between py-4 ${
                  traveler.isCurrentUser 
                    ? 'bg-blue-50/50 dark:bg-blue-950/20 px-4 -mx-4 rounded-2xl border border-blue-100/30 dark:border-blue-900/10'
                    : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank Position */}
                  <div className="w-8 flex justify-center">
                    {getRankIcon(index)}
                  </div>

                  {/* Avatar */}
                  <img
                    src={traveler.avatar}
                    alt={traveler.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />

                  {/* User Profile details */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm ${
                        traveler.isCurrentUser ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {traveler.name}
                      </span>
                      <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-gray-150 dark:bg-gray-800 text-gray-500">
                        {traveler.badge}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">@{traveler.username}</span>
                  </div>
                </div>

                {/* Score & Fluctuation Trend */}
                <div className="flex items-center gap-3">
                  {traveler.change === 'up' && (
                    <ArrowUp className="w-3.5 h-3.5 text-green-500 animate-bounce" />
                  )}
                  {traveler.change === 'down' && (
                    <ArrowDown className="w-3.5 h-3.5 text-red-500" />
                  )}
                  <span className="font-bold text-gray-900 dark:text-white text-base">
                    {traveler.score.toLocaleString()} <span className="text-xs text-gray-400 font-medium">XP</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
