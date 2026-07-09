import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Shield, ArrowUp, ArrowDown, Gamepad2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface LeaderboardUser {
  name: string;
  username: string;
  score: number;
  avatar: string;
  isCurrentUser?: boolean;
  badge: string;
  change?: 'up' | 'down' | 'same';
}

const mockTravelers: LeaderboardUser[] = [
  {
    name: 'Siddharth Roy',
    username: 'siddharth_explorer',
    score: 1350,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    badge: 'Globetrotter',
  },
  {
    name: 'Priya Sharma',
    username: 'priya_travels',
    score: 1100,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    badge: 'Pathfinder',
  },
  {
    name: 'Amit Kumar',
    username: 'amit_himalayas',
    score: 950,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    badge: 'Explorer',
  },
  {
    name: 'Ananya Patel',
    username: 'ananya_wanderlust',
    score: 750,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    badge: 'Wanderer',
  },
  {
    name: 'Rahul Verma',
    username: 'rahul_trips',
    score: 550,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    badge: 'Novice',
  },
]

export default function TravelScoreLeaderboard() {
  const { user, travelScore } = useAuth()
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([])

  // Load and periodically simulate changes to mock scores
  useEffect(() => {
    // Construct initial leaderboard including current user
    const initialList = [...mockTravelers]
    if (user) {
      initialList.push({
        name: `${user.name} (You)`,
        username: user.username,
        score: travelScore,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        isCurrentUser: true,
        badge: getTravelBadge(travelScore),
      })
    }

    // Sort initially
    initialList.sort((a, b) => b.score - a.score)
    setLeaderboard(initialList)

    // Setup live interval to simulate leaderboard changes (goes high and down)
    const interval = setInterval(() => {
      setLeaderboard((prev) => {
        const updated = prev.map((item) => {
          // Keep current user static (or dynamic based on their actions)
          if (item.isCurrentUser) {
            return {
              ...item,
              score: travelScore,
              badge: getTravelBadge(travelScore),
            }
          }

          // Random fluctuation (-15 to +20 points)
          const fluctuation = Math.floor(Math.random() * 35) - 15
          const nextScore = Math.max(100, item.score + fluctuation)
          const change = fluctuation > 5 ? 'up' : fluctuation < -5 ? 'down' : 'same'
          
          return {
            ...item,
            score: nextScore,
            badge: getTravelBadge(nextScore),
            change: change as any,
          }
        })

        // Sort descending by score
        return [...updated].sort((a, b) => b.score - a.score)
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [user, travelScore])

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
