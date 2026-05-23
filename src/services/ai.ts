import { destinations } from '../data/destinations'
import type { Destination } from '@/types'
import type { TripAnalysis, TripPlan, TripPlanDay, TripRequest, TopPlace } from './puter'

const normalizeKey = (value: string) => value.trim().toLowerCase()

const findDestination = (destinationName: string): Destination | undefined => {
  const normalized = normalizeKey(destinationName)
  return destinations.find((dest) => {
    const searchText = [dest.name, dest.state, dest.city, dest.slug].map(normalizeKey)
    return searchText.some((value) => value.includes(normalized))
  })
}

const classifyBudget = (destination: Destination | undefined, budget: number) => {
  if (!destination) return { tier: 'Balanced', label: 'Balanced budget' }

  const avgBudget = (destination.budget.min + destination.budget.max) / 2
  if (budget >= destination.budget.max) {
    return { tier: 'Generous', label: 'You can enjoy premium stays and experiences.' }
  }
  if (budget >= avgBudget) {
    return { tier: 'Comfortable', label: 'Your budget is well aligned with a relaxed trip pace.' }
  }
  return { tier: 'Value', label: 'This is a value-conscious plan with smart local choices.' }
}

const travelMood = (destination: Destination | undefined, travelers: number) => {
  const groupNote = travelers > 4 ? 'group-friendly' : travelers === 2 ? 'ideal for a pair' : 'perfect for solo or small-group travel'
  const vibe = destination?.category.includes('honeymoon')
    ? 'romantic and relaxed'
    : destination?.category.includes('adventure')
      ? 'energetic and outdoorsy'
      : destination?.category.includes('spiritual')
        ? 'peaceful and mindful'
        : destination?.category.includes('heritage')
          ? 'rich in history and culture'
          : 'balanced and exciting'

  return `${vibe}, ${groupNote}`
}

const buildTopPlaces = (destination: Destination | undefined): TopPlace[] => {
  if (!destination) return []

  const attractions = destination.attractions.slice(0, 3).map((place) => ({
    name: place.name,
    type: place.type,
    description: place.description,
    reason: `A signature ${place.type} experience in ${destination.name}.`,
  }))

  const food = destination.food.slice(0, 1).map((item) => ({
    name: item.name,
    type: 'local cuisine',
    description: item.description,
    reason: `A must-try local dish that captures ${destination.name}'s flavor.`,
  }))

  const hotel = destination.hotels[0]
    ? [{
      name: destination.hotels[0].name,
      type: 'recommended stay',
      description: `Comfortable accommodation near ${destination.hotels[0].distance}.`,
      reason: `Great base for exploring ${destination.name} with easy access to attractions.`,
    }]
    : []

  return [...attractions, ...food, ...hotel]
}

const buildDailyItinerary = (
  destination: Destination | undefined,
  days: number,
  travelers: number,
  budgetTier: string,
): TripPlanDay[] => {
  const themes = [
    'Arrival & highlights',
    'Culture & heritage',
    'Food, markets & local life',
    'Nature, lakes & viewpoints',
    'Hidden gems & leisure',
  ] as const

  type Theme = (typeof themes)[number]

  const activitiesByTheme: Record<Theme, (dest: Destination | undefined) => string[]> = {
    'Arrival & highlights': (dest: Destination | undefined) => [
      `Morning: Settle in and explore the central ${dest?.city || 'city'} area`,
      `Afternoon: Visit a signature spot${dest?.attractions[0] ? ` like ${dest.attractions[0].name}` : ''}`,
      `Evening: Enjoy a welcome dinner with local specialties`,
    ],
    'Culture & heritage': (dest: Destination | undefined) => [
      `Morning: Explore a historic landmark${dest?.attractions[1] ? ` — ${dest.attractions[1].name}` : ''}`,
      `Afternoon: Learn about local traditions at a museum or heritage site`,
      `Evening: Watch a cultural performance or sunset viewpoint`,
    ],
    'Food, markets & local life': (dest: Destination | undefined) => [
      `Morning: Sample local street food at a neighborhood market`,
      `Afternoon: Visit a famous eatery for ${dest?.food[0]?.name || 'regional cuisine'}`,
      `Evening: Stroll through a lively market or riverside area`,
    ],
    'Nature, lakes & viewpoints': () => [
      `Morning: Visit a scenic viewpoint or nature spot`,
      `Afternoon: Take a nature walk, boat ride, or easy trek`,
      `Evening: Relax with a sunset view and local dinner`,
    ],
    'Hidden gems & leisure': () => [
      `Morning: Discover a quieter local neighborhood or hidden alley`,
      `Afternoon: Relax at a café or spa with easy pacing`,
      `Evening: Choose between a leisure activity or an optional experience`,
    ],
  }

  return Array.from({ length: days }, (_, index) => {
    const theme = themes[index] || themes[themes.length - 1]
    const itineraryActivities = activitiesByTheme[theme](destination)
    const visit = destination?.attractions[index % (destination.attractions.length || 1)]
    const dining = destination?.food[index % (destination.food.length || 1)]

    return {
      day: index + 1,
      title: `Day ${index + 1}: ${theme}`,
      description: destination
        ? `A ${theme.toLowerCase()} day in ${destination.name}, designed for ${travelers} traveler${travelers > 1 ? 's' : ''} with a ${budgetTier.toLowerCase()} budget.`
        : `A balanced day of sightseeing, food, and rest tailored to your travel plans.`,
      activities: [
        itineraryActivities[0],
        itineraryActivities[1],
        itineraryActivities[2],
        visit ? `Bonus: If time permits, visit ${visit.name} nearby (${visit.distance})` : `Bonus: Keep time for a spontaneous local discovery`,
        dining ? `Dining: Try ${dining.name} for an authentic local meal` : `Dining: Sample whatever local favorite is recommended by your host`,
      ],
    }
  })
}

