import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Star, Calendar, DollarSign, Thermometer, Heart, Share2, ChevronLeft, Utensils, Hotel, Camera } from 'lucide-react'
import { getDestinationBySlug } from '../data/destinations'

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const destination = getDestinationBySlug(slug || '')

  if (!destination) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Destination not found
          </h1>
          <Link to="/destinations" className="text-blue-600 hover:underline">
            Back to destinations
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={destination.bannerImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to destinations
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              {destination.name}
            </h1>
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span>{destination.state}, {destination.city}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                <span className="text-white font-medium">{destination.rating}</span>
                <span className="text-white/60">({destination.reviewCount} reviews)</span>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {destination.overview}
                </p>
              </section>

              {/* Best Time & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                  <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Best Time</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{destination.bestTimeToVisit}</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                  <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Budget</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    ₹{destination.budget.min.toLocaleString()} - ₹{destination.budget.max.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                  <Thermometer className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Weather</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {destination.weather.current}°C, {destination.weather.condition}
                  </p>
                </div>
              </div>

              {/* Hotels */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Hotel className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Nearby Hotels
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {destination.hotels.map((hotel) => (
                    <div key={hotel.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{hotel.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                            <span className="text-sm">{hotel.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{hotel.distance}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {hotel.amenities.slice(0, 2).map((amenity) => (
                              <span key={amenity} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                                {amenity}
                              </span>
                            ))}
                          </div>
                          <span className="font-semibold text-blue-600">₹{hotel.price.toLocaleString()}/night</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Food */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Utensils className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Local Food
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {destination.food.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                          <span className="text-sm font-medium text-blue-600">₹{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                        {item.isVegetarian && (
                          <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                            Vegetarian
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Attractions */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Camera className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Nearby Attractions
                  </h2>
                </div>
                <div className="space-y-4">
                  {destination.attractions.map((attraction) => (
                    <div key={attraction.id} className="flex gap-4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm">
                      <img src={attraction.image} alt={attraction.name} className="w-32 h-24 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{attraction.name}</h3>
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                            {attraction.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{attraction.description}</p>
                        <p className="text-sm text-gray-500">{attraction.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tips */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Travel Tips
                </h2>
                <ul className="space-y-3">
                  {destination.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl p-4">
                      <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 
                                     flex items-center justify-center text-sm font-medium shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Weather Widget */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Current Weather</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Temperature</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{destination.weather.current}°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Condition</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{destination.weather.condition}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Humidity</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{destination.weather.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Wind</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{destination.weather.windSpeed} km/h</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.category.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm capitalize">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}