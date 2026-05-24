import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { getHiddenGems } from '../data/destinations'
import DestinationCard from './DestinationCard'

export default function HiddenGemsSection() {
  const hiddenGems = getHiddenGems().slice(0, 6)

  return (
    <section className="py-20 section-padding bg-gradient-to-b from-gray-50 to-white 
                       dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500 text-sm font-medium uppercase tracking-wider">
                Off the Beaten Path
              </span>
            </div>
            <h2 className="heading-lg text-gray-900 dark:text-white">
              Hidden Gems of India
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 max-w-xl">
              Discover secret spots that most travelers miss. These untouched paradises 
              are waiting to be explored.
            </p>
          </motion.div>

          <Link
            to="/destinations?filter=hidden-gems"
            className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 
                     font-medium hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hiddenGems.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}