import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Star, ArrowUpRight } from 'lucide-react'
import type { Journey } from '../types'

interface Props {
  journey: Journey
  index?: number
}

export default function JourneyCard({ journey, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/journeys/${journey.slug}`} className="group block">
        <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
          <div className="relative h-64 overflow-hidden">
            <img
              src={journey.cardImage}
              alt={journey.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-xl">
              {journey.iconEmoji}
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              {journey.isPopular && (
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
                  Popular
                </span>
              )}
              {journey.isHiddenGem && (
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                  Hidden Gem
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>{journey.stops.length} stops</span>
                <span>• {journey.duration}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{journey.title}</h3>
            </div>
          </div>

          <div className="p-5">
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
              {journey.shortDescription}
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">{journey.rating}</span>
                <span className="text-xs text-gray-400">({journey.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                Explore
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
