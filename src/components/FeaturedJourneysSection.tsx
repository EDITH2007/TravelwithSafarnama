import { journeys } from '../data/journeys'
import JourneyCard from './JourneyCard'

export default function FeaturedJourneysSection() {
  const featuredJourneys = journeys.slice(0, 6)

  return (
    <section className="py-20 section-padding bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wider">
            Featured Journeys
          </span>
          <h2 className="heading-lg mt-3 mb-4 text-gray-900 dark:text-white">
            Discover Experience-Based Journeys
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore journeys that are built around stories, rituals, festivals, and soul-stirring places, not just routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredJourneys.map((journey, index) => (
            <JourneyCard key={journey.id} journey={journey} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
