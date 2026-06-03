import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, MapPin, Calendar, Clock } from 'lucide-react'
import { journeys } from '../data/journeys'

export default function JourneyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const journey = journeys.find((item) => item.slug === slug)

  if (!journey) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center px-6 py-10 rounded-3xl bg-white dark:bg-gray-900 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Journey not found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We could not find that journey. Explore our available journeys below.</p>
          <Link to="/journeys" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Back to Journeys
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="relative h-[55vh] overflow-hidden">
        <img
          src={journey.bannerImage}
          alt={journey.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 section-padding pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-white"
          >
            <Link to="/journeys" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to journeys
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{journey.title}</h1>
            <p className="text-lg text-gray-200 max-w-3xl">{journey.description}</p>
          </motion.div>
        </div>
      </section>

      <div className="section-padding py-14">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="space-y-10">
            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl bg-gradient-to-br ${journey.color}`}>
                  {journey.iconEmoji}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold">{journey.tagline}</p>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{journey.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{journey.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-gray-500 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>Best time to visit</span>
                </div>
                <p className="text-gray-900 dark:text-white font-semibold">{journey.bestSeason}</p>
              </div>
              <div className="rounded-3xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-gray-500 dark:text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>Duration</span>
                </div>
                <p className="text-gray-900 dark:text-white font-semibold">{journey.duration}</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">Route & Highlights</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {journey.stops.map((stop) => (
                  <div key={stop.id} className="rounded-3xl border border-gray-100 dark:border-gray-800 p-5">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stop.name}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{stop.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">Why this journey?</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {journey.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1 text-blue-600">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">Quick details</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{journey.stops.map((stop) => stop.name).join(' • ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-orange-400" />
                  <span>{journey.rating} rating from {journey.reviewCount} travelers</span>
                </div>
                <div className="rounded-3xl bg-blue-50 dark:bg-blue-900/40 p-4 text-sm text-blue-700 dark:text-blue-200">
                  <p className="font-semibold">Recommended for</p>
                  <p>{journey.recommendedFor.join(', ')}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">Traveler tip</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{journey.tips[0]}</p>
            </div>

            <div className="rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ready to explore?</h3>
              <Link
                to="/journeys"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                View all journeys
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
