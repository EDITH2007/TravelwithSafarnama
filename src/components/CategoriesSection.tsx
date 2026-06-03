import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mountain, Waves, Church, Tent, Gem, Heart } from 'lucide-react'

const categories = [
  { name: 'Mountains', icon: Mountain, color: 'from-blue-500 to-blue-700', count: 45 },
  { name: 'Beaches', icon: Waves, color: 'from-orange-400 to-orange-600', count: 32 },
  { name: 'Spiritual', icon: Church, color: 'from-green-500 to-green-700', count: 28 },
  { name: 'Adventure', icon: Tent, color: 'from-gray-500 to-gray-700', count: 38 },
  { name: 'Hidden Gems', icon: Gem, color: 'from-blue-600 to-orange-500', count: 24 },
  { name: 'Honeymoon', icon: Heart, color: 'from-orange-500 to-blue-600', count: 20 },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wider">
            Travel Categories
          </span>
          <h2 className="heading-lg mt-3 mb-4 text-gray-900 dark:text-white">
            Find Your Perfect Escape
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={`/destinations?category=${category.name.toLowerCase()}`}
                className="group block text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} 
                              flex items-center justify-center shadow-lg group-hover:scale-110 
                              transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count} places</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}