import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Grid, List } from 'lucide-react'
import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchParams] = useSearchParams()
  const categoryQuery = searchParams.get('category') || ''

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = categoryQuery
      ? dest.category.some((cat) => cat.toLowerCase().includes(categoryQuery.toLowerCase()))
      : true

    const matchesSearch = searchQuery
      ? dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.category.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))
      : true

    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="section-padding py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="heading-lg text-gray-900 dark:text-white mb-4">
              All Destinations
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover India's most beautiful places, from famous landmarks to hidden gems.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-900 
                         border border-gray-200 dark:border-gray-800 outline-none
                         focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No destinations found matching your search.</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}