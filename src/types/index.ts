export interface Destination {
  id: string
  slug: string
  name: string
  state: string
  city: string
  tagline: string
  description: string
  overview: string
  images: string[]
  bannerImage: string
  category: string[]
  bestTimeToVisit: string
  budget: {
    min: number
    max: number
    currency: string
  }
  rating: number
  reviewCount: number
  weather: {
    current: number
    condition: string
    humidity: number
    windSpeed: number
  }
  coordinates: {
    lat: number
    lng: number
  }
  hotels: Hotel[]
  food: FoodItem[]
  attractions: Attraction[]
  tips: string[]
  reviews: Review[]
  isHiddenGem: boolean
  isTrending: boolean
  isAdventure: boolean
  isSpiritual: boolean
  isHoneymoon: boolean
}

export interface Hotel {
  id: string
  name: string
  rating: number
  price: number
  image: string
  amenities: string[]
  distance: string
}

export interface FoodItem {
  id: string
  name: string
  description: string
  image: string
  isVegetarian: boolean
  price: number
}

export interface Attraction {
  id: string
  name: string
  description: string
  image: string
  distance: string
  type: string
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  images: string[]
  createdAt: string
}

export type Theme = 'light' | 'dark'
// Add these to your existing src/types/index.ts file

export interface LocalExperience {
  id: string
  slug: string
  title: string
  description: string
  image: string
  gallery: string[]
  location: string
  state: string
  city: string
  category: 'village-tour' | 'local-guide' | 'heritage-walk' | 'food-tour' | 'photography-walk'
  duration: string
  price: number
  currency: string
  maxGroupSize: number
  rating: number
  reviewCount: number
  host: {
    name: string
    avatar: string
    bio: string
    languages: string[]
    isVerified: boolean
  }
  includes: string[]
  excludes: string[]
  itinerary: string[]
  availability: string[]
  isInstantBook: boolean
  isHiddenGem: boolean
  createdAt: string
}

export interface TravelerType {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  bannerImage: string
  icon: string
  color: string
  destinations: string[]
  tips: string[]
  safetyTips: string[]
  bestFor: string[]
  budgetRange: {
    min: number
    max: number
    currency: string
  }
  recommendedExperiences: string[]
  communitySize: number
  stories: TravelerStory[]
}

export interface TravelerStory {
  id: string
  travelerName: string
  avatar: string
  location: string
  story: string
  images: string[]
  rating: number
  date: string
}
export interface Journey {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  shortDescription: string
  bannerImage: string
  cardImage: string
  icon: string
  iconEmoji: string
  color: string
  category: ('road-trip' | 'photography' | 'spiritual' | 'mountain' | 'monsoon' | 'heritage' | 'food' | 'wildlife' | 'coastal' | 'desert' | 'cultural')[]
  duration: string
  bestSeason: string
  difficulty: 'easy' | 'moderate' | 'challenging' | 'extreme'
  budgetEstimate: {
    min: number
    max: number
    currency: string
    perPerson: boolean
  }
  stops: JourneyStop[]
  highlights: string[]
  stories: JourneyStory[]
  tips: string[]
  packingList: string[]
  recommendedFor: string[]
  rating: number
  reviewCount: number
  isPopular: boolean
  isHiddenGem: boolean
  createdAt: string
}

export interface JourneyStop {
  id: string
  name: string
  state: string
  description: string
  image: string
  significance: string
  mustDo: string[]
  bestTime: string
  duration: string
  localExperiences: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export interface JourneyStory {
  id: string
  travelerName: string
  avatar: string
  location: string
  story: string
  images: string[]
  rating: number
  date: string
  tripDuration: string
}