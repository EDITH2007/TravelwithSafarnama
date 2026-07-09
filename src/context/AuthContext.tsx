import React, { createContext, useContext, useState, useEffect } from 'react';
import { useConvex } from 'convex/react';
import { api } from '../../convex/_generated/api';
import toast from 'react-hot-toast';

// Type definitions
export interface User {
  _id: string;
  _creationTime: number;
  username: string;
  name: string;
  phone: string;
}

export interface VisitedLog {
  slug: string;
  rating: number;
  expense: number;
  visitedHighlights: string;
  foodName: string;
  foodRating: number;
  weather: string;
  experience: string;
  date: number;
}

export interface DiscoveredDestination {
  id: string;
  name: string;
  tagline: string;
  category: string;
  locationDetailed: string;
  whyVisit: string;
  bestTimeToVisit: string;
  description: string;
  howToReach: string;
  nearestTransport: string;
  entryFee: number;
  averageCost: number;
  isFree: boolean;
  facilities: string[];
  coverImage: string;
  thingsToCarry: string;
  thingsToAvoid: string;
  safetyTips: string;
  tags: string[];
  submittedBy: string;
  submittedByUsername: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  creationTime: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, password: string, name: string, phone: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfile: (name: string, phone: string) => Promise<boolean>;
  isMock: boolean;

  // Saved Destinations
  savedDestinations: string[];
  toggleSaveDestination: (slug: string) => void;
  isDestinationSaved: (slug: string) => boolean;

  // Trip Plans
  tripPlans: any[];
  saveTripPlan: (plan: any) => void;
  deleteTripPlan: (planId: string) => void;

  // Visited Places
  visitedPlaces: string[];
  toggleVisitedPlace: (slug: string) => void;
  isPlaceVisited: (slug: string) => boolean;
  
  // Detailed Visited Logs
  visitedLogs: VisitedLog[];
  addVisitedLog: (
    slug: string, 
    rating: number, 
    expense: number, 
    visitedHighlights: string, 
    foodName: string, 
    foodRating: number, 
    weather: string, 
    experience: string
  ) => void;
  removeVisitedLog: (slug: string) => void;
  activeVisitLoggingSlug: string | null;
  setActiveVisitLoggingSlug: (slug: string | null) => void;

  // Expenses
  expenses: any[];
  addExpense: (amount: number, category: string, description: string) => void;
  deleteExpense: (id: string) => void;

  // Travel Score Gamification
  travelScore: number;

  // Discovered Destinations by Travelers
  discoveredDestinations: DiscoveredDestination[];
  saveDiscovery: (discoveryData: Partial<DiscoveredDestination>) => void;
  deleteDiscovery: (id: string) => void;
  adminApproveDiscovery: (id: string) => void;
  adminRejectDiscovery: (id: string) => void;

  // Shared Website Data (Blogs, Gallery, Testimonials)
  blogs: any[];
  addBlog: (title: string, category: string, excerpt: string, coverImage: string, content: string) => void;

  allPhotos: any[];
  galleryPhotos: any[]; // Computed best photos per location
  uploadGalleryPhoto: (location: string, category: string, src: string) => Promise<boolean>;

