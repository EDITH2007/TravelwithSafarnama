import type { LocalExperience } from '../types'

export const experiences: LocalExperience[] = [
  {
    id: 'e1',
    slug: 'jaipur-heritage-walk',
    title: 'Old Jaipur Heritage Walk with Local Historian',
    description: 'Walk through the pink lanes of old Jaipur with a 3rd generation local guide. Discover hidden havelis, ancient temples, and stories that never made it to guidebooks.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
      'https://images.unsplash.com/photo-1585506942812-e0e56d1f2f31?w=800'
    ],
    location: 'Pink City, Jaipur',
    state: 'Rajasthan',
    city: 'Jaipur',
    category: 'heritage-walk',
    duration: '3 hours',
    price: 1200,
    currency: 'INR',
    maxGroupSize: 8,
    rating: 4.9,
    reviewCount: 234,
    host: {
      name: 'Rajendra Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      bio: '3rd generation Jaipur resident and history enthusiast. I grew up in these lanes and know every secret corner.',
      languages: ['English', 'Hindi', 'Rajasthani'],
      isVerified: true
    },
    includes: ['Local snacks', 'Tea at 100-year-old shop', 'Heritage map', 'Guidebook'],
    excludes: ['Hotel pickup', 'Entry fees to monuments'],
    itinerary: [
      'Meet at Hawa Mahal gate',
      'Walk through Johari Bazaar',
      'Visit hidden 200-year-old temple',
      'Tea break at century-old shop',
      'Explore royal stables area',
      'End at City Palace gate'
    ],
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    isInstantBook: true,
    isHiddenGem: false,
    createdAt: '2024-01-15'
  },
  {
    id: 'e2',
    slug: 'kerala-village-life',
    title: 'A Day in Kerala Village: Canoe, Cooking & Culture',
    description: 'Live like a local in a backwater village. Learn to cook traditional Kerala food, paddle a canoe through narrow canals, and hear folk stories from village elders.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800',
      'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800'
    ],
    location: 'Kumarakom Backwaters',
    state: 'Kerala',
    city: 'Kumarakom',
    category: 'village-tour',
    duration: '6 hours',
    price: 2500,
    currency: 'INR',
    maxGroupSize: 6,
    rating: 4.8,
    reviewCount: 189,
    host: {
      name: 'Maria Thomas',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      bio: 'Born and raised in this village. I left my city job to share our way of life with travelers who want authentic experiences.',
      languages: ['English', 'Malayalam', 'Tamil'],
      isVerified: true
    },
    includes: ['Home-cooked lunch', 'Canoe ride', 'Cooking demo', 'Village walk', 'Folk performance'],
    excludes: ['Transport to village', 'Alcoholic beverages'],
    itinerary: [
      'Arrive at village homestay',
      'Traditional welcome with coconut water',
      'Canoe ride through narrow canals',
      'Fishing lesson with local fishermen',
      'Cooking class: Appam & fish curry',
      'Lunch with host family',
      'Village walk: temple, school, paddy fields',
      'Folk story session with village elder'
    ],
    availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
    isInstantBook: false,
    isHiddenGem: true,
    createdAt: '2024-02-10'
  },
  {
    id: 'e3',
    slug: 'varanasi-food-trail',
    title: 'Varanasi Street Food Trail: Beyond the Ghats',
    description: 'Taste 15+ authentic Banarasi dishes across 8 hidden food joints. From 80-year-old kachori shops to secret lassi corners known only to locals.',
    image: 'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800',
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800'
    ],
    location: 'Old Varanasi',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    category: 'food-tour',
    duration: '4 hours',
    price: 1500,
    currency: 'INR',
    maxGroupSize: 6,
    rating: 4.9,
    reviewCount: 312,
    host: {
      name: 'Amit Mishra',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      bio: 'Food blogger turned guide. I have eaten at every lane of Varanasi and know where the real flavors hide.',
      languages: ['English', 'Hindi', 'Bhojpuri'],
      isVerified: true
    },
    includes: ['15+ food tastings', 'Digestive drinks', 'Food map', 'Recipe cards'],
    excludes: ['Bottled water', 'Personal shopping'],
    itinerary: [
      'Meet at Assi Ghat',
      'Kachori Sabzi at 80-year-old shop',
      'Jalebi at hidden sweet lane',
      'Banarasi Paan making demo',
      'Lassi at secret courtyard',
      'Thandai at original shop',
      'Chaat at Godowlia crossing',
      'End with Malaiyo (winter special)'
    ],
    availability: ['Daily'],
    isInstantBook: true,
    isHiddenGem: true,
    createdAt: '2024-01-20'
  },
  {
    id: 'e4',
    slug: 'ladakh-photography-walk',
    title: 'Ladakh Photography Walk: Capture the Unseen',
    description: 'Photograph Ladakh like a local. Visit secret viewpoints, capture monks in daily life, and shoot milky way at a hidden lake with a professional photographer guide.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800'
    ],
    location: 'Leh & Surroundings',
    state: 'Ladakh',
    city: 'Leh',
    category: 'photography-walk',
    duration: '8 hours',
    price: 4500,
    currency: 'INR',
    maxGroupSize: 4,
    rating: 5.0,
    reviewCount: 87,
    host: {
      name: 'Tenzin Norbu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      bio: 'National Geographic featured photographer. Born in Ladakh, I know every light condition and hidden frame in this land.',
      languages: ['English', 'Hindi', 'Ladakhi'],
      isVerified: true
    },
    includes: ['Transport to locations', 'Tea & snacks', 'Photo review session', 'Editing tips'],
    excludes: ['Camera equipment', 'Meals'],
    itinerary: [
      'Sunrise at Shanti Stupa secret viewpoint',
      'Monk portrait session at Thiksey',
      'Village life in Stok',
      'Hidden valley with wild horses',
      'Milky way shoot at secret lake',
      'Post-shoot review over butter tea'
    ],
    availability: ['Monday', 'Thursday', 'Saturday'],
    isInstantBook: false,
    isHiddenGem: true,
    createdAt: '2024-03-05'
  },
  {
    id: 'e5',
    slug: 'meghalaya-village-tour',
    title: 'Living Root Bridges Village Experience',
    description: 'Stay in a Khasi village, trek to living root bridges, learn bamboo craft from elders, and swim in natural pools under waterfalls.',
    image: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800'
    ],
    location: 'Nongriat Village',
    state: 'Meghalaya',
    city: 'Cherrapunji',
    category: 'village-tour',
    duration: '2 days',
    price: 3500,
    currency: 'INR',
    maxGroupSize: 8,
    rating: 4.7,
    reviewCount: 156,
    host: {
      name: 'Larsing Khonglam',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      bio: 'Village headman and naturalist. My family has preserved these root bridges for 5 generations.',
      languages: ['English', 'Hindi', 'Khasi'],
      isVerified: true
    },
    includes: ['Village homestay', 'All meals', 'Trek guide', 'Bamboo craft lesson', 'Traditional music evening'],
    excludes: ['Transport to village', 'Travel insurance'],
    itinerary: [
      'Day 1: Trek to double-decker root bridge',
      'Swim in natural pools',
      'Bamboo craft workshop with elder',
      'Traditional Khasi dinner',
      'Folk music by village youth',
      'Day 2: Sunrise trek to secret waterfall',
      'Visit sacred forest with host',
      'Farewell with local rice beer'
    ],
    availability: ['Friday', 'Saturday'],
    isInstantBook: false,
    isHiddenGem: true,
    createdAt: '2024-02-28'
  },
  {
    id: 'e6',
    slug: 'goa-local-guide',
    title: 'Goa Beyond Beaches: Local Life with Guide',
    description: 'See the Goa locals know. Visit Portuguese-era bakeries, fish markets at dawn, hidden springs, and village temples tourists never find.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    ],
    location: 'North Goa Villages',
    state: 'Goa',
    city: 'Mapusa',
    category: 'local-guide',
    duration: '5 hours',
    price: 1800,
    currency: 'INR',
    maxGroupSize: 6,
    rating: 4.6,
    reviewCount: 198,
    host: {
      name: 'Sonia Fernandes',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      bio: 'Goa-born journalist. I write about disappearing Goan traditions and love showing visitors the real Goa.',
      languages: ['English', 'Hindi', 'Konkani', 'Portuguese'],
      isVerified: true
    },
    includes: ['Market snacks', 'Heritage map', 'Village entry', 'Traditional lunch'],
    excludes: ['Beach visits', 'Nightlife'],
    itinerary: [
      '5 AM: Fish market with host family',
      'Portuguese-era bakery breakfast',
      'Hidden spring in village forest',
      'Visit 400-year-old village temple',
      'Lunch with host family: Goan fish curry',
      'Afternoon: Feni distillery visit',
      'Evening: Sunset at secret viewpoint'
    ],
    availability: ['Wednesday', 'Saturday', 'Sunday'],
    isInstantBook: true,
    isHiddenGem: true,
    createdAt: '2024-01-30'
  },
  {
    id: 'e7',
    slug: 'hampi-photography-walk',
    title: 'Hampi Golden Hour Photography Tour',
    description: 'Capture Hampi\'s boulders, ruins, and river in the perfect light. Visit spots only local photographers know for the best frames.',
    image: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800',
      'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=800'
    ],
    location: 'Hampi Ruins',
    state: 'Karnataka',
    city: 'Hampi',
    category: 'photography-walk',
    duration: '4 hours',
    price: 2000,
    currency: 'INR',
    maxGroupSize: 5,
    rating: 4.8,
    reviewCount: 134,
    host: {
      name: 'Ravi Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      bio: 'Hampi-based photographer for 10 years. My work has been featured in Lonely Planet and National Geographic Traveler.',
      languages: ['English', 'Hindi', 'Kannada'],
      isVerified: true
    },
    includes: ['Sunrise/sunset spots', 'Coracle ride for water shots', 'Tea & snacks', 'Photo tips'],
    excludes: ['Camera gear', 'Monument entry fees'],
    itinerary: [
      'Pre-dawn: Best boulder formation spot',
      'Sunrise over Virupaksha Temple',
      'Coracle ride for river reflections',
      'Hidden canyon with ancient carvings',
      'Golden hour at sunset point',
      'Post-shoot review at local cafe'
    ],
    availability: ['Tuesday', 'Friday', 'Sunday'],
    isInstantBook: true,
    isHiddenGem: false,
    createdAt: '2024-03-12'
  },
  {
    id: 'e8',
    slug: 'jodhpur-blue-city-walk',
    title: 'Blue City Secrets: Heritage Walk with Local',
    description: 'Navigate the maze-like blue lanes of old Jodhpur. Discover hidden stepwells, ancient temples, and the stories behind why houses are blue.',
    image: 'https://images.unsplash.com/photo-1585506942812-e0e56d1f2f31?w=800',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800'
    ],
    location: 'Old City, Jodhpur',
    state: 'Rajasthan',
    city: 'Jodhpur',
    category: 'heritage-walk',
    duration: '3 hours',
    price: 1000,
    currency: 'INR',
    maxGroupSize: 10,
    rating: 4.7,
    reviewCount: 267,
    host: {
      name: 'Priya Rathore',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      bio: 'Grew up in the blue lanes. My grandmother still lives in the 200-year-old house where I was born.',
      languages: ['English', 'Hindi', 'Rajasthani'],
      isVerified: true
    },
    includes: ['Heritage map', 'Masala tea at 3 different houses', 'Stepwell visit', 'Temple blessing'],
    excludes: ['Mehrangarh entry', 'Tips'],
    itinerary: [
      'Meet at Clock Tower',
      'Enter blue lanes through secret passage',
      'Visit 300-year-old Brahmin house',
      'Hidden stepwell photography',
      'Tea with 3 different families',
      'Ancient temple with priest meeting',
      'Sunset view from secret rooftop'
    ],
    availability: ['Daily'],
    isInstantBook: true,
    isHiddenGem: true,
    createdAt: '2024-02-15'
  }
]

export const getExperienceBySlug = (slug: string) => 
  experiences.find(e => e.slug === slug)

export const getExperiencesByCategory = (category: string) => 
  experiences.filter(e => e.category === category)

export const getHiddenGemExperiences = () => 
  experiences.filter(e => e.isHiddenGem)