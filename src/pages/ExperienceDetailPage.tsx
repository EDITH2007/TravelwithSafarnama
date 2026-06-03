import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ChevronLeft, MapPin, Clock, Users, Star, Heart, Share2, 
  Check, X, Calendar, Globe, Shield 
} from 'lucide-react'
import { getExperienceBySlug } from '../data/experiences'
import toast from 'react-hot-toast'

export default function ExperienceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const exp = getExperienceBySlug(slug || '')
  const [selectedDate, setSelectedDate] = useState('')

  if (!exp) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
          <Link to="/experiences" className="text-blue-600 hover:underline">
            Back to experiences
          </Link>
        </div>
      </main>
    )
  }

  const handleBook = () => {
    if (!selectedDate) {
      toast.error('Please select a date first')
      return
    }
    toast.success(`Booking request sent for ${selectedDate}! Host will confirm soon.`)
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Gallery */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/experiences" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ChevronLeft className="w-4 h-4" />
              Back to experiences
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{exp.title}</h1>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>{exp.location}, {exp.state}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Host */}
              <section className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={exp.host.avatar} alt={exp.host.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{exp.host.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.host.bio}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-500">{exp.host.languages.join(', ')}</span>
                      {exp.host.isVerified && (
                        <span className="flex items-center gap-1 text-sm text-green-600">
                          <Shield className="w-4 h-4" /> Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* About */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About this experience</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What you'll do</h2>
                <div className="space-y-4">
                  {exp.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 
                                     flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Includes/Excludes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" /> What's included
                  </h3>
                  <ul className="space-y-2">
                    {exp.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" /> What's not included
                  </h3>
                  <ul className="space-y-2">
                    {exp.excludes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <X className="w-4 h-4 text-red-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Sidebar - Booking */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">₹{exp.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
                    <span className="font-bold">{exp.rating}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5" /> {exp.duration}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-5 h-5" /> Max {exp.maxGroupSize} people
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5" /> Available: {exp.availability.join(', ')}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                             bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  onClick={handleBook}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl 
                           font-bold transition-colors mb-4"
                >
                  {exp.isInstantBook ? 'Book Instantly' : 'Request to Book'}
                </button>

                <p className="text-center text-sm text-gray-500">
                  {exp.isInstantBook ? '✓ Instant confirmation' : 'Host responds within 24 hours'}
                </p>

                <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 py-3 border border-gray-200 dark:border-gray-700 rounded-xl 
                                   flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5" /> Save
                  </button>
                  <button className="flex-1 py-3 border border-gray-200 dark:border-gray-700 rounded-xl 
                                   flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}