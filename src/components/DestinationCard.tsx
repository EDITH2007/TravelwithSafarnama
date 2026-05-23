import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Star, Heart, ArrowUpRight } from 'lucide-react'
import type { Destination } from '../types'

interface Props {
  destination: Destination
  index?: number
}

export default function DestinationCard({ destination, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/destinations/${destination.slug}`} className="group block">
        <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 
                      shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={destination.images[0]}
              alt={destination.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {destination.isTrending && (
                <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
                  Trending
                </span>
              )}
              {destination.isHiddenGem && (
                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium">
                  Hidden Gem
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm 
                       hover:bg-white/40 transition-colors"
            >
              <Heart className="w-4 h-4 text-white" />
            </button>

            {/* Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-1 text-white/80 text-sm mb-1">
                <MapPin className="w-3 h-3" />
                <span>{destination.state}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{destination.name}</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
              {destination.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                  <span className="text-xs text-gray-400">({destination.reviewCount})</span>
                </div>
                <div className="text-sm text-gray-500">
                  ₹{destination.budget.min.toLocaleString()} - ₹{destination.budget.max.toLocaleString()}
                </div>
              </div>
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 
                           group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4 text-blue-600 dark:text-blue-400 
                                       group-hover:text-white" />
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 mt-4">
              {destination.category.slice(0, 3).map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 
                           text-xs text-gray-600 dark:text-gray-300 capitalize"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}