const buildAnalysis = (
  destination: Destination | undefined,
  tripData: TripRequest,
  days: number,
  dailyBudget: number,
  budgetLabel: string,
): TripAnalysis => {
  const category = destination?.category.join(', ') || 'local highlights'
  const mood = travelMood(destination, tripData.travelers)

  return {
    overview: destination
      ? `Travel to ${destination.name} for ${category}. ${destination.name} is best visited ${destination.bestTimeToVisit.toLowerCase()}, and this plan uses that timing to highlight top experiences.`
      : `This itinerary is designed around your chosen dates and traveler count. It mixes sightseeing with local food and culture for a well-rounded trip.`,
    focus: destination
      ? `We focus on ${category} at ${destination.name}, with structured mornings for must-see attractions and relaxed evenings for local cuisine.`
      : `We focus on key experiences, food, and flexible pacing so you can make the most of your trip.`,
    whyItWorks: `Your ${days}-day trip is ${mood}. The plan balances daily sightseeing with enough downtime so you can recharge and enjoy the destination.`,
    recommendation: `Prioritize one major attraction each day, try at least one local specialty, and leave space for a spontaneous stroll or marketplace visit.`,
    budgetNote: `${budgetLabel} Your estimated daily spend is ₹${dailyBudget.toLocaleString()} per person, which is suitable for transport, meals, and local tickets.`,
  }
}

export async function planTrip(tripData: TripRequest): Promise<TripPlan> {
  const { destination, startDate, endDate, travelers, budget } = tripData
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffMs = end.getTime() - start.getTime()
  const days = diffMs > 0 ? Math.max(1, Math.round(diffMs / (24 * 60 * 60 * 1000)) + 1) : 3
  const dailyBudget = Math.max(1000, Math.floor(budget / days))
  const matchedDestination = findDestination(destination)
  const budgetClassification = classifyBudget(matchedDestination, budget)
  const itinerary = buildDailyItinerary(matchedDestination, days, travelers, budgetClassification.tier)
  const topPlaces = buildTopPlaces(matchedDestination)
  const analysis = buildAnalysis(matchedDestination, tripData, days, dailyBudget, budgetClassification.label)

  const fallbackSummary = matchedDestination
    ? `Your personalized itinerary for ${matchedDestination.name} is ready. It includes top sights, food recommendations, and a day-by-day plan.`
    : `Your personalized itinerary for ${destination} is ready. It includes top recommendations, a daily plan, and local travel advice.`

  return {
    destination,
    startDate,
    endDate,
    travelers,
    budget,
    days,
    dailyBudget,
    summary: fallbackSummary,
    analysis,
    topPlaces,
    itinerary,
    tips: matchedDestination?.tips || [
      'Book transportation and accommodations early to get the best rates.',
      'Carry some local cash for markets and street food.',
      'Keep a flexible afternoon free for spontaneous local discoveries.',
    ],
  }
}