  experiences: any[];
  landingPageStories: any[]; // Computed top 3 stories
  addExperience: (text: string, rating: number, destination: string, location: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Password hashing utility using Web Crypto API
async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// --- MOCK DATABASE HELPER (localStorage) ---
const getMockUsers = (): any[] => {
  const usersJson = localStorage.getItem('safarnama-mock-users');
  const users = usersJson ? JSON.parse(usersJson) : [];
  
  // Seed default admin if not present
  if (users.length === 0 || !users.some((u: any) => u.username === 'somendra')) {
    const defaultAdmin = {
      _id: 'mock-user-admin',
      _creationTime: Date.now(),
      username: 'somendra',
      passwordHash: '51d8d7aabfe1e07d3840434661fd8f81016e543ada7054cae8ba3d7f0095198c',
      salt: 'adminsalt',
      name: 'Somendra',
      phone: '9999999999'
    };
    users.push(defaultAdmin);
    localStorage.setItem('safarnama-mock-users', JSON.stringify(users));
  }
  return users;
};

const saveMockUsers = (users: any[]) => {
  localStorage.setItem('safarnama-mock-users', JSON.stringify(users));
};

const getMockSessions = (): any[] => {
  const sessionsJson = localStorage.getItem('safarnama-mock-sessions');
  return sessionsJson ? JSON.parse(sessionsJson) : [];
};

const saveMockSessions = (sessions: any[]) => {
  localStorage.setItem('safarnama-mock-sessions', JSON.stringify(sessions));
};

// --- DEFAULT INITIAL WEBSITE DATA ---
const defaultBlogs = [
  {
    id: '1',
    slug: 'hidden-gems-himachal',
    title: '10 Hidden Gems in Himachal Pradesh You Must Visit',
    excerpt: 'Discover the secret valleys, untouched villages, and hidden waterfalls of Himachal that most tourists miss.',
    coverImage: 'https://images.unsplash.com/photo-1626010448982-4d629b9d2386?w=800',
    author: { name: 'Rahul Sharma', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    category: 'Hidden Places',
    readTime: 8,
    createdAt: '2024-01-15',
    content: 'Himachal Pradesh is full of beauty, but beyond Manali and Shimla lie some pristine hidden valleys. Places like Tirthan Valley, Jibhi, and Barot are untouched spots offering majestic mountain views, trout fishing, and dense pine forests away from typical tourist crowds...',
  },
  {
    id: '2',
    slug: 'goa-monsoon-guide',
    title: 'Goa in Monsoon: A Complete Travel Guide',
    excerpt: 'Why visiting Goa during the rainy season might be the best decision you make. Waterfalls, green landscapes, and fewer crowds.',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    author: { name: 'Priya Patel', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    category: 'Travel Guide',
    readTime: 6,
    createdAt: '2024-02-10',
    content: 'Goa in the monsoons is an entirely different world. The beaches are quiet, the waterfalls (like Dudhsagar) are at their full roar, and the entire state is covered in lush green. It is the perfect time for nature lovers and writers seeking peace...',
  },
  {
    id: '3',
    slug: 'ladakh-road-trip',
    title: 'The Ultimate Ladakh Road Trip Itinerary',
    excerpt: 'A 10-day detailed itinerary covering Manali-Leh highway, Pangong Lake, Nubra Valley, and Tso Moriri.',
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    author: { name: 'Arjun Verma', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    category: 'Road Trip',
    readTime: 12,
    createdAt: '2024-03-05',
    content: 'Ladakh road trip is a dream for many. Crossing high passes like Khardung La and Chang La, driving next to the Indus river, and watching the pristine blue of Pangong Tso is an adventure of a lifetime. Ensure you acclimatize in Leh for 2 days before heading higher...',
  },
];

const defaultTestimonials = [
  {
    id: 't-1',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    location: 'Delhi',
    rating: 5,
    text: 'SafarNama helped me discover Hampi - a place I never knew existed! The detailed guides and local tips made my trip unforgettable.',
    destination: 'Hampi',
    score: 300,
  },
  {
    id: 't-2',
    name: 'Rahul Verma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    location: 'Mumbai',
    rating: 5,
    text: 'The trip planner feature is a game-changer. I planned my entire Ladakh trip in minutes with perfect itinerary suggestions.',
    destination: 'Leh-Ladakh',
    score: 250,
  },
  {
    id: 't-3',
    name: 'Ananya Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    location: 'Bangalore',
    rating: 5,
    text: 'Found the most romantic honeymoon spots in Goa through SafarNama. The hidden beach recommendations were spot on!',
    destination: 'Goa',
    score: 200,
  },
];

// --- ALGORITHMS ---

// 1. Text/Story Evaluation Algorithm
function calculateStoryScore(text: string, rating: number): number {
  const words = text.split(/\s+/).filter(Boolean);
  const wordsCount = words.length;

  const lengthScore = Math.min(400, wordsCount * 3);
  const ratingScore = rating * 40;

  const qualityKeywords = [
    'amazing', 'beautiful', 'must-visit', 'unforgettable', 'experience',
    'heritage', 'peaceful', 'stunning', 'hidden', 'explorer', 'local',
    'culture', 'breathtaking', 'recommend', 'perfect', 'scenic', 'nature'
  ];
  let keywordBonus = 0;
  const lowercaseText = text.toLowerCase();
  qualityKeywords.forEach(kw => {
    if (lowercaseText.includes(kw)) {
      keywordBonus += 30;
    }
  });

  return lengthScore + ratingScore + keywordBonus;
}

// 2. Image Aesthetic Scoring Algorithm
async function calculateImageAestheticScore(src: string): Promise<number> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = () => {
      try {
        const width = img.width;
        const height = img.height;
        const aspectRatio = width / height;

        // Preferred landscape format score
        let ratioScore = 0;
        if (aspectRatio >= 1.25 && aspectRatio <= 1.8) {
          ratioScore = 200; 
        } else if (aspectRatio > 0.8 && aspectRatio < 1.25) {
          ratioScore = 80;
        } else {
          ratioScore = 20;
        }

        // Resolution score (cap at 400 pts)
        const resolutionScore = Math.min(400, (width * height) / 8000);

        // Canvas processing for color vibrancy & contrast
        const canvas = document.createElement('canvas');
        canvas.width = 25;
        canvas.height = 25;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(ratioScore + resolutionScore);
          return;
        }

        ctx.drawImage(img, 0, 0, 25, 25);
        const imgData = ctx.getImageData(0, 0, 25, 25);
        const data = imgData.data;

        let totalR = 0, totalG = 0, totalB = 0;
        let luminanceList: number[] = [];

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];

          totalR += r;
          totalG += g;
          totalB += b;

          const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          luminanceList.push(luminance);
        }

        const pixelsCount = data.length / 4;
        const avgLuminance = luminanceList.reduce((s, l) => s + l, 0) / pixelsCount;
        const luminanceVar = luminanceList.reduce((s, l) => s + Math.pow(l - avgLuminance, 2), 0) / pixelsCount;
        const contrastScore = Math.sqrt(luminanceVar) * 2; // scale contrast

        // Colorfulness / Saturation calculation
        let colorfulness = 0;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const saturation = max === 0 ? 0 : (max - min) / max;
          colorfulness += saturation;
        }
        const saturationScore = (colorfulness / pixelsCount) * 250;

        const score = ratioScore + resolutionScore + contrastScore + saturationScore;
        resolve(Math.round(score));
      } catch (e) {
        // Fallback for CORS blocks
        const fallbackScore = 150 + Math.min(250, (img.width * img.height) / 40000);
        resolve(Math.round(fallbackScore));
      }
    };
    img.onerror = () => {
      // Fallback if image fails to load or URL is CORS-blocked (accept any URL, fallback score)
      const fallbackScore = 180 + Math.floor(Math.random() * 60);
      resolve(fallbackScore);
    };
  });
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const convex = useConvex();

  // User features states
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);
  const [tripPlans, setTripPlans] = useState<any[]>([]);
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([]);
  const [visitedLogs, setVisitedLogs] = useState<VisitedLog[]>([]);
  const [activeVisitLoggingSlug, setActiveVisitLoggingSlug] = useState<string | null>(null);
  const [expenses, setExpenses] = useState<any[]>([]);

  // Travel score state
  const [travelScore, setTravelScore] = useState(0);

  // Shared Global Data states
  const [blogs, setBlogs] = useState<any[]>([]);
  const [allPhotos, setAllPhotos] = useState<any[]>([]);
  const [galleryPhotos, setGalleryPhotos] = useState<any[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);
  const [landingPageStories, setLandingPageStories] = useState<any[]>([]);
  const [discoveredDestinations, setDiscoveredDestinations] = useState<DiscoveredDestination[]>([]);

  // Determine if we should run in Mock Mode
  const convexUrl = import.meta.env.VITE_CONVEX_URL || 'https://coordinated-alligator-228.convex.cloud';
  const isMock = !convexUrl || convexUrl.includes('dummy-url') || convexUrl.includes('placeholder');

  // Load Shared Global Data from localStorage or defaults
  useEffect(() => {
    const savedBlogs = localStorage.getItem('safarnama-global-blogs');
    setBlogs(savedBlogs ? JSON.parse(savedBlogs) : defaultBlogs);

    const savedPhotos = localStorage.getItem('safarnama-global-all-photos');
    setAllPhotos(savedPhotos ? JSON.parse(savedPhotos) : []); 

    const savedExperiences = localStorage.getItem('safarnama-global-experiences');
    setExperiences(savedExperiences ? JSON.parse(savedExperiences) : defaultTestimonials);

    const savedDiscoveries = localStorage.getItem('safarnama-global-discoveries');
    setDiscoveredDestinations(savedDiscoveries ? JSON.parse(savedDiscoveries) : []);
  }, []);

  // Compute Landing Page Stories and Gallery display pictures when variables change
  useEffect(() => {
    // 1. Landing page stories: top 3 by score
    const sorted = [...experiences].sort((a, b) => (b.score || 0) - (a.score || 0));
    setLandingPageStories(sorted.slice(0, 3));
  }, [experiences]);

  useEffect(() => {
    // 2. Best gallery photos: Highest score per location (case-insensitive)
    const locationsMap: { [key: string]: any } = {};
    allPhotos.forEach((photo) => {
      const locKey = photo.location.toLowerCase().trim();
      if (!locationsMap[locKey] || photo.score > locationsMap[locKey].score) {
        locationsMap[locKey] = photo;
      }
    });
    setGalleryPhotos(Object.values(locationsMap));
  }, [allPhotos]);

  // Compute travel score dynamically
  useEffect(() => {
    if (!user) {
      setTravelScore(0);
      return;
    }
    
    // Visited places: +100 points
    const visitedPoints = visitedPlaces.length * 100;

    // Detailed logs check: +50 points per detailed visit log
    const detailedCount = visitedLogs.filter(
      (l) => l.visitedHighlights || l.foodName || l.experience
    ).length;
    const logBonus = detailedCount * 50;

    // Blogs created: +200 points
    const userBlogsCount = blogs.filter((b) => b.uploadedByUsername === user.username).length;
    const blogPoints = userBlogsCount * 200;

    // Experiences shared: +150 points
    const userStoriesCount = experiences.filter((e) => e.uploadedByUsername === user.username).length;
    const storyPoints = userStoriesCount * 150;

    setTravelScore(visitedPoints + logBonus + blogPoints + storyPoints);
  }, [user, visitedPlaces, visitedLogs, blogs, experiences]);

  // Load user data helper
  const loadUserData = (userId: string) => {
    const saved = localStorage.getItem(`safarnama-saved-${userId}`);
    const trips = localStorage.getItem(`safarnama-trips-${userId}`);
    const visited = localStorage.getItem(`safarnama-visited-${userId}`);
    const logs = localStorage.getItem(`safarnama-visitedlogs-${userId}`);
    const exp = localStorage.getItem(`safarnama-expenses-${userId}`);

    setSavedDestinations(saved ? JSON.parse(saved) : []);
    setTripPlans(trips ? JSON.parse(trips) : []);
    setVisitedPlaces(visited ? JSON.parse(visited) : []);
    setVisitedLogs(logs ? JSON.parse(logs) : []);
    setExpenses(exp ? JSON.parse(exp) : []);
  };

  // Sync user data to localStorage
  useEffect(() => {
    if (user) {
      loadUserData(user._id);
    } else {
      setSavedDestinations([]);
      setTripPlans([]);
      setVisitedPlaces([]);
      setVisitedLogs([]);
      setExpenses([]);
    }
  }, [user]);

  // Try to load user session on mount
  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('safarnama-auth-token');
      if (token) {
        if (isMock) {
          const sessions = getMockSessions();
          const session = sessions.find((s) => s.token === token);
          if (session && session.expiresAt > Date.now()) {
            const users = getMockUsers();
            const foundUser = users.find((u) => u._id === session.userId);
            if (foundUser) {
              const { passwordHash, salt, ...userProfile } = foundUser;
              setUser(userProfile as User);
            } else {
              localStorage.removeItem('safarnama-auth-token');
            }
          } else {
            localStorage.removeItem('safarnama-auth-token');
          }
        } else {
          try {
            const userData = await convex.query(api.users.getByToken, { token });
            if (userData) {
              setUser(userData as User);
            } else {
              localStorage.removeItem('safarnama-auth-token');
            }
          } catch (error) {
            console.error('Error fetching user session from Convex:', error);
            localStorage.removeItem('safarnama-auth-token');
          }
        }
      }
      setIsLoading(false);
    };

    checkSession();
  }, [convex, isMock]);

  // Saved Destinations Helpers
  const isDestinationSaved = (slug: string) => savedDestinations.includes(slug);

  const toggleSaveDestination = (slug: string) => {
    if (!user) {
      toast.error('Please sign in to save destinations');
      return;
    }
    const updated = savedDestinations.includes(slug)
      ? savedDestinations.filter((s) => s !== slug)
      : [...savedDestinations, slug];
    setSavedDestinations(updated);
    localStorage.setItem(`safarnama-saved-${user._id}`, JSON.stringify(updated));
    if (savedDestinations.includes(slug)) {
      toast.success('Destination removed from wishlist');
    } else {
      toast.success('Destination saved to wishlist! ❤️');
    }
  };

  // Trip Plans Helpers
  const saveTripPlan = (plan: any) => {
    if (!user) {
      toast.error('Please sign in to save trip plans');
      return;
    }
    const updated = [...tripPlans, { ...plan, id: `trip-${Date.now()}`, creationTime: Date.now() }];
    setTripPlans(updated);
    localStorage.setItem(`safarnama-trips-${user._id}`, JSON.stringify(updated));
    toast.success('Trip plan saved successfully! ✈️');
  };

  const deleteTripPlan = (planId: string) => {
    if (!user) return;
    const updated = tripPlans.filter((t) => t.id !== planId);
    setTripPlans(updated);
    localStorage.setItem(`safarnama-trips-${user._id}`, JSON.stringify(updated));
    toast.success('Trip plan deleted');
  };

  // Visited Places & Detailed Visited Logs
  const isPlaceVisited = (slug: string) => visitedPlaces.includes(slug);

  const toggleVisitedPlace = (slug: string) => {
    if (!user) {
      toast.error('Please sign in to log visited places');
      return;
    }
    if (visitedPlaces.includes(slug)) {
      removeVisitedLog(slug);
    } else {
      setActiveVisitLoggingSlug(slug);
      toast('Let\'s add some travel details for your visit! 📝');
      if (window.location.pathname !== '/dashboard') {
        window.location.href = '/dashboard';
      }
    }
  };

  const addVisitedLog = (
    slug: string, 
    rating: number, 
    expense: number, 
    visitedHighlights: string, 
    foodName: string, 
    foodRating: number, 
    weather: string, 
    experience: string
  ) => {
    if (!user) return;

    // 1. Add to visitedPlaces if not already present
    let updatedPlaces = [...visitedPlaces];
    if (!visitedPlaces.includes(slug)) {
      updatedPlaces.push(slug);
      setVisitedPlaces(updatedPlaces);
      localStorage.setItem(`safarnama-visited-${user._id}`, JSON.stringify(updatedPlaces));
    }

    // 2. Add or update the visited log item
    const newLog: VisitedLog = {
      slug,
      rating,
      expense,
      visitedHighlights,
      foodName,
      foodRating,
      weather,
      experience,
      date: Date.now()
    };

    const existingIndex = visitedLogs.findIndex((log) => log.slug === slug);
    let updatedLogs = [...visitedLogs];
    if (existingIndex > -1) {
      updatedLogs[existingIndex] = newLog;
    } else {
      updatedLogs.push(newLog);
    }
    setVisitedLogs(updatedLogs);
    localStorage.setItem(`safarnama-visitedlogs-${user._id}`, JSON.stringify(updatedLogs));

    // 3. Remove from wishlist/saved destinations automatically if it is there!
    if (savedDestinations.includes(slug)) {
      const updatedSaved = savedDestinations.filter((s) => s !== slug);
      setSavedDestinations(updatedSaved);
      localStorage.setItem(`safarnama-saved-${user._id}`, JSON.stringify(updatedSaved));
    }

    toast.success('Visited place details logged! Wishlist updated. 📍');
  };

  const removeVisitedLog = (slug: string) => {
    if (!user) return;
    const updatedPlaces = visitedPlaces.filter((s) => s !== slug);
    setVisitedPlaces(updatedPlaces);
    localStorage.setItem(`safarnama-visited-${user._id}`, JSON.stringify(updatedPlaces));

    const updatedLogs = visitedLogs.filter((l) => l.slug !== slug);
    setVisitedLogs(updatedLogs);
    localStorage.setItem(`safarnama-visitedlogs-${user._id}`, JSON.stringify(updatedLogs));

    toast.success('Trip visit removed');
  };

  // Expenses Helpers
  const addExpense = (amount: number, category: string, description: string) => {
    if (!user) return;
    const updated = [
      ...expenses,
      { id: `exp-${Date.now()}`, amount, category, description, date: Date.now() },
    ];
    setExpenses(updated);
    localStorage.setItem(`safarnama-expenses-${user._id}`, JSON.stringify(updated));
    toast.success('Expense logged successfully! 💰');
  };

  const deleteExpense = (id: string) => {
    if (!user) return;
    const updated = expenses.filter((e) => e.id !== id);
    setExpenses(updated);
    localStorage.setItem(`safarnama-expenses-${user._id}`, JSON.stringify(updated));
    toast.success('Expense item removed');
  };

  // --- BLOG SHARING ---
  const addBlog = (title: string, category: string, excerpt: string, coverImage: string, content: string) => {
    if (!user) {
      toast.error('Please sign in to post a blog');
      return;
    }
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newBlog = {
      id: `blog-${Date.now()}`,
      slug,
      title,
      excerpt,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      author: { name: user.name, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
      category,
      readTime: Math.max(3, Math.ceil(content.split(/\s+/).length / 200)),
      createdAt: new Date().toISOString().split('T')[0],
      content,
      uploadedByUsername: user.username,
    };
    const updated = [newBlog, ...blogs];
    setBlogs(updated);
    localStorage.setItem('safarnama-global-blogs', JSON.stringify(updated));
    toast.success('Blog published successfully! ✍️');
  };

  // --- PHOTO SHARING WITH IMAGE AESTHETIC RATING ---
  const uploadGalleryPhoto = async (location: string, category: string, src: string): Promise<boolean> => {
    if (!user) {
      toast.error('Please sign in to upload photos');
      return false;
    }

    const checkToastId = toast.loading('Evaluating image aesthetic score...');
    try {
      const score = await calculateImageAestheticScore(src);
      if (score === 0) {
        throw new Error('Could not load image. Make sure the URL is valid.');
      }

      // Filter out user's previous upload (strict 1 photo upload limit!)
      const remainingPhotos = allPhotos.filter((p) => p.uploadedByUsername !== user.username);

      const newPhoto = {
        id: `photo-${Date.now()}`,
        src,
        location,
        category,
        uploadedBy: user.name,
        uploadedByUsername: user.username,
        score,
      };

      const updated = [...remainingPhotos, newPhoto];
      setAllPhotos(updated);
      localStorage.setItem('safarnama-global-all-photos', JSON.stringify(updated));

      // Check if it will be displayed in the gallery (highest score for this location)
      const locKey = location.toLowerCase().trim();
      const currentLocPhotos = updated.filter(p => p.location.toLowerCase().trim() === locKey);
      const isBest = currentLocPhotos.length === 0 || score >= Math.max(...currentLocPhotos.map(p => p.score));

      if (isBest) {
        toast.success(`Aesthetic score: ${score}! Your photo is now featured in the gallery! 🌟`, { id: checkToastId });
      } else {
        toast.success(`Aesthetic score: ${score}. Uploaded! However, another featured photo has a higher score.`, { id: checkToastId });
      }
      return true;
    } catch (e: any) {
      toast.error(e.message || 'Photo upload failed.', { id: checkToastId });
      return false;
    }
  };

  // --- EXPERIENCE SHARING WITH STORY QUALITY RANKING ---
  const addExperience = (text: string, rating: number, destination: string, location: string) => {
    if (!user) {
      toast.error('Please sign in to share your story');
      return;
    }
    const score = calculateStoryScore(text, rating);
    const newExperience = {
      id: `exp-story-${Date.now()}`,
      name: user.name,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      location: location || 'Traveler',
      rating,
      text,
      destination,
      score,
      uploadedByUsername: user.username,
    };
    const updated = [newExperience, ...experiences];
    setExperiences(updated);
    localStorage.setItem('safarnama-global-experiences', JSON.stringify(updated));
    toast.success('Your experience story has been submitted! 📣');
  };

  // Log in
  const login = async (username: string, password: string): Promise<boolean> => {
    const loginToastId = toast.loading('Logging in...');
    try {
      const normalizedUsername = username.toLowerCase().trim();

      if (isMock) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        const users = getMockUsers();
        const foundUser = users.find((u) => u.username === normalizedUsername);
        
        if (!foundUser) {
          throw new Error('Invalid username or password');
        }

        const inputHash = await hashPassword(password, foundUser.salt);
        if (inputHash !== foundUser.passwordHash) {
          throw new Error('Invalid username or password');
        }

        const token = `mock-session-${Math.random().toString(36).substring(2)}-${Date.now()}`;
        const sessions = getMockSessions();
        sessions.push({
          userId: foundUser._id,
          token,
          expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
        });
        saveMockSessions(sessions);

        localStorage.setItem('safarnama-auth-token', token);
        const { passwordHash, salt, ...userProfile } = foundUser;
        setUser(userProfile as User);

        toast.success(`Welcome back, ${userProfile.name}! (Local Mock)`, { id: loginToastId });
        return true;
      } else {
        const salt = await convex.query(api.users.getSalt, { username: normalizedUsername });
        if (!salt) {
          throw new Error('Invalid username or password');
        }

        const passwordHash = await hashPassword(password, salt);
        const result = await convex.mutation(api.users.login, { username: normalizedUsername, passwordHash });
        
        setUser(result.user as User);
        localStorage.setItem('safarnama-auth-token', result.token);
        
        toast.success(`Welcome back, ${result.user.name}!`, { id: loginToastId });
        return true;
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed. Please try again.', { id: loginToastId });
      return false;
    }
  };

  // Register
  const register = async (username: string, password: string, name: string, phone: string): Promise<boolean> => {
    const registerToastId = toast.loading('Creating account...');
    try {
      const normalizedUsername = username.toLowerCase().trim();

      if (isMock) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const users = getMockUsers();
        const existingUser = users.find((u) => u.username === normalizedUsername);
        if (existingUser) {
          throw new Error('Username already taken');
        }

        const salt = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const passwordHash = await hashPassword(password, salt);
        const userId = `mock-user-${Math.random().toString(36).substring(2)}`;

        const newUser = {
          _id: userId,
          _creationTime: Date.now(),
          username: normalizedUsername,
          passwordHash,
          salt,
          name,
          phone,
        };

        users.push(newUser);
        saveMockUsers(users);

        const token = `mock-session-${Math.random().toString(36).substring(2)}-${Date.now()}`;
        const sessions = getMockSessions();
        sessions.push({
          userId,
          token,
          expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
        });
        saveMockSessions(sessions);

        localStorage.setItem('safarnama-auth-token', token);
        const { passwordHash: ph, salt: s, ...userProfile } = newUser;
        setUser(userProfile as User);

        toast.success(`Account created! Welcome, ${newUser.name}! (Local Mock)`, { id: registerToastId });
        return true;
      } else {
        const salt = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const passwordHash = await hashPassword(password, salt);

        const result = await convex.mutation(api.users.register, {
          username: normalizedUsername,
          passwordHash,
          salt,
          name,
          phone,
        });

        setUser(result.user as User);
        localStorage.setItem('safarnama-auth-token', result.token);

        toast.success(`Account created! Welcome, ${result.user.name}!`, { id: registerToastId });
        return true;
      }
    } catch (error: any) {
      toast.error(error.message || 'Registration failed.', { id: registerToastId });
      return false;
    }
  };

  // Log out
  const logout = async () => {
    const token = localStorage.getItem('safarnama-auth-token');
    if (token) {
      if (isMock) {
        const sessions = getMockSessions();
        const remainingSessions = sessions.filter((s) => s.token !== token);
        saveMockSessions(remainingSessions);
      } else {
        try {
          await convex.mutation(api.users.logout, { token });
        } catch (error) {
          console.error('Error logging out on backend:', error);
        }
      }
    }
    localStorage.removeItem('safarnama-auth-token');
    setUser(null);
    toast.success('Logged out successfully');
  };

  // Update Profile
  const updateProfile = async (name: string, phone: string): Promise<boolean> => {
    const token = localStorage.getItem('safarnama-auth-token');
    if (!token) {
      toast.error('You must be logged in to update profile');
      return false;
    }

    const updateToastId = toast.loading('Updating profile...');
    try {
      if (isMock) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const sessions = getMockSessions();
        const session = sessions.find((s) => s.token === token);
        if (!session || session.expiresAt < Date.now()) {
          throw new Error('Unauthorized or session expired');
        }

        const users = getMockUsers();
        const userIndex = users.findIndex((u) => u._id === session.userId);
        if (userIndex === -1) {
          throw new Error('User not found');
        }

        users[userIndex].name = name;
        users[userIndex].phone = phone;
        saveMockUsers(users);

        const { passwordHash, salt, ...userProfile } = users[userIndex];
        setUser(userProfile as User);

        toast.success('Profile updated! (Local Mock)', { id: updateToastId });
        return true;
      } else {
        const updatedUser = await convex.mutation(api.users.updateProfile, {
          token,
          name,
          phone,
        });

        setUser(updatedUser as User);
        toast.success('Profile updated successfully!', { id: updateToastId });
        return true;
      }
    } catch (error: any) {
      toast.error(error.message || 'Profile update failed.', { id: updateToastId });
      return false;
    }
  };

  // Discovered Destinations by Travelers
  const saveDiscovery = (discoveryData: Partial<DiscoveredDestination>) => {
    if (!user) {
      toast.error('Please sign in to share a discovery');
      return;
    }
    const discoveryId = discoveryData.id || `discovery-${Date.now()}`;
    const existingIndex = discoveredDestinations.findIndex((d) => d.id === discoveryId);

    const fullDiscovery: DiscoveredDestination = {
      id: discoveryId,
      name: discoveryData.name || '',
      tagline: discoveryData.tagline || '',
      category: discoveryData.category || 'Mountains',
      locationDetailed: discoveryData.locationDetailed || '',
      whyVisit: discoveryData.whyVisit || '',
      bestTimeToVisit: discoveryData.bestTimeToVisit || '',
      description: discoveryData.description || '',
      howToReach: discoveryData.howToReach || '',
      nearestTransport: discoveryData.nearestTransport || '',
      entryFee: discoveryData.entryFee || 0,
      averageCost: discoveryData.averageCost || 0,
      isFree: discoveryData.isFree ?? false,
      facilities: discoveryData.facilities || [],
      coverImage: discoveryData.coverImage || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      thingsToCarry: discoveryData.thingsToCarry || '',
      thingsToAvoid: discoveryData.thingsToAvoid || '',
      safetyTips: discoveryData.safetyTips || '',
      tags: discoveryData.tags || [],
      submittedBy: user.name,
      submittedByUsername: user.username,
      status: discoveryData.status || 'draft',
      creationTime: discoveryData.creationTime || Date.now(),
    };

    let updated = [...discoveredDestinations];
    if (existingIndex > -1) {
      updated[existingIndex] = fullDiscovery;
    } else {
      updated.push(fullDiscovery);
    }

    setDiscoveredDestinations(updated);
    localStorage.setItem('safarnama-global-discoveries', JSON.stringify(updated));

    if (fullDiscovery.status === 'pending') {
      toast.success('Discovery submitted for Admin approval! 🚀');
    } else {
      toast.success('Discovery draft saved! 📁');
    }
  };

  const deleteDiscovery = (id: string) => {
    const updated = discoveredDestinations.filter((d) => d.id !== id);
    setDiscoveredDestinations(updated);
    localStorage.setItem('safarnama-global-discoveries', JSON.stringify(updated));
    toast.success('Discovery deleted');
  };

  const adminApproveDiscovery = (id: string) => {
    const updated = discoveredDestinations.map((d) =>
      d.id === id ? { ...d, status: 'approved' as const } : d
    );
    setDiscoveredDestinations(updated);
    localStorage.setItem('safarnama-global-discoveries', JSON.stringify(updated));
    toast.success('Destination approved & published! 🌟');
  };

  const adminRejectDiscovery = (id: string) => {
    const updated = discoveredDestinations.map((d) =>
      d.id === id ? { ...d, status: 'rejected' as const } : d
    );
    setDiscoveredDestinations(updated);
    localStorage.setItem('safarnama-global-discoveries', JSON.stringify(updated));
    toast.success('Destination request rejected');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        isMock,
        savedDestinations,
        toggleSaveDestination,
        isDestinationSaved,
        tripPlans,
        saveTripPlan,
        deleteTripPlan,
        visitedPlaces,
        toggleVisitedPlace,
        isPlaceVisited,
        visitedLogs,
        addVisitedLog,
        removeVisitedLog,
        activeVisitLoggingSlug,
        setActiveVisitLoggingSlug,
        expenses,
        addExpense,
        deleteExpense,
        travelScore,
        discoveredDestinations,
        saveDiscovery,
        deleteDiscovery,
        adminApproveDiscovery,
        adminRejectDiscovery,
        blogs,
        addBlog,
        allPhotos,
        galleryPhotos,
        uploadGalleryPhoto,
        experiences,
        landingPageStories,
        addExperience,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
