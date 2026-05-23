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