
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { destinations } from '../data/destinations'
import DestinationCard from '../components/DestinationCard'

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(query.toLowerCase()) ||
    dest.state.toLowerCase().includes(query.toLowerCase()) ||
    dest.city.toLowerCase().includes(query.toLowerCase()) ||
    dest.category.some((cat) => cat.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="section-padding py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="heading-lg text-gray-900 dark:text-white mb-4">
              Search Results
            </h1>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Search className="w-5 h-5" />
              <span>
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </span>
            </div>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((destination, index) => (
                <DestinationCard key={destination.id} destination={destination} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No destinations found
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Try searching for a different destination, state, or category.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}