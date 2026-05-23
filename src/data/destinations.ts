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
  },
  {
    id: '7',
    slug: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    state: 'Kerala',
    city: 'Alleppey',
    tagline: 'God\'s Own Country',
    description: 'A network of tranquil canals, lagoons, and lakes lined with palm trees and houseboats.',
    overview: 'The Kerala Backwaters are a chain of brackish lagoons and lakes lying parallel to the Arabian Sea coast. Known for its unique ecosystem and houseboat cruises.',
    images: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
      'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600',
    category: ['beaches', 'honeymoon', 'nature'],
    bestTimeToVisit: 'November to February',
    budget: { min: 12000, max: 35000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 3421,
    weather: { current: 28, condition: 'Humid', humidity: 75, windSpeed: 10 },
    coordinates: { lat: 9.4981, lng: 76.3388 },
    hotels: [
      { id: 'h13', name: 'Houseboat Stay', rating: 4.7, price: 8000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Lake View', 'Traditional Food', 'Sun Deck'], distance: 'On the Water' },
      { id: 'h14', name: 'Kumarakom Resort', rating: 4.9, price: 15000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Spa', 'Pool', 'Ayurveda'], distance: 'Lake Shore' }
    ],
    food: [
      { id: 'f13', name: 'Kerala Fish Curry', description: 'Coconut-based spicy fish curry', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: false, price: 250 },
      { id: 'f14', name: 'Appam with Stew', description: 'Rice pancakes with vegetable or meat stew', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 150 }
    ],
    attractions: [
      { id: 'a13', name: 'Alleppey Beach', description: 'Beautiful beach with a 150-year-old pier', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400', distance: '5 km', type: 'beach' },
      { id: 'a14', name: 'Vembanad Lake', description: 'Longest lake in India, perfect for houseboat cruises', image: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=400', distance: 'Center', type: 'lake' }
    ],
    tips: ['Book houseboats in advance during peak season', 'Try Ayurvedic massage', 'Visit during Onam festival'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true,
  },
  {
    id: '8',
    slug: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    city: 'Rishikesh',
    tagline: 'Yoga Capital of the World',
    description: 'Adventure, spirituality, and natural beauty blend perfectly in this holy city on the banks of Ganges.',
    overview: 'Rishikesh is a city in northern India known as a center for studying yoga and meditation. It sits on the banks of the Ganges River and is surrounded by the Himalayan foothills, offering both spiritual experiences and white-water rafting adventures.',
    images: [
      'https://images.unsplash.com/photo-1584196033770-d8445b1740e7?w=800',
      'https://images.unsplash.com/photo-1549887534-1541e9326643?w=800',
      'https://images.unsplash.com/photo-1584196033770-d8445b1740e7?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1584196033770-d8445b1740e7?w=1600',
    category: ['adventure', 'spiritual', 'nature'],
    bestTimeToVisit: 'September to November, February to April',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 2890,
    weather: { current: 22, condition: 'Pleasant', humidity: 60, windSpeed: 8 },
    coordinates: { lat: 30.0869, lng: 78.2676 },
    hotels: [
      { id: 'h15', name: 'Aloha on the Ganges', rating: 4.8, price: 12000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['River View', 'Yoga Classes', 'Spa'], distance: 'River Bank' },
      { id: 'h16', name: 'Ganga Kinare', rating: 4.6, price: 8000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Ganga View', 'Rooftop Cafe', 'Ayurveda'], distance: 'Triveni Ghat' }
    ],
    food: [
      { id: 'f15', name: 'Aloo Poori', description: 'Spicy potato curry with fluffy poori bread', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 80 },
      { id: 'f16', name: 'Ganga Kesar Kulfi', description: 'Saffron infused traditional ice cream', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a15', name: 'Lakshman Jhula', description: 'Iconic suspension bridge over Ganges with temple views', image: 'https://images.unsplash.com/photo-1549887534-1541e9326643?w=400', distance: '2 km', type: 'landmark' },
      { id: 'a16', name: 'Triveni Ghat', description: 'Main ghat for evening Ganga Aarti ceremony', image: 'https://images.unsplash.com/photo-1584196033770-d8445b1740e7?w=400', distance: '1 km', type: 'spiritual' },
      { id: 'a17', name: 'Neelkanth Mahadev Temple', description: 'Ancient Shiva temple in the mountains', image: 'https://images.unsplash.com/photo-1549887534-1541e9326643?w=400', distance: '12 km', type: 'temple' }
    ],
    tips: ['Attend evening Ganga Aarti at Triveni Ghat', 'Try white water rafting (Sept-June)', 'Visit Beatles Ashram', 'Take a yoga class'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: '9',
    slug: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    city: 'Udaipur',
    tagline: 'City of Lakes',
    description: 'Romantic palaces, shimmering lakes, and colorful bazaars in the heart of Rajasthan.',
    overview: 'Udaipur, known as the "City of Lakes," is a beautiful city in Rajasthan surrounded by the Aravalli Hills. Famous for its stunning palaces, serene lakes, and rich cultural heritage, it\'s one of India\'s most romantic destinations.',
    images: [
      'https://images.unsplash.com/photo-1558637845-c8b7bd71d95a?w=800',
      'https://images.unsplash.com/photo-1566684675202-c7c6dd6a6d73?w=800',
      'https://images.unsplash.com/photo-1568819317551-31051b37d7a6?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1558637845-c8b7bd71d95a?w=1600',
    category: ['honeymoon', 'heritage', 'romantic'],
    bestTimeToVisit: 'September to March',
    budget: { min: 15000, max: 40000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 4150,
    weather: { current: 28, condition: 'Sunny', humidity: 35, windSpeed: 12 },
    coordinates: { lat: 24.5854, lng: 73.7125 },
    hotels: [
      { id: 'h17', name: 'Taj Lake Palace', rating: 4.9, price: 35000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Lake View', 'Private Boat', 'Fine Dining', 'Spa'], distance: 'On Lake Pichola' },
      { id: 'h18', name: 'The Leela Palace', rating: 4.8, price: 25000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Palace View', 'Infinity Pool', 'Heritage Walk'], distance: 'City Center' },
      { id: 'h19', name: 'Jagat Niwas Palace', rating: 4.6, price: 8000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Lake Facing', 'Rooftop Restaurant', 'Heritage Rooms'], distance: 'Pichola Lake' }
    ],
    food: [
      { id: 'f17', name: 'Dal Baati Churma', description: 'Famous Rajasthani dish with lentils, wheat balls, and sweet crushed wheat', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: true, price: 300 },
      { id: 'f18', name: 'Laal Maas', description: 'Spicy red meat curry from Rajasthan', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: false, price: 450 },
      { id: 'f19', name: 'Gatte ki Sabzi', description: 'Gram flour dumplings in spicy yogurt gravy', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a18', name: 'City Palace', description: 'Largest palace complex in Rajasthan overlooking Lake Pichola', image: 'https://images.unsplash.com/photo-1558637845-c8b7bd71d95a?w=400', distance: 'Center', type: 'palace' },
      { id: 'a19', name: 'Lake Pichola', description: 'Picturesque man-made lake with stunning sunset views', image: 'https://images.unsplash.com/photo-1566684675202-c7c6dd6a6d73?w=400', distance: 'Center', type: 'lake' },
      { id: 'a20', name: 'Jag Mandir', description: 'Palace island on Lake Pichola with beautiful gardens', image: 'https://images.unsplash.com/photo-1568819317551-31051b37d7a6?w=400', distance: 'On Lake', type: 'palace' },
      { id: 'a21', name: 'Sahelion-ki-Bari', description: 'Beautiful gardens with fountains and lotus pools', image: 'https://images.unsplash.com/photo-1558637845-c8b7bd71d95a?w=400', distance: '4 km', type: 'garden' }
    ],
    tips: ['Take a sunset boat ride on Lake Pichola', 'Watch Dharohar folk dance show at Bagore-ki-Haveli', 'Shop for miniature paintings in old city', 'Visit Monsoon Palace for panoramic views'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '10',
    slug: 'andaman-nicobar',
    name: 'Andaman & Nicobar Islands',
    state: 'Andaman and Nicobar Islands',
    city: 'Port Blair',
    tagline: 'Tropical Paradise',
    description: 'Crystal clear waters, white sandy beaches, and vibrant coral reefs in the Bay of Bengal.',
    overview: 'The Andaman and Nicobar Islands are a group of pristine islands known for their turquoise waters, white sand beaches, lush rainforests, and incredible marine life. Perfect for beach lovers, scuba divers, and nature enthusiasts.',
    images: [
      'https://images.unsplash.com/photo-1582653291997-079a1b04e6d1?w=800',
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1582653291997-079a1b04e6d1?w=1600',
    category: ['beaches', 'adventure', 'nature', 'honeymoon'],
    bestTimeToVisit: 'October to May',
    budget: { min: 25000, max: 60000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 5280,
    weather: { current: 30, condition: 'Humid', humidity: 80, windSpeed: 15 },
    coordinates: { lat: 11.7401, lng: 92.6586 },
    hotels: [
      { id: 'h20', name: 'Taj Exotica Resort', rating: 4.9, price: 35000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Water Sports'], distance: 'Havelock Island' },
      { id: 'h21', name: 'Barefoot at Havelock', rating: 4.8, price: 15000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Eco Resort', 'Beach Front', 'Dive Center'], distance: 'Beach Side' },
      { id: 'h22', name: 'SeaShell Resort', rating: 4.6, price: 10000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Pool', 'Restaurant', 'Water Activities'], distance: 'Neil Island' }
    ],
    food: [
      { id: 'f20', name: 'Seafood Platter', description: 'Fresh catch including crab, lobster, and fish', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', isVegetarian: false, price: 800 },
      { id: 'f21', name: 'Coconut Prawn Curry', description: 'Andaman style prawn curry with coconut milk', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: false, price: 450 },
      { id: 'f22', name: 'Tropical Fruit Salad', description: 'Fresh local fruits including mango, pineapple, and papaya', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a22', name: 'Radhanagar Beach', description: 'Asia\'s best beach with pristine white sand and turquoise waters', image: 'https://images.unsplash.com/photo-1582653291997-079a1b04e6d1?w=400', distance: 'Havelock Island', type: 'beach' },
      { id: 'a23', name: 'Elephant Beach', description: 'Famous for snorkeling and coral reefs', image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400', distance: 'Havelock Island', type: 'beach' },
      { id: 'a24', name: 'Cellular Jail', description: 'Historic colonial prison with light and sound show', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400', distance: 'Port Blair', type: 'historical' },
      { id: 'a25', name: 'North Bay Island', description: 'Famous for coral reefs and underwater activities', image: 'https://images.unsplash.com/photo-1582653291997-079a1b04e6d1?w=400', distance: '15 min boat', type: 'island' }
    ],
    tips: ['Book ferry tickets in advance', 'Carry reef-safe sunscreen', 'Take a scuba diving course', 'Visit Ross Island for ruins', 'Try snorkeling at Elephant Beach'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: true
  },
]

export const getDestinationBySlug = (slug: string) =>
  destinations.find(d => d.slug === slug)

export const getTrendingDestinations = () =>
  destinations.filter(d => d.isTrending)

export const getHiddenGems = () =>
  destinations.filter(d => d.isHiddenGem)