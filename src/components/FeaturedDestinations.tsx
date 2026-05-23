import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'
import DestinationCard from './DestinationCard'

export default function FeaturedDestinations() {
  const featured = destinations.slice(0, 6)

  return (
    <section className="py-20 section-padding bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wider">
            Popular Destinations
          </span>
          <h2 className="heading-lg mt-3 mb-4 text-gray-900 dark:text-white">
            Explore India's Finest
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From the snow-capped Himalayas to the sun-kissed beaches of Goa, 
            discover destinations that will take your breath away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}