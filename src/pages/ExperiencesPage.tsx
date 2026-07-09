import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Clock, Users, Star, Navigation } from 'lucide-react'
import { experiences } from '../data/experiences'
import { useAuth } from '../context/AuthContext'

const categories = [
  { id: 'all', name: 'All Experiences', icon: '🎯' },
  { id: 'village-tour', name: 'Village Tours', icon: '🏡' },
  { id: 'local-guide', name: 'Local Guides', icon: '🧭' },
  { id: 'heritage-walk', name: 'Heritage Walks', icon: '🏛️' },
  { id: 'food-tour', name: 'Food Tours', icon: '🍜' },
  { id: 'photography-walk', name: 'Photography', icon: '📸' },
]

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { experiences: communityStories } = useAuth()

  const filtered = experiences.filter(e => {
    const matchesCategory = selectedCategory === 'all' || e.category === selectedCategory
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1920"
          alt="Local experiences"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Local Experiences
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Book authentic experiences directly from locals across India.
              Village tours, heritage walks, food trails, and photography sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-padding py-8 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search experiences, cities, states..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                           bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors
                    ${selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                    }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/experiences/${exp.slug}`} className="group block">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm 
                                hover:shadow-2xl transition-all duration-500 card-hover">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {exp.isHiddenGem && (
                          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                            Hidden Gem
                          </span>
                        )}
                        {exp.isInstantBook && (
                          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
                            Instant Book
                          </span>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 text-gray-800 dark:text-white text-xs font-medium capitalize">
                          {exp.category.replace('-', ' ')}
                        </span>
                      </div>
                      
                      {/* Location Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-start gap-1 text-white/90 text-sm mb-1">
                          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-semibold">{exp.location}</span>
                            <span className="text-white/70"> • {exp.city}, {exp.state}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 
                                   group-hover:text-blue-600 transition-colors line-clamp-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                        {exp.description}
                      </p>

                      {/* Location Tags - Shows ALL related locations */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium flex items-center gap-1">
                          <Navigation className="w-3 h-3" />
                          {exp.city}
                        </span>
                        <span className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-xs font-medium">
                          {exp.state}
                        </span>
                        <span className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg text-xs font-medium">
                          {exp.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                          <span className="text-sm font-medium">{exp.rating}</span>
                          <span className="text-xs text-gray-400">({exp.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>Max {exp.maxGroupSize}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                          <img
                            src={exp.host.avatar}
                            alt={exp.host.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{exp.host.name}</p>
                            {exp.host.isVerified && (
                              <p className="text-xs text-green-600">✓ Verified Host</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-blue-600">₹{exp.price.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">per person</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No experiences found
              </h2>
              <p className="text-gray-500">
                Try searching with different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Community Traveler Stories Section */}
      <section className="section-padding py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 dark:text-white">Community Traveler Stories</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              Real diaries and reviews shared by our community travelers.
            </p>
          </div>

          {communityStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityStories.map((story) => (
                <div key={story.id} className="bg-slate-50 dark:bg-gray-950 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-1 text-orange-500">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-orange-500" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase bg-gray-200/50 dark:bg-gray-800 px-2.5 py-0.5 rounded-full">
                        Score: {story.score}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 leading-relaxed italic">
                      "{story.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-250/20 dark:border-gray-850 flex items-center gap-3">
                    <img src={story.avatar} alt={story.name} className="w-10 h-10 rounded-full object-cover border" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-xs">{story.name}</h4>
                      <p className="text-[10px] text-gray-500">{story.location} • Visited {story.destination}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No community stories submitted yet. Submit yours from the User Dashboard!
            </div>
          )}
        </div>
      </section>
    </main>
  )
}