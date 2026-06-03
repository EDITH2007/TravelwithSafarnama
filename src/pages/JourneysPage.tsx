import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Clock, Star, ArrowRight, Navigation } from 'lucide-react'
import { journeys } from '../data/journeys'

type JourneyCategory = 'all' | 'spiritual' | 'road-trip' | 'photography' | 'mountain' | 'monsoon' | 'cultural' | 'heritage' 

const categories: Array<{ id: JourneyCategory; name: string; icon: string }> = [
  { id: 'all', name: 'All Journeys', icon: '🎯' },
  { id: 'spiritual', name: 'Spiritual', icon: '🛕' },
  { id: 'road-trip', name: 'Road Trips', icon: '🏍' },
  { id: 'photography', name: 'Photography', icon: '📷' },
  { id: 'mountain', name: 'Mountains', icon: '🏔' },
  { id: 'monsoon', name: 'Monsoon', icon: '🌧' },
  { id: 'cultural', name: 'Cultural', icon: '🎭' },
  { id: 'heritage', name: 'Heritage', icon: '🏛' },

]

interface JourneysPageProps {
  defaultCategory?: JourneyCategory
}

export default function JourneysPage({ defaultCategory = 'all' }: JourneysPageProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = journeys.filter(j => {
    const matchesCategory = selectedCategory === 'all' || j.category.includes(selectedCategory as any)
    const matchesSearch = j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          j.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          j.stops.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                           s.state.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/071/853/324/small/scenic-highway-at-sunset-photo.jpeg"
          alt="Journeys"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Journeys
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Experience-based travel. Not just destinations — stories, rituals, and transformations.
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
                  placeholder="Search journeys, destinations, states..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                           bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                />
              </div>
            </div>

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

      {/* Journeys Grid */}
      <section className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((journey, index) => (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/journeys/${journey.slug}`} className="group block">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm 
                                hover:shadow-2xl transition-all duration-500 card-hover">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={journey.cardImage}
                        alt={journey.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${journey.color} 
                                      flex items-center justify-center shadow-lg text-2xl`}>
                          {journey.iconEmoji}
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        {journey.isHiddenGem && (
                          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                            Hidden Gem
                          </span>
                        )}
                        {journey.isPopular && (
                          <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      {/* Stops Preview */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-1 text-white/90 text-sm mb-2">
                          <Navigation className="w-4 h-4 shrink-0" />
                          <span className="font-medium">{journey.stops.length} stops</span>
                          <span className="text-white/60"> • {journey.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {journey.stops.slice(0, 3).map((stop) => (
                            <span key={stop.id} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                              {stop.name}
                            </span>
                          ))}
                          {journey.stops.length > 3 && (
                            <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                              +{journey.stops.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 
                                   group-hover:text-blue-600 transition-colors">
                        {journey.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                        {journey.shortDescription}
                      </p>

                      {/* All Stops Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {journey.stops.map((stop) => (
                          <span key={stop.id} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {stop.name}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                          <span className="text-sm font-medium">{journey.rating}</span>
                          <span className="text-xs text-gray-400">({journey.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{journey.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="text-sm text-gray-500">
                          Best: <span className="text-gray-700 dark:text-gray-300">{journey.bestSeason}</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
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
                No journeys found
              </h2>
              <p className="text-gray-500">
                Try searching with different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}