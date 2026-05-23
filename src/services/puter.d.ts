export interface TripRequest {
  destination: string
  startDate: string
  endDate: string
  travelers: number
  budget: number
}

export interface TripPlanDay {
  day: number
  title: string
  description: string
  activities: string[]
}

export interface TopPlace {
  name: string
  type: string
  description: string
  reason: string
}

export interface TripAnalysis {
  overview: string
  focus: string
  whyItWorks: string
  recommendation: string
  budgetNote: string
}

export interface TripPlan {
  destination: string
  startDate: string
  endDate: string
  travelers: number
  budget: number
  days: number
  dailyBudget: number
  summary: string
  analysis: TripAnalysis
  topPlaces: TopPlace[]
  itinerary: TripPlanDay[]
  tips: string[]
}

export function planTrip(tripData: TripRequest): Promise<TripPlan>
