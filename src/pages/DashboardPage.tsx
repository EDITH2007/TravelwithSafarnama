import { motion } from 'framer-motion'
import { Heart, MapPin, Clock, Camera, User } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="section-padding py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Profile Header */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-8 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 
                            flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Welcome, Traveler!
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage your saved destinations, wishlist, and travel history.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Heart, label: 'Saved', value: '12', color: 'text-red-500' },
              { icon: MapPin, label: 'Visited', value: '8', color: 'text-blue-500' },
              { icon: Clock, label: 'Planned', value: '3', color: 'text-green-500' },
              { icon: Camera, label: 'Photos', value: '24', color: 'text-purple-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Saved Destinations
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You haven't saved any destinations yet. Start exploring!
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                Explore Destinations
              </button>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Trip Planner
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plan your next adventure with our smart trip planner.
              </p>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors">
                Plan a Trip
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}