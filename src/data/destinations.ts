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
      'https://gos3.ibcdn.com/5eb3b574-9e07-4151-bdb5-6b6bb8205a65.png',
      'https://images.unsplash.com/photo-1593181629939-1a74e323a8e7?w=800',
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800'
    ],
    bannerImage: 'https://gos3.ibcdn.com/5eb3b574-9e07-4151-bdb5-6b6bb8205a65.png',
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
      'https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_varanasi_tv_destination_img_1_l_960_1430.jpg',
      'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800'
    ],
    bannerImage: 'https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_varanasi_tv_destination_img_1_l_960_1430.jpg',
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
      'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2015/04/introduction-to-hampi.jpg?w=890&h=593',
      'https://images.unsplash.com/photo-1582510003544-4d00b7e74208?w=800',
      'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=800'
    ],
    bannerImage: 'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2015/04/introduction-to-hampi.jpg?w=890&h=593',
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
  {
    id: '11',
    slug: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    city: 'Shimla',
    tagline: 'Queen of Hills',
    description: 'Former summer capital of British India, known for its colonial architecture and scenic beauty.',
    overview: 'Shimla, the capital of Himachal Pradesh, is famous for its Mall Road, Ridge, and colonial-era buildings. Surrounded by pine and deodar forests, it offers beautiful views of the Himalayas.',
    images: [
      '/images/shimla/image1.jpg',
      '/images/shimla/image2.jpg',
      '/images/shimla/image3.jpg'
    ],
    bannerImage: '/images/shimla/banner.jpg',
    category: ['mountains', 'heritage'],
    bestTimeToVisit: 'March to June, December to January',
    budget: { min: 12000, max: 35000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 4890,
    weather: { current: 18, condition: 'Pleasant', humidity: 50, windSpeed: 10 },
    coordinates: { lat: 31.1048, lng: 77.1734 },
    hotels: [
      { id: 'h3', name: 'Wildflower Hall', rating: 4.9, price: 25000, image: '/images/shimla/hotel1.jpg', amenities: ['Luxury Spa', 'Fine Dining', 'Mountain View'], distance: '3 km' },
      { id: 'h4', name: 'Clarkes Hotel', rating: 4.4, price: 8000, image: '/images/shimla/hotel2.jpg', amenities: ['Heritage Property', 'Restaurant', 'Bar'], distance: 'Mall Road' }
    ],
    food: [
      { id: 'f3', name: 'Chana Madra', description: 'Chickpea curry in yogurt gravy', image: '/images/shimla/food1.jpg', isVegetarian: true, price: 180 },
      { id: 'f4', name: 'Tudkiya Bhath', description: 'Spiced rice with lentils', image: '/images/shimla/food2.jpg', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a3', name: 'The Ridge', description: 'Large open space in heart of Shimla with stunning views', image: '/images/shimla/attraction1.jpg', distance: 'Center', type: 'landmark' },
      { id: 'a4', name: 'Mall Road', description: 'Main shopping and dining promenade', image: '/images/shimla/attraction2.jpg', distance: 'Center', type: 'shopping' }
    ],
    tips: ['Walk on Mall Road (vehicles not allowed)', 'Take the Kalka-Shimla toy train', 'Visit during snowfall for magical experience'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '12',
    slug: 'dharamshala',
    name: 'Dharamshala',
    state: 'Himachal Pradesh',
    city: 'Dharamshala',
    tagline: 'Little Lhasa',
    description: 'Home to the Dalai Lama, offering Tibetan culture, monasteries, and stunning mountain views.',
    overview: 'Dharamshala, particularly Upper Dharamshala (McLeod Ganj), is the residence of the 14th Dalai Lama. It is a center of Tibetan Buddhism with beautiful monasteries, trekking trails, and waterfalls.',
    images: [
      '/images/dharamshala/image1.jpg',
      '/images/dharamshala/image2.jpg',
      '/images/dharamshala/image3.jpg'
    ],
    bannerImage: '/images/dharamshala/banner.jpg',
    category: ['mountains', 'spiritual'],
    bestTimeToVisit: 'March to June, September to November',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 3450,
    weather: { current: 20, condition: 'Pleasant', humidity: 55, windSpeed: 8 },
    coordinates: { lat: 32.2196, lng: 76.3234 },
    hotels: [
      { id: 'h7', name: 'Chonor House', rating: 4.6, price: 7000, image: '/images/dharamshala/hotel1.jpg', amenities: ['Tibetan Decor', 'Garden', 'Restaurant'], distance: 'McLeod Ganj' },
      { id: 'h8', name: 'Norbu House', rating: 4.4, price: 5000, image: '/images/dharamshala/hotel2.jpg', amenities: ['Mountain View', 'Cafe', 'WiFi'], distance: 'Center' }
    ],
    food: [
      { id: 'f7', name: 'Thenthuk', description: 'Hand-pulled noodle soup', image: '/images/dharamshala/food1.jpg', isVegetarian: true, price: 130 },
      { id: 'f8', name: 'Tibetan Butter Tea', description: 'Salty tea with yak butter', image: '/images/dharamshala/food2.jpg', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a7', name: 'Namgyal Monastery', description: 'Personal monastery of Dalai Lama', image: '/images/dharamshala/attraction1.jpg', distance: '1 km', type: 'monastery' },
      { id: 'a8', name: 'Bhagsu Waterfall', description: 'Scenic waterfall with a temple', image: '/images/dharamshala/attraction2.jpg', distance: '3 km', type: 'waterfall' }
    ],
    tips: ['Visit Tibetan Museum', 'Attend prayer ceremony at monastery', 'Try Tibetan cuisine', 'Trek to Triund'],
    reviews: [],
    isHiddenGem: false,
    isTrending: false,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: '13',
    slug: 'kasol',
    name: 'Kasol',
    state: 'Himachal Pradesh',
    city: 'Kasol',
    tagline: 'Mini Israel of India',
    description: 'A quaint village in Parvati Valley known for trekking, Israeli cuisine, and serene river views.',
    overview: 'Kasol is a small village in Kullu district, popular among backpackers and trekkers. It serves as a base for treks to Kheerganga, Tosh, and Malana. Known for its vibrant cafe culture and stunning Parvati River views.',
    images: [
      'https://production-nuego-cms.blr1.digitaloceanspaces.com/static-contents/prod-v1/shutterstock_2406541833_750_X_450_px_684e5f2acb.webp',
      '/images/kasol/image2.jpg',
      '/images/kasol/image3.jpg'
    ],
    bannerImage: 'https://production-nuego-cms.blr1.digitaloceanspaces.com/static-contents/prod-v1/shutterstock_2406541833_750_X_450_px_684e5f2acb.webp',
    category: ['mountains', 'hidden-gem'],
    bestTimeToVisit: 'March to June, September to November',
    budget: { min: 6000, max: 20000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 2890,
    weather: { current: 18, condition: 'Cool', humidity: 50, windSpeed: 10 },
    coordinates: { lat: 32.0115, lng: 77.3151 },
    hotels: [
      { id: 'h9', name: 'Kasol Heights', rating: 4.3, price: 4000, image: '/images/kasol/hotel1.jpg', amenities: ['River View', 'Cafe', 'Bonfire'], distance: '1 km' },
      { id: 'h10', name: 'Sandhya Jungle Camp', rating: 4.4, price: 3500, image: '/images/kasol/hotel2.jpg', amenities: ['Camping', 'BBQ', 'Trekking'], distance: '2 km' }
    ],
    food: [
      { id: 'f9', name: 'Israeli Shakshuka', description: 'Eggs poached in tomato sauce', image: '/images/kasol/food1.jpg', isVegetarian: true, price: 200 },
      { id: 'f10', name: 'Hummus with Pita', description: 'Chickpea dip with bread', image: '/images/kasol/food2.jpg', isVegetarian: true, price: 150 }
    ],
    attractions: [
      { id: 'a9', name: 'Kheerganga Trek', description: 'Trek to hot springs at 2950m', image: '/images/kasol/attraction1.jpg', distance: '12 km', type: 'trek' },
      { id: 'a10', name: 'Parvati River', description: 'Crystal clear river with scenic views', image: '/images/kasol/attraction2.jpg', distance: '0 km', type: 'river' }
    ],
    tips: ['Try Israeli food at local cafes', 'Carry cash (cards not widely accepted)', 'Trek to Kheerganga for hot springs', 'Visit nearby Malana village'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '14',
    slug: 'spiti-valley',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    city: 'Kaza',
    tagline: 'Little Tibet',
    description: 'A cold desert mountain valley with ancient monasteries, high passes, and rugged terrain.',
    overview: 'Spiti Valley is a remote, high-altitude region in Himachal Pradesh. Known for its stunning landscapes, ancient Buddhist monasteries, and unique culture, it is a paradise for adventure seekers and photographers.',
    images: [
      'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/lahaul-and-spiti-ki-monastery.jpg',
      '/images/spiti-valley/image2.jpg',
      '/images/spiti-valley/image3.jpg'
    ],
    bannerImage: 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/lahaul-and-spiti-ki-monastery.jpg',
    category: ['mountains', 'hidden-gem', 'adventure'],
    bestTimeToVisit: 'June to October',
    budget: { min: 20000, max: 50000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 2150,
    weather: { current: 10, condition: 'Sunny', humidity: 25, windSpeed: 18 },
    coordinates: { lat: 32.2999, lng: 78.0104 },
    hotels: [
      { id: 'h11', name: 'Spiti Heritage Homestay', rating: 4.7, price: 3000, image: '/images/spiti-valley/hotel1.jpg', amenities: ['Traditional', 'Home Food', 'Bonfire'], distance: 'Kaza' },
      { id: 'h12', name: 'The Himalayan Cafe', rating: 4.5, price: 2500, image: '/images/spiti-valley/hotel2.jpg', amenities: ['Mountain View', 'Cafe', 'Dormitory'], distance: 'Center' }
    ],
    food: [
      { id: 'f11', name: 'Thukpa', description: 'Tibetan noodle soup', image: '/images/spiti-valley/food1.jpg', isVegetarian: true, price: 120 },
      { id: 'f12', name: 'Tsampa', description: 'Roasted barley flour', image: '/images/spiti-valley/food2.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a11', name: 'Key Monastery', description: 'Famous 1000-year-old monastery on a hilltop', image: '/images/spiti-valley/attraction1.jpg', distance: '13 km', type: 'monastery' },
      { id: 'a12', name: 'Chandratal Lake', description: 'Crescent-shaped high-altitude lake', image: '/images/spiti-valley/attraction2.jpg', distance: '49 km', type: 'lake' }
    ],
    tips: ['Acclimatize for 2-3 days', 'Carry enough cash and medicines', 'Mobile network is limited (BSNL works)', 'Visit during summer months'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '15',
    slug: 'mussoorie',
    name: 'Mussoorie',
    state: 'Uttarakhand',
    city: 'Mussoorie',
    tagline: 'Queen of the Hills',
    description: 'A charming hill station with colonial charm, scenic views, and pleasant weather year-round.',
    overview: 'Mussoorie is a beautiful hill station in Uttarakhand, known for its stunning views of the Doon Valley and Himalayas. Popular for its Mall Road, Gun Hill, and Kempty Falls.',
    images: [
      '/images/mussoorie/image1.jpg',
      '/images/mussoorie/image2.jpg',
      '/images/mussoorie/image3.jpg'
    ],
    bannerImage: '/images/mussoorie/banner.jpg',
    category: ['mountains', 'honeymoon'],
    bestTimeToVisit: 'April to June, September to November',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.5,
    reviewCount: 3890,
    weather: { current: 16, condition: 'Cool', humidity: 55, windSpeed: 10 },
    coordinates: { lat: 30.4598, lng: 78.0644 },
    hotels: [
      { id: 'h15', name: 'JW Marriott Walnut Grove', rating: 4.9, price: 22000, image: '/images/mussoorie/hotel1.jpg', amenities: ['Luxury', 'Spa', 'Pool'], distance: '3 km' },
      { id: 'h16', name: 'Hotel Padmini Nivas', rating: 4.3, price: 5000, image: '/images/mussoorie/hotel2.jpg', amenities: ['Heritage', 'Mountain View', 'Restaurant'], distance: 'Mall Road' }
    ],
    food: [
      { id: 'f15', name: 'Aloo Keema', description: 'Spicy potato preparation', image: '/images/mussoorie/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f16', name: 'Bal Mithai', description: 'Famous Kumaoni sweet', image: '/images/mussoorie/food2.jpg', isVegetarian: true, price: 120 }
    ],
    attractions: [
      { id: 'a15', name: 'Kempty Falls', description: 'Popular 40ft waterfall', image: '/images/mussoorie/attraction1.jpg', distance: '15 km', type: 'waterfall' },
      { id: 'a16', name: 'Gun Hill', description: 'Second highest point with cable car', image: '/images/mussoorie/attraction2.jpg', distance: '1 km', type: 'viewpoint' }
    ],
    tips: ['Take the cable car to Gun Hill', 'Walk on Mall Road in evening', 'Visit Lal Tibba for sunrise', 'Try local bakeries'],
    reviews: [],
    isHiddenGem: false,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '16',
    slug: 'nainital',
    name: 'Nainital',
    state: 'Uttarakhand',
    city: 'Nainital',
    tagline: 'City of Lakes',
    description: 'A beautiful lake district surrounded by seven hills, known for its serene Naini Lake.',
    overview: 'Nainital is a charming hill station in Uttarakhand, built around the emerald-shaped Naini Lake. Surrounded by seven hills, it offers boating, scenic views, and colonial-era architecture.',
    images: [
      '/images/nainital/image1.jpg',
      '/images/nainital/image2.jpg',
      '/images/nainital/image3.jpg'
    ],
    bannerImage: '/images/nainital/banner.jpg',
    category: ['lakes', 'mountains'],
    bestTimeToVisit: 'March to June, September to November',
    budget: { min: 10000, max: 28000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 5120,
    weather: { current: 17, condition: 'Pleasant', humidity: 58, windSpeed: 8 },
    coordinates: { lat: 29.3919, lng: 79.4542 },
    hotels: [
      { id: 'h17', name: 'The Naini Retreat', rating: 4.7, price: 10000, image: '/images/nainital/hotel1.jpg', amenities: ['Lake View', 'Spa', 'Restaurant'], distance: '1 km' },
      { id: 'h18', name: 'Shervani Hilltop', rating: 4.5, price: 7000, image: '/images/nainital/hotel2.jpg', amenities: ['Mountain View', 'Pool', 'Gym'], distance: '2 km' }
    ],
    food: [
      { id: 'f17', name: 'Bhatt Ki Churkani', description: 'Black soybeans curry', image: '/images/nainital/food1.jpg', isVegetarian: true, price: 180 },
      { id: 'f18', name: 'Singori', description: 'Traditional Kumaoni sweet', image: '/images/nainital/food2.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a17', name: 'Naini Lake', description: 'Central emerald-shaped lake for boating', image: '/images/nainital/attraction1.jpg', distance: 'Center', type: 'lake' },
      { id: 'a18', name: 'Naina Devi Temple', description: 'Ancient temple on lake\'s northern shore', image: '/images/nainital/attraction2.jpg', distance: '0.5 km', type: 'temple' }
    ],
    tips: ['Enjoy boat ride on Naini Lake', 'Take ropeway to Snow View Point', 'Visit Mall Road for shopping', 'Try local Kumaoni cuisine'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '17',
    slug: 'auli',
    name: 'Auli',
    state: 'Uttarakhand',
    city: 'Auli',
    tagline: 'Skiing Paradise of India',
    description: 'A pristine hill station famous for ski slopes, panoramic Himalayan views, and cable car rides.',
    overview: 'Auli is a popular ski destination in Uttarakhand, offering stunning views of Nanda Devi, Mana Parvat, and Kamet peaks. Known for its longest cable car, artificial lake, and winter sports.',
    images: [
      '/images/auli/image1.jpg',
      '/images/auli/image2.jpg',
      '/images/auli/image3.jpg'
    ],
    bannerImage: '/images/auli/banner.jpg',
    category: ['skiing', 'adventure'],
    bestTimeToVisit: 'December to February (skiing), May to June (summer)',
    budget: { min: 15000, max: 40000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 2340,
    weather: { current: -2, condition: 'Snowy', humidity: 70, windSpeed: 15 },
    coordinates: { lat: 30.5228, lng: 79.5706 },
    hotels: [
      { id: 'h19', name: 'The Cliff Top Club', rating: 4.7, price: 12000, image: '/images/auli/hotel1.jpg', amenities: ['Mountain View', 'Ski Equipment', 'Restaurant'], distance: '1 km' },
      { id: 'h20', name: 'Auli Resort', rating: 4.5, price: 8000, image: '/images/auli/hotel2.jpg', amenities: ['Ski Rental', 'Bonfire', 'Parking'], distance: 'Center' }
    ],
    food: [
      { id: 'f19', name: 'Chainsoo', description: 'Spicy black gram curry', image: '/images/auli/food1.jpg', isVegetarian: true, price: 180 },
      { id: 'f20', name: 'Gahat Ke Parathe', description: 'Horse gram stuffed paratha', image: '/images/auli/food2.jpg', isVegetarian: true, price: 120 }
    ],
    attractions: [
      { id: 'a19', name: 'Auli Ropeway', description: 'One of Asia\'s longest cable cars', image: '/images/auli/attraction1.jpg', distance: '4 km', type: 'cable car' },
      { id: 'a20', name: 'Artificial Lake', description: 'Man-made lake for snow making', image: '/images/auli/attraction2.jpg', distance: '1 km', type: 'lake' }
    ],
    tips: ['Learn skiing from certified instructors', 'Carry heavy woolens and snow boots', 'Book accommodation in advance during peak season', 'Take the ropeway for stunning views'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '18',
    slug: 'valley-of-flowers',
    name: 'Valley of Flowers',
    state: 'Uttarakhand',
    city: 'Joshimath',
    tagline: 'UNESCO World Heritage Site',
    description: 'A vibrant national park known for its meadows of endemic alpine flowers and stunning natural beauty.',
    overview: 'The Valley of Flowers is a UNESCO World Heritage Site in Chamoli district. Famous for its diverse alpine flora, including over 600 species of flowers, it transforms into a colorful carpet during monsoon season.',
    images: [
      'https://cdn.trekthehimalayas.com/images/ValleyofFlowersTrek/Slider/fa912eb2-7826-430a-b75c-aeaed9a15f56_valley%20of%20flowers%20slider%20desk%20(1).webp',
      '/images/valley-of-flowers/image2.jpg',
      '/images/valley-of-flowers/image3.jpg'
    ],
    bannerImage: 'https://cdn.trekthehimalayas.com/images/ValleyofFlowersTrek/Slider/fa912eb2-7826-430a-b75c-aeaed9a15f56_valley%20of%20flowers%20slider%20desk%20(1).webp',
    category: ['trekking', 'hidden-gem', 'mountains'],
    bestTimeToVisit: 'July to September',
    budget: { min: 15000, max: 35000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 1780,
    weather: { current: 12, condition: 'Pleasant', humidity: 65, windSpeed: 10 },
    coordinates: { lat: 30.7291, lng: 79.6281 },
    hotels: [
      { id: 'h21', name: 'Hotel Valley of Flowers', rating: 4.3, price: 4000, image: '/images/valley-of-flowers/hotel1.jpg', amenities: ['Mountain View', 'Restaurant', 'Trekking Guide'], distance: 'Ghagharia' },
      { id: 'h22', name: 'GMVN Tourist Rest House', rating: 4.0, price: 2000, image: '/images/valley-of-flowers/hotel2.jpg', amenities: ['Budget Stay', 'Basic Amenities', 'Dining Hall'], distance: 'Govindghat' }
    ],
    food: [
      { id: 'f21', name: 'Kachmauli', description: 'Traditional Garhwali bread', image: '/images/valley-of-flowers/food1.jpg', isVegetarian: true, price: 80 },
      { id: 'f22', name: 'Mandua Roti', description: 'Finger millet flatbread', image: '/images/valley-of-flowers/food2.jpg', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a21', name: 'Valley of Flowers National Park', description: 'Alpine flower meadows with 600+ species', image: '/images/valley-of-flowers/attraction1.jpg', distance: 'Base', type: 'national park' },
      { id: 'a22', name: 'Hemkund Sahib', description: 'Sikh pilgrimage site at 4329m', image: '/images/valley-of-flowers/attraction2.jpg', distance: '6 km', type: 'temple' }
    ],
    tips: ['Start trek early morning', 'Carry rain gear and warm clothes', 'Best blooms from mid-July to mid-August', 'Permit required at entry point'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '19',
    slug: 'chopta',
    name: 'Chopta',
    state: 'Uttarakhand',
    city: 'Chopta',
    tagline: 'Mini Switzerland of India',
    description: 'A pristine hill station offering meadows, forests, and trekking to Tungnath Temple.',
    overview: 'Chopta is a stunning meadow in Uttarakhand, surrounded by dense forests and offering panoramic views of the Himalayas. It serves as the base for trekking to Tungnath (highest Shiva temple) and Chandrashila Peak.',
    images: [
      'https://www.tripclap.com/uploads/package/850X450/1753857211-1753857211-5618e.webp',
      '/images/chopta/image2.jpg',
      '/images/chopta/image3.jpg'
    ],
    bannerImage: 'https://www.tripclap.com/uploads/package/850X450/1753857211-1753857211-5618e.webp',
    category: ['trekking', 'hidden-gem', 'mountains'],
    bestTimeToVisit: 'April to June, September to November',
    budget: { min: 8000, max: 20000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 1560,
    weather: { current: 14, condition: 'Pleasant', humidity: 55, windSpeed: 12 },
    coordinates: { lat: 30.4819, lng: 79.2002 },
    hotels: [
      { id: 'h23', name: 'Chopta Valley Camp', rating: 4.5, price: 3500, image: '/images/chopta/hotel1.jpg', amenities: ['Camping', 'Bonfire', 'Trekking Guide'], distance: '1 km' },
      { id: 'h24', name: 'GMVN Tourist Rest House', rating: 4.2, price: 2500, image: '/images/chopta/hotel2.jpg', amenities: ['Budget Stay', 'Mountain View', 'Parking'], distance: 'Center' }
    ],
    food: [
      { id: 'f23', name: 'Kafuli', description: 'Spinach and fenugreek curry', image: '/images/chopta/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f24', name: 'Jhangora Kheer', description: 'Barnyard millet pudding', image: '/images/chopta/food2.jpg', isVegetarian: true, price: 120 }
    ],
    attractions: [
      { id: 'a23', name: 'Tungnath Temple', description: 'Highest Shiva temple in the world (3680m)', image: '/images/chopta/attraction1.jpg', distance: '4 km', type: 'temple' },
      { id: 'a24', name: 'Chandrashila Peak', description: 'Summit with 360° Himalayan views', image: '/images/chopta/attraction2.jpg', distance: '5 km', type: 'peak' }
    ],
    tips: ['Start Tungnath trek early morning', 'Carry water and snacks', 'Best for camping under stars', 'Visit during rhododendron bloom (April)'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '20',
    slug: 'jaisalmer',
    name: 'Jaisalmer',
    state: 'Rajasthan',
    city: 'Jaisalmer',
    tagline: 'The Golden City',
    description: 'A golden-hued city rising from the Thar Desert, famous for its sandstone fort and camel safaris.',
    overview: 'Jaisalmer is a stunning city in the heart of the Thar Desert, known for its yellow sandstone architecture that glows golden at sunset. Famous for the living fort, havelis, and desert camping experiences.',
    images: [
      '/images/jaisalmer/image1.jpg',
      '/images/jaisalmer/image2.jpg',
      '/images/jaisalmer/image3.jpg'
    ],
    bannerImage: '/images/jaisalmer/banner.jpg',
    category: ['desert', 'heritage'],
    bestTimeToVisit: 'October to March',
    budget: { min: 12000, max: 35000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 6340,
    weather: { current: 30, condition: 'Sunny', humidity: 25, windSpeed: 18 },
    coordinates: { lat: 26.9157, lng: 70.9083 },
    hotels: [
      { id: 'h31', name: 'Suryagarh Palace', rating: 4.9, price: 25000, image: '/images/jaisalmer/hotel1.jpg', amenities: ['Luxury', 'Desert View', 'Spa', 'Cultural Shows'], distance: '3 km' },
      { id: 'h32', name: 'Hotel Tokyo Palace', rating: 4.4, price: 5000, image: '/images/jaisalmer/hotel2.jpg', amenities: ['Rooftop View', 'Restaurant', 'Fort View'], distance: '1 km' },
      { id: 'h33', name: 'Desert Camps', rating: 4.6, price: 6000, image: '/images/jaisalmer/hotel3.jpg', amenities: ['Camping', 'Bonfire', 'Cultural Night', 'Camel Ride'], distance: '40 km' }
    ],
    food: [
      { id: 'f31', name: 'Ker Sangri', description: 'Traditional desert bean curry', image: '/images/jaisalmer/food1.jpg', isVegetarian: true, price: 180 },
      { id: 'f32', name: 'Bajre ki Roti', description: 'Pearl millet flatbread', image: '/images/jaisalmer/food2.jpg', isVegetarian: true, price: 80 },
      { id: 'f33', name: 'Pyaaz Kachori', description: 'Onion stuffed spicy pastry', image: '/images/jaisalmer/food3.jpg', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a33', name: 'Jaisalmer Fort', description: 'Living fort with shops, hotels, and homes', image: '/images/jaisalmer/attraction1.jpg', distance: 'Center', type: 'fort' },
      { id: 'a34', name: 'Patwon ki Haveli', description: 'Intricately carved five haveli complex', image: '/images/jaisalmer/attraction2.jpg', distance: '1 km', type: 'haveli' },
      { id: 'a35', name: 'Sam Sand Dunes', description: 'Popular desert for camel safari and sunset', image: '/images/jaisalmer/attraction3.jpg', distance: '42 km', type: 'desert' },
      { id: 'a36', name: 'Gadisar Lake', description: 'Man-made lake with temples around', image: '/images/jaisalmer/attraction4.jpg', distance: '2 km', type: 'lake' }
    ],
    tips: ['Stay overnight at desert camps', 'Try camel safari at sunset', 'Shop for leather items', 'Attend folk music performance'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '21',
    slug: 'jodhpur',
    name: 'Jodhpur',
    state: 'Rajasthan',
    city: 'Jodhpur',
    tagline: 'The Blue City',
    description: 'A beautiful blue-hued city dominated by the mighty Mehrangarh Fort.',
    overview: 'Jodhpur, the second-largest city in Rajasthan, is known as the Blue City for its blue-painted houses around Mehrangarh Fort. Famous for its imposing fort, delicious street food, and vibrant markets.',
    images: [
      '/images/jodhpur/image1.jpg',
      '/images/jodhpur/image2.jpg',
      '/images/jodhpur/image3.jpg'
    ],
    bannerImage: '/images/jodhpur/banner.jpg',
    category: ['heritage', 'culture'],
    bestTimeToVisit: 'October to March',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 5670,
    weather: { current: 29, condition: 'Sunny', humidity: 30, windSpeed: 15 },
    coordinates: { lat: 26.2389, lng: 73.0243 },
    hotels: [
      { id: 'h34', name: 'Umaid Bhawan Palace', rating: 4.9, price: 45000, image: '/images/jodhpur/hotel1.jpg', amenities: ['Luxury Palace', 'Spa', 'Fine Dining', 'Heritage'], distance: '3 km' },
      { id: 'h35', name: 'Ajit Bhawan Palace', rating: 4.7, price: 12000, image: '/images/jodhpur/hotel2.jpg', amenities: ['Heritage', 'Pool', 'Cultural Evenings'], distance: '2 km' },
      { id: 'h36', name: 'Pal Haveli', rating: 4.5, price: 6000, image: '/images/jodhpur/hotel3.jpg', amenities: ['Fort View', 'Rooftop Restaurant', 'Heritage'], distance: '1 km' }
    ],
    food: [
      { id: 'f34', name: 'Makhaniya Lassi', description: 'Sweet buttermilk with cream', image: '/images/jodhpur/food1.jpg', isVegetarian: true, price: 80 },
      { id: 'f35', name: 'Mirchi Bada', description: 'Spicy chili fritters', image: '/images/jodhpur/food2.jpg', isVegetarian: true, price: 50 },
      { id: 'f36', name: 'Mawa Kachori', description: 'Sweet stuffed pastry', image: '/images/jodhpur/food3.jpg', isVegetarian: true, price: 70 }
    ],
    attractions: [
      { id: 'a37', name: 'Mehrangarh Fort', description: 'One of India\'s largest and most impressive forts', image: '/images/jodhpur/attraction1.jpg', distance: '1 km', type: 'fort' },
      { id: 'a38', name: 'Jaswant Thada', description: 'Beautiful marble cenotaph', image: '/images/jodhpur/attraction2.jpg', distance: '1 km', type: 'monument' },
      { id: 'a39', name: 'Clock Tower & Sardar Market', description: 'Vibrant market for spices and handicrafts', image: '/images/jodhpur/attraction3.jpg', distance: 'Center', type: 'market' },
      { id: 'a40', name: 'Umaid Bhawan Palace', description: 'Part museum, part luxury hotel', image: '/images/jodhpur/attraction4.jpg', distance: '3 km', type: 'palace' }
    ],
    tips: ['Visit Mehrangarh Fort early morning', 'Try street food at Sardar Market', 'Shop for antiques and spices', 'See blue houses from fort viewpoint'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '22',
    slug: 'pushkar',
    name: 'Pushkar',
    state: 'Rajasthan',
    city: 'Pushkar',
    tagline: 'Sacred Lake Town',
    description: 'A holy city famous for the Brahma Temple, sacred lake, and vibrant camel fair.',
    overview: 'Pushkar is an ancient city in Rajasthan, known for its sacred Pushkar Lake, the only Brahma Temple in the world, and the annual Pushkar Camel Fair. It\'s a major pilgrimage site with a bohemian atmosphere.',
    images: [
      '/images/pushkar/image1.jpg',
      '/images/pushkar/image2.jpg',
      '/images/pushkar/image3.jpg'
    ],
    bannerImage: '/images/pushkar/banner.jpg',
    category: ['spiritual', 'culture'],
    bestTimeToVisit: 'October to March',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 4230,
    weather: { current: 28, condition: 'Sunny', humidity: 38, windSpeed: 10 },
    coordinates: { lat: 26.4898, lng: 74.5511 },
    hotels: [
      { id: 'h37', name: 'Pushkar Palace', rating: 4.6, price: 8000, image: '/images/pushkar/hotel1.jpg', amenities: ['Lake View', 'Heritage', 'Restaurant'], distance: 'Lake Side' },
      { id: 'h38', name: 'The Westin Pushkar', rating: 4.8, price: 15000, image: '/images/pushkar/hotel2.jpg', amenities: ['Luxury', 'Spa', 'Pool', 'Golf Course'], distance: '5 km' },
      { id: 'h39', name: 'Inn Seventh Heaven', rating: 4.4, price: 4000, image: '/images/pushkar/hotel3.jpg', amenities: ['Rooftop Cafe', 'Yoga', 'Budget'], distance: '1 km' }
    ],
    food: [
      { id: 'f37', name: 'Malpua', description: 'Sweet pancake, Pushkar specialty', image: '/images/pushkar/food1.jpg', isVegetarian: true, price: 60 },
      { id: 'f38', name: 'Rabri', description: 'Sweet condensed milk dessert', image: '/images/pushkar/food2.jpg', isVegetarian: true, price: 80 },
      { id: 'f39', name: 'Israeli Food', description: 'Popular cafe food for backpackers', image: '/images/pushkar/food3.jpg', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a41', name: 'Pushkar Lake', description: 'Sacred lake with 52 ghats', image: '/images/pushkar/attraction1.jpg', distance: 'Center', type: 'lake' },
      { id: 'a42', name: 'Brahma Temple', description: 'Only temple dedicated to Lord Brahma', image: '/images/pushkar/attraction2.jpg', distance: '1 km', type: 'temple' },
      { id: 'a43', name: 'Pushkar Camel Fair', description: 'Annual fair with camel trading and competitions', image: '/images/pushkar/attraction3.jpg', distance: '2 km', type: 'fair' },
      { id: 'a44', name: 'Savitri Temple', description: 'Hilltop temple with panoramic views', image: '/images/pushkar/attraction4.jpg', distance: '2 km', type: 'temple' }
    ],
    tips: ['Remove shoes before entering temples', 'Attend evening aarti at lake', 'Visit during Camel Fair (Oct/Nov)', 'Try rooftop cafes for views'],
    reviews: [],
    isHiddenGem: false,
    isTrending: false,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: '23',
    slug: 'bikaner',
    name: 'Bikaner',
    state: 'Rajasthan',
    city: 'Bikaner',
    tagline: 'Camel Country',
    description: 'A desert city famous for its sandstone palaces, camel breeding farm, and delicious snacks.',
    overview: 'Bikaner is a vibrant desert city in Rajasthan, known for its well-preserved Junagarh Fort, stunning havelis, and the National Research Centre on Camels. Famous for its spicy cuisine and sweet snacks.',
    images: [
      '/images/bikaner/image1.jpg',
      '/images/bikaner/image2.jpg',
      '/images/bikaner/image3.jpg'
    ],
    bannerImage: '/images/bikaner/banner.jpg',
    category: ['heritage', 'hidden-gem', 'desert'],
    bestTimeToVisit: 'October to March',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.5,
    reviewCount: 2890,
    weather: { current: 28, condition: 'Sunny', humidity: 28, windSpeed: 16 },
    coordinates: { lat: 28.0220, lng: 73.3119 },
    hotels: [
      { id: 'h40', name: 'Laxmi Niwas Palace', rating: 4.8, price: 15000, image: '/images/bikaner/hotel1.jpg', amenities: ['Heritage Palace', 'Spa', 'Fine Dining'], distance: '2 km' },
      { id: 'h41', name: 'Hotel Heritage Resort', rating: 4.4, price: 6000, image: '/images/bikaner/hotel2.jpg', amenities: ['Desert View', 'Pool', 'Cultural Shows'], distance: '3 km' },
      { id: 'h42', name: 'Narendra Bhawan', rating: 4.7, price: 10000, image: '/images/bikaner/hotel3.jpg', amenities: ['Boutique', 'Heritage', 'Rooftop Pool'], distance: '1 km' }
    ],
    food: [
      { id: 'f40', name: 'Bikaneri Bhujia', description: 'Famous spicy snack', image: '/images/bikaner/food1.jpg', isVegetarian: true, price: 100 },
      { id: 'f41', name: 'Kachori', description: 'Spicy stuffed pastry', image: '/images/bikaner/food2.jpg', isVegetarian: true, price: 50 },
      { id: 'f42', name: 'Rasgulla', description: 'Sweet cottage cheese balls', image: '/images/bikaner/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a45', name: 'Junagarh Fort', description: 'Unconquered fort with palaces and temples', image: '/images/bikaner/attraction1.jpg', distance: 'Center', type: 'fort' },
      { id: 'a46', name: 'National Camel Research Centre', description: 'Only camel breeding farm in Asia', image: '/images/bikaner/attraction2.jpg', distance: '8 km', type: 'farm' },
      { id: 'a47', name: 'Karni Mata Temple', description: 'Famous Rat Temple at Deshnoke', image: '/images/bikaner/attraction3.jpg', distance: '30 km', type: 'temple' },
      { id: 'a48', name: 'Lalgarh Palace', description: 'Stunning red sandstone palace', image: '/images/bikaner/attraction4.jpg', distance: '3 km', type: 'palace' }
    ],
    tips: ['Try fresh Bikaneri bhujia', 'Visit Rat Temple (keep shoes outside)', 'Take camel safari in desert', 'Shop for leather goods and handicrafts'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '24',
    slug: 'mount-abu',
    name: 'Mount Abu',
    state: 'Rajasthan',
    city: 'Mount Abu',
    tagline: 'Hill Station of Rajasthan',
    description: 'The only hill station in Rajasthan, offering cool climate, lakes, and ancient temples.',
    overview: 'Mount Abu is the only hill station in Rajasthan, situated in the Aravalli Range. Known for its pleasant climate, beautiful Nakki Lake, and the stunning Dilwara Jain Temples, it\'s a perfect getaway for couples and families.',
    images: [
      '/images/mount-abu/image1.jpg',
      '/images/mount-abu/image2.jpg',
      '/images/mount-abu/image3.jpg'
    ],
    bannerImage: '/images/mount-abu/banner.jpg',
    category: ['hills', 'honeymoon'],
    bestTimeToVisit: 'March to June, September to November',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.5,
    reviewCount: 3560,
    weather: { current: 22, condition: 'Pleasant', humidity: 55, windSpeed: 12 },
    coordinates: { lat: 24.5926, lng: 72.7156 },
    hotels: [
      { id: 'h43', name: 'Cama Rajputana Club Resort', rating: 4.6, price: 10000, image: '/images/mount-abu/hotel1.jpg', amenities: ['Mountain View', 'Pool', 'Spa', 'Tennis Court'], distance: '1 km' },
      { id: 'h44', name: 'Hotel Hillock', rating: 4.5, price: 8000, image: '/images/mount-abu/hotel2.jpg', amenities: ['Lake View', 'Pool', 'Multi-cuisine Restaurant'], distance: '1 km' },
      { id: 'h45', name: 'Palace Hotel - Bikaner House', rating: 4.4, price: 6000, image: '/images/mount-abu/hotel3.jpg', amenities: ['Heritage', 'Garden', 'Bonfire'], distance: '2 km' }
    ],
    food: [
      { id: 'f43', name: 'Daal Baati', description: 'Rajasthani staple dish', image: '/images/mount-abu/food1.jpg', isVegetarian: true, price: 200 },
      { id: 'f44', name: 'Gatte ki Sabzi', description: 'Gram flour dumplings curry', image: '/images/mount-abu/food2.jpg', isVegetarian: true, price: 180 },
      { id: 'f45', name: 'Chai at Sunset Point', description: 'Famous evening tea', image: '/images/mount-abu/food3.jpg', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a49', name: 'Dilwara Jain Temples', description: 'Exquisite marble temples from 11th-13th century', image: '/images/mount-abu/attraction1.jpg', distance: '3 km', type: 'temple' },
      { id: 'a50', name: 'Nakki Lake', description: 'Scenic lake with boating facilities', image: '/images/mount-abu/attraction2.jpg', distance: 'Center', type: 'lake' },
      { id: 'a51', name: 'Sunset Point', description: 'Popular spot for sunset views', image: '/images/mount-abu/attraction3.jpg', distance: '2 km', type: 'viewpoint' },
      { id: 'a52', name: 'Guru Shikhar', description: 'Highest point in Rajasthan', image: '/images/mount-abu/attraction4.jpg', distance: '15 km', type: 'peak' }
    ],
    tips: ['Visit Dilwara temples early morning', 'Take boat ride on Nakki Lake', 'Hike to Guru Shikhar for sunrise', 'Try local street food at charcuterie'],
    reviews: [],
    isHiddenGem: false,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '25',
    slug: 'mandawa',
    name: 'Mandawa',
    state: 'Rajasthan',
    city: 'Mandawa',
    tagline: 'Open Art Gallery',
    description: 'A small town famous for its beautifully painted havelis and frescoed walls.',
    overview: 'Mandawa is a small town in the Shekhawati region, known as the "Open Art Gallery" of Rajasthan. Famous for its exquisitely painted havelis with stunning frescoes depicting mythological and everyday scenes.',
    images: [
      '/images/mandawa/image1.jpg',
      '/images/mandawa/image2.jpg',
      '/images/mandawa/image3.jpg'
    ],
    bannerImage: '/images/mandawa/banner.jpg',
    category: ['heritage', 'hidden-gem', 'culture'],
    bestTimeToVisit: 'October to March',
    budget: { min: 7000, max: 20000, currency: 'INR' },
    rating: 4.4,
    reviewCount: 1890,
    weather: { current: 27, condition: 'Sunny', humidity: 30, windSpeed: 14 },
    coordinates: { lat: 28.0548, lng: 75.1486 },
    hotels: [
      { id: 'h46', name: 'Castle Mandawa', rating: 4.7, price: 12000, image: '/images/mandawa/hotel1.jpg', amenities: ['Heritage Castle', 'Pool', 'Cultural Evenings', 'Museum'], distance: 'Center' },
      { id: 'h47', name: 'Hotel Heritage Mandawa', rating: 4.4, price: 5000, image: '/images/mandawa/hotel2.jpg', amenities: ['Heritage Haveli', 'Rooftop', 'Restaurant'], distance: '0.5 km' },
      { id: 'h48', name: 'Desert Nights Camp', rating: 4.3, price: 4000, image: '/images/mandawa/hotel3.jpg', amenities: ['Camping', 'Bonfire', 'Folk Music'], distance: '5 km' }
    ],
    food: [
      { id: 'f46', name: 'Kair Sangri', description: 'Desert bean curry', image: '/images/mandawa/food1.jpg', isVegetarian: true, price: 160 },
      { id: 'f47', name: 'Bajra Khichdi', description: 'Pearl millet porridge', image: '/images/mandawa/food2.jpg', isVegetarian: true, price: 120 },
      { id: 'f48', name: 'Churma Ladoo', description: 'Sweet wheat balls', image: '/images/mandawa/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a53', name: 'Mandawa Fort', description: '19th-century fort converted into heritage hotel', image: '/images/mandawa/attraction1.jpg', distance: 'Center', type: 'fort' },
      { id: 'a54', name: 'Havelis of Shekhawati', description: 'Beautifully painted havelis with frescoes', image: '/images/mandawa/attraction2.jpg', distance: '1 km', type: 'haveli' },
      { id: 'a55', name: 'Murlidhar Temple', description: 'Temple with intricate paintings', image: '/images/mandawa/attraction3.jpg', distance: '1 km', type: 'temple' },
      { id: 'a56', name: 'Open Art Gallery', description: 'Streets with painted murals and frescoes', image: '/images/mandawa/attraction4.jpg', distance: 'Center', type: 'landmark' }
    ],
    tips: ['Take a guided walking tour of havelis', 'Photograph the beautiful frescoes', 'Visit during Shekhawati Festival (Feb)', 'Stay in a heritage haveli'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '26',
    slug: 'agra-taj-mahal',
    name: 'Agra & Taj Mahal',
    state: 'Uttar Pradesh',
    city: 'Agra',
    tagline: 'Home of the Taj Mahal',
    description: 'Witness the eternal symbol of love - the magnificent Taj Mahal, along with other Mughal architectural wonders.',
    overview: 'Agra is famous for the Taj Mahal, one of the Seven Wonders of the World. This city on the Yamuna River is rich in Mughal architecture, including the Agra Fort and Fatehpur Sikri, making it a UNESCO World Heritage hub.',
    images: [
      '/images/agra/image1.jpg',
      '/images/agra/image2.jpg',
      '/images/agra/image3.jpg'
    ],
    bannerImage: '/images/agra/banner.jpg',
    category: ['heritage', 'honeymoon'],
    bestTimeToVisit: 'October to March',
    budget: { min: 10000, max: 35000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 12450,
    weather: { current: 26, condition: 'Sunny', humidity: 45, windSpeed: 10 },
    coordinates: { lat: 27.1767, lng: 78.0081 },
    hotels: [
      { id: 'h64', name: 'The Oberoi Amarvilas', rating: 4.9, price: 35000, image: '/images/agra/hotel1.jpg', amenities: ['Taj View', 'Luxury Spa', 'Fine Dining', 'Pool'], distance: '0.5 km' },
      { id: 'h65', name: 'ITC Mughal', rating: 4.8, price: 15000, image: '/images/agra/hotel2.jpg', amenities: ['Pool', 'Spa', 'Multiple Restaurants', 'Garden'], distance: '2 km' },
      { id: 'h66', name: 'Hotel Taj Resorts', rating: 4.4, price: 5000, image: '/images/agra/hotel3.jpg', amenities: ['Taj View', 'Rooftop Restaurant', 'Pool'], distance: '1 km' }
    ],
    food: [
      { id: 'f65', name: 'Petha', description: 'Famous Agra sweet made from ash gourd', image: '/images/agra/food1.jpg', isVegetarian: true, price: 200 },
      { id: 'f66', name: 'Mughlai Biryani', description: 'Aromatic rice dish with spices', image: '/images/agra/food2.jpg', isVegetarian: false, price: 350 },
      { id: 'f67', name: 'Bedai with Sabzi', description: 'Spicy stuffed kachori', image: '/images/agra/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a66', name: 'Taj Mahal', description: 'Iconic white marble mausoleum, symbol of love', image: '/images/agra/attraction1.jpg', distance: 'Center', type: 'monument' },
      { id: 'a67', name: 'Agra Fort', description: 'Massive red sandstone fort, UNESCO site', image: '/images/agra/attraction2.jpg', distance: '2 km', type: 'fort' },
      { id: 'a68', name: 'Mehtab Bagh', description: 'Garden complex with stunning Taj view at sunset', image: '/images/agra/attraction3.jpg', distance: '3 km', type: 'garden' },
      { id: 'a69', name: 'Fatehpur Sikri', description: 'Ancient Mughal capital, well-preserved palace complex', image: '/images/agra/attraction4.jpg', distance: '40 km', type: 'historical' },
      { id: 'a70', name: 'Tomb of Itimad-ud-Daulah', description: 'Baby Taj - intricate marble tomb', image: '/images/agra/attraction5.jpg', distance: '3 km', type: 'monument' }
    ],
    tips: ['Visit Taj Mahal at sunrise for fewer crowds', 'Buy tickets online to avoid queues', 'Hire a government-approved guide', 'Visit on full moon night (limited tickets)', 'Keep 3-4 hours for Taj Mahal visit'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '27',
    slug: 'khajuraho',
    name: 'Khajuraho',
    state: 'Madhya Pradesh',
    city: 'Khajuraho',
    tagline: 'Land of Sensuous Temples',
    description: 'Famous for UNESCO World Heritage temples with intricate erotic sculptures and stunning architecture.',
    overview: 'Khajuraho is known for its magnificent group of Hindu and Jain temples, famous for their erotic sculptures and exquisite architectural detail. Built by the Chandela dynasty between 950-1050 AD, these temples are a UNESCO World Heritage Site.',
    images: [
      '/images/khajuraho/image1.jpg',
      '/images/khajuraho/image2.jpg',
      '/images/khajuraho/image3.jpg'
    ],
    bannerImage: '/images/khajuraho/banner.jpg',
    category: ['heritage', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 3450,
    weather: { current: 28, condition: 'Sunny', humidity: 40, windSpeed: 10 },
    coordinates: { lat: 24.8318, lng: 79.9199 },
    hotels: [
      { id: 'h67', name: 'The Lalit Temple View', rating: 4.8, price: 12000, image: '/images/khajuraho/hotel1.jpg', amenities: ['Temple View', 'Pool', 'Spa', 'Cultural Shows'], distance: '1 km' },
      { id: 'h68', name: 'Hotel Clarks Khajuraho', rating: 4.5, price: 8000, image: '/images/khajuraho/hotel2.jpg', amenities: ['Pool', 'Garden', 'Multi-cuisine Restaurant'], distance: '2 km' },
      { id: 'h69', name: 'Hotel ISHAN', rating: 4.3, price: 4000, image: '/images/khajuraho/hotel3.jpg', amenities: ['Rooftop', 'Free WiFi', 'Restaurant'], distance: '1 km' }
    ],
    food: [
      { id: 'f68', name: 'Bundeli Khichdi', description: 'Local spiced rice-lentil dish', image: '/images/khajuraho/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f69', name: 'Palak Puri', description: 'Spinach stuffed puri', image: '/images/khajuraho/food2.jpg', isVegetarian: true, price: 120 },
      { id: 'f70', name: 'Malpua', description: 'Sweet pancake dessert', image: '/images/khajuraho/food3.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a71', name: 'Western Group of Temples', description: 'Main temple complex with most elaborate sculptures', image: '/images/khajuraho/attraction1.jpg', distance: 'Center', type: 'temple' },
      { id: 'a72', name: 'Kandariya Mahadev Temple', description: 'Largest and most ornate temple', image: '/images/khajuraho/attraction2.jpg', distance: '1 km', type: 'temple' },
      { id: 'a73', name: 'Light & Sound Show', description: 'Evening show narrating Khajuraho history', image: '/images/khajuraho/attraction3.jpg', distance: 'Western Group', type: 'show' },
      { id: 'a74', name: 'Eastern Group of Temples', description: 'Jain temples with unique architecture', image: '/images/khajuraho/attraction4.jpg', distance: '2 km', type: 'temple' },
      { id: 'a75', name: 'Khajuraho Dance Festival', description: 'Annual classical dance festival (Feb)', image: '/images/khajuraho/attraction5.jpg', distance: 'Center', type: 'festival' }
    ],
    tips: ['Hire a guide to understand sculpture meanings', 'Visit early morning or late afternoon', 'Attend light & sound show', 'Carry water and sunscreen', 'Visit during dance festival in February'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '28',
    slug: 'orchha',
    name: 'Orchha',
    state: 'Madhya Pradesh',
    city: 'Orchha',
    tagline: 'Hidden Architectural Gem',
    description: 'A medieval city frozen in time, with stunning palaces, temples, and cenotaphs on Betwa River.',
    overview: 'Orchha is a beautiful town on the Betwa River, known for its well-preserved palaces, temples, and cenotaphs (chhatris) that showcase Bundela architecture. Founded in 1501, it feels like a city frozen in medieval times.',
    images: [
      '/images/orchha/image1.jpg',
      '/images/orchha/image2.jpg',
      '/images/orchha/image3.jpg'
    ],
    bannerImage: '/images/orchha/banner.jpg',
    category: ['heritage', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 7000, max: 20000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 2890,
    weather: { current: 27, condition: 'Pleasant', humidity: 42, windSpeed: 9 },
    coordinates: { lat: 25.3519, lng: 78.6406 },
    hotels: [
      { id: 'h70', name: 'Amar Mahal', rating: 4.6, price: 8000, image: '/images/orchha/hotel1.jpg', amenities: ['Heritage', 'Pool', 'Rooftop Restaurant', 'Garden'], distance: '1 km' },
      { id: 'h71', name: 'Bundelkhand Riverside', rating: 4.5, price: 6000, image: '/images/orchha/hotel2.jpg', amenities: ['River View', 'Garden', 'Bonfire'], distance: 'River Side' },
      { id: 'h72', name: 'Hotel Sheesh Mahal', rating: 4.4, price: 5000, image: '/images/orchha/hotel3.jpg', amenities: ['Heritage', 'Fort View', 'Restaurant'], distance: 'Center' }
    ],
    food: [
      { id: 'f71', name: 'Dal Bafla', description: 'Bundeli version of dal baati', image: '/images/orchha/food1.jpg', isVegetarian: true, price: 200 },
      { id: 'f72', name: 'Chakki ki Sabzi', description: 'Wheat dough curry', image: '/images/orchha/food2.jpg', isVegetarian: true, price: 150 },
      { id: 'f73', name: 'Khoye ki Kachori', description: 'Mawa stuffed kachori', image: '/images/orchha/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a76', name: 'Orchha Fort Complex', description: 'Collection of palaces including Raj Mahal, Jahangir Mahal', image: '/images/orchha/attraction1.jpg', distance: 'Center', type: 'fort' },
      { id: 'a77', name: 'Chattris (Cenotaphs)', description: 'Beautiful riverside cenotaphs', image: '/images/orchha/attraction2.jpg', distance: '1 km', type: 'monument' },
      { id: 'a78', name: 'Ram Raja Temple', description: 'Only temple where Ram is worshipped as king', image: '/images/orchha/attraction3.jpg', distance: '1 km', type: 'temple' },
      { id: 'a79', name: 'Betwa River', description: 'Scenic river perfect for kayaking', image: '/images/orchha/attraction4.jpg', distance: 'Center', type: 'river' },
      { id: 'a80', name: 'Laxminarayan Temple', description: 'Temple with unique murals', image: '/images/orchha/attraction5.jpg', distance: '1 km', type: 'temple' }
    ],
    tips: ['Take a kayaking tour on Betwa River', 'Watch sunset from cenotaphs', 'Visit light & sound show at fort', 'Explore temples and palaces by bicycle', 'Stay at a heritage property'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '29',
    slug: 'pachmarhi',
    name: 'Pachmarhi',
    state: 'Madhya Pradesh',
    city: 'Pachmarhi',
    tagline: 'Queen of Satpura',
    description: 'The only hill station in Madhya Pradesh, with stunning waterfalls, caves, and lush forests.',
    overview: 'Pachmarhi is the only hill station in Madhya Pradesh, nestled in the Satpura Range. Known for its stunning waterfalls, ancient caves, breathtaking viewpoints, and rich biodiversity, it\'s a perfect nature getaway.',
    images: [
      '/images/pachmarhi/image1.jpg',
      '/images/pachmarhi/image2.jpg',
      '/images/pachmarhi/image3.jpg'
    ],
    bannerImage: '/images/pachmarhi/banner.jpg',
    category: ['hills', 'hidden-gem'],
    bestTimeToVisit: 'October to June',
    budget: { min: 8000, max: 22000, currency: 'INR' },
    rating: 4.5,
    reviewCount: 2450,
    weather: { current: 20, condition: 'Pleasant', humidity: 58, windSpeed: 12 },
    coordinates: { lat: 22.4650, lng: 78.4342 },
    hotels: [
      { id: 'h73', name: 'Satpura Retreat', rating: 4.5, price: 8000, image: '/images/pachmarhi/hotel1.jpg', amenities: ['Mountain View', 'Pool', 'Spa', 'Garden'], distance: '2 km' },
      { id: 'h74', name: 'Hotel Pachmarhi', rating: 4.3, price: 5000, image: '/images/pachmarhi/hotel2.jpg', amenities: ['Valley View', 'Restaurant', 'Bonfire'], distance: '1 km' },
      { id: 'h75', name: 'Bison Resort', rating: 4.4, price: 6000, image: '/images/pachmarhi/hotel3.jpg', amenities: ['Forest View', 'Pool', 'Outdoor Activities'], distance: '3 km' }
    ],
    food: [
      { id: 'f74', name: 'Bhutte ki Khees', description: 'Grated corn preparation', image: '/images/pachmarhi/food1.jpg', isVegetarian: true, price: 120 },
      { id: 'f75', name: 'Poha', description: 'Flattened rice snack', image: '/images/pachmarhi/food2.jpg', isVegetarian: true, price: 60 },
      { id: 'f76', name: 'Jalebi', description: 'Crispy sweet spiral', image: '/images/pachmarhi/food3.jpg', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a81', name: 'Bee Falls', description: 'Stunning waterfall with natural pool', image: '/images/pachmarhi/attraction1.jpg', distance: '3 km', type: 'waterfall' },
      { id: 'a82', name: 'Pandava Caves', description: 'Ancient caves from Mahabharata era', image: '/images/pachmarhi/attraction2.jpg', distance: '2 km', type: 'caves' },
      { id: 'a83', name: 'Dhupgarh', description: 'Highest point in Madhya Pradesh', image: '/images/pachmarhi/attraction3.jpg', distance: '6 km', type: 'peak' },
      { id: 'a84', name: 'Jata Shankar Cave', description: 'Natural cave with Shiva lingam', image: '/images/pachmarhi/attraction4.jpg', distance: '4 km', type: 'cave temple' },
      { id: 'a85', name: 'Handi Khoh', description: 'Deep valley with breathtaking views', image: '/images/pachmarhi/attraction5.jpg', distance: '5 km', type: 'valley' }
    ],
    tips: ['Visit Bee Falls during monsoon', 'Go for early morning trek to Dhupgarh', 'Take a jeep safari in Satpura Reserve', 'Carry insect repellent', 'Visit Pachmarhi in winter (Dec-Feb)'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '30',
    slug: 'bhedaghat',
    name: 'Bhedaghat',
    state: 'Madhya Pradesh',
    city: 'Bhedaghat',
    tagline: 'Marble Rocks Wonder',
    description: 'Famous for towering marble cliffs along Narmada River, creating spectacular scenery.',
    overview: 'Bhedaghat is famous for the Marble Rocks - towering white marble cliffs rising on both sides of the Narmada River. A boat ride through the gorge, especially on a moonlit night, is a magical experience. Also home to the spectacular Dhuandhar Falls.',
    images: [
      '/images/bhedaghat/image1.jpg',
      '/images/bhedaghat/image2.jpg',
      '/images/bhedaghat/image3.jpg'
    ],
    bannerImage: '/images/bhedaghat/banner.jpg',
    category: ['waterfalls', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 6000, max: 18000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 1890,
    weather: { current: 26, condition: 'Pleasant', humidity: 52, windSpeed: 10 },
    coordinates: { lat: 23.1324, lng: 79.8021 },
    hotels: [
      { id: 'h76', name: 'Narmada Resort', rating: 4.4, price: 5000, image: '/images/bhedaghat/hotel1.jpg', amenities: ['River View', 'Restaurant', 'Garden'], distance: '1 km' },
      { id: 'h77', name: 'Hotel Marble Rocks', rating: 4.3, price: 4000, image: '/images/bhedaghat/hotel2.jpg', amenities: ['Narmada View', 'Rooftop', 'Parking'], distance: '0.5 km' },
      { id: 'h78', name: 'V Resorts Bhedaghat', rating: 4.2, price: 4500, image: '/images/bhedaghat/hotel3.jpg', amenities: ['Pool', 'Restaurant', 'Bonfire'], distance: '2 km' }
    ],
    food: [
      { id: 'f77', name: 'Narmada Fish Curry', description: 'Fresh river fish curry', image: '/images/bhedaghat/food1.jpg', isVegetarian: false, price: 250 },
      { id: 'f78', name: 'Bhutte ki Khees', description: 'Spiced grated corn', image: '/images/bhedaghat/food2.jpg', isVegetarian: true, price: 100 },
      { id: 'f79', name: 'Chana Jor Garam', description: 'Spicy roasted chickpeas', image: '/images/bhedaghat/food3.jpg', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a86', name: 'Marble Rocks', description: '60-foot high marble cliffs on Narmada River', image: '/images/bhedaghat/attraction1.jpg', distance: 'Center', type: 'natural wonder' },
      { id: 'a87', name: 'Dhuandhar Falls', description: 'Powerful waterfall with smoke-like mist', image: '/images/bhedaghat/attraction2.jpg', distance: '1 km', type: 'waterfall' },
      { id: 'a88', name: 'Boat Ride at Marble Rocks', description: 'Scenic boat ride through marble gorge', image: '/images/bhedaghat/attraction3.jpg', distance: 'Center', type: 'activity' },
      { id: 'a89', name: 'Chausath Yogini Temple', description: 'Ancient temple on hilltop', image: '/images/bhedaghat/attraction4.jpg', distance: '2 km', type: 'temple' },
      { id: 'a90', name: 'Moonlight Boat Ride', description: 'Magical full moon boat experience', image: '/images/bhedaghat/attraction5.jpg', distance: 'Center', type: 'activity' }
    ],
    tips: ['Take boat ride at sunrise or sunset', 'Visit on full moon night for marble reflections', 'Book moonlight boat ride in advance', 'Try ropeway for aerial views', 'Visit during winter for best experience'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '31',
    slug: 'sanchi',
    name: 'Sanchi',
    state: 'Madhya Pradesh',
    city: 'Sanchi',
    tagline: 'Land of Buddhist Stupas',
    description: 'UNESCO World Heritage site famous for ancient Buddhist stupas, pillars, and monasteries.',
    overview: 'Sanchi is famous for its Great Stupa, one of the oldest stone structures in India, commissioned by Emperor Ashoka in the 3rd century BCE. This UNESCO World Heritage site is the best-preserved Buddhist complex in India.',
    images: [
      '/images/sanchi/image1.jpg',
      '/images/sanchi/image2.jpg',
      '/images/sanchi/image3.jpg'
    ],
    bannerImage: '/images/sanchi/banner.jpg',
    category: ['heritage', 'spiritual'],
    bestTimeToVisit: 'October to March',
    budget: { min: 6000, max: 18000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 2670,
    weather: { current: 27, condition: 'Pleasant', humidity: 40, windSpeed: 9 },
    coordinates: { lat: 23.4792, lng: 77.7396 },
    hotels: [
      { id: 'h79', name: 'Gateway Retreat', rating: 4.3, price: 5000, image: '/images/sanchi/hotel1.jpg', amenities: ['Garden', 'Restaurant', 'Parking'], distance: '1 km' },
      { id: 'h80', name: 'Hotel Budh Nagar', rating: 4.2, price: 3500, image: '/images/sanchi/hotel2.jpg', amenities: ['Simple Rooms', 'Restaurant', 'Free WiFi'], distance: '0.5 km' },
      { id: 'h81', name: 'MPT Gateway Retreat', rating: 4.1, price: 4000, image: '/images/sanchi/hotel3.jpg', amenities: ['Garden', 'Multi-cuisine', 'Tour Desk'], distance: '1 km' }
    ],
    food: [
      { id: 'f80', name: 'Poha Jalebi', description: 'Classic MP breakfast', image: '/images/sanchi/food1.jpg', isVegetarian: true, price: 80 },
      { id: 'f81', name: 'Bhutte ka Kees', description: 'Grated corn delicacy', image: '/images/sanchi/food2.jpg', isVegetarian: true, price: 120 },
      { id: 'f82', name: 'Dal Bafla', description: 'Madhya Pradesh version of dal baati', image: '/images/sanchi/food3.jpg', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a91', name: 'Great Stupa', description: 'Iconic Buddhist monument with intricate gateways (Toranas)', image: '/images/sanchi/attraction1.jpg', distance: 'Center', type: 'stupa' },
      { id: 'a92', name: 'Ashoka Pillar', description: 'Famous lion capital pillar', image: '/images/sanchi/attraction2.jpg', distance: 'Center', type: 'pillar' },
      { id: 'a93', name: 'Sanchi Museum', description: 'Archaeological museum with Sanchi artifacts', image: '/images/sanchi/attraction3.jpg', distance: '1 km', type: 'museum' },
      { id: 'a94', name: 'Monastery Ruins', description: 'Ancient Buddhist monastery remains', image: '/images/sanchi/attraction4.jpg', distance: '0.5 km', type: 'ruins' },
      { id: 'a95', name: 'Udayagiri Caves', description: 'Nearby ancient cave temples', image: '/images/sanchi/attraction5.jpg', distance: '12 km', type: 'caves' }
    ],
    tips: ['Hire a guide to understand Buddhist art', 'Visit early morning for peaceful experience', 'Combine with visit to Vidisha nearby', 'Visit museum for historical context', 'Carry hat and water as little shade'],
    reviews: [],
    isHiddenGem: false,
    isTrending: false,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: '32',
    slug: 'diu',
    name: 'Diu',
    state: 'Daman & Diu',
    city: 'Diu',
    tagline: 'Portugal in India',
    description: 'A beautiful island with Portuguese-era architecture, pristine beaches, and relaxed vibes.',
    overview: 'Diu is a charming island off the coast of Gujarat, known for its unique blend of Portuguese and Indian culture. With its stunning beaches, historic forts, churches, and laid-back atmosphere, it\'s a perfect hidden gem for beach lovers.',
    images: [
      '/images/diu/image1.jpg',
      '/images/diu/image2.jpg',
      '/images/diu/image3.jpg'
    ],
    bannerImage: '/images/diu/banner.jpg',
    category: ['beaches', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 3420,
    weather: { current: 28, condition: 'Pleasant', humidity: 65, windSpeed: 15 },
    coordinates: { lat: 20.7141, lng: 70.9873 },
    hotels: [
      { id: 'h82', name: 'Radhika Beach Resort', rating: 4.5, price: 8000, image: '/images/diu/hotel1.jpg', amenities: ['Beach View', 'Pool', 'Spa', 'Restaurant'], distance: 'Nagoa Beach' },
      { id: 'h83', name: 'Hotel Kohinoor', rating: 4.3, price: 5000, image: '/images/diu/hotel2.jpg', amenities: ['Sea View', 'Rooftop', 'Free WiFi'], distance: '1 km' },
      { id: 'h84', name: 'Azaya Beach Resort', rating: 4.7, price: 12000, image: '/images/diu/hotel3.jpg', amenities: ['Luxury', 'Private Beach', 'Infinity Pool', 'Spa'], distance: 'Gomatimata Beach' }
    ],
    food: [
      { id: 'f83', name: 'Portuguese Fish Curry', description: 'Spicy tangy fish curry with Portuguese influence', image: '/images/diu/food1.jpg', isVegetarian: false, price: 350 },
      { id: 'f84', name: 'Diu Pani Puri', description: 'Famous local pani puri with special water', image: '/images/diu/food2.jpg', isVegetarian: true, price: 40 },
      { id: 'f85', name: 'Prawn Balchao', description: 'Spicy pickled prawn curry', image: '/images/diu/food3.jpg', isVegetarian: false, price: 400 },
      { id: 'f86', name: 'Bebinca', description: 'Portuguese layered dessert', image: '/images/diu/food4.jpg', isVegetarian: true, price: 120 }
    ],
    attractions: [
      { id: 'a96', name: 'Diu Fort', description: 'Massive Portuguese fort with cannons and lighthouse', image: '/images/diu/attraction1.jpg', distance: '1 km', type: 'fort' },
      { id: 'a97', name: 'Nagoa Beach', description: 'Horseshoe-shaped beach with water sports', image: '/images/diu/attraction2.jpg', distance: '7 km', type: 'beach' },
      { id: 'a98', name: 'St. Paul\'s Church', description: 'Baroque-style Portuguese church', image: '/images/diu/attraction3.jpg', distance: '1 km', type: 'church' },
      { id: 'a99', name: 'Ghogla Beach', description: 'Less crowded beach with water sports', image: '/images/diu/attraction4.jpg', distance: '8 km', type: 'beach' },
      { id: 'a100', name: 'Naida Caves', description: 'Natural cave formations with unique architecture', image: '/images/diu/attraction5.jpg', distance: '2 km', type: 'caves' },
      { id: 'a101', name: 'Insider Tip - Sunset Point', description: 'Beautiful sunset view from fort walls', image: '/images/diu/attraction6.jpg', distance: 'Fort Area', type: 'viewpoint' }
    ],
    tips: ['Rent a scooty to explore the island', 'Try seafood at local restaurants', 'Visit Nagoa Beach for water sports', 'Don\'t miss sunset at Diu Fort', 'Alcohol is cheap and easily available'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '33',
    slug: 'daman',
    name: 'Daman',
    state: 'Daman & Diu',
    city: 'Daman',
    tagline: 'Quaint Portuguese Colony',
    description: 'A coastal gem with Portuguese architecture, serene beaches, and peaceful atmosphere.',
    overview: 'Daman is a small coastal town with a rich Portuguese colonial history. Divided by the Daman Ganga River into Nani-Daman (Little Daman) and Moti-Daman (Big Daman), it offers beautiful churches, forts, and peaceful beaches.',
    images: [
      '/images/daman/image1.jpg',
      '/images/daman/image2.jpg',
      '/images/daman/image3.jpg'
    ],
    bannerImage: '/images/daman/banner.jpg',
    category: ['beaches', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 7000, max: 22000, currency: 'INR' },
    rating: 4.4,
    reviewCount: 2340,
    weather: { current: 29, condition: 'Humid', humidity: 70, windSpeed: 12 },
    coordinates: { lat: 20.4283, lng: 72.8397 },
    hotels: [
      { id: 'h85', name: 'The Gold Beach Resort', rating: 4.5, price: 7000, image: '/images/daman/hotel1.jpg', amenities: ['Beach View', 'Pool', 'Spa', 'Casino'], distance: 'Devka Beach' },
      { id: 'h86', name: 'Cidade de Daman', rating: 4.4, price: 6000, image: '/images/daman/hotel2.jpg', amenities: ['River View', 'Pool', 'Restaurant'], distance: 'Moti Daman' },
      { id: 'h87', name: 'Hotel Miramar', rating: 4.2, price: 4000, image: '/images/daman/hotel3.jpg', amenities: ['Sea View', 'Budget', 'Restaurant'], distance: 'Devka Beach' }
    ],
    food: [
      { id: 'f87', name: 'Portuguese Seafood Platter', description: 'Assorted fresh seafood', image: '/images/daman/food1.jpg', isVegetarian: false, price: 600 },
      { id: 'f88', name: 'Daman Special Crab Curry', description: 'Spicy crab curry', image: '/images/daman/food2.jpg', isVegetarian: false, price: 450 },
      { id: 'f89', name: 'Pao with Bhaji', description: 'Portuguese bread with curry', image: '/images/daman/food3.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a102', name: 'Moti Daman Fort', description: 'Massive Portuguese fort with walls along river', image: '/images/daman/attraction1.jpg', distance: 'Center', type: 'fort' },
      { id: 'a103', name: 'Devka Beach', description: 'Popular beach with amusement park', image: '/images/daman/attraction2.jpg', distance: '3 km', type: 'beach' },
      { id: 'a104', name: 'Jampore Beach', description: 'Peaceful beach with black sand', image: '/images/daman/attraction3.jpg', distance: '5 km', type: 'beach' },
      { id: 'a105', name: 'Our Lady of Rosary Church', description: 'Beautiful Portuguese church from 17th century', image: '/images/daman/attraction4.jpg', distance: 'Moti Daman', type: 'church' },
      { id: 'a106', name: 'Dominican Monastery', description: 'Ruins of ancient monastery', image: '/images/daman/attraction5.jpg', distance: 'Moti Daman', type: 'monument' },
      { id: 'a107', name: 'Daman Ganga River', description: 'Scenic river with boat rides', image: '/images/daman/attraction6.jpg', distance: 'Center', type: 'river' }
    ],
    tips: ['Try seafood at beach shacks', 'Visit both Moti and Nani Daman', 'Take morning walk on Jampore Beach', 'Photography is great at sunset', 'Alcohol is tax-free here'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '34',
    slug: 'rann-of-kutch',
    name: 'Rann of Kutch',
    state: 'Gujarat',
    city: 'Bhuj',
    tagline: 'White Desert Wonder',
    description: 'A vast expanse of white salt desert that transforms into a magical landscape under full moon.',
    overview: 'The Rann of Kutch is a seasonal salt marsh in the Thar Desert, famous for the Rann Utsav festival. This white desert stretches for thousands of square kilometers and becomes a spectacular sight during the full moon, reflecting moonlight like a mirror.',
    images: [
      '/images/kutch/image1.jpg',
      '/images/kutch/image2.jpg',
      '/images/kutch/image3.jpg'
    ],
    bannerImage: '/images/kutch/banner.jpg',
    category: ['desert', 'culture'],
    bestTimeToVisit: 'October to February (during Rann Utsav)',
    budget: { min: 12000, max: 40000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 6780,
    weather: { current: 22, condition: 'Dry', humidity: 30, windSpeed: 18 },
    coordinates: { lat: 23.8063, lng: 69.7385 },
    hotels: [
      { id: 'h88', name: 'Rann Utsav Tent City', rating: 4.8, price: 25000, image: '/images/kutch/hotel1.jpg', amenities: ['Luxury Tents', 'Cultural Shows', 'All Meals', 'Sightseeing'], distance: 'Rann' },
      { id: 'h89', name: 'The Gateway Hotel Bhuj', rating: 4.5, price: 8000, image: '/images/kutch/hotel2.jpg', amenities: ['Pool', 'Spa', 'Multi-cuisine Restaurant'], distance: 'Bhuj' },
      { id: 'h90', name: 'Hotel Prince', rating: 4.2, price: 4000, image: '/images/kutch/hotel3.jpg', amenities: ['Budget', 'Restaurant', 'Travel Desk'], distance: 'Bhuj' }
    ],
    food: [
      { id: 'f90', name: 'Kutchi Dabeli', description: 'Famous spicy potato snack', image: '/images/kutch/food1.jpg', isVegetarian: true, price: 60 },
      { id: 'f91', name: 'Pakvan', description: 'Traditional Kutchi festive meal', image: '/images/kutch/food2.jpg', isVegetarian: true, price: 300 },
      { id: 'f92', name: 'Nankhatai', description: 'Famous Kutch bakery cookies', image: '/images/kutch/food3.jpg', isVegetarian: true, price: 150 },
      { id: 'f93', name: 'Kutchhi Kadhi', description: 'Tangy yogurt-based curry', image: '/images/kutch/food4.jpg', isVegetarian: true, price: 150 }
    ],
    attractions: [
      { id: 'a108', name: 'White Rann', description: 'Infinite expanse of white salt desert', image: '/images/kutch/attraction1.jpg', distance: 'Center', type: 'desert' },
      { id: 'a109', name: 'Rann Utsav', description: 'Cultural festival with music, dance, and crafts', image: '/images/kutch/attraction2.jpg', distance: 'Rann', type: 'festival' },
      { id: 'a110', name: 'Kalo Dungar', description: 'Highest point in Kutch with panoramic view', image: '/images/kutch/attraction3.jpg', distance: '70 km', type: 'viewpoint' },
      { id: 'a111', name: 'Indian Bridge', description: 'Sunset viewpoint at white desert', image: '/images/kutch/attraction4.jpg', distance: '30 km', type: 'landmark' },
      { id: 'a112', name: 'Handicraft Villages', description: 'Famous for Rogan art, Ajrakh, and embroidery', image: '/images/kutch/attraction5.jpg', distance: 'Various', type: 'art & craft' },
      { id: 'a113', name: 'Dholavira', description: 'Ancient Indus Valley Civilization site', image: '/images/kutch/attraction6.jpg', distance: '110 km', type: 'archaeological' }
    ],
    tips: ['Visit during full moon for magical experience', 'Book Rann Utsav packages in advance', 'Carry sunglasses and sunscreen', 'Try local handicraft shopping', 'Best time - between October and February'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '35',
    slug: 'gir-forest',
    name: 'Gir Forest',
    state: 'Gujarat',
    city: 'Sasan Gir',
    tagline: 'Home of Asiatic Lions',
    description: 'The only place in the world to see Asiatic lions in their natural habitat.',
    overview: 'Gir National Park is the only home of the majestic Asiatic lions in the wild. This protected forest area also hosts leopards, deer, crocodiles, and numerous bird species. Jeep safaris offer a chance to spot lions in their natural environment.',
    images: [
      '/images/gir/image1.jpg',
      '/images/gir/image2.jpg',
      '/images/gir/image3.jpg'
    ],
    bannerImage: '/images/gir/banner.jpg',
    category: ['wildlife', 'hidden-gem'],
    bestTimeToVisit: 'December to April',
    budget: { min: 10000, max: 35000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 5120,
    weather: { current: 28, condition: 'Pleasant', humidity: 45, windSpeed: 10 },
    coordinates: { lat: 21.1667, lng: 70.8667 },
    hotels: [
      { id: 'h91', name: 'The Fern Gir Forest Resort', rating: 4.7, price: 12000, image: '/images/gir/hotel1.jpg', amenities: ['Luxury', 'Pool', 'Spa', 'Safari Booking'], distance: '2 km' },
      { id: 'h92', name: 'Gir Birding Lodge', rating: 4.5, price: 7000, image: '/images/gir/hotel2.jpg', amenities: ['Bird Watching', 'Organic Garden', 'Bonfire'], distance: '3 km' },
      { id: 'h93', name: 'Hotel Anil Farmhouse', rating: 4.3, price: 4000, image: '/images/gir/hotel3.jpg', amenities: ['Budget', 'Farm Stay', 'Home Food'], distance: '1 km' }
    ],
    food: [
      { id: 'f94', name: 'Gujarati Thali', description: 'Complete vegetarian meal', image: '/images/gir/food1.jpg', isVegetarian: true, price: 250 },
      { id: 'f95', name: 'Khaman Dhokla', description: 'Famous Gujarati snack', image: '/images/gir/food2.jpg', isVegetarian: true, price: 100 },
      { id: 'f96', name: 'Mango Pickle', description: 'Local specialty', image: '/images/gir/food3.jpg', isVegetarian: true, price: 150 }
    ],
    attractions: [
      { id: 'a114', name: 'Gir National Park Safari', description: 'Jeep safari to spot Asiatic lions', image: '/images/gir/attraction1.jpg', distance: 'Park Entrance', type: 'safari' },
      { id: 'a115', name: 'Devalia Safari Park', description: 'Interpretation zone with guaranteed lion sighting', image: '/images/gir/attraction2.jpg', distance: '15 km', type: 'wildlife' },
      { id: 'a116', name: 'Kankai Mata Temple', description: 'Hilltop temple inside forest', image: '/images/gir/attraction3.jpg', distance: '10 km', type: 'temple' },
      { id: 'a117', name: 'Kamleshwar Dam', description: 'Water reservoir with crocodiles and birds', image: '/images/gir/attraction4.jpg', distance: '18 km', type: 'lake' },
      { id: 'a118', name: 'Interpretation Zone', description: 'Museum with forest information', image: '/images/gir/attraction5.jpg', distance: 'Devalia', type: 'museum' },
      { id: 'a119', name: 'Hiran River', description: 'Seasonal river with scenic spots', image: '/images/gir/attraction6.jpg', distance: 'Various', type: 'river' }
    ],
    tips: ['Book safari online in advance', 'Go for early morning safari (better sightings)', 'Wear neutral colors for better wildlife spotting', 'Carry binoculars and camera', 'Stay quiet during safari'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '36',
    slug: 'saputara',
    name: 'Saputara',
    state: 'Gujarat',
    city: 'Saputara',
    tagline: 'Jewel of Sahyadri',
    description: 'The only hill station in Gujarat, nestled in the Sahyadri hills with scenic lakes and viewpoints.',
    overview: 'Saputara is Gujarat\'s only hill station, located in the Dang district at the edge of the Western Ghats. It offers pleasant climate, beautiful lake, tribal culture, and stunning viewpoints. The name means "Abode of Serpents" in Sanskrit.',
    images: [
      '/images/saputara/image1.jpg',
      '/images/saputara/image2.jpg',
      '/images/saputara/image3.jpg'
    ],
    bannerImage: '/images/saputara/banner.jpg',
    category: ['hills', 'hidden-gem'],
    bestTimeToVisit: 'October to June',
    budget: { min: 8000, max: 22000, currency: 'INR' },
    rating: 4.5,
    reviewCount: 2890,
    weather: { current: 22, condition: 'Pleasant', humidity: 58, windSpeed: 12 },
    coordinates: { lat: 20.5737, lng: 73.7477 },
    hotels: [
      { id: 'h94', name: 'Hotel Lake View', rating: 4.4, price: 6000, image: '/images/saputara/hotel1.jpg', amenities: ['Lake View', 'Restaurant', 'Garden'], distance: 'Lake Side' },
      { id: 'h95', name: 'The Fern Saputara', rating: 4.6, price: 9000, image: '/images/saputara/hotel2.jpg', amenities: ['Valley View', 'Pool', 'Spa', 'Adventure Activities'], distance: '2 km' },
      { id: 'h96', name: 'MTDC Saputara', rating: 4.2, price: 4000, image: '/images/saputara/hotel3.jpg', amenities: ['Budget', 'Valley View', 'Restaurant'], distance: '1 km' }
    ],
    food: [
      { id: 'f97', name: 'Gujarati Thali', description: 'Traditional Gujarati meal', image: '/images/saputara/food1.jpg', isVegetarian: true, price: 220 },
      { id: 'f98', name: 'Chana Samosa', description: 'Popular local snack', image: '/images/saputara/food2.jpg', isVegetarian: true, price: 60 },
      { id: 'f99', name: 'Corn on Cob', description: 'Fresh roasted corn', image: '/images/saputara/food3.jpg', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a120', name: 'Saputara Lake', description: 'Scenic lake with boating facilities', image: '/images/saputara/attraction1.jpg', distance: 'Center', type: 'lake' },
      { id: 'a121', name: 'Sunset Point', description: 'Popular viewpoint with panoramic valley views', image: '/images/saputara/attraction2.jpg', distance: '2 km', type: 'viewpoint' },
      { id: 'a122', name: 'Artist Village', description: 'Showcase of local tribal art and crafts', image: '/images/saputara/attraction3.jpg', distance: '1 km', type: 'art gallery' },
      { id: 'a123', name: 'Table Land', description: 'Second highest plateau in Saputara', image: '/images/saputara/attraction4.jpg', distance: '3 km', type: 'plateau' },
      { id: 'a124', name: 'Rose Garden', description: 'Beautiful garden with flower varieties', image: '/images/saputara/attraction5.jpg', distance: '1 km', type: 'garden' },
      { id: 'a125', name: 'Step Garden', description: 'Terrace garden with fountain', image: '/images/saputara/attraction6.jpg', distance: '1 km', type: 'garden' },
      { id: 'a126', name: 'Ropeway', description: 'Cable car with stunning valley views', image: '/images/saputara/attraction7.jpg', distance: '2 km', type: 'cable car' }
    ],
    tips: ['Take the ropeway for sunset views', 'Try boating at Saputara Lake', 'Visit during monsoon for greenery', 'Explore nearby tribal villages', 'Carry light woolens even in summer'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '37',
    slug: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    city: 'Munnar',
    tagline: 'God\'s Own Tea Garden',
    description: 'A breathtaking hill station known for endless tea plantations, misty mountains, and lush greenery.',
    overview: 'Munnar is a beautiful hill station in the Western Ghats, famous for its sprawling tea estates, rolling hills, and pristine valleys. It\'s one of South India\'s most popular honeymoon destinations.',
    images: [
      '/images/munnar/image1.jpg',
      '/images/munnar/image2.jpg',
      '/images/munnar/image3.jpg'
    ],
    bannerImage: '/images/munnar/banner.jpg',
    category: ['tea gardens', 'honeymoon'],
    bestTimeToVisit: 'September to May',
    budget: { min: 10000, max: 35000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 8920,
    weather: { current: 18, condition: 'Cool', humidity: 65, windSpeed: 10 },
    coordinates: { lat: 10.0889, lng: 77.0595 },
    hotels: [
      { id: 'h97', name: 'The Panoramic Getaway', rating: 4.7, price: 12000, image: '/images/munnar/hotel1.jpg', amenities: ['Mountain View', 'Spa', 'Pool', 'Tea Lounge'], distance: '2 km' },
      { id: 'h98', name: 'Tea Valley Resort', rating: 4.6, price: 8000, image: '/images/munnar/hotel2.jpg', amenities: ['Tea Garden View', 'Restaurant', 'Bonfire'], distance: '3 km' },
      { id: 'h99', name: 'Green Ridge Munnar', rating: 4.5, price: 6000, image: '/images/munnar/hotel3.jpg', amenities: ['Valley View', 'Cafe', 'Garden'], distance: '1 km' }
    ],
    food: [
      { id: 'f100', name: 'Kerala Sadya', description: 'Traditional vegetarian feast on banana leaf', image: '/images/munnar/food1.jpg', isVegetarian: true, price: 300 },
      { id: 'f101', name: 'Tea Spiced Chicken', description: 'Local chicken curry with tea flavor', image: '/images/munnar/food2.jpg', isVegetarian: false, price: 350 },
      { id: 'f102', name: 'Fresh Tea', description: 'World-famous Munnar tea', image: '/images/munnar/food3.jpg', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a127', name: 'Tea Museum', description: 'History and process of tea making', image: '/images/munnar/attraction1.jpg', distance: '2 km', type: 'museum' },
      { id: 'a128', name: 'Mattupetty Dam', description: 'Scenic dam with boating facilities', image: '/images/munnar/attraction2.jpg', distance: '13 km', type: 'dam' },
      { id: 'a129', name: 'Eravikulam National Park', description: 'Home to endangered Nilgiri Tahr', image: '/images/munnar/attraction3.jpg', distance: '15 km', type: 'national park' },
      { id: 'a130', name: 'Tea Gardens', description: 'Endless rolling tea plantations', image: '/images/munnar/attraction4.jpg', distance: 'Various', type: 'plantation' },
      { id: 'a131', name: 'Echo Point', description: 'Natural echo phenomenon spot', image: '/images/munnar/attraction5.jpg', distance: '15 km', type: 'viewpoint' }
    ],
    tips: ['Wake up early for sunrise over tea gardens', 'Buy fresh tea from the factory', 'Try Kerala style food', 'Carry warm clothes', 'Book resort with valley view'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '38',
    slug: 'alleppey',
    name: 'Alleppey',
    state: 'Kerala',
    city: 'Alleppey',
    tagline: 'Venice of the East',
    description: 'Famous for serene backwaters, houseboat cruises, and palm-fringed canals.',
    overview: 'Alleppey (Alappuzha) is renowned for its picturesque backwaters, houseboat stays, and lush green landscapes. A houseboat cruise through the canals offers a unique experience of Kerala village life.',
    images: [
      '/images/alleppey/image1.jpg',
      '/images/alleppey/image2.jpg',
      '/images/alleppey/image3.jpg'
    ],
    bannerImage: '/images/alleppey/banner.jpg',
    category: ['backwaters', 'hidden-gem'],
    bestTimeToVisit: 'October to February',
    budget: { min: 12000, max: 40000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 7450,
    weather: { current: 28, condition: 'Humid', humidity: 75, windSpeed: 12 },
    coordinates: { lat: 9.4981, lng: 76.3388 },
    hotels: [
      { id: 'h100', name: 'Lake Palace Resort', rating: 4.7, price: 10000, image: '/images/alleppey/hotel1.jpg', amenities: ['Lake View', 'Pool', 'Spa', 'Ayurveda'], distance: 'Lake Side' },
      { id: 'h101', name: 'Houseboat Stay', rating: 4.6, price: 8000, image: '/images/alleppey/hotel2.jpg', amenities: ['AC Bedroom', 'Private Kitchen', 'Sun Deck'], distance: 'On Water' },
      { id: 'h102', name: 'Punnamada Resort', rating: 4.5, price: 7000, image: '/images/alleppey/hotel3.jpg', amenities: ['Backwater View', 'Pool', 'Restaurant'], distance: '2 km' }
    ],
    food: [
      { id: 'f103', name: 'Karimeen Pollichathu', description: 'Pearl spot fish wrapped in banana leaf', image: '/images/alleppey/food1.jpg', isVegetarian: false, price: 400 },
      { id: 'f104', name: 'Kerala Prawn Curry', description: 'Coconut-based spicy prawn curry', image: '/images/alleppey/food2.jpg', isVegetarian: false, price: 350 },
      { id: 'f105', name: 'Appam with Stew', description: 'Rice pancakes with vegetable/meat stew', image: '/images/alleppey/food3.jpg', isVegetarian: true, price: 180 }
    ],
    attractions: [
      { id: 'a132', name: 'Backwaters Houseboat Cruise', description: 'Overnight stay on traditional houseboat', image: '/images/alleppey/attraction1.jpg', distance: 'Center', type: 'activity' },
      { id: 'a133', name: 'Alappuzha Beach', description: 'Scenic beach with old pier', image: '/images/alleppey/attraction2.jpg', distance: '3 km', type: 'beach' },
      { id: 'a134', name: 'Kuttanad Region', description: 'Rice bowl of Kerala', image: '/images/alleppey/attraction3.jpg', distance: '15 km', type: 'village' },
      { id: 'a135', name: 'Marari Beach', description: 'Less crowded pristine beach', image: '/images/alleppey/attraction4.jpg', distance: '12 km', type: 'beach' },
      { id: 'a136', name: 'Nehru Trophy Boat Race', description: 'Annual snake boat race (August)', image: '/images/alleppey/attraction5.jpg', distance: 'Center', type: 'festival' }
    ],
    tips: ['Book houseboat in advance during peak season', 'Try fresh seafood on houseboat', 'Take shikara ride for narrow canals', 'Visit during boat race season', 'Carry mosquito repellent'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '39',
    slug: 'wayanad',
    name: 'Wayanad',
    state: 'Kerala',
    city: 'Wayanad',
    tagline: 'Enchanting Green Paradise',
    description: 'A pristine hill district with lush forests, wildlife, waterfalls, and ancient caves.',
    overview: 'Wayanad is a beautiful hill district in Kerala known for its dense forests, wildlife sanctuaries, spice plantations, and prehistoric caves. It offers a perfect escape into nature with trekking opportunities.',
    images: [
      '/images/wayanad/image1.jpg',
      '/images/wayanad/image2.jpg',
      '/images/wayanad/image3.jpg'
    ],
    bannerImage: '/images/wayanad/banner.jpg',
    category: ['nature', 'hidden-gem'],
    bestTimeToVisit: 'October to May',
    budget: { min: 9000, max: 28000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 5670,
    weather: { current: 22, condition: 'Pleasant', humidity: 70, windSpeed: 10 },
    coordinates: { lat: 11.6854, lng: 76.1320 },
    hotels: [
      { id: 'h103', name: 'Vythiri Resort', rating: 4.8, price: 12000, image: '/images/wayanad/hotel1.jpg', amenities: ['Rainforest', 'Pool', 'Spa', 'Treehouse'], distance: '3 km' },
      { id: 'h104', name: 'Jungle Bay Resort', rating: 4.6, price: 8000, image: '/images/wayanad/hotel2.jpg', amenities: ['River View', 'Trekking', 'Bonfire'], distance: '5 km' },
      { id: 'h105', name: 'Wayanad Meadows', rating: 4.4, price: 5000, image: '/images/wayanad/hotel3.jpg', amenities: ['Garden', 'Restaurant', 'Parking'], distance: '2 km' }
    ],
    food: [
      { id: 'f106', name: 'Malabar Biryani', description: 'Aromatic rice dish with spices', image: '/images/wayanad/food1.jpg', isVegetarian: false, price: 300 },
      { id: 'f107', name: 'Bamboo Chicken', description: 'Chicken cooked inside bamboo', image: '/images/wayanad/food2.jpg', isVegetarian: false, price: 450 },
      { id: 'f108', name: 'Pathiri', description: 'Rice flour flatbread', image: '/images/wayanad/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a137', name: 'Edakkal Caves', description: 'Prehistoric caves with ancient petroglyphs', image: '/images/wayanad/attraction1.jpg', distance: '25 km', type: 'caves' },
      { id: 'a138', name: 'Chembra Peak', description: 'Highest peak in Wayanad with heart-shaped lake', image: '/images/wayanad/attraction2.jpg', distance: '10 km', type: 'trekking' },
      { id: 'a139', name: 'Soochipara Waterfalls', description: 'Three-tiered waterfall in forest', image: '/images/wayanad/attraction3.jpg', distance: '20 km', type: 'waterfall' },
      { id: 'a140', name: 'Wayanad Wildlife Sanctuary', description: 'Elephants, tigers, and deer', image: '/images/wayanad/attraction4.jpg', distance: '15 km', type: 'wildlife' },
      { id: 'a141', name: 'Pookode Lake', description: 'Scenic freshwater lake', image: '/images/wayanad/attraction5.jpg', distance: '12 km', type: 'lake' }
    ],
    tips: ['Start Edakkal Caves trek early', 'Carry raincoat during monsoon', 'Stay in a treehouse', 'Try local Malabar cuisine', 'Book jungle safari in advance'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '40',
    slug: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    city: 'Kochi',
    tagline: 'Queen of Arabian Sea',
    description: 'A vibrant port city blending colonial heritage, modern culture, and backwaters.',
    overview: 'Kochi (Cochin) is a major port city with a rich history of Portuguese, Dutch, and British influence. Known for its Chinese fishing nets, Jewish synagogue, Dutch palace, and vibrant art scene.',
    images: [
      '/images/kochi/image1.jpg',
      '/images/kochi/image2.jpg',
      '/images/kochi/image3.jpg'
    ],
    bannerImage: '/images/kochi/banner.jpg',
    category: ['culture', 'heritage'],
    bestTimeToVisit: 'October to March',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 8230,
    weather: { current: 29, condition: 'Humid', humidity: 72, windSpeed: 12 },
    coordinates: { lat: 9.9312, lng: 76.2673 },
    hotels: [
      { id: 'h106', name: 'Brunton Boatyard', rating: 4.8, price: 15000, image: '/images/kochi/hotel1.jpg', amenities: ['Heritage', 'Harbour View', 'Spa', 'Fine Dining'], distance: 'Fort Kochi' },
      { id: 'h107', name: 'The Old Courtyard', rating: 4.6, price: 7000, image: '/images/kochi/hotel2.jpg', amenities: ['Heritage', 'Rooftop', 'Restaurant'], distance: 'Fort Kochi' },
      { id: 'h108', name: 'Grand Hyatt Kochi', rating: 4.7, price: 12000, image: '/images/kochi/hotel3.jpg', amenities: ['Luxury', 'Pool', 'Spa', 'Multiple Restaurants'], distance: 'Bolgatty' }
    ],
    food: [
      { id: 'f109', name: 'Kerala Fish Curry', description: 'Spicy tamarind-based fish curry', image: '/images/kochi/food1.jpg', isVegetarian: false, price: 350 },
      { id: 'f110', name: 'Appam with Stew', description: 'Lacy rice pancakes with stew', image: '/images/kochi/food2.jpg', isVegetarian: true, price: 200 },
      { id: 'f111', name: 'Puttu and Kadala', description: 'Steamed rice cake with black chickpeas', image: '/images/kochi/food3.jpg', isVegetarian: true, price: 120 }
    ],
    attractions: [
      { id: 'a142', name: 'Chinese Fishing Nets', description: 'Iconic fishing nets from Chinese traders', image: '/images/kochi/attraction1.jpg', distance: 'Fort Kochi', type: 'landmark' },
      { id: 'a143', name: 'Fort Kochi Beach', description: 'Historic beach area', image: '/images/kochi/attraction2.jpg', distance: 'Fort Kochi', type: 'beach' },
      { id: 'a144', name: 'Mattancherry Palace', description: 'Dutch Palace with murals', image: '/images/kochi/attraction3.jpg', distance: '2 km', type: 'palace' },
      { id: 'a145', name: 'Paradesi Synagogue', description: 'Oldest active synagogue in Commonwealth', image: '/images/kochi/attraction4.jpg', distance: '2 km', type: 'synagogue' },
      { id: 'a146', name: 'Jew Town', description: 'Historic street with antique shops', image: '/images/kochi/attraction5.jpg', distance: 'Mattancherry', type: 'market' },
      { id: 'a147', name: 'Kerala Kathakali Centre', description: 'Traditional dance performances', image: '/images/kochi/attraction6.jpg', distance: 'Fort Kochi', type: 'cultural' }
    ],
    tips: ['Take a ferry ride to see fishing nets', 'Watch Kathakali performance', 'Try food at local toddy shops', 'Shop at Jew Town for antiques', 'Explore Fort Kochi on foot'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '41',
    slug: 'ooty',
    name: 'Ooty',
    state: 'Tamil Nadu',
    city: 'Ooty',
    tagline: 'Queen of Hill Stations',
    description: 'A charming hill station with lush tea gardens, colonial charm, and scenic Nilgiri views.',
    overview: 'Ooty (Udhagamandalam) is the most popular hill station in South India, known for its beautiful tea gardens, eucalyptus forests, the Nilgiri Mountain Railway, and pleasant climate year-round.',
    images: [
      '/images/ooty/image1.jpg',
      '/images/ooty/image2.jpg',
      '/images/ooty/image3.jpg'
    ],
    bannerImage: '/images/ooty/banner.jpg',
    category: ['hills', 'honeymoon'],
    bestTimeToVisit: 'April to June, September to November',
    budget: { min: 12000, max: 35000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 11230,
    weather: { current: 17, condition: 'Cool', humidity: 58, windSpeed: 12 },
    coordinates: { lat: 11.4102, lng: 76.6950 },
    hotels: [
      { id: 'h109', name: 'Savoy - IHCL SeleQtions', rating: 4.8, price: 15000, image: '/images/ooty/hotel1.jpg', amenities: ['Heritage', 'Spa', 'Garden', 'Fine Dining'], distance: '2 km' },
      { id: 'h110', name: 'Sterling Ooty', rating: 4.5, price: 8000, image: '/images/ooty/hotel2.jpg', amenities: ['Valley View', 'Pool', 'Game Room'], distance: '3 km' },
      { id: 'h111', name: 'Hotel Lakeview', rating: 4.4, price: 6000, image: '/images/ooty/hotel3.jpg', amenities: ['Lake View', 'Restaurant', 'Parking'], distance: 'Lake Side' }
    ],
    food: [
      { id: 'f112', name: 'Ooty Chocolate', description: 'Homemade chocolates', image: '/images/ooty/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f113', name: 'Tea & Coffee', description: 'Fresh Nilgiri tea and coffee', image: '/images/ooty/food2.jpg', isVegetarian: true, price: 60 },
      { id: 'f114', name: 'Bread Halwa', description: 'Local sweet speciality', image: '/images/ooty/food3.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a148', name: 'Nilgiri Mountain Railway', description: 'UNESCO toy train with scenic views', image: '/images/ooty/attraction1.jpg', distance: 'Center', type: 'railway' },
      { id: 'a149', name: 'Ooty Lake', description: 'Artificial lake with boating', image: '/images/ooty/attraction2.jpg', distance: '2 km', type: 'lake' },
      { id: 'a150', name: 'Botanical Garden', description: 'Terraced garden with rare plants', image: '/images/ooty/attraction3.jpg', distance: '2 km', type: 'garden' },
      { id: 'a151', name: 'Doddabetta Peak', description: 'Highest point in Nilgiris', image: '/images/ooty/attraction4.jpg', distance: '10 km', type: 'peak' },
      { id: 'a152', name: 'Tea Gardens', description: 'Beautiful tea estates', image: '/images/ooty/attraction5.jpg', distance: 'Various', type: 'plantation' },
      { id: 'a153', name: 'Rose Garden', description: 'Largest rose garden in India', image: '/images/ooty/attraction6.jpg', distance: '1 km', type: 'garden' }
    ],
    tips: ['Take the toy train from Mettupalayam', 'Buy homemade chocolates', 'Carry warm clothes', 'Visit tea factory', 'Book hotels in advance during peak season'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '42',
    slug: 'kodaikanal',
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    city: 'Kodaikanal',
    tagline: 'Princess of Hill Stations',
    description: 'A beautiful hill station with a star-shaped lake, waterfalls, and cool climate.',
    overview: 'Kodaikanal is a serene hill station in Tamil Nadu\'s Palani Hills, famous for its pristine lake, waterfalls, dense forests, and breathtaking viewpoints. It\'s a perfect honeymoon destination.',
    images: [
      '/images/kodaikanal/image1.jpg',
      '/images/kodaikanal/image2.jpg',
      '/images/kodaikanal/image3.jpg'
    ],
    bannerImage: '/images/kodaikanal/banner.jpg',
    category: ['hills', 'honeymoon'],
    bestTimeToVisit: 'April to June, September to November',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 7230,
    weather: { current: 16, condition: 'Cool', humidity: 62, windSpeed: 10 },
    coordinates: { lat: 10.2392, lng: 77.4892 },
    hotels: [
      { id: 'h112', name: 'The Carlton', rating: 4.8, price: 14000, image: '/images/kodaikanal/hotel1.jpg', amenities: ['Lake View', 'Spa', 'Pool', 'Golf Course'], distance: '1 km' },
      { id: 'h113', name: 'Sterling Kodai', rating: 4.5, price: 7000, image: '/images/kodaikanal/hotel2.jpg', amenities: ['Valley View', 'Restaurant', 'Bonfire'], distance: '3 km' },
      { id: 'h114', name: 'Kodai Resort', rating: 4.4, price: 5000, image: '/images/kodaikanal/hotel3.jpg', amenities: ['Garden', 'Cafe', 'Parking'], distance: '2 km' }
    ],
    food: [
      { id: 'f115', name: 'Kodaikanal Chocolate', description: 'Famous homemade chocolates', image: '/images/kodaikanal/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f116', name: 'Cheese', description: 'Fresh local cheese', image: '/images/kodaikanal/food2.jpg', isVegetarian: true, price: 200 },
      { id: 'f117', name: 'Eucalyptus Oil Products', description: 'Local specialty', image: '/images/kodaikanal/food3.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a154', name: 'Kodaikanal Lake', description: 'Star-shaped man-made lake', image: '/images/kodaikanal/attraction1.jpg', distance: 'Center', type: 'lake' },
      { id: 'a155', name: 'Coaker\'s Walk', description: 'Scenic paved walking path', image: '/images/kodaikanal/attraction2.jpg', distance: '1 km', type: 'viewpoint' },
      { id: 'a156', name: 'Silver Cascade Falls', description: 'Beautiful waterfall', image: '/images/kodaikanal/attraction3.jpg', distance: '8 km', type: 'waterfall' },
      { id: 'a157', name: 'Pillar Rocks', description: 'Three giant rock pillars', image: '/images/kodaikanal/attraction4.jpg', distance: '7 km', type: 'viewpoint' },
      { id: 'a158', name: 'Bryant Park', description: 'Beautiful botanical garden', image: '/images/kodaikanal/attraction5.jpg', distance: '1 km', type: 'garden' },
      { id: 'a159', name: 'Green Valley View', description: 'Scenic valley viewpoint', image: '/images/kodaikanal/attraction6.jpg', distance: '5 km', type: 'viewpoint' }
    ],
    tips: ['Buy homemade chocolates and cheese', 'Take a boat ride on the lake', 'Visit Coaker\'s Walk early morning', 'Carry warm clothes', 'Explore on bicycle'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '43',
    slug: 'mysore',
    name: 'Mysore',
    state: 'Karnataka',
    city: 'Mysore',
    tagline: 'City of Palaces',
    description: 'Famous for its grand palace, rich heritage, silk sarees, and delicious sweets.',
    overview: 'Mysore is a historic city known for the magnificent Mysore Palace, vibrant Dasara festival, Chamundi Hills, and its rich cultural heritage. It\'s a perfect blend of tradition and modernity.',
    images: [
      '/images/mysore/image1.jpg',
      '/images/mysore/image2.jpg',
      '/images/mysore/image3.jpg'
    ],
    bannerImage: '/images/mysore/banner.jpg',
    category: ['heritage', 'culture'],
    bestTimeToVisit: 'October to March',
    budget: { min: 9000, max: 28000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 8920,
    weather: { current: 26, condition: 'Pleasant', humidity: 55, windSpeed: 10 },
    coordinates: { lat: 12.2958, lng: 76.6394 },
    hotels: [
      { id: 'h115', name: 'Lalitha Mahal Palace', rating: 4.8, price: 18000, image: '/images/mysore/hotel1.jpg', amenities: ['Heritage Palace', 'Spa', 'Fine Dining'], distance: '5 km' },
      { id: 'h116', name: 'Radisson Blu', rating: 4.6, price: 8000, image: '/images/mysore/hotel2.jpg', amenities: ['Pool', 'Spa', 'Multiple Restaurants'], distance: '2 km' },
      { id: 'h117', name: 'Hotel Roopa', rating: 4.3, price: 4000, image: '/images/mysore/hotel3.jpg', amenities: ['Budget', 'Restaurant', 'Free WiFi'], distance: '1 km' }
    ],
    food: [
      { id: 'f118', name: 'Mysore Pak', description: 'Famous gram flour sweet', image: '/images/mysore/food1.jpg', isVegetarian: true, price: 120 },
      { id: 'f119', name: 'Mysore Masala Dosa', description: 'Spicy potato-filled dosa', image: '/images/mysore/food2.jpg', isVegetarian: true, price: 100 },
      { id: 'f120', name: 'Bisi Bele Bath', description: 'Spicy rice-lentil dish', image: '/images/mysore/food3.jpg', isVegetarian: true, price: 150 }
    ],
    attractions: [
      { id: 'a160', name: 'Mysore Palace', description: 'Magnificent Indo-Saracenic architecture', image: '/images/mysore/attraction1.jpg', distance: 'Center', type: 'palace' },
      { id: 'a161', name: 'Chamundi Hills', description: 'Hilltop temple with Nandi statue', image: '/images/mysore/attraction2.jpg', distance: '4 km', type: 'temple' },
      { id: 'a162', name: 'Brindavan Gardens', description: 'Famous musical fountain garden', image: '/images/mysore/attraction3.jpg', distance: '20 km', type: 'garden' },
      { id: 'a163', name: 'Mysore Dasara', description: 'Grand 10-day festival', image: '/images/mysore/attraction4.jpg', distance: 'Center', type: 'festival' },
      { id: 'a164', name: 'Jaganmohan Palace', description: 'Art gallery with paintings', image: '/images/mysore/attraction5.jpg', distance: '1 km', type: 'palace' },
      { id: 'a165', name: 'St. Philomena\'s Church', description: 'Beautiful neo-gothic church', image: '/images/mysore/attraction6.jpg', distance: '2 km', type: 'church' }
    ],
    tips: ['Visit palace at night for illumination', 'Buy authentic Mysore silk sarees', 'Try Mysore Pak from original shops', 'Attend palace sound and light show', 'Visit during Dasara festival'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '44',
    slug: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    city: 'Hampi',
    tagline: 'Lost Empire of Vijayanagara',
    description: 'A UNESCO World Heritage site with ancient temples, ruins, and boulder-strewn landscapes.',
    overview: 'Hampi is an ancient village with the ruins of the Vijayanagara Empire, spread across a stunning landscape of giant boulders. It\'s a UNESCO World Heritage site and a paradise for history lovers and backpackers.',
    images: [
      '/images/hampi/image1.jpg',
      '/images/hampi/image2.jpg',
      '/images/hampi/image3.jpg'
    ],
    bannerImage: '/images/hampi/banner.jpg',
    category: ['heritage', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 6780,
    weather: { current: 28, condition: 'Sunny', humidity: 45, windSpeed: 12 },
    coordinates: { lat: 15.3350, lng: 76.4600 },
    hotels: [
      { id: 'h118', name: 'Evolve Back Hampi', rating: 4.9, price: 25000, image: '/images/hampi/hotel1.jpg', amenities: ['Luxury', 'Pool', 'Spa', 'Heritage'], distance: '5 km' },
      { id: 'h119', name: 'Hampi Boulders', rating: 4.5, price: 6000, image: '/images/hampi/hotel2.jpg', amenities: ['Boulder View', 'Pool', 'Restaurant'], distance: '2 km' },
      { id: 'h120', name: 'Kishkinda Heritage', rating: 4.4, price: 4000, image: '/images/hampi/hotel3.jpg', amenities: ['Heritage', 'Garden', 'Budget'], distance: '1 km' }
    ],
    food: [
      { id: 'f121', name: 'Hampi Special Thali', description: 'South Indian meal', image: '/images/hampi/food1.jpg', isVegetarian: true, price: 200 },
      { id: 'f122', name: 'Bhelpuri', description: 'Popular snack at Hampi Bazaar', image: '/images/hampi/food2.jpg', isVegetarian: true, price: 60 },
      { id: 'f123', name: 'Banana Pancakes', description: 'Famous hippie food', image: '/images/hampi/food3.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a166', name: 'Virupaksha Temple', description: 'Living temple at Hampi Bazaar', image: '/images/hampi/attraction1.jpg', distance: 'Center', type: 'temple' },
      { id: 'a167', name: 'Vittala Temple & Stone Chariot', description: 'Iconic stone chariot and musical pillars', image: '/images/hampi/attraction2.jpg', distance: '2 km', type: 'temple' },
      { id: 'a168', name: 'Elephant Stables', description: 'Royal elephant quarters', image: '/images/hampi/attraction3.jpg', distance: '1 km', type: 'monument' },
      { id: 'a169', name: 'Lotus Mahal', description: 'Beautiful blend of Hindu and Islamic architecture', image: '/images/hampi/attraction4.jpg', distance: '1 km', type: 'palace' },
      { id: 'a170', name: 'Hampi Bazaar', description: 'Ancient market street', image: '/images/hampi/attraction5.jpg', distance: 'Center', type: 'market' },
      { id: 'a171', name: 'Sunset Point', description: 'Stunning sunset over boulders', image: '/images/hampi/attraction6.jpg', distance: 'Various', type: 'viewpoint' }
    ],
    tips: ['Rent a bicycle or scooty to explore', 'Watch sunrise from Matanga Hill', 'Visit during weekdays to avoid crowds', 'Hire a guide for history', 'Carry water and sun protection'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '45',
    slug: 'gokarna',
    name: 'Gokarna',
    state: 'Karnataka',
    city: 'Gokarna',
    tagline: 'Hidden Beach Paradise',
    description: 'A laid-back temple town with pristine beaches, perfect for relaxation and beach trekking.',
    overview: 'Gokarna is a small temple town known for its beautiful, less-crowded beaches, relaxed vibe, and backpacker culture. It offers a perfect alternative to Goa with a more spiritual atmosphere.',
    images: [
      '/images/gokarna/image1.jpg',
      '/images/gokarna/image2.jpg',
      '/images/gokarna/image3.jpg'
    ],
    bannerImage: '/images/gokarna/banner.jpg',
    category: ['beaches', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 7000, max: 22000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 4890,
    weather: { current: 29, condition: 'Sunny', humidity: 68, windSpeed: 14 },
    coordinates: { lat: 14.5479, lng: 74.3172 },
    hotels: [
      { id: 'h121', name: 'SwaSwara', rating: 4.8, price: 15000, image: '/images/gokarna/hotel1.jpg', amenities: ['Luxury', 'Wellness', 'Yoga', 'Beach View'], distance: 'Om Beach' },
      { id: 'h122', name: 'Namaste Yoga Farm', rating: 4.5, price: 5000, image: '/images/gokarna/hotel2.jpg', amenities: ['Yoga', 'Organic Food', 'Sea View'], distance: 'Kudle Beach' },
      { id: 'h123', name: 'Zostel Gokarna', rating: 4.4, price: 800, image: '/images/gokarna/hotel3.jpg', amenities: ['Dormitory', 'Cafe', 'Bonfire'], distance: '1 km' }
    ],
    food: [
      { id: 'f124', name: 'Seafood Platter', description: 'Fresh catch of the day', image: '/images/gokarna/food1.jpg', isVegetarian: false, price: 500 },
      { id: 'f125', name: 'Pizza at Namaste Cafe', description: 'Famous beachside pizza', image: '/images/gokarna/food2.jpg', isVegetarian: true, price: 250 },
      { id: 'f126', name: 'Coconut Pancakes', description: 'Beach breakfast favorite', image: '/images/gokarna/food3.jpg', isVegetarian: true, price: 120 }
    ],
    attractions: [
      { id: 'a172', name: 'Om Beach', description: 'Om-shaped beach with water sports', image: '/images/gokarna/attraction1.jpg', distance: '6 km', type: 'beach' },
      { id: 'a173', name: 'Kudle Beach', description: 'Popular backpacker beach', image: '/images/gokarna/attraction2.jpg', distance: '5 km', type: 'beach' },
      { id: 'a174', name: 'Half Moon Beach', description: 'Secluded beach accessible by trek or boat', image: '/images/gokarna/attraction3.jpg', distance: '7 km', type: 'beach' },
      { id: 'a175', name: 'Paradise Beach', description: 'Most secluded pristine beach', image: '/images/gokarna/attraction4.jpg', distance: '8 km', type: 'beach' },
      { id: 'a176', name: 'Mahabaleshwar Temple', description: 'Famous Shiva temple with Atmalinga', image: '/images/gokarna/attraction5.jpg', distance: 'Center', type: 'temple' },
      { id: 'a177', name: 'Beach Trek', description: 'Coastal trek between beaches', image: '/images/gokarna/attraction6.jpg', distance: '5-8 km', type: 'trek' }
    ],
    tips: ['Do the beach trek from Om to Paradise', 'Watch sunset at Kudle Beach', 'Try beachside cafes', 'Carry cash as ATMs limited', 'Visit in winter for best weather'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '46',
    slug: 'coorg',
    name: 'Coorg',
    state: 'Karnataka',
    city: 'Madikeri',
    tagline: 'Scotland of India',
    description: 'A stunning hill station famous for coffee plantations, misty hills, and waterfalls.',
    overview: 'Coorg (Kodagu) is a beautiful hill station in Karnataka known for its coffee estates, spice plantations, lush forests, and pleasant climate. It\'s a perfect destination for nature lovers and adventure seekers.',
    images: [
      '/images/coorg/image1.jpg',
      '/images/coorg/image2.jpg',
      '/images/coorg/image3.jpg'
    ],
    bannerImage: '/images/coorg/banner.jpg',
    category: ['coffee', 'nature', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 10000, max: 35000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 7230,
    weather: { current: 22, condition: 'Pleasant', humidity: 70, windSpeed: 10 },
    coordinates: { lat: 12.4244, lng: 75.7382 },
    hotels: [
      { id: 'h124', name: 'Evolve Back Coorg', rating: 4.9, price: 30000, image: '/images/coorg/hotel1.jpg', amenities: ['Luxury', 'Coffee Estate', 'Pool', 'Spa'], distance: '5 km' },
      { id: 'h125', name: 'Coorg Cliffs Resort', rating: 4.6, price: 10000, image: '/images/coorg/hotel2.jpg', amenities: ['Valley View', 'Pool', 'Spa', 'Adventure'], distance: '2 km' },
      { id: 'h126', name: 'Heritage Resort', rating: 4.5, price: 7000, image: '/images/coorg/hotel3.jpg', amenities: ['Coffee Estate', 'Pool', 'Cultural Shows'], distance: '3 km' }
    ],
    food: [
      { id: 'f127', name: 'Pandi Curry', description: 'Coorgi style pork curry', image: '/images/coorg/food1.jpg', isVegetarian: false, price: 400 },
      { id: 'f128', name: 'Kadambuttu', description: 'Steamed rice balls', image: '/images/coorg/food2.jpg', isVegetarian: true, price: 150 },
      { id: 'f129', name: 'Coorgi Coffee', description: 'Famous Coorg coffee', image: '/images/coorg/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a178', name: 'Abbey Falls', description: 'Beautiful waterfall in coffee plantation', image: '/images/coorg/attraction1.jpg', distance: '8 km', type: 'waterfall' },
      { id: 'a179', name: 'Raja\'s Seat', description: 'Sunset viewpoint with garden', image: '/images/coorg/attraction2.jpg', distance: '1 km', type: 'viewpoint' },
      { id: 'a180', name: 'Coffee Plantations', description: 'Guided tours of coffee estates', image: '/images/coorg/attraction3.jpg', distance: 'Various', type: 'plantation' },
      { id: 'a181', name: 'Namdroling Monastery', description: 'Golden Temple in Bylakuppe', image: '/images/coorg/attraction4.jpg', distance: '30 km', type: 'monastery' },
      { id: 'a182', name: 'Talacauvery', description: 'Origin of River Cauvery', image: '/images/coorg/attraction5.jpg', distance: '45 km', type: 'pilgrimage' },
      { id: 'a183', name: 'Dubare Elephant Camp', description: 'Elephant interaction and river rafting', image: '/images/coorg/attraction6.jpg', distance: '25 km', type: 'wildlife' }
    ],
    tips: ['Take a coffee plantation tour', 'Try authentic Coorgi pork curry', 'Visit during monsoon for greenery', 'Stay in a homestay', 'Carry rain gear if visiting in monsoon'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '47',
    slug: 'pondicherry',
    name: 'Pondicherry',
    state: 'Puducherry',
    city: 'Pondicherry',
    tagline: 'French Riviera of the East',
    description: 'A charming coastal town with French colonial architecture, serene beaches, and spiritual vibes.',
    overview: 'Pondicherry (Puducherry) is a unique blend of French and Tamil culture, known for its colonial buildings, promenade beach, Auroville, and relaxed lifestyle. It\'s a perfect getaway for culture and beach lovers.',
    images: [
      '/images/pondicherry/image1.jpg',
      '/images/pondicherry/image2.jpg',
      '/images/pondicherry/image3.jpg'
    ],
    bannerImage: '/images/pondicherry/banner.jpg',
    category: ['beaches', 'french culture'],
    bestTimeToVisit: 'October to March',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 9230,
    weather: { current: 28, condition: 'Pleasant', humidity: 70, windSpeed: 14 },
    coordinates: { lat: 11.9416, lng: 79.8083 },
    hotels: [
      { id: 'h127', name: 'Palais de Mahe', rating: 4.8, price: 15000, image: '/images/pondicherry/hotel1.jpg', amenities: ['Heritage', 'French Architecture', 'Spa', 'Fine Dining'], distance: 'French Quarter' },
      { id: 'h128', name: 'The Promenade', rating: 4.6, price: 9000, image: '/images/pondicherry/hotel2.jpg', amenities: ['Sea View', 'Pool', 'Restaurant'], distance: 'Beach Road' },
      { id: 'h129', name: 'La Villa', rating: 4.7, price: 10000, image: '/images/pondicherry/hotel3.jpg', amenities: ['Heritage', 'Courtyard', 'French Cuisine'], distance: 'French Quarter' }
    ],
    food: [
      { id: 'f130', name: 'French Bakery Items', description: 'Croissants, baguettes, pastries', image: '/images/pondicherry/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f131', name: 'Seafood Platter', description: 'Fresh catch French-style', image: '/images/pondicherry/food2.jpg', isVegetarian: false, price: 600 },
      { id: 'f132', name: 'Crepe & Quiche', description: 'French specialties', image: '/images/pondicherry/food3.jpg', isVegetarian: true, price: 250 }
    ],
    attractions: [
      { id: 'a184', name: 'French Quarter (White Town)', description: 'Colonial buildings with bougainvillea', image: '/images/pondicherry/attraction1.jpg', distance: 'Center', type: 'heritage' },
      { id: 'a185', name: 'Promenade Beach', description: 'Scenic 1.5 km waterfront', image: '/images/pondicherry/attraction2.jpg', distance: 'Center', type: 'beach' },
      { id: 'a186', name: 'Auroville', description: 'Experimental universal township', image: '/images/pondicherry/attraction3.jpg', distance: '12 km', type: 'spiritual' },
      { id: 'a187', name: 'Matrimandir', description: 'Golden globe meditation center', image: '/images/pondicherry/attraction4.jpg', distance: '12 km', type: 'meditation' },
      { id: 'a188', name: 'Sri Aurobindo Ashram', description: 'Spiritual community', image: '/images/pondicherry/attraction5.jpg', distance: 'Center', type: 'ashram' },
      { id: 'a189', name: 'Paradise Beach', description: 'Beautiful beach with boat access', image: '/images/pondicherry/attraction6.jpg', distance: '8 km', type: 'beach' }
    ],
    tips: ['Rent a bicycle to explore French Quarter', 'Try French cuisine at heritage restaurants', 'Visit Auroville visitor centre before going to Matrimandir', 'Walk on Promenade during sunrise', 'Shop for pottery and handmade paper'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '48',
    slug: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    city: 'Darjeeling',
    tagline: 'Queen of the Himalayas',
    description: 'Famous for its tea gardens, stunning Kanchenjunga views, and the iconic toy train.',
    overview: 'Darjeeling is a breathtaking hill station in West Bengal, known for its sprawling tea estates, the UNESCO World Heritage Darjeeling Himalayan Railway, and panoramic views of Mount Kanchenjunga, the world\'s third-highest peak.',
    images: [
      '/images/darjeeling/image1.jpg',
      '/images/darjeeling/image2.jpg',
      '/images/darjeeling/image3.jpg'
    ],
    bannerImage: '/images/darjeeling/banner.jpg',
    category: ['tea', 'mountains'],
    bestTimeToVisit: 'April to June, October to November',
    budget: { min: 10000, max: 35000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 8920,
    weather: { current: 15, condition: 'Cool', humidity: 65, windSpeed: 10 },
    coordinates: { lat: 27.0417, lng: 88.2663 },
    hotels: [
      { id: 'h130', name: 'Glenburn Tea Estate', rating: 4.9, price: 25000, image: '/images/darjeeling/hotel1.jpg', amenities: ['Tea Estate', 'Heritage', 'Fine Dining', 'Kanchenjunga View'], distance: '20 km' },
      { id: 'h131', name: 'Mayfair Darjeeling', rating: 4.8, price: 15000, image: '/images/darjeeling/hotel2.jpg', amenities: ['Heritage', 'Spa', 'Pool', 'Mountain View'], distance: '1 km' },
      { id: 'h132', name: 'Hotel New Elgin', rating: 4.5, price: 8000, image: '/images/darjeeling/hotel3.jpg', amenities: ['Heritage', 'Restaurant', 'Garden'], distance: 'Center' }
    ],
    food: [
      { id: 'f133', name: 'Darjeeling Tea', description: 'World-famous champagne of teas', image: '/images/darjeeling/food1.jpg', isVegetarian: true, price: 100 },
      { id: 'f134', name: 'Momos', description: 'Steamed dumplings with spicy chutney', image: '/images/darjeeling/food2.jpg', isVegetarian: true, price: 100 },
      { id: 'f135', name: 'Thukpa', description: 'Tibetan noodle soup', image: '/images/darjeeling/food3.jpg', isVegetarian: true, price: 150 },
      { id: 'f136', name: 'Sel Roti', description: 'Traditional Nepali rice bread', image: '/images/darjeeling/food4.jpg', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a190', name: 'Darjeeling Himalayan Railway (Toy Train)', description: 'UNESCO World Heritage toy train', image: '/images/darjeeling/attraction1.jpg', distance: 'Center', type: 'railway' },
      { id: 'a191', name: 'Tiger Hill', description: 'Famous sunrise point with Kanchenjunga view', image: '/images/darjeeling/attraction2.jpg', distance: '11 km', type: 'viewpoint' },
      { id: 'a192', name: 'Batasia Loop', description: 'Spiral railway loop with war memorial', image: '/images/darjeeling/attraction3.jpg', distance: '5 km', type: 'landmark' },
      { id: 'a193', name: 'Tea Gardens', description: 'Scenic tea estates with factory tours', image: '/images/darjeeling/attraction4.jpg', distance: 'Various', type: 'plantation' },
      { id: 'a194', name: 'Japanese Peace Pagoda', description: 'Buddhist stupa with mountain views', image: '/images/darjeeling/attraction5.jpg', distance: '2 km', type: 'stupa' },
      { id: 'a195', name: 'Darjeeling Mall', description: 'Main pedestrian promenade', image: '/images/darjeeling/attraction6.jpg', distance: 'Center', type: 'landmark' }
    ],
    tips: ['Wake up early for sunrise at Tiger Hill', 'Take the toy train from Darjeeling to Ghum', 'Buy fresh tea from authorized outlets', 'Try local momos at Chowrasta', 'Carry warm clothes even in summer'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '49',
    slug: 'sundarbans',
    name: 'Sundarbans',
    state: 'West Bengal',
    city: 'Sundarbans',
    tagline: 'Mangrove Tiger Territory',
    description: 'The world\'s largest mangrove forest, home to the Royal Bengal Tiger and unique ecosystem.',
    overview: 'The Sundarbans is a UNESCO World Heritage site, the largest mangrove forest in the world, and a unique ecosystem. It\'s famous for the Royal Bengal Tiger, saltwater crocodiles, spotted deer, and numerous bird species.',
    images: [
      '/images/sundarbans/image1.jpg',
      '/images/sundarbans/image2.jpg',
      '/images/sundarbans/image3.jpg'
    ],
    bannerImage: '/images/sundarbans/banner.jpg',
    category: ['wildlife', 'hidden-gem'],
    bestTimeToVisit: 'October to March',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 3450,
    weather: { current: 26, condition: 'Humid', humidity: 80, windSpeed: 15 },
    coordinates: { lat: 21.9497, lng: 88.9372 },
    hotels: [
      { id: 'h133', name: 'Sunderbans Tiger Camp', rating: 4.6, price: 8000, image: '/images/sundarbans/hotel1.jpg', amenities: ['River View', 'Bonfire', 'Nature Walks', 'Boat Safari'], distance: 'River Side' },
      { id: 'h134', name: 'Sajnekhali Tourist Lodge', rating: 4.3, price: 5000, image: '/images/sundarbans/hotel2.jpg', amenities: ['Budget', 'Watch Tower', 'Canteen'], distance: 'Inside Park' },
      { id: 'h135', name: 'West Bengal Tourism Resort', rating: 4.2, price: 4000, image: '/images/sundarbans/hotel3.jpg', amenities: ['Basic Amenities', 'Restaurant', 'Parking'], distance: 'Entry Point' }
    ],
    food: [
      { id: 'f137', name: 'Bhetki Fish Curry', description: 'Local fish preparation', image: '/images/sundarbans/food1.jpg', isVegetarian: false, price: 300 },
      { id: 'f138', name: 'Chingri Malai Curry', description: 'Prawn in coconut milk', image: '/images/sundarbans/food2.jpg', isVegetarian: false, price: 400 },
      { id: 'f139', name: 'Mangrove Honey', description: 'Local forest honey', image: '/images/sundarbans/food3.jpg', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a196', name: 'Boat Safari', description: 'Mangrove boat ride to spot wildlife', image: '/images/sundarbans/attraction1.jpg', distance: 'Various', type: 'safari' },
      { id: 'a197', name: 'Sajnekhali Watch Tower', description: 'Best spot for bird watching', image: '/images/sundarbans/attraction2.jpg', distance: 'Entry Zone', type: 'viewpoint' },
      { id: 'a198', name: 'Sudhanyakhali Watch Tower', description: 'Famous for tiger sightings', image: '/images/sundarbans/attraction3.jpg', distance: 'Deep Forest', type: 'viewpoint' },
      { id: 'a199', name: 'Dobanki Watch Tower', description: 'Canopy walk through mangroves', image: '/images/sundarbans/attraction4.jpg', distance: 'Various', type: 'walkway' },
      { id: 'a200', name: 'Bhagabatpur Crocodile Project', description: 'Crocodile breeding center', image: '/images/sundarbans/attraction5.jpg', distance: '70 km', type: 'wildlife' },
      { id: 'a201', name: 'Crocodile Sanctuary', description: 'Saltwater crocodile habitat', image: '/images/sundarbans/attraction6.jpg', distance: 'Various', type: 'wildlife' }
    ],
    tips: ['Book boat safari in advance', 'Carry mosquito repellent', 'Wear earthy colors for better sightings', 'Listen to forest guards for safety', 'Best time for tiger sighting - March April'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '50',
    slug: 'kaziranga',
    name: 'Kaziranga',
    state: 'Assam',
    city: 'Kaziranga',
    tagline: 'Land of One-Horned Rhinos',
    description: 'UNESCO World Heritage site famous for the Great Indian One-Horned Rhinoceros.',
    overview: 'Kaziranga National Park is a UNESCO World Heritage site and one of India\'s most successful wildlife conservation stories. It has the largest population of the Great Indian One-Horned Rhinoceros, along with elephants, tigers, and wild water buffalo.',
    images: [
      '/images/kaziranga/image1.jpg',
      '/images/kaziranga/image2.jpg',
      '/images/kaziranga/image3.jpg'
    ],
    bannerImage: '/images/kaziranga/banner.jpg',
    category: ['wildlife', 'hidden-gem'],
    bestTimeToVisit: 'November to April',
    budget: { min: 12000, max: 35000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 5670,
    weather: { current: 25, condition: 'Pleasant', humidity: 70, windSpeed: 10 },
    coordinates: { lat: 26.6012, lng: 93.4246 },
    hotels: [
      { id: 'h136', name: 'IORA - The Retreat', rating: 4.8, price: 12000, image: '/images/kaziranga/hotel1.jpg', amenities: ['Luxury', 'Pool', 'Spa', 'Safari Booking'], distance: '1 km' },
      { id: 'h137', name: 'Diphlu River Lodge', rating: 4.7, price: 10000, image: '/images/kaziranga/hotel2.jpg', amenities: ['River View', 'Nature Trails', 'Organic Food'], distance: 'River Side' },
      { id: 'h138', name: 'Wild Grass Resort', rating: 4.5, price: 7000, image: '/images/kaziranga/hotel3.jpg', amenities: ['Eco Resort', 'Cultural Shows', 'Restaurant'], distance: '2 km' }
    ],
    food: [
      { id: 'f140', name: 'Assamese Thali', description: 'Complete meal with rice, dal, sabzi, fish', image: '/images/kaziranga/food1.jpg', isVegetarian: false, price: 300 },
      { id: 'f141', name: 'Masor Tenga', description: 'Sour fish curry', image: '/images/kaziranga/food2.jpg', isVegetarian: false, price: 350 },
      { id: 'f142', name: 'Pitha', description: 'Traditional rice cakes', image: '/images/kaziranga/food3.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a202', name: 'Jeep Safari', description: 'Explore national park zones', image: '/images/kaziranga/attraction1.jpg', distance: 'Various', type: 'safari' },
      { id: 'a203', name: 'Elephant Safari', description: 'Morning safari on elephant back', image: '/images/kaziranga/attraction2.jpg', distance: 'Central Zone', type: 'safari' },
      { id: 'a204', name: 'Kaziranga Orchid Park', description: 'Beautiful orchid and biodiversity park', image: '/images/kaziranga/attraction3.jpg', distance: '5 km', type: 'garden' },
      { id: 'a205', name: 'Kaziranga National Park Museum', description: 'Information about flora and fauna', image: '/images/kaziranga/attraction4.jpg', distance: 'Entry Gate', type: 'museum' },
      { id: 'a206', name: 'Kaziranga View Point', description: 'Scenic view of tea gardens', image: '/images/kaziranga/attraction5.jpg', distance: '10 km', type: 'viewpoint' },
      { id: 'a207', name: 'Tea Gardens', description: 'Lush tea estates', image: '/images/kaziranga/attraction6.jpg', distance: 'Various', type: 'plantation' }
    ],
    tips: ['Book elephant safari early morning', 'Carry binoculars for bird watching', 'Wear earthy/matte colors', 'Keep camera ready for rhinos', 'Visit during winter for best wildlife viewing'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '51',
    slug: 'shillong',
    name: 'Shillong',
    state: 'Meghalaya',
    city: 'Shillong',
    tagline: 'Scotland of the East',
    description: 'A charming hill station with rolling hills, waterfalls, and a unique music culture.',
    overview: 'Shillong, the capital of Meghalaya, is a beautiful hill station known for its pine-covered hills, stunning waterfalls, colonial architecture, and vibrant music scene. It\'s often called the "Rock Capital of India" due to its musical heritage.',
    images: [
      '/images/shillong/image1.jpg',
      '/images/shillong/image2.jpg',
      '/images/shillong/image3.jpg'
    ],
    bannerImage: '/images/shillong/banner.jpg',
    category: ['nature', 'hidden-gem'],
    bestTimeToVisit: 'October to April',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 6780,
    weather: { current: 18, condition: 'Pleasant', humidity: 70, windSpeed: 10 },
    coordinates: { lat: 25.5788, lng: 91.8933 },
    hotels: [
      { id: 'h139', name: 'Ri Kynjai Resort', rating: 4.8, price: 12000, image: '/images/shillong/hotel1.jpg', amenities: ['Lake View', 'Spa', 'Traditional Khasi Cuisine', 'Bonfire'], distance: '15 km' },
      { id: 'h140', name: 'Vivanta Shillong', rating: 4.7, price: 10000, image: '/images/shillong/hotel2.jpg', amenities: ['Mountain View', 'Pool', 'Spa', 'Restaurant'], distance: '2 km' },
      { id: 'h141', name: 'Hotel Pinewood', rating: 4.5, price: 7000, image: '/images/shillong/hotel3.jpg', amenities: ['Heritage', 'Garden', 'Restaurant'], distance: '1 km' }
    ],
    food: [
      { id: 'f143', name: 'Jadoh', description: 'Khasi style pork and rice dish', image: '/images/shillong/food1.jpg', isVegetarian: false, price: 250 },
      { id: 'f144', name: 'Dohneiiong', description: 'Pork with black sesame', image: '/images/shillong/food2.jpg', isVegetarian: false, price: 300 },
      { id: 'f145', name: 'Tungrymbai', description: 'Fermented soybean curry', image: '/images/shillong/food3.jpg', isVegetarian: true, price: 150 },
      { id: 'f146', name: 'Momos', description: 'Steamed dumplings', image: '/images/shillong/food4.jpg', isVegetarian: true, price: 100 }
    ],
    attractions: [
      { id: 'a208', name: 'Umiam Lake', description: 'Scenic man-made lake with water sports', image: '/images/shillong/attraction1.jpg', distance: '17 km', type: 'lake' },
      { id: 'a209', name: 'Elephant Falls', description: 'Beautiful three-tiered waterfall', image: '/images/shillong/attraction2.jpg', distance: '12 km', type: 'waterfall' },
      { id: 'a210', name: 'Shillong Peak', description: 'Highest point with panoramic city views', image: '/images/shillong/attraction3.jpg', distance: '10 km', type: 'peak' },
      { id: 'a211', name: 'Ward\'s Lake', description: 'Picturesque lake with gardens', image: '/images/shillong/attraction4.jpg', distance: 'Center', type: 'lake' },
      { id: 'a212', name: 'Don Bosco Museum', description: 'Rich collection of Northeast culture', image: '/images/shillong/attraction5.jpg', distance: '3 km', type: 'museum' },
      { id: 'a213', name: 'Lady Hydari Park', description: 'Beautiful park with deer and birds', image: '/images/shillong/attraction6.jpg', distance: '2 km', type: 'park' },
      { id: 'a214', name: 'Laitlum Canyons', description: 'Breathtaking canyon views', image: '/images/shillong/attraction7.jpg', distance: '25 km', type: 'viewpoint' }
    ],
    tips: ['Rent a vehicle for exploring nearby attractions', 'Try local Khasi cuisine', 'Visit during spring for blooming flowers', 'Carry umbrella year-round', 'Experience local music scene'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '52',
    slug: 'cherrapunji',
    name: 'Cherrapunji',
    state: 'Meghalaya',
    city: 'Cherrapunji',
    tagline: 'Land of Living Root Bridges',
    description: 'One of the wettest places on Earth, famous for living root bridges and stunning waterfalls.',
    overview: 'Cherrapunji (Sohra) is known for being one of the wettest places on Earth. It\'s famous for its unique living root bridges, spectacular waterfalls, limestone caves, and pristine natural beauty. The living root bridges are a UNESCO World Heritage site contender.',
    images: [
      '/images/cherrapunji/image1.jpg',
      '/images/cherrapunji/image2.jpg',
      '/images/cherrapunji/image3.jpg'
    ],
    bannerImage: '/images/cherrapunji/banner.jpg',
    category: ['waterfalls', 'hidden-gem'],
    bestTimeToVisit: 'October to April',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 4560,
    weather: { current: 16, condition: 'Cloudy', humidity: 85, windSpeed: 12 },
    coordinates: { lat: 25.3024, lng: 91.7160 },
    hotels: [
      { id: 'h142', name: 'Jiva Resort Cherrapunji', rating: 4.6, price: 8000, image: '/images/cherrapunji/hotel1.jpg', amenities: ['Valley View', 'Restaurant', 'Bonfire', 'Nature Walks'], distance: '2 km' },
      { id: 'h143', name: 'Sa-I-Mika Park Resort', rating: 4.5, price: 6000, image: '/images/cherrapunji/hotel2.jpg', amenities: ['Waterfall View', 'Garden', 'Parking'], distance: '3 km' },
      { id: 'h144', name: 'Police Bungalow', rating: 4.3, price: 4000, image: '/images/cherrapunji/hotel3.jpg', amenities: ['Budget', 'Valley View', 'Basic Amenities'], distance: 'Center' }
    ],
    food: [
      { id: 'f147', name: 'Jadoh', description: 'Traditional pork and rice', image: '/images/cherrapunji/food1.jpg', isVegetarian: false, price: 250 },
      { id: 'f148', name: 'Khasian Rice', description: 'Local rice preparation', image: '/images/cherrapunji/food2.jpg', isVegetarian: true, price: 150 },
      { id: 'f149', name: 'Local Tea', description: 'Freshly brewed with natural flavors', image: '/images/cherrapunji/food3.jpg', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a215', name: 'Living Root Bridges', description: 'Natural bridges grown from rubber tree roots', image: '/images/cherrapunji/attraction1.jpg', distance: 'Various Villages', type: 'natural wonder' },
      { id: 'a216', name: 'Nohkalikai Falls', description: 'Tallest plunge waterfall in India (340m)', image: '/images/cherrapunji/attraction2.jpg', distance: '5 km', type: 'waterfall' },
      { id: 'a217', name: 'Seven Sisters Falls', description: 'Seven streams during monsoon', image: '/images/cherrapunji/attraction3.jpg', distance: '13 km', type: 'waterfall' },
      { id: 'a218', name: 'Double Decker Living Root Bridge', description: 'Unique two-tier living bridge', image: '/images/cherrapunji/attraction4.jpg', distance: 'Trek 3 km', type: 'natural wonder' },
      { id: 'a219', name: 'Mawsmai Cave', description: 'Limestone cave with stalactites', image: '/images/cherrapunji/attraction5.jpg', distance: '4 km', type: 'cave' },
      { id: 'a220', name: 'Eco Park', description: 'Beautiful garden with mountain views', image: '/images/cherrapunji/attraction6.jpg', distance: '2 km', type: 'park' },
      { id: 'a221', name: 'Thangkharang Park', description: 'Breathtaking view of waterfalls', image: '/images/cherrapunji/attraction7.jpg', distance: '4 km', type: 'park' }
    ],
    tips: ['Wear good trekking shoes for root bridges', 'Carry rain gear even in dry season', 'Visit during monsoon for waterfalls at their best', 'Take a local guide for treks', 'Start early for day trips'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '53',
    slug: 'srinagar',
    name: 'Srinagar',
    state: 'Jammu & Kashmir',
    city: 'Srinagar',
    tagline: 'Paradise on Earth',
    description: 'A breathtaking city of lakes, houseboats, Mughal gardens, and floating markets in the Kashmir Valley.',
    overview: 'Srinagar, the summer capital of Jammu & Kashmir, is renowned for its stunning Dal Lake, charming houseboats, beautiful Mughal gardens, and the unique floating market. Set against the backdrop of the Himalayas, it offers a truly magical experience with its shikara rides, Mughal architecture, and rich Kashmiri culture.',
    images: [
      '/images/srinagar/image1.jpg',
      '/images/srinagar/image2.jpg',
      '/images/srinagar/image3.jpg'
    ],
    bannerImage: '/images/srinagar/banner.jpg',
    category: ['lakes', 'mountains', 'honeymoon'],
    bestTimeToVisit: 'April to October (summer), December to February (snow)',
    budget: { min: 12000, max: 40000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 7890,
    weather: { current: 22, condition: 'Pleasant', humidity: 65, windSpeed: 8 },
    coordinates: { lat: 34.0837, lng: 74.7973 },
    hotels: [
      { id: 'h145', name: 'Vivanta Dal View', rating: 4.8, price: 18000, image: '/images/srinagar/hotel1.jpg', amenities: ['Dal Lake View', 'Spa', 'Fine Dining', 'Infinity Pool'], distance: '2 km' },
      { id: 'h146', name: 'The LaLiT Grand Palace', rating: 4.9, price: 25000, image: '/images/srinagar/hotel2.jpg', amenities: ['Heritage Palace', 'Mountain View', 'Spa', 'Multiple Restaurants'], distance: '3 km' },
      { id: 'h147', name: 'Houseboat on Dal Lake', rating: 4.7, price: 8000, image: '/images/srinagar/hotel3.jpg', amenities: ['Lake View', 'Traditional Kashmiri Food', 'Shikara Pickup', 'Wood Carvings'], distance: 'On Dal Lake' },
      { id: 'h148', name: 'Welcome Hotel Gulmarg', rating: 4.6, price: 10000, image: '/images/srinagar/hotel4.jpg', amenities: ['Garden', 'Restaurant', 'Mountain View'], distance: '50 km' }
    ],
    food: [
      { id: 'f150', name: 'Rogan Josh', description: 'Famous Kashmiri lamb curry with aromatic spices', image: '/images/srinagar/food1.jpg', isVegetarian: false, price: 450 },
      { id: 'f151', name: 'Kashmiri Pulao', description: 'Fragrant rice with dry fruits and saffron', image: '/images/srinagar/food2.jpg', isVegetarian: true, price: 250 },
      { id: 'f152', name: 'Yakhni', description: 'Yogurt-based lamb curry', image: '/images/srinagar/food3.jpg', isVegetarian: false, price: 400 },
      { id: 'f153', name: 'Dum Aloo', description: 'Spiced potato curry in yogurt gravy', image: '/images/srinagar/food4.jpg', isVegetarian: true, price: 200 },
      { id: 'f154', name: 'Kahwa', description: 'Traditional Kashmiri saffron tea with almonds', image: '/images/srinagar/food5.jpg', isVegetarian: true, price: 100 },
      { id: 'f155', name: 'Gushtaba', description: 'Spicy meatballs in yogurt gravy - royal dish', image: '/images/srinagar/food6.jpg', isVegetarian: false, price: 500 }
    ],
    attractions: [
      { id: 'a222', name: 'Dal Lake', description: 'Iconic lake with houseboats and shikara rides', image: '/images/srinagar/attraction1.jpg', distance: 'Center', type: 'lake' },
      { id: 'a223', name: 'Nigeen Lake', description: 'Peaceful lake connected to Dal Lake', image: '/images/srinagar/attraction2.jpg', distance: '2 km', type: 'lake' },
      { id: 'a224', name: 'Mughal Gardens', description: 'Beautiful terraced gardens - Shalimar, Nishat, Chashme Shahi', image: '/images/srinagar/attraction3.jpg', distance: '6-12 km', type: 'garden' },
      { id: 'a225', name: 'Shikara Ride', description: 'Traditional boat ride on Dal Lake', image: '/images/srinagar/attraction4.jpg', distance: 'Dal Lake', type: 'activity' },
      { id: 'a226', name: 'Floating Market', description: 'Unique vegetable market on boats early morning', image: '/images/srinagar/attraction5.jpg', distance: 'Dal Lake', type: 'market' },
      { id: 'a227', name: 'Shankaracharya Temple', description: 'Ancient Shiva temple on hilltop', image: '/images/srinagar/attraction6.jpg', distance: '3 km', type: 'temple' },
      { id: 'a228', name: 'Pari Mahal', description: 'Historical garden palace with stunning views', image: '/images/srinagar/attraction7.jpg', distance: '5 km', type: 'palace' },
      { id: 'a229', name: 'Indira Gandhi Memorial Tulip Garden', description: 'Largest tulip garden in Asia', image: '/images/srinagar/attraction8.jpg', distance: '7 km', type: 'garden' },
      { id: 'a230', name: 'Hazratbal Shrine', description: 'Holy Muslim shrine with relic of Prophet Muhammad', image: '/images/srinagar/attraction9.jpg', distance: '8 km', type: 'shrine' },
      { id: 'a231', name: 'Jamia Masjid', description: 'Ancient wooden mosque with Indo-Saracenic architecture', image: '/images/srinagar/attraction10.jpg', distance: '2 km', type: 'mosque' }
    ],
    tips: ['Stay in a houseboat for unique experience', 'Take early morning shikara ride for floating market', 'Visit Tulip Garden in April when in full bloom', 'Try authentic Wazwan (Kashmiri feast)', 'Buy Pashmina shawls and Kashmiri handicrafts from government emporiums', 'Carry warm clothes even in summer', 'Respect local culture and photography restrictions'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: '54',
    slug: 'gulmarg',
    name: 'Gulmarg',
    state: 'Jammu & Kashmir',
    city: 'Gulmarg',
    tagline: 'Meadow of Flowers',
    description: 'A stunning hill station famous for skiing, the world\'s second-highest gondola ride, and snow-capped peaks.',
    overview: 'Gulmarg is a premier hill station in Kashmir, known for its beautiful meadows covered with flowers in summer and pristine snow in winter. It offers the world\'s second-highest gondola cable car, excellent skiing slopes, and breathtaking views of Nanga Parbat and other Himalayan peaks.',
    images: [
      '/images/gulmarg/image1.jpg',
      '/images/gulmarg/image2.jpg',
      '/images/gulmarg/image3.jpg'
    ],
    bannerImage: '/images/gulmarg/banner.jpg',
    category: ['mountains', 'adventure', 'snow'],
    bestTimeToVisit: 'May to October (summer), December to February (skiing)',
    budget: { min: 15000, max: 45000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 5670,
    weather: { current: 12, condition: 'Cool', humidity: 60, windSpeed: 15 },
    coordinates: { lat: 34.0484, lng: 74.3808 },
    hotels: [
      { id: 'h149', name: 'Khyber Himalayan Resort & Spa', rating: 4.9, price: 25000, image: '/images/gulmarg/hotel1.jpg', amenities: ['Mountain View', 'Spa', 'Fine Dining', 'Ski Rental'], distance: '1 km' },
      { id: 'h150', name: 'The Gulmarg Palace', rating: 4.6, price: 12000, image: '/images/gulmarg/hotel2.jpg', amenities: ['Heritage', 'Garden', 'Restaurant', 'Bonfire'], distance: 'Center' },
      { id: 'h151', name: 'Hotel Highland', rating: 4.4, price: 7000, image: '/images/gulmarg/hotel3.jpg', amenities: ['Valley View', 'Heating', 'Restaurant', 'Parking'], distance: '1 km' }
    ],
    food: [
      { id: 'f156', name: 'Kashmiri Wazwan', description: 'Traditional multi-course meal', image: '/images/gulmarg/food1.jpg', isVegetarian: false, price: 800 },
      { id: 'f157', name: 'Harissa', description: 'Slow-cooked meat stew, winter specialty', image: '/images/gulmarg/food2.jpg', isVegetarian: false, price: 200 },
      { id: 'f158', name: 'Kashmiri Kehwa', description: 'Traditional green tea with saffron', image: '/images/gulmarg/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a232', name: 'Gulmarg Gondola', description: 'World\'s second-highest cable car ride', image: '/images/gulmarg/attraction1.jpg', distance: 'Center', type: 'cable car' },
      { id: 'a233', name: 'Apharwat Peak', description: 'Skiing destination at 4,200m', image: '/images/gulmarg/attraction2.jpg', distance: 'Gondola Phase 2', type: 'peak' },
      { id: 'a234', name: 'Skiing & Snowboarding', description: 'Winter sports paradise', image: '/images/gulmarg/attraction3.jpg', distance: 'Various', type: 'activity' },
      { id: 'a235', name: 'Strawberry Valley', description: 'Beautiful valley with strawberry fields', image: '/images/gulmarg/attraction4.jpg', distance: '2 km', type: 'valley' },
      { id: 'a236', name: 'Gulmarg Golf Course', description: 'World\'s highest green golf course', image: '/images/gulmarg/attraction5.jpg', distance: 'Center', type: 'golf' },
      { id: 'a237', name: 'Ningle Nallah', description: 'Scenic river perfect for photography', image: '/images/gulmarg/attraction6.jpg', distance: '3 km', type: 'river' }
    ],
    tips: ['Book gondola tickets in advance (long queues)', 'Rent skiing equipment from certified shops', 'Visit in January for heavy snow', 'Carry woolens, gloves, and sunglasses', 'Acclimatize for a day before high-altitude activities'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '55',
    slug: 'pahalgam',
    name: 'Pahalgam',
    state: 'Jammu & Kashmir',
    city: 'Pahalgam',
    tagline: 'Valley of Shepherds',
    description: 'A picturesque hill station on the banks of Lidder River, known for scenic valleys and trekking bases.',
    overview: 'Pahalgam is a beautiful town in the Anantnag district, set along the Lidder River. It serves as the base camp for the Amarnath Yatra and offers stunning landscapes, pine forests, and excellent trekking routes. The lush green Betaab Valley and Aru Valley are nearby attractions.',
    images: [
      '/images/pahalgam/image1.jpg',
      '/images/pahalgam/image2.jpg',
      '/images/pahalgam/image3.jpg'
    ],
    bannerImage: '/images/pahalgam/banner.jpg',
    category: ['mountains', 'nature', 'trekking'],
    bestTimeToVisit: 'April to October',
    budget: { min: 12000, max: 35000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 6780,
    weather: { current: 18, condition: 'Pleasant', humidity: 58, windSpeed: 10 },
    coordinates: { lat: 34.0165, lng: 75.3169 },
    hotels: [
      { id: 'h152', name: 'Pahalgam Hotel', rating: 4.5, price: 10000, image: '/images/pahalgam/hotel1.jpg', amenities: ['River View', 'Garden', 'Restaurant', 'Bonfire'], distance: 'River Side' },
      { id: 'h153', name: 'Hotel Baisaran', rating: 4.4, price: 7000, image: '/images/pahalgam/hotel2.jpg', amenities: ['Mountain View', 'Heating', 'Multi-cuisine', 'Parking'], distance: '2 km' },
      { id: 'h154', name: 'JKTDC Guest House', rating: 4.2, price: 4000, image: '/images/pahalgam/hotel3.jpg', amenities: ['Budget', 'River View', 'Basic Amenities'], distance: 'Center' }
    ],
    food: [
      { id: 'f159', name: 'Trout Fish', description: 'Fresh river trout, local specialty', image: '/images/pahalgam/food1.jpg', isVegetarian: false, price: 350 },
      { id: 'f160', name: 'Rogan Josh', description: 'Famous Kashmiri lamb curry', image: '/images/pahalgam/food2.jpg', isVegetarian: false, price: 400 },
      { id: 'f161', name: 'Modur Pulao', description: 'Sweet saffron rice with dry fruits', image: '/images/pahalgam/food3.jpg', isVegetarian: true, price: 200 }
    ],
    attractions: [
      { id: 'a238', name: 'Betaab Valley', description: 'Beautiful valley named after Bollywood movie', image: '/images/pahalgam/attraction1.jpg', distance: '7 km', type: 'valley' },
      { id: 'a239', name: 'Aru Valley', description: 'Scenic valley, base for trekking', image: '/images/pahalgam/attraction2.jpg', distance: '12 km', type: 'valley' },
      { id: 'a240', name: 'Chandanwari', description: 'Starting point of Amarnath Yatra', image: '/images/pahalgam/attraction3.jpg', distance: '16 km', type: 'pilgrimage' },
      { id: 'a241', name: 'Lidder River', description: 'Crystal clear river for trout fishing', image: '/images/pahalgam/attraction4.jpg', distance: 'Center', type: 'river' },
      { id: 'a242', name: 'Mamal Temple', description: 'Ancient Shiva temple near Pahalgam', image: '/images/pahalgam/attraction5.jpg', distance: '5 km', type: 'temple' },
      { id: 'a243', name: 'Baisaran Hills', description: 'Mini Switzerland of India', image: '/images/pahalgam/attraction6.jpg', distance: '3 km', type: 'hills' },
      { id: 'a244', name: 'Tulian Lake', description: 'High-altitude trekking destination', image: '/images/pahalgam/attraction7.jpg', distance: 'Trek 12 km', type: 'lake' }
    ],
    tips: ['Visit Betaab Valley early morning for fewer crowds', 'Try fresh trout fish at riverside restaurants', 'Hire a pony for Baisaran hills', 'Carry warm clothes even in summer', 'Book hotels in advance during Amarnath Yatra season'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '56',
    slug: 'sonamarg',
    name: 'Sonamarg',
    state: 'Jammu & Kashmir',
    city: 'Sonamarg',
    tagline: 'Meadow of Gold',
    description: 'A breathtaking hill station with golden meadows, snow-capped peaks, and trekking routes to Himalayan lakes.',
    overview: 'Sonamarg is a stunning hill station in the Ganderbal district, known for its golden-hued meadows, snow-covered peaks, and the Sindh River flowing through. It serves as the base for treks to the famous high-altitude lakes - Gangabal, Vishansar, and Krishansar.',
    images: [
      '/images/sonamarg/image1.jpg',
      '/images/sonamarg/image2.jpg',
      '/images/sonamarg/image3.jpg'
    ],
    bannerImage: '/images/sonamarg/banner.jpg',
    category: ['mountains', 'trekking', 'snow'],
    bestTimeToVisit: 'June to October',
    budget: { min: 10000, max: 30000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 4560,
    weather: { current: 14, condition: 'Cool', humidity: 55, windSpeed: 12 },
    coordinates: { lat: 34.3035, lng: 75.3282 },
    hotels: [
      { id: 'h155', name: 'Hotel Snowland', rating: 4.5, price: 8000, image: '/images/sonamarg/hotel1.jpg', amenities: ['Mountain View', 'Heating', 'Restaurant', 'Bonfire'], distance: 'Center' },
      { id: 'h156', name: 'JKTDC Hotel', rating: 4.2, price: 4500, image: '/images/sonamarg/hotel2.jpg', amenities: ['Budget', 'River View', 'Basic Amenities'], distance: '1 km' },
      { id: 'h157', name: 'Sonamarg Resort', rating: 4.3, price: 6000, image: '/images/sonamarg/hotel3.jpg', amenities: ['Garden', 'Restaurant', 'Parking', 'Camping'], distance: '2 km' }
    ],
    food: [
      { id: 'f162', name: 'Hot Kahwa', description: 'Traditional saffron tea', image: '/images/sonamarg/food1.jpg', isVegetarian: true, price: 80 },
      { id: 'f163', name: 'Kashmiri Bread', description: 'Freshly baked local bread', image: '/images/sonamarg/food2.jpg', isVegetarian: true, price: 50 },
      { id: 'f164', name: 'Mutton Rogan Josh', description: 'Spicy lamb curry', image: '/images/sonamarg/food3.jpg', isVegetarian: false, price: 400 }
    ],
    attractions: [
      { id: 'a245', name: 'Thajiwas Glacier', description: 'Accessible glacier with snow activities', image: '/images/sonamarg/attraction1.jpg', distance: '3 km', type: 'glacier' },
      { id: 'a246', name: 'Zero Point', description: 'Snow-covered destination at high altitude', image: '/images/sonamarg/attraction2.jpg', distance: '22 km', type: 'viewpoint' },
      { id: 'a247', name: 'Krishnasar Lake', description: 'High-altitude trekking lake', image: '/images/sonamarg/attraction3.jpg', distance: 'Trek 40 km', type: 'lake' },
      { id: 'a248', name: 'Gangabal Lake', description: 'Sacred high-altitude lake', image: '/images/sonamarg/attraction4.jpg', distance: 'Trek 35 km', type: 'lake' },
      { id: 'a249', name: 'Sindh River', description: 'Perfect for trout fishing', image: '/images/sonamarg/attraction5.jpg', distance: 'Center', type: 'river' },
      { id: 'a250', name: 'Baltal Valley', description: 'Base camp for Amarnath Yatra', image: '/images/sonamarg/attraction6.jpg', distance: '15 km', type: 'valley' }
    ],
    tips: ['Hire a pony for Thajiwas Glacier', 'Carry sunglasses and sunscreen (snow reflection)', 'Visit before October as roads close in winter', 'Try trout fishing in Sindh River', 'Carry sufficient cash (no ATMs after Sonamarg)'],
    reviews: [],
    isHiddenGem: true,
    isTrending: false,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: '57',
    slug: 'katra-vaishno-devi',
    name: 'Katra & Vaishno Devi',
    state: 'Jammu & Kashmir',
    city: 'Katra',
    tagline: 'Sacred Cave of Mother Goddess',
    description: 'One of India\'s holiest pilgrimage destinations, dedicated to Goddess Vaishno Devi in a holy cave.',
    overview: 'Katra is the base camp for the sacred Vaishno Devi Yatra, one of India\'s most visited pilgrimage sites. Devotees trek 13 km to the holy cave shrine of Mata Vaishno Devi nestled in the Trikuta Mountains. The journey is spiritually uplifting with beautiful mountain scenery.',
    images: [
      '/images/vaishno-devi/image1.jpg',
      '/images/vaishno-devi/image2.jpg',
      '/images/vaishno-devi/image3.jpg'
    ],
    bannerImage: '/images/vaishno-devi/banner.jpg',
    category: ['spiritual', 'pilgrimage', 'trekking'],
    bestTimeToVisit: 'March to October',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 12340,
    weather: { current: 20, condition: 'Pleasant', humidity: 50, windSpeed: 8 },
    coordinates: { lat: 32.9838, lng: 74.9461 },
    hotels: [
      { id: 'h158', name: 'The White Hotel', rating: 4.6, price: 8000, image: '/images/vaishno-devi/hotel1.jpg', amenities: ['Free WiFi', 'Restaurant', 'Travel Desk', 'Parking'], distance: '1 km from Bus Stand' },
      { id: 'h159', name: 'Hotel Atrium', rating: 4.5, price: 7000, image: '/images/vaishno-devi/hotel2.jpg', amenities: ['Room Service', 'Restaurant', 'Free WiFi', 'Heating'], distance: '2 km' },
      { id: 'h160', name: 'Bhawan Guest House', rating: 4.3, price: 3000, image: '/images/vaishno-devi/hotel3.jpg', amenities: ['Budget', 'Basic Amenities', 'Near Bhawan'], distance: 'At Bhawan' }
    ],
    food: [
      { id: 'f165', name: 'Katra Special Rajma', description: 'Famous kidney bean curry', image: '/images/vaishno-devi/food1.jpg', isVegetarian: true, price: 150 },
      { id: 'f166', name: 'Prasad', description: 'Blessed food from the shrine', image: '/images/vaishno-devi/food2.jpg', isVegetarian: true, price: 100 },
      { id: 'f167', name: 'Chana Chaat', description: 'Spicy chickpea snack', image: '/images/vaishno-devi/food3.jpg', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a251', name: 'Vaishno Devi Cave Shrine', description: 'Holy cave with three rock formations (Pindis)', image: '/images/vaishno-devi/attraction1.jpg', distance: '13 km trek', type: 'temple' },
      { id: 'a252', name: 'Ardhkuwari Cave', description: 'Halfway cave where Goddess meditated', image: '/images/vaishno-devi/attraction2.jpg', distance: '6 km', type: 'cave' },
      { id: 'a253', name: 'Banganga Temple', description: 'Starting point of Yatra with sacred pond', image: '/images/vaishno-devi/attraction3.jpg', distance: '1 km', type: 'temple' },
      { id: 'a254', name: 'Helicopter Service', description: 'Direct helicopter to Sanjichhat', image: '/images/vaishno-devi/attraction4.jpg', distance: 'Katra Helipad', type: 'transport' },
      { id: 'a255', name: 'Bhairon Temple', description: 'Visit after main darshan as tradition', image: '/images/vaishno-devi/attraction5.jpg', distance: '2.5 km from Bhawan', type: 'temple' },
      { id: 'a256', name: 'Katra Market', description: 'Shopping for religious items', image: '/images/vaishno-devi/attraction6.jpg', distance: 'Center', type: 'market' }
    ],
    tips: ['Register for Yatra online before visiting', 'Get Yatra slip/Parchi at Banganga', 'Carry warm clothes as it gets cold at Bhawan', 'Start trek early morning to avoid rush', 'Take ponies or palanquins if unable to walk', 'Book accommodations in advance during peak season (Navratri)', 'Carry ID proof for registration'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: '58',
    slug: 'amarnath-cave',
    name: 'Amarnath Cave',
    state: 'Jammu & Kashmir',
    city: 'Amarnath Cave',
    tagline: 'Holy Ice Shiva Lingam',
    description: 'One of the holiest Hindu pilgrimage sites featuring an ice stalagmite that naturally forms a Shiva Lingam.',
    overview: 'The Amarnath Cave is a sacred Hindu pilgrimage site located at 3,888 meters. The shrine houses an ice stalagmite that naturally forms a Shiva Lingam, which waxes and wanes with the moon cycle. The annual Amarnath Yatra takes place during July-August.',
    images: [
      '/images/amarnath/image1.jpg',
      '/images/amarnath/image2.jpg',
      '/images/amarnath/image3.jpg'
    ],
    bannerImage: '/images/amarnath/banner.jpg',
    category: ['spiritual', 'pilgrimage', 'trekking'],
    bestTimeToVisit: 'July to August (annual Yatra period only)',
    budget: { min: 15000, max: 40000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 8900,
    weather: { current: 5, condition: 'Cold', humidity: 70, windSpeed: 15 },
    coordinates: { lat: 34.2160, lng: 75.4999 },
    hotels: [
      { id: 'h161', name: 'Yatra Base Camp - Baltal', rating: 4.2, price: 5000, image: '/images/amarnath/hotel1.jpg', amenities: ['Basic Tents', 'Food Included', 'Medical Facility'], distance: 'Baltal' },
      { id: 'h162', name: 'Yatra Base Camp - Pahalgam', rating: 4.3, price: 6000, image: '/images/amarnath/hotel2.jpg', amenities: ['Camping', 'Meals', 'Bonfire'], distance: 'Pahalgam' },
      { id: 'h163', name: 'Helicopter Service Stay', rating: 4.4, price: 8000, image: '/images/amarnath/hotel3.jpg', amenities: ['Pre-booked', 'Transport', 'Meals'], distance: 'Various' }
    ],
    food: [
      { id: 'f168', name: 'Langar Food', description: 'Free community kitchen food', image: '/images/amarnath/food1.jpg', isVegetarian: true, price: 0 },
      { id: 'f169', name: 'High Energy Snacks', description: 'Dry fruits and energy bars', image: '/images/amarnath/food2.jpg', isVegetarian: true, price: 100 },
      { id: 'f170', name: 'Kashmiri Bread & Chai', description: 'Local bread with hot tea', image: '/images/amarnath/food3.jpg', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a257', name: 'Amarnath Holy Cave', description: 'Natural ice Shiva Lingam at 3,888m', image: '/images/amarnath/attraction1.jpg', distance: 'Destination', type: 'cave shrine' },
      { id: 'a258', name: 'Baltal Route', description: '14 km steep trek or helicopter option', image: '/images/amarnath/attraction2.jpg', distance: 'Baltal Base', type: 'trek' },
      { id: 'a259', name: 'Pahalgam Route', description: '36 km traditional pilgrimage trek', image: '/images/amarnath/attraction3.jpg', distance: 'Pahalgam Base', type: 'trek' },
      { id: 'a260', name: 'Panchtarni', description: 'Last camping point before cave', image: '/images/amarnath/attraction4.jpg', distance: '6 km from cave', type: 'camp' },
      { id: 'a261', name: 'Sheshnag Lake', description: 'Sacred lake on Pahalgam route', image: '/images/amarnath/attraction5.jpg', distance: 'On Route', type: 'lake' },
      { id: 'a262', name: 'Mahagunas Pass', description: 'Highest point at 4,600m on Pahalgam route', image: '/images/amarnath/attraction6.jpg', distance: 'On Route', type: 'pass' }
    ],
    tips: ['Register online well in advance for Yatra', 'Get mandatory health certificate', 'Rent warm clothing and trekking gear', 'Start trek at night to avoid sun', 'Carry oxygen if needed for high altitude', 'Book helicopter if unable to trek', 'Carry waterproof bags for ice lingam offering', 'Visit only during July-Aug Yatra period'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: '59',
    slug: 'rameshwaram',
    name: 'Rameshwaram',
    state: 'Tamil Nadu',
    city: 'Rameshwaram',
    tagline: 'The Sacred Island of Lord Rama',
    description: 'A holy island town famous for the Ramanathaswamy Temple, one of the 12 Jyotirlingas, and stunning coastal landscapes.',
    overview: 'Rameshwaram is a sacred island town in Tamil Nadu, revered as one of the holiest places in India. It is home to the Ramanathaswamy Temple, which houses one of the 12 Jyotirlingas and is also one of the 4 Char Dham pilgrimage sites. The town is believed to be where Lord Rama built a bridge (Ram Setu) to rescue Sita from Lanka. Beyond its spiritual significance, Rameshwaram offers pristine beaches, the iconic Pamban Bridge, and the ghost town of Dhanushkodi.',
    images: [
      'https://www.chardham-pilgrimage-tour.com/assets/images/rameshwaram-chardham-01.webp',
      'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583681450_20200201_173733_01.jpeg',
      'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583681465_dsc_0130_01.jpeg'
    ],
    bannerImage: 'https://www.chardham-pilgrimage-tour.com/assets/images/rameshwaram-chardham-01.webp',
    category: ['spiritual', 'beaches', 'heritage'],
    bestTimeToVisit: 'October to April',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 12500,
    weather: { current: 28, condition: 'Pleasant', humidity: 70, windSpeed: 15 },
    coordinates: { lat: 9.2881, lng: 79.3173 },
    hotels: [
      { id: 'h164', name: 'KNP Nest', rating: 4.3, price: 4500, image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583699639_img_20200201_091959_mix01.jpg', amenities: ['Free WiFi', 'Restaurant', 'Room Service', 'Parking'], distance: '1.5 km from Temple' },
      { id: 'h165', name: 'Hotel Daiwik Rameswaram', rating: 4.5, price: 6000, image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583699654_dsc_0002_01.jpeg', amenities: ['Pool', 'Spa', 'Multi-cuisine Restaurant', 'Travel Desk'], distance: '2 km' },
      { id: 'h166', name: 'Temple City Residency', rating: 4.2, price: 3500, image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583699671_dsc_0012_01.jpeg', amenities: ['Budget', 'Free Breakfast', 'Parking', 'Near Temple'], distance: '0.5 km' }
    ],
    food: [
      { id: 'f171', name: 'Ghee Podi Idli', description: 'Fluffy idlis loaded with ghee and podi powder', image: 'https://images.pexels.com/photos/7067147/pexels-photo-7067147.jpeg?w=400', isVegetarian: true, price: 80 },
      { id: 'f172', name: 'Medu Vada', description: 'Crispy fried lentil donuts with chutney', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583682565_img_20200201_194147_01.jpeg', isVegetarian: true, price: 60 },
      { id: 'f173', name: 'Filter Coffee', description: 'Authentic South Indian filter coffee', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=400', isVegetarian: true, price: 40 },
      { id: 'f174', name: 'Pongal', description: 'Traditional rice and lentil preparation', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583682573_img_20200202_071516.jpg', isVegetarian: true, price: 70 },
      { id: 'f175', name: 'Seafood Curry', description: 'Fresh coastal fish curry', image: 'https://images.pexels.com/photos/984303/pexels-photo-984303.jpeg?w=400', isVegetarian: false, price: 250 }
    ],
    attractions: [
      { id: 'a263', name: 'Ramanathaswamy Temple', description: 'Sacred Jyotirlinga temple with longest corridor in the world', image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Ramanathaswamy_Temple%2C_Rameshwaram%2C_Tamil_Nadu.jpg', distance: 'Center', type: 'temple' },
      { id: 'a264', name: 'Pamban Bridge', description: 'India\'s first vertical lift sea bridge - engineering marvel', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583681450_20200201_173733_01.jpeg', distance: '2 km', type: 'bridge' },
      { id: 'a265', name: 'Dhanushkodi', description: 'Ghost town at the tip of India with ruins of old church and railway station', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583699245_dsc_0300_mix01.jpg', distance: '20 km', type: 'beach' },
      { id: 'a266', name: 'Agni Theertham', description: 'Sacred bathing beach next to temple', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583681667_img_20200201_120630_01.jpeg', distance: '0.5 km', type: 'beach' },
      { id: 'a267', name: 'Dr. APJ Abdul Kalam Memorial', description: 'Museum dedicated to former President and Rameswaram\'s beloved son', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583699623_img_20200202_164802.jpg', distance: '3 km', type: 'memorial' },
      { id: 'a268', name: '22 Theerthams (Holy Wells)', description: 'Sacred wells inside temple with different properties', image: 'https://static2.tripoto.com/media/filter/tst/img/133935/TripDocument/1583682539_c360_2020_02_06_15_56_49_143_mix01.jpg', distance: 'Inside Temple', type: 'spiritual' }
    ],
    tips: [
      'Take a holy bath at the 22 theerthams inside the temple before darshan',
      'Visit Dhanushkodi early morning to avoid heat and catch sunrise',
      'Witness sunset at Pamban Bridge - a spectacular view',
      'Try the famous Ghee Podi Idli at local eateries',
      'Take a train ride across the new Pamban Bridge for amazing sea views',
      'Carry light cotton clothes but cover shoulders and knees for temple',
      'Visit the Dr. APJ Abdul Kalam Memorial to honor the great scientist'
    ],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false
  },
  {
    id: 'road-1',
    slug: 'manali-leh-highway',
    name: 'Manali-Leh Highway',
    state: 'Himachal Pradesh / Ladakh',
    city: 'Leh',
    tagline: 'Epic Himalayan Road Adventure',
    description: 'A legendary high-altitude road journey that takes travelers through dramatic mountain passes, frozen rivers, and remote valleys.',
    overview: 'The Manali-Leh Highway is one of India’s most iconic road trips, crossing Rohtang Pass, Baralacha La, and Tanglang La on the way to Leh. Riders and drivers alike enjoy rugged landscapes, adventure stops, and unforgettable mountain views.',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600',
    category: ['road trips', 'mountains', 'adventure'],
    bestTimeToVisit: 'June to September',
    budget: { min: 18000, max: 42000, currency: 'INR' },
    rating: 4.9,
    reviewCount: 1784,
    weather: { current: 6, condition: 'Clear', humidity: 20, windSpeed: 18 },
    coordinates: { lat: 32.2560, lng: 77.1800 },
    hotels: [
      { id: 'h222', name: 'Grand Dragon Ladakh', rating: 4.6, price: 11000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Heated Rooms', 'Restaurant', 'Oxygen Support'], distance: 'Leh Market' },
      { id: 'h223', name: 'The Himalayan Residency', rating: 4.5, price: 9000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Spa', 'WiFi', 'Mountain View'], distance: 'Near Leh Palace' }
    ],
    food: [
      { id: 'f150', name: 'Skyu', description: 'Traditional Ladakhi noodle dish with cheese and vegetables', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 120 },
      { id: 'f151', name: 'Chhurpi', description: 'Local hard cheese enjoyed with butter tea', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 80 }
    ],
    attractions: [
      { id: 'a222', name: 'Rohtang Pass', description: 'Snowy mountain pass with sweeping Himalayan views', image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400', distance: '51 km from Manali', type: 'scenic' },
      { id: 'a223', name: 'Tanglang La', description: 'One of the world’s highest motorable passes', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', distance: '45 km before Leh', type: 'adventure' }
    ],
    tips: ['Begin early to avoid afternoon weather changes', 'Carry extra fuel and snacks', 'Acclimatize before crossing high passes', 'Keep warm layers and sunscreen handy'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: 'road-2',
    slug: 'spiti-valley-circuit',
    name: 'Spiti Valley Circuit',
    state: 'Himachal Pradesh',
    city: 'Spiti Valley',
    tagline: 'The High-Altitude Desert Loop',
    description: 'A rugged road trip through remote valleys, ancient monasteries, and stark alpine landscapes in the rain-shadow of the Himalayas.',
    overview: 'The Spiti Valley Circuit connects Kaza, Tabo, Dhankar, and Kibber with narrow roads and dramatic vistas. This journey is perfect for travelers seeking a pure road trip experience with cultural stops and wild scenery.',
    images: [
      'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=800',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      'https://images.unsplash.com/photo-1547586696-9cbe10e1bc28?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=1600',
    category: ['road trips', 'mountains', 'hidden-gem'],
    bestTimeToVisit: 'June to September',
    budget: { min: 16000, max: 38000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 1320,
    weather: { current: 10, condition: 'Clear', humidity: 18, windSpeed: 14 },
    coordinates: { lat: 32.2200, lng: 78.0733 },
    hotels: [
      { id: 'h224', name: 'Spiti Serai', rating: 4.4, price: 7500, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Mountain View', 'Local Cuisine', 'Bonfire'], distance: 'Kaza Center' },
      { id: 'h225', name: 'Dhankar Retreat', rating: 4.3, price: 6800, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Local Style Rooms', 'Breakfast', 'Trekking Help'], distance: 'Near Dhankar Monastery' }
    ],
    food: [
      { id: 'f152', name: 'Tibetan Thukpa', description: 'Warm noodle soup perfect for high-altitude roads', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 110 },
      { id: 'f153', name: 'Local Apricot Jam', description: 'Sweet Himalayan apricot preserve', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 90 }
    ],
    attractions: [
      { id: 'a224', name: 'Tabo Monastery', description: 'Ancient monastery with cave temples and murals', image: 'https://images.unsplash.com/photo-1547586696-9cbe10e1bc28?w=400', distance: '40 km from Kaza', type: 'spiritual' },
      { id: 'a225', name: 'Kibber Wildlife Sanctuary', description: 'High-altitude habitat for snow leopards and blue sheep', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400', distance: '20 km', type: 'nature' }
    ],
    tips: ['Carry extra cash and fuel', 'Rent a sturdy bike or SUV for mountain roads', 'Drive slowly around blind corners', 'Keep your permit documents ready'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: 'road-3',
    slug: 'srinagar-sonmarg-zojila-pass',
    name: 'Srinagar to Sonmarg via Zoji La',
    state: 'Jammu and Kashmir',
    city: 'Sonmarg',
    tagline: 'Alpine Drive Through Mountain Passes',
    description: 'A dramatic road journey from Srinagar to Sonmarg, crossing the famous Zoji La Pass with panoramic valley views.',
    overview: 'This scenic highway takes you through lush Kashmiri meadows, along the Sindh River, and over the snow-laced Zoji La Pass. It is a thrilling road trip for both bikers and drivers alike.',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600',
    category: ['road trips', 'mountains', 'adventure'],
    bestTimeToVisit: 'May to September',
    budget: { min: 14000, max: 33000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 980,
    weather: { current: 12, condition: 'Partly Cloudy', humidity: 40, windSpeed: 16 },
    coordinates: { lat: 34.1445, lng: 74.8070 },
    hotels: [
      { id: 'h226', name: 'Hotel Heevan', rating: 4.3, price: 8500, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['River View', 'Spa', 'Restaurant'], distance: 'Srinagar City' },
      { id: 'h227', name: 'Sonamarg Retreat', rating: 4.4, price: 9200, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Mountain Views', 'Bonfire', 'Guided Treks'], distance: 'Near Thajiwas Glacier' }
    ],
    food: [
      { id: 'f154', name: 'Wazwan', description: 'Traditional Kashmiri multi-course feast', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: false, price: 450 },
      { id: 'f155', name: 'Kahwa', description: 'Saffron green tea with almonds and spices', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 70 }
    ],
    attractions: [
      { id: 'a226', name: 'Thajiwas Glacier', description: 'Accessible glacier with stunning ice fields', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400', distance: '6 km from Sonamarg', type: 'scenic' },
      { id: 'a227', name: 'Zoji La Pass', description: 'Snowy pass with breathtaking views and dramatic hairpins', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400', distance: '24 km from Sonamarg', type: 'road' }
    ],
    tips: ['Check road conditions before departure', 'Carry warm clothes for the pass', 'Start early to avoid afternoon fog', 'Rent a reliable bike or SUV'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: true,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: 'road-4',
    slug: 'mumbai-goa-coastal-ride',
    name: 'Mumbai to Goa Coastal Ride',
    state: 'Maharashtra / Goa',
    city: 'Goa',
    tagline: 'Coastal Highway Adventure',
    description: 'A scenic coastal ride from the bustling streets of Mumbai to the sun-kissed beaches of Goa along the Konkan coast.',
    overview: 'This coastal route hugs the Arabian Sea with frequent sea views, quaint fishing villages, and beachside stops. Ideal for riders who enjoy coastal air, seaside food, and relaxed pit-stops.',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600',
    category: ['road trips', 'beaches', 'nature'],
    bestTimeToVisit: 'October to March',
    budget: { min: 8000, max: 25000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 920,
    weather: { current: 28, condition: 'Sunny', humidity: 70, windSpeed: 12 },
    coordinates: { lat: 15.2993, lng: 74.1240 },
    hotels: [
      { id: 'h228', name: 'Coastal Stay', rating: 4.3, price: 8000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Sea View', 'Breakfast'], distance: 'Beachfront' }
    ],
    food: [
      { id: 'f156', name: 'Konkan Fish Curry', description: 'Spicy coconut-based fish curry', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: false, price: 150 }
    ],
    attractions: [
      { id: 'a228', name: 'Alibaug Beaches', description: 'Sandy beaches and forts near Mumbai', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400', distance: 'Alibaug', type: 'beach' },
      { id: 'a229', name: 'Gokarna & Beaches', description: 'Quiet beaches and coastal temples', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400', distance: 'Various', type: 'beach' }
    ],
    tips: ['Plan fuel stops for remote stretches', 'Try local seafood along the way', 'Start early to enjoy sunrise by the sea'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: true
  },
  {
    id: 'road-5',
    slug: 'coorg-wayanad-road',
    name: 'Coorg to Wayanad Road',
    state: 'Karnataka / Kerala',
    city: 'Wayanad',
    tagline: 'Coffee Plantations & Misty Forests',
    description: 'A lush ride through coffee estates, misty forests, and curvy roads — perfect for riders who love greenery and winding routes.',
    overview: 'The Coorg to Wayanad route threads through coffee plantations, panoramic viewpoints, and rain-soaked forests. Expect curvy roads, aromatic coffee stops, and frequent rain clouds in the monsoon.',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600',
    category: ['road trips', 'nature', 'hills'],
    bestTimeToVisit: 'September to February',
    budget: { min: 6000, max: 18000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 420,
    weather: { current: 20, condition: 'Misty', humidity: 80, windSpeed: 8 },
    coordinates: { lat: 11.6855, lng: 76.1269 },
    hotels: [
      { id: 'h230', name: 'Plantation Stay', rating: 4.5, price: 7000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Coffee Estate', 'Guided Walks'], distance: 'Near Plantation' }
    ],
    food: [
      { id: 'f158', name: 'Coorg Pandi Curry', description: 'Spicy pork curry with local masalas', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: false, price: 180 }
    ],
    attractions: [
      { id: 'a230', name: 'Coffee Estate Tours', description: 'Guided tours of working coffee plantations', image: 'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=400', distance: 'Various', type: 'plantation' }
    ],
    tips: ['Expect mist and occasional rain', 'Ride carefully on wet curves', 'Stop at local homestays for coffee tasting'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: 'road-6',
    slug: 'meghalaya-road-trip',
    name: 'Meghalaya Road Trip',
    state: 'Meghalaya',
    city: 'Shillong / Cherrapunji',
    tagline: 'Clouds on the Road & Waterfall Magic',
    description: 'Drive through states where clouds drift along the road, waterfalls cascade beside the highway, and fresh mountain air fills your lungs.',
    overview: 'Meghalaya offers dramatic monsoon scenes with clouds floating across highland roads, plentiful waterfalls, and clean, well-kept routes that make for an unforgettable road trip experience.',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=1600',
    category: ['road trips', 'nature', 'waterfalls'],
    bestTimeToVisit: 'October to May',
    budget: { min: 8000, max: 22000, currency: 'INR' },
    rating: 4.8,
    reviewCount: 560,
    weather: { current: 18, condition: 'Cloudy', humidity: 82, windSpeed: 10 },
    coordinates: { lat: 25.5788, lng: 91.8933 },
    hotels: [
      { id: 'h231', name: 'Highland Retreat', rating: 4.4, price: 8000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Valley View', 'Guided Tours'], distance: 'Near Shillong' }
    ],
    food: [
      { id: 'f167', name: 'Khasi Cuisine', description: 'Traditional Meghalayan pork and rice dishes', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: false, price: 200 },
      { id: 'f168', name: 'Fresh Mountain Tea', description: 'Local tea with honey and spices', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 60 }
    ],
    attractions: [
      { id: 'a234', name: 'Elephant Falls', description: 'Three-tiered waterfall near Shillong', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', distance: '12 km from Shillong', type: 'waterfall' },
      { id: 'a235', name: 'Laitlum Canyons', description: 'Scenic canyon viewpoints with misty mornings', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400', distance: '25 km', type: 'viewpoint' }
    ],
    tips: ['Carry rain gear and waterproof bags', 'Stop at waterfalls for short hikes', 'Drive slowly on foggy stretches'],
    reviews: [],
    isHiddenGem: true,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: 'road-7',
    slug: 'jaisalmer-desert-road-trip',
    name: 'Jaisalmer Desert Road Trip',
    state: 'Rajasthan',
    city: 'Jaisalmer',
    tagline: 'Golden Sunsets & Open Highways',
    description: 'An open-highway desert drive with vast dunes, golden sunsets, and historic forts punctuating the route.',
    overview: 'The Jaisalmer desert route gives vintage travel vibes: long straight roads, soft dunes, and fort towns where time slows down — perfect for sunset chases and highway cruising.',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600',
    category: ['road trips', 'desert', 'heritage'],
    bestTimeToVisit: 'October to March',
    budget: { min: 7000, max: 20000, currency: 'INR' },
    rating: 4.6,
    reviewCount: 310,
    weather: { current: 30, condition: 'Sunny', humidity: 25, windSpeed: 12 },
    coordinates: { lat: 26.9157, lng: 70.9083 },
    hotels: [
      { id: 'h232', name: 'Desert Camp', rating: 4.5, price: 6000, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400', amenities: ['Dune Camps', 'Cultural Evenings'], distance: 'Near Sam Dunes' }
    ],
    food: [
      { id: 'f169', name: 'Rajasthani Dal Baati', description: 'Traditional lentils and bread with butter', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 180 },
      { id: 'f170', name: 'Desert Tea & Snacks', description: 'Local chai with deep-fried snacks', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 70 }
    ],
    attractions: [
      { id: 'a236', name: 'Sam Sand Dunes', description: 'Golden dunes with camel safaris and sunset views', image: 'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=400', distance: '40 km from Jaisalmer', type: 'dune' },
      { id: 'a237', name: 'Jaisalmer Fort', description: 'UNESCO heritage fort with golden sandstone', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400', distance: 'City Center', type: 'fort' }
    ],
    tips: ['Chase sunsets at dune viewpoints', 'Carry sun protection and water', 'Plan fuel and supplies for long stretches'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: false,
    isHoneymoon: false
  },
  {
    id: 'road-8',
    slug: 'rishikesh-badrinath-route',
    name: 'Rishikesh to Badrinath Route',
    state: 'Uttarakhand',
    city: 'Badrinath',
    tagline: 'River Roads & Devbhoomi Vibes',
    description: 'A spiritual and scenic drive following the Ganga, with mountain temples, riverside roads, and Devbhoomi (land of the gods) ambience.',
    overview: 'This route from Rishikesh to Badrinath offers a blend of river-side riding, high Himalayan passes, and pilgrimage stops — ideal for riders seeking spiritual peace and mountain temples.',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600',
    category: ['road trips', 'spiritual', 'mountains'],
    bestTimeToVisit: 'May to October',
    budget: { min: 9000, max: 26000, currency: 'INR' },
    rating: 4.7,
    reviewCount: 640,
    weather: { current: 12, condition: 'Clear', humidity: 40, windSpeed: 14 },
    coordinates: { lat: 30.7426, lng: 79.4935 },
    hotels: [
      { id: 'h233', name: 'Pilgrim Stay', rating: 4.2, price: 5000, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400', amenities: ['Basic Comfort', 'Temple Proximity'], distance: 'Near Badrinath Temple' }
    ],
    food: [
      { id: 'f171', name: 'Garhwali Rajma', description: 'Traditional kidney bean curry with local spices', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400', isVegetarian: true, price: 150 },
      { id: 'f172', name: 'Ginger Tea & Snacks', description: 'Warming tea perfect for mountain air', image: 'https://images.unsplash.com/photo-1601055903547-2052b21a1b28?w=400', isVegetarian: true, price: 50 }
    ],
    attractions: [
      { id: 'a238', name: 'Badrinath Temple', description: 'One of the four sacred Char Dhams', image: 'https://images.unsplash.com/photo-1526481280692-3bfa7568e15c?w=400', distance: 'Destination', type: 'temple' },
      { id: 'a239', name: 'Mana Village', description: 'Last Indian village near Tibetan border', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=400', distance: '3 km', type: 'village' }
    ],
    tips: ['Respect local customs and temple rules', 'Acclimatize for high-altitude areas', 'Carry warm layers and medication'],
    reviews: [],
    isHiddenGem: false,
    isTrending: true,
    isAdventure: false,
    isSpiritual: true,
    isHoneymoon: false
  }
]

export const getDestinationBySlug = (slug: string) =>
  destinations.find(d => d.slug === slug)

export const getTrendingDestinations = () =>
  destinations.filter(d => d.isTrending)

export const getHiddenGems = () =>
  destinations.filter(d => d.isHiddenGem)