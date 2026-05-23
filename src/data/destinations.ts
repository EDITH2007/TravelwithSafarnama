import type { Destination } from '@/types'

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    city: 'Manali',
    tagline: 'The Valley of Gods',
    description: 'A picturesque hill station nestled in the mountains of Himachal Pradesh.',
    overview: 'Manali is a resort town nestled in the mountains of the Indian state of Himachal Pradesh near the northern end of the Kullu Valley.',
    images: [
      'https://images.unsplash.com/photo-1626010448982-4d629b9d2386?w=800',
      'https://images.unsplash.com/photo-1593181629939-1a74e323a8e7?w=800',
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1626010448982-4d629b9d2386?w=1600',
    category: ['mountains', 'adventure', 'honeymoon'],
    bestTimeToVisit: 'October to June',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 2847,
    weather: { current: 12, condition: 'Partly Cloudy', humidity: 65, windSpeed: 15 },
    coordinates: { lat: 32.2432, lng: 77.1892 },
    hotels: [
      { id: 'h1', name: 'The Himalayan', rating: 4.5, price: 8500, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['WiFi', 'Spa', 'Restaurant'], distance: '2 km from Mall Road' },
      { id: 'h2', name: 'Manu Allaya', rating: 4.8, price: 12000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Pool', 'Gym', 'Bar'], distance: '3 km from Old Manali' }
    ],
    food: [
      { id: 'f1', name: 'Siddu', description: 'Traditional steamed bread stuffed with walnuts', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', isVegetarian: true, price: 80 },
      { id: 'f2', name: 'Trout Fish', description: 'Fresh river trout grilled to perfection', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: false, price: 350 }
    ],
    attractions: [
      { id: 'a1', name: 'Solang Valley', description: 'Adventure sports hub with paragliding', image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400', distance: '14 km', type: 'adventure' },
      { id: 'a2', name: 'Rohtang Pass', description: 'High mountain pass connecting valleys', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400', distance: '51 km', type: 'scenic' }
    ],
    tips: ['Carry warm clothes even in summer', 'Book Rohtang Pass permits in advance', 'Try local apple cider'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: true,
  },
  {
    id: '2',
    slug: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    tagline: 'The Spiritual Capital of India',
    description: 'One of the world\'s oldest living cities on the banks of the Ganges.',
    overview: 'Varanasi is a city on the banks of the river Ganges. It is one of the holiest cities in Hinduism.',
    images: [
      'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=800',
      'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=1600',
    category: ['spiritual', 'heritage', 'culture'],
    bestTimeToVisit: 'November to February',
    budget: { min: 5000, max: 15000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 3124,
    weather: { current: 28, condition: 'Sunny', humidity: 45, windSpeed: 10 },
    coordinates: { lat: 25.3176, lng: 82.9739 },
    hotels: [
      { id: 'h3', name: 'BrijRama Palace', rating: 4.9, price: 15000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['River View', 'Heritage', 'Spa'], distance: 'On the Ganges' },
      { id: 'h4', name: 'Taj Nadesar Palace', rating: 4.7, price: 18000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Pool', 'Heritage', 'Fine Dining'], distance: '5 km from Ghats' }
    ],
    food: [
      { id: 'f3', name: 'Kachori Sabzi', description: 'Crispy fried bread with spicy curry', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 40 },
      { id: 'f4', name: 'Banarasi Paan', description: 'Famous betel leaf preparation', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 30 }
    ],
    attractions: [
      { id: 'a3', name: 'Dashashwamedh Ghat', description: 'Main ghat on the Ganges river', image: 'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=400', distance: 'City Center', type: 'spiritual' },
      { id: 'a4', name: 'Kashi Vishwanath Temple', description: 'One of the most famous Hindu temples', image: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=400', distance: 'Near Ghats', type: 'temple' }
    ],
    tips: ['Attend Ganga Aarti at Dashashwamedh Ghat', 'Take an early morning boat ride', 'Try street food at Kachori Gali'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false,
  },
  {
    id: '3',
    slug: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    city: 'Hampi',
    tagline: 'The Forgotten Empire',
    description: 'Ancient village with ruins of the Vijayanagara Empire, a UNESCO World Heritage Site.',
    overview: 'Hampi is dotted with numerous ruined temple complexes from the Vijayanagara Empire.',
    images: [
      'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800',
      'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=1600',
    category: ['heritage', 'hidden-gem', 'culture'],
    bestTimeToVisit: 'October to March',
    budget: { min: 6000, max: 18000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 1567,
    weather: { current: 32, condition: 'Clear', humidity: 40, windSpeed: 12 },
    coordinates: { lat: 15.3350, lng: 76.4600 },
    hotels: [
      { id: 'h5', name: 'Evolve Back Hampi', rating: 4.8, price: 14000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Luxury', 'Pool', 'Spa'], distance: 'Near Virupaksha Temple' },
      { id: 'h6', name: 'Mowgli Guest House', rating: 4.2, price: 2500, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Budget', 'Rooftop', 'Cafe'], distance: 'Hampi Bazaar' }
    ],
    food: [
      { id: 'f5', name: 'Bisi Bele Bath', description: 'Spicy rice and lentil dish', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 120 },
      { id: 'f6', name: 'Neer Dosa', description: 'Thin watery rice crepes', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a5', name: 'Virupaksha Temple', description: 'Ancient temple dedicated to Lord Shiva', image: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=400', distance: 'Center', type: 'temple' },
      { id: 'a6', name: 'Vijaya Vittala Temple', description: 'Famous for its stone chariot', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=400', distance: '3 km', type: 'heritage' }
    ],
    tips: ['Rent a bicycle to explore ruins', 'Climb Matanga Hill for sunrise', 'Visit Tungabhadra River coracle ride'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false,
  },
  {
    id: '4',
    slug: 'goa',
    name: 'Goa',
    state: 'Goa',
    city: 'Panaji',
    tagline: 'Sun, Sand & Serenity',
    description: 'India\'s smallest state, famous for beaches, nightlife, and Portuguese heritage.',
    overview: 'Goa is known for its beaches, ranging from popular stretches to laid-back fishing villages.',
    images: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600',
    category: ['beaches', 'nightlife', 'honeymoon'],
    bestTimeToVisit: 'November to February',
    budget: { min: 10000, max: 40000, currency: 'INR' },
    rating: 4.5,
    reviewCount: 5234,
    weather: { current: 30, condition: 'Sunny', humidity: 70, windSpeed: 18 },
    coordinates: { lat: 15.2993, lng: 74.1240 },
    hotels: [
      { id: 'h7', name: 'Taj Exotica', rating: 4.9, price: 25000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Beachfront', 'Spa', 'Fine Dining'], distance: 'Benaulim Beach' },
      { id: 'h8', name: 'W Goa', rating: 4.7, price: 18000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Pool', 'Nightclub', 'Beach Access'], distance: 'Vagator Beach' }
    ],
    food: [
      { id: 'f7', name: 'Fish Curry Rice', description: 'Traditional Goan fish curry with rice', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: false, price: 200 },
      { id: 'f8', name: 'Bebinca', description: 'Traditional Goan layered dessert', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 150 }
    ],
    attractions: [
      { id: 'a7', name: 'Dudhsagar Falls', description: 'Four-tiered waterfall on the Mandovi River', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400', distance: '60 km', type: 'nature' },
      { id: 'a8', name: 'Basilica of Bom Jesus', description: 'UNESCO World Heritage church', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400', distance: 'Old Goa', type: 'heritage' }
    ],
    tips: ['Rent a scooter to explore beaches', 'Try Feni (local cashew liquor)', 'Visit spice plantations'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: true,
  },
  {
    id: '5',
    slug: 'leh-ladakh',
    name: 'Leh-Ladakh',
    state: 'Ladakh',
    city: 'Leh',
    tagline: 'Land of High Passes',
    description: 'High-altitude desert with stunning landscapes and Buddhist monasteries.',
    overview: 'Leh-Ladakh is known for stunning landscapes, Buddhist monasteries, and high-altitude mountain passes.',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600',
    category: ['mountains', 'adventure', 'hidden-gem'],
    bestTimeToVisit: 'June to September',
    budget: { min: 15000, max: 45000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 1890,
    weather: { current: 5, condition: 'Clear', humidity: 25, windSpeed: 20 },
    coordinates: { lat: 34.1526, lng: 77.5771 },
    hotels: [
      { id: 'h9', name: 'The Grand Dragon', rating: 4.6, price: 12000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Heated Rooms', 'Oxygen', 'Restaurant'], distance: 'Leh Market' },
      { id: 'h10', name: 'Ladakh Sarai', rating: 4.8, price: 16000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Eco-friendly', 'Mountain View', 'Organic Food'], distance: 'Saboo Village' }
    ],
    food: [
      { id: 'f9', name: 'Thukpa', description: 'Tibetan noodle soup', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 100 },
      { id: 'f10', name: 'Momos', description: 'Tibetan dumplings', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a9', name: 'Pangong Lake', description: 'High-altitude lake changing colors', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', distance: '160 km', type: 'scenic' },
      { id: 'a10', name: 'Nubra Valley', description: 'Valley of flowers with double-humped camels', image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400', distance: '150 km', type: 'adventure' }
    ],
    tips: ['Acclimatize for 2 days before traveling', 'Carry AMS medication', 'Get Inner Line Permits in advance'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: true,
    isSpiritual: true,
    isHoneymoon: false,
  },
  {
    id: '6',
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    city: 'Jaipur',
    tagline: 'The Pink City',
    description: 'Capital of Rajasthan, known for palaces, forts, and vibrant culture.',
    overview: 'Jaipur is known as the Pink City due to the dominant color scheme of its buildings.',
    images: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800',
      'https://images.unsplash.com/photo-1585506942812-e0e56d1f2f31?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600',
    category: ['heritage', 'culture', 'honeymoon'],
    bestTimeToVisit: 'October to March',
    budget: { min: 7000, max: 30000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 4210,
    weather: { current: 35, condition: 'Hot', humidity: 30, windSpeed: 8 },
    coordinates: { lat: 26.9124, lng: 75.7873 },
    hotels: [
      { id: 'h11', name: 'Rambagh Palace', rating: 4.9, price: 35000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Heritage', 'Pool', 'Royal Dining'], distance: 'Near City Center' },
      { id: 'h12', name: 'Samode Haveli', rating: 4.7, price: 15000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Heritage', 'Courtyard', 'Spa'], distance: 'Old City' }
    ],
    food: [
      { id: 'f11', name: 'Dal Baati Churma', description: 'Rajasthani staple with lentils and bread', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 250 },
      { id: 'f12', name: 'Laal Maas', description: 'Spicy mutton curry', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: false, price: 400 }
    ],
    attractions: [
      { id: 'a11', name: 'Hawa Mahal', description: 'Palace of Winds with 953 windows', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400', distance: 'City Center', type: 'palace' },
      { id: 'a12', name: 'Amber Fort', description: 'Magnificent hilltop fort with mirror work', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400', distance: '11 km', type: 'fort' }
    ],
    tips: ['Visit forts early morning to avoid heat', 'Shop at Johari Bazaar for jewelry', 'Try Rajasthani thali at Chokhi Dhani'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true,
  }
]

export const getDestinationBySlug = (slug: string) => 
  destinations.find(d => d.slug === slug)

export const getTrendingDestinations = () => 
  destinations.filter(d => d.isTrending)

export const getHiddenGems = () => 
  destinations.filter(d => d.isHiddenGem)