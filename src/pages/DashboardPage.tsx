import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, MapPin, User, Phone, Lock, Eye, EyeOff, 
  Edit3, LogOut, X, Compass, DollarSign, Calendar, 
  Plus, Trash, Star, Briefcase, ChevronRight,
  Camera, BookOpen, Send
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { destinations } from '../data/destinations'

export default function DashboardPage() {
  const { 
    user, isLoading, login, register, logout, updateProfile, isMock,
    savedDestinations, toggleSaveDestination,
    tripPlans, deleteTripPlan,
    visitedPlaces, toggleVisitedPlace,
    visitedLogs, addVisitedLog,
    activeVisitLoggingSlug, setActiveVisitLoggingSlug,
    expenses, addExpense, deleteExpense,
    travelScore,
    addBlog,
    allPhotos, uploadGalleryPhoto,
    addExperience
  } = useAuth();

  // Auth form state
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Profile edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');

  // Dashboard Nav Tab state
  const [activeTab, setActiveTab] = useState<'overview' | 'wishlist' | 'visitedPlacesTab' | 'trips' | 'expenses' | 'share' | 'write' | 'profile'>('overview');

  // Segment sub-tab inside Dashboard Overview
  const [overviewSubTab, setOverviewSubTab] = useState<'wishlist' | 'visited'>('wishlist');

  // New Expense state
  const [expAmount, setExpAmount] = useState('');
  const [expCategory, setExpCategory] = useState('Transport');
  const [expDescription, setExpDescription] = useState('');
  const [showAddExpense, setShowAddExpense] = useState(false);

  // Active Trip Details modal state
  const [selectedTrip, setSelectedTrip] = useState<any | null>(null);

  // Gallery photo upload form state
  const [photoLocation, setPhotoLocation] = useState('');
  const [photoCategory, setPhotoCategory] = useState('Mountains');
  const [photoSrc, setPhotoSrc] = useState('');
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  // Traveler Experience form state
  const [expStoryText, setExpStoryText] = useState('');
  const [expStoryRating, setExpStoryRating] = useState(5);
  const [expStoryDest, setExpStoryDest] = useState('');
  const [expStoryTravelerLoc, setExpStoryTravelerLoc] = useState('');

  // Blog post form state
  const [blogTitle, setBlogTitle] = useState('');
  const [blogCategory, setBlogCategory] = useState('Hidden Places');
  const [blogExcerpt, setBlogExcerpt] = useState('');
  const [blogCoverImage, setBlogCoverImage] = useState('');
  const [blogContent, setBlogContent] = useState('');

  // Map slugs to actual destination details
  const savedDestinationsData = savedDestinations
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter(Boolean);

  const visitedDestinationsData = visitedPlaces
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter(Boolean);

  const visitedStatesCount = new Set(visitedDestinationsData.map((d) => d?.state)).size;

  // Calculate statistics
  const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);

  // Find user's active uploaded photo (max 1 photo constraint)
  const userPhoto = allPhotos.find((p) => p.uploadedByUsername === user?.username);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginTab) {
      if (!username || !password) return;
      await login(username, password);
    } else {
      if (!username || !password || !name || !phone) return;
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      await register(username, password, name, phone);
    }
  };

  const startEditing = () => {
    if (user) {
      setEditName(user.name);
      setEditPhone(user.phone);
      setIsEditing(true);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim() || !editPhone.trim()) return;
    const success = await updateProfile(editName, editPhone);
    if (success) {
      setIsEditing(false);
    }
  };

  const handleAddExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(expAmount);
    if (isNaN(amountNum) || amountNum <= 0 || !expDescription.trim()) return;
    addExpense(amountNum, expCategory, expDescription);
    setExpAmount('');
    setExpDescription('');
    setShowAddExpense(false);
  };

  const handlePhotoUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoLocation.trim() || !photoSrc.trim()) return;
    setIsUploadingPhoto(true);
    const success = await uploadGalleryPhoto(photoLocation.trim(), photoCategory, photoSrc.trim());
    setIsUploadingPhoto(false);
    if (success) {
      setPhotoLocation('');
      setPhotoSrc('');
    }
  };

  const handleExperienceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expStoryText.trim() || !expStoryDest.trim() || !expStoryTravelerLoc.trim()) return;
    addExperience(expStoryText.trim(), expStoryRating, expStoryDest.trim(), expStoryTravelerLoc.trim());
    setExpStoryText('');
    setExpStoryDest('');
    setExpStoryTravelerLoc('');
  };

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle.trim() || !blogExcerpt.trim() || !blogContent.trim()) return;
    addBlog(
      blogTitle.trim(),
      blogCategory,
      blogExcerpt.trim(),
      blogCoverImage.trim(),
      blogContent.trim()
    );
    setBlogTitle('');
    setBlogExcerpt('');
    setBlogCoverImage('');
    setBlogContent('');
  };



  function getTravelBadge(score: number): string {
    if (score >= 1200) return 'Globetrotter'
    if (score >= 800) return 'Pathfinder'
    if (score >= 400) return 'Explorer'
    if (score >= 200) return 'Wanderer'
    return 'Novice'
  }

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="section-padding max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!user ? (
            /* --- NOT AUTHENTICATED --- */
            <motion.div
              key="auth-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-xl overflow-hidden mt-12"
            >
              {/* Header Tab Toggles */}
              <div className="flex border-b border-gray-200 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => setIsLoginTab(true)}
                  className={`flex-1 py-4 text-center font-semibold transition-all relative ${
                    isLoginTab 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  Sign In
                  {isLoginTab && (
                    <motion.div 
                      layoutId="active-tab" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" 
                    />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setIsLoginTab(false)}
                  className={`flex-1 py-4 text-center font-semibold transition-all relative ${
                    !isLoginTab 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  Sign Up
                  {!isLoginTab && (
                    <motion.div 
                      layoutId="active-tab" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" 
                    />
                  )}
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleAuthSubmit} className="p-8 space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {isLoginTab ? 'Welcome Back!' : 'Join SafarNama'}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {isLoginTab 
                      ? 'Sign in to access your planned trips and profile' 
                      : 'Create an account to start planning your journeys'}
                  </p>
                </div>

                <div className="space-y-4">
                  {!isLoginTab && (
                    <>
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Username */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="traveler123"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {!isLoginTab && (
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {isLoginTab ? 'Sign In' : 'Sign Up'}
                </button>
              </form>
            </motion.div>
          ) : (
            /* --- AUTHENTICATED: Premium Redesigned Dashboard Layout --- */
            <div className="flex flex-col lg:flex-row gap-8 mt-4">
              
              {/* --- LEFT SIDEBAR (Floating Glass Sidebar) --- */}
              <aside className="w-full lg:w-64 shrink-0 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/40 rounded-3xl p-6 shadow-sm flex flex-col justify-between h-fit">
                <div className="space-y-6">
                  {/* User Profile Mini Card */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200/50 dark:border-gray-800/40">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/10">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-900 dark:text-white truncate">{user.name}</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium truncate">@{user.username}</p>
                    </div>
                  </div>

                  {/* Sidebar Nav Items */}
                  <nav className="space-y-1">
                    {[
                      { id: 'overview', name: 'Dashboard', icon: Compass },
                      { id: 'wishlist', name: 'Wishlist', icon: Heart, badge: savedDestinations.length },
                      { id: 'visitedPlacesTab', name: 'Visited Places', icon: MapPin, badge: visitedPlaces.length },
                      { id: 'trips', name: 'My Trip Plans', icon: Briefcase, badge: tripPlans.length },
                      { id: 'expenses', name: 'Expense Tracker', icon: DollarSign },
                      { id: 'share', name: 'Share Photo & Story', icon: Camera },
                      { id: 'write', name: 'Write Travel Blog', icon: Edit3 },
                      { id: 'profile', name: 'Profile Settings', icon: User },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id as any)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          activeTab === item.id
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/15'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.badge !== undefined && item.badge > 0 && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            activeTab === item.id ? 'bg-white/20 text-white' : 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/50 dark:border-gray-800/40 space-y-3">
                  {isMock && (
                    <div className="px-3 py-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30 rounded-xl text-[10px] text-amber-800 dark:text-amber-300 font-semibold leading-normal">
                      ⚠️ Offline Mock Mode Active
                    </div>
                  )}
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </aside>

              {/* --- RIGHT WINDOW CONTENT --- */}
              <div className="flex-1 space-y-6">
                
                {/* --- REDESIGNED WELCOME BANNER WITH BG COVER IMAGE --- */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-md min-h-[190px] flex flex-col justify-end">
                  {/* Backdrop canvas empty decoration background */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200')] bg-cover bg-center opacity-30 mix-blend-overlay" />
                  
                  {/* Dynamic travel score pill */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md">
                    👑 Travel Score: {travelScore} XP
                  </div>

                  <div className="relative z-10 space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-200">Welcome Back Traveler,</span>
                    <h2 className="text-3xl md:text-4xl font-black">{user.name}</h2>
                    <p className="text-xs text-blue-100 font-semibold flex items-center gap-2">
                      <span>@{user.username}</span>
                      <span>•</span>
                      <span>Level {Math.floor(travelScore / 400) + 1} {getTravelBadge(travelScore)}</span>
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <motion.div
                      key="tab-overview"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 xl:grid-cols-3 gap-6"
                    >
                      <div className="xl:col-span-2 space-y-6">
                        {/* Upcoming Adventure Banner */}
                        {tripPlans.length > 0 ? (
                          (() => {
                            const nextTrip = tripPlans[tripPlans.length - 1];
                            const destDetails = destinations.find((d) => d.name.toLowerCase() === nextTrip.destination.toLowerCase());
                            return (
                              <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-6">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                                <div className="w-full md:w-44 h-28 rounded-2xl overflow-hidden shrink-0">
                                  <img 
                                    src={destDetails?.images[0] || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400'} 
                                    alt={nextTrip.destination}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                  <div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400">Next Adventure</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{nextTrip.destination}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1.5">
                                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                                      {nextTrip.startDate} to {nextTrip.endDate} • {nextTrip.travelers} Travelers
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-4 mt-4">
                                    <button 
                                      onClick={() => setSelectedTrip(nextTrip)}
                                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
                                    >
                                      View Itinerary
                                    </button>
                                    <button 
                                      onClick={() => deleteTripPlan(nextTrip.id)}
                                      className="text-gray-400 hover:text-red-500 transition-colors text-xs font-semibold"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })()
                        ) : (
                          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 w-44 h-44 bg-white/10 rounded-full blur-3xl" />
                            <div className="space-y-2">
                              <h3 className="text-2xl font-bold">Plan Your Next Trip!</h3>
                              <p className="text-sm text-blue-100 max-w-sm">No upcoming adventures logged. Tell our AI assistant where you want to go and get a customized schedule instantly.</p>
                            </div>
                            <Link 
                              to="/trip-planner" 
                              className="px-6 py-3 bg-white text-blue-600 rounded-xl text-sm font-semibold hover:shadow-lg transition-all shrink-0 hover:-translate-y-0.5"
                            >
                              Get Started
                            </Link>
                          </div>
                        )}

                        {/* Saved & Visited Destinations List Segment */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                            <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl w-fit">
                              <button
                                onClick={() => setOverviewSubTab('wishlist')}
                                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                  overviewSubTab === 'wishlist'
                                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                                }`}
                              >
                                Wishlist ({savedDestinations.length})
                              </button>
                              <button
                                onClick={() => setOverviewSubTab('visited')}
                                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                  overviewSubTab === 'visited'
                                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                                }`}
                              >
                                Visited ({visitedPlaces.length})
                              </button>
                            </div>
                            <Link to="/destinations" className="text-xs text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                              Explore More <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                          {overviewSubTab === 'wishlist' ? (
                            savedDestinationsData.length > 0 ? (
                              <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-sm">
                                  <thead>
                                    <tr className="border-b border-gray-200/50 dark:border-gray-800/40 text-gray-500 font-semibold pb-3">
                                      <th className="pb-3 pr-4">#</th>
                                      <th className="pb-3 pr-4">Destination</th>
                                      <th className="pb-3 pr-4">State</th>
                                      <th className="pb-3 pr-4">Rating</th>
                                      <th className="pb-3 text-right">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {savedDestinationsData.slice(0, 5).map((dest, idx) => (
                                      <tr key={dest?.slug} className="border-b border-gray-100/50 dark:border-gray-900/50 last:border-none group">
                                        <td className="py-3.5 text-gray-400 font-medium">{idx + 1}</td>
                                        <td className="py-3.5 pr-4 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                          <img 
                                            src={dest?.bannerImage || dest?.images[0]} 
                                            alt={dest?.name} 
                                            className="w-10 h-8 rounded-lg object-cover"
                                          />
                                          <Link to={`/destinations/${dest?.slug}`} className="hover:text-blue-600 transition-colors">
                                            {dest?.name}
                                          </Link>
                                        </td>
                                        <td className="py-3.5 pr-4 text-gray-500 dark:text-gray-400">{dest?.state}</td>
                                        <td className="py-3.5 pr-4 font-bold text-gray-700 dark:text-gray-300">
                                          <div className="flex items-center gap-1 text-orange-500">
                                            <Star className="w-3.5 h-3.5 fill-orange-500" />
                                            {dest?.rating}
                                          </div>
                                        </td>
                                        <td className="py-3.5 text-right flex gap-3 justify-end items-center">
                                          <button 
                                            onClick={() => dest && toggleVisitedPlace(dest.slug)}
                                            className="text-xs text-blue-600 hover:underline font-semibold"
                                          >
                                            Log Visit
                                          </button>
                                          <button 
                                            onClick={() => dest && toggleSaveDestination(dest.slug)}
                                            className="text-xs text-red-500 hover:underline font-semibold"
                                          >
                                            Remove
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <div className="text-center py-10">
                                <Heart className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                                <p className="text-gray-500 dark:text-gray-400 text-sm">No saved destinations. Head to Destinations to add some.</p>
                                <Link to="/destinations" className="inline-block mt-4 text-xs font-bold text-blue-600">
                                  Browse Destinations
                                </Link>
                              </div>
                            )
                          ) : (
                            visitedDestinationsData.length > 0 ? (
                              <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-sm">
                                  <thead>
                                    <tr className="border-b border-gray-200/50 dark:border-gray-800/40 text-gray-500 font-semibold pb-3">
                                      <th className="pb-3 pr-4">#</th>
                                      <th className="pb-3 pr-4">Destination</th>
                                      <th className="pb-3 pr-4">State</th>
                                      <th className="pb-3 pr-4">Rating</th>
                                      <th className="pb-3 text-right">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {visitedDestinationsData.slice(0, 5).map((dest, idx) => {
                                      const log = visitedLogs.find((l) => l.slug === dest?.slug);
                                      return (
                                        <tr key={dest?.slug} className="border-b border-gray-100/50 dark:border-gray-900/50 last:border-none group">
                                          <td className="py-3.5 text-gray-400 font-medium">{idx + 1}</td>
                                          <td className="py-3.5 pr-4 font-bold text-gray-900 dark:text-white flex items-center gap-3">
                                            <img 
                                              src={dest?.bannerImage || dest?.images[0]} 
                                              alt={dest?.name} 
                                              className="w-10 h-8 rounded-lg object-cover"
                                            />
                                            <Link to={`/destinations/${dest?.slug}`} className="hover:text-blue-600 transition-colors">
                                              {dest?.name}
                                            </Link>
                                          </td>
                                          <td className="py-3.5 pr-4 text-gray-500 dark:text-gray-400">{dest?.state}</td>
                                          <td className="py-3.5 pr-4">
                                            <div className="flex items-center gap-1 text-orange-500 font-semibold text-xs">
                                              <Star className="w-3.5 h-3.5 fill-orange-500" />
                                              {log ? `${log.rating} (Logged)` : `${dest?.rating} (Avg)`}
                                            </div>
                                          </td>
                                          <td className="py-3.5 text-right flex gap-3 justify-end items-center">
                                            <button 
                                              onClick={() => dest && setActiveVisitLoggingSlug(dest.slug)}
                                              className="text-xs text-blue-600 hover:underline font-semibold"
                                            >
                                              {log ? 'Edit Log' : 'Add Log'}
                                            </button>
                                            <button 
                                              onClick={() => dest && toggleVisitedPlace(dest.slug)}
                                              className="text-xs text-red-500 hover:underline font-semibold"
                                            >
                                              Remove
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <div className="text-center py-10">
                                <MapPin className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                                <p className="text-gray-500 dark:text-gray-400 text-sm">You haven't logged any visited places yet. Mark them on destinations page or search cards.</p>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Right column statistics metrics */}
                      <div className="space-y-6">
                        
                        {/* 1. States Visited Progress (Only 1 time featured here!) */}
                        <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm">
                          <div>
                            <div className="flex justify-between items-center">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Visited States across India</h4>
                              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-full">
                                {visitedStatesCount} / 28
                              </span>
                            </div>
                            <div className="relative w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full mt-4 overflow-hidden">
                              <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                                style={{ width: `${(visitedStatesCount / 28) * 100}%` }}
                              />
                            </div>
                            <div className="flex justify-between items-center text-[10px] text-gray-400 mt-2 font-medium">
                              <span>0 States</span>
                              <span>Target: 28 States</span>
                            </div>
                          </div>
                          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-xs font-semibold text-gray-500">
                            <span>Total Visited Locations</span>
                            <span className="text-gray-950 dark:text-white font-bold">{visitedPlaces.length} Places</span>
                          </div>
                        </div>

                        {/* 4. AI Itinerary Planner banner */}
                        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 dark:from-slate-900 dark:to-black text-white rounded-3xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-48 border border-slate-800">
                          <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-semibold text-indigo-400">PLANNER INSTANT</span>
                            <h3 className="text-lg font-bold mt-2">Create custom travel schedules</h3>
                            <p className="text-xs text-gray-400 mt-1 leading-normal">Ready for your next trip? Connect to AI to plan itineraries.</p>
                          </div>
                          <Link 
                            to="/trip-planner"
                            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold text-center mt-6 transition-all"
                          >
                            Go to Trip Planner
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* WISHLIST TAB */}
                  {activeTab === 'wishlist' && (
                    <motion.div
                      key="tab-wishlist"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Wishlist Destinations</h2>
                      {savedDestinationsData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {savedDestinationsData.map((dest) => (
                            <div key={dest?.slug} className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
                              <div className="relative h-44 overflow-hidden">
                                <img 
                                  src={dest?.images[0]} 
                                  alt={dest?.name} 
                                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                                />
                                <button 
                                  onClick={() => dest && toggleSaveDestination(dest.slug)}
                                  className="absolute top-3 right-3 p-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md text-red-500"
                                >
                                  <Heart className="w-4 h-4 fill-red-500" />
                                </button>
                              </div>
                              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                  <span className="text-[10px] text-gray-400 font-semibold uppercase">{dest?.state}</span>
                                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mt-0.5">{dest?.name}</h3>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1 leading-normal">{dest?.description}</p>
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                  <span className="text-xs font-bold text-blue-600">
                                    ₹{dest?.budget.min.toLocaleString()} - ₹{dest?.budget.max.toLocaleString()}
                                  </span>
                                  <div className="flex gap-2">
                                    <button 
                                      onClick={() => dest && setActiveVisitLoggingSlug(dest.slug)}
                                      className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
                                    >
                                      Mark Visited
                                    </button>
                                    <Link 
                                      to={`/destinations/${dest?.slug}`}
                                      className="px-2.5 py-1.5 bg-gray-50 dark:bg-gray-800 hover:bg-blue-650 hover:text-white text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold transition-colors"
                                    >
                                      Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-white dark:bg-gray-900 border border-dashed rounded-3xl">
                          <Heart className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Your wishlist is empty</h3>
                          <Link to="/destinations" className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold mt-4 shadow-sm">
                            Browse Destinations
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* VISITED PLACES TAB VIEW */}
                  {activeTab === 'visitedPlacesTab' && (
                    <motion.div
                      key="tab-visited-places"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Visited Places & Travel Logs</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Your personal travel log book and detailed trip reviews</p>
                      </div>

                      {visitedDestinationsData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {visitedDestinationsData.map((dest) => {
                            const log = visitedLogs.find((l) => l.slug === dest?.slug);
                            return (
                              <div key={dest?.slug} className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
                                <div className="relative h-48 overflow-hidden">
                                  <img 
                                    src={dest?.bannerImage || dest?.images[0]} 
                                    alt={dest?.name} 
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                                  />
                                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    Visited
                                  </div>
                                  <button 
                                    onClick={() => dest && toggleVisitedPlace(dest.slug)}
                                    className="absolute top-3 right-3 p-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md text-red-500 hover:scale-105 transition-transform"
                                  >
                                    <Trash className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                  <div className="space-y-3">
                                    <div>
                                      <span className="text-[10px] text-gray-400 font-semibold uppercase">{dest?.state}</span>
                                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mt-0.5">{dest?.name}</h3>
                                    </div>

                                    {log ? (
                                      <div className="space-y-2.5 text-xs border-t border-gray-100 dark:border-gray-800/60 pt-3">
                                        <div>
                                          <span className="font-bold text-gray-500 block">Highlights Visited</span>
                                          <p className="text-gray-700 dark:text-gray-300 mt-0.5">{log.visitedHighlights}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 bg-gray-50 dark:bg-gray-950 p-2.5 rounded-xl">
                                          <div>
                                            <span className="font-bold text-gray-500 block text-[9px] uppercase">Food Tried</span>
                                            <p className="text-gray-700 dark:text-gray-300 mt-0.5 truncate">{log.foodName}</p>
                                            <span className="text-orange-500 font-semibold">{log.foodRating} ⭐</span>
                                          </div>
                                          <div>
                                            <span className="font-bold text-gray-500 block text-[9px] uppercase">Weather / Cost</span>
                                            <p className="text-gray-700 dark:text-gray-300 mt-0.5">{log.weather}</p>
                                            <span className="font-bold text-green-600 dark:text-green-400">₹{log.expense}</span>
                                          </div>
                                        </div>
                                        <div>
                                          <span className="font-bold text-gray-500 block">Travel Log Notes</span>
                                          <p className="text-gray-700 dark:text-gray-300 italic mt-0.5 leading-relaxed">"{log.experience}"</p>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="text-center py-4 bg-gray-50 dark:bg-gray-950 rounded-xl border border-dashed">
                                        <p className="text-xs text-gray-400">No log details filled in yet.</p>
                                        <button 
                                          onClick={() => dest && setActiveVisitLoggingSlug(dest.slug)} 
                                          className="text-xs font-bold text-blue-600 hover:underline mt-2"
                                        >
                                          Add Trip Details
                                        </button>
                                      </div>
                                    )}
                                  </div>

                                  {log && (
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-150 dark:border-gray-800">
                                      <div className="flex items-center gap-1">
                                        {[...Array(log.rating)].map((_, i) => (
                                          <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                                        ))}
                                      </div>
                                      <button 
                                        onClick={() => dest && setActiveVisitLoggingSlug(dest.slug)}
                                        className="px-3.5 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-semibold transition-all"
                                      >
                                        Edit Log
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-white dark:bg-gray-950 border border-dashed rounded-3xl">
                          <MapPin className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">No visited places logged</h3>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Mark places as visited on destinations page and log details here.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* TRIPS TAB */}
                  {activeTab === 'trips' && (
                    <motion.div
                      key="tab-trips"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My AI Trip Plans</h2>
                        <Link to="/trip-planner" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm">
                          <Plus className="w-4 h-4" /> New Plan
                        </Link>
                      </div>

                      {tripPlans.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {tripPlans.map((trip) => (
                            <div key={trip.id} className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
                              <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{trip.destination}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                                      <Calendar className="w-3.5 h-3.5" />
                                      {trip.startDate} - {trip.endDate}
                                    </p>
                                  </div>
                                  <button onClick={() => deleteTripPlan(trip.id)} className="text-gray-400 hover:text-red-500 p-1">
                                    <Trash className="w-4 h-4" />
                                  </button>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mt-2">{trip.summary}</p>
                              </div>
                              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                <span className="text-xs text-gray-500 font-medium">Budget: ₹{trip.budget.toLocaleString()}</span>
                                <button onClick={() => setSelectedTrip(trip)} className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold">
                                  Open Schedule
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-white dark:bg-gray-900 border border-dashed rounded-3xl">
                          <Briefcase className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">No plans saved</h3>
                          <Link to="/trip-planner" className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold mt-4 shadow-sm">
                            Open AI Planner
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* EXPENSES TAB */}
                  {activeTab === 'expenses' && (
                    <motion.div
                      key="tab-expenses"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    >
                      <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm">
                          <div className="flex justify-between items-center mb-6">
                            <div>
                              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Expense Ledger</h3>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Total logged spendings: ₹{totalSpent.toLocaleString()}</p>
                            </div>
                            <button onClick={() => setShowAddExpense(!showAddExpense)} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-sm">
                              <Plus className="w-3.5 h-3.5" /> Log Item
                            </button>
                          </div>

                          {showAddExpense && (
                            <form onSubmit={handleAddExpenseSubmit} className="bg-gray-50 dark:bg-gray-950 border border-gray-200/40 dark:border-gray-800/40 rounded-2xl p-5 mb-6 space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                  <label className="text-xs font-semibold text-gray-500">Amount (₹)</label>
                                  <input type="number" required min="1" value={expAmount} onChange={(e) => setExpAmount(e.target.value)} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none" />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-xs font-semibold text-gray-500">Category</label>
                                  <select value={expCategory} onChange={(e) => setExpCategory(e.target.value)} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none">
                                    <option value="Transport">Transport</option>
                                    <option value="Stay">Stay</option>
                                    <option value="Food">Food</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Others">Others</option>
                                  </select>
                                </div>
                                <div className="space-y-1">
                                  <label className="text-xs font-semibold text-gray-500">Description</label>
                                  <input type="text" required placeholder="Taxi, lunch, hotel, etc." value={expDescription} onChange={(e) => setExpDescription(e.target.value)} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none" />
                                </div>
                              </div>
                              <div className="flex gap-2 justify-end">
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold">Save Expense</button>
                                <button type="button" onClick={() => setShowAddExpense(false)} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl text-xs font-semibold">Cancel</button>
                              </div>
                            </form>
                          )}

                          {expenses.length > 0 ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                  <tr className="border-b border-gray-200/50 dark:border-gray-800/40 text-gray-500 font-semibold pb-3">
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th className="text-right">Amount</th>
                                    <th className="text-right">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {expenses.slice().reverse().map((item) => (
                                    <tr key={item.id} className="border-b border-gray-100/50 dark:border-gray-900/50 last:border-none">
                                      <td className="py-3.5 font-semibold text-gray-900 dark:text-white">{item.description}</td>
                                      <td className="py-3.5">
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                                          item.category === 'Food' ? 'bg-orange-100 text-orange-600' :
                                          item.category === 'Stay' ? 'bg-indigo-100 text-indigo-600' :
                                          item.category === 'Transport' ? 'bg-blue-100 text-blue-600' :
                                          'bg-gray-100 text-gray-600'
                                        }`}>
                                          {item.category}
                                        </span>
                                      </td>
                                      <td className="py-3.5 text-xs text-gray-400">{new Date(item.date).toLocaleDateString()}</td>
                                      <td className="py-3.5 font-bold text-gray-900 dark:text-white text-right">₹{item.amount.toLocaleString()}</td>
                                      <td className="py-3.5 text-right">
                                        <button onClick={() => deleteExpense(item.id)} className="text-xs text-red-500 hover:underline font-semibold">Delete</button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <div className="text-center py-12">
                              <DollarSign className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                              <p className="text-gray-500 text-sm">No expenses logged yet.</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm">
                          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Budget Limits</h3>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
                                <span>Spent</span>
                                <span>₹{totalSpent.toLocaleString()}</span>
                              </div>
                              <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (totalSpent / 50000) * 100)}%` }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SHARE PHOTO & TRAVEL EXPERIENCE TAB */}
                  {activeTab === 'share' && (
                    <motion.div
                      key="tab-share"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                      {/* Left: Upload Photo to Gallery (1 photo limit) */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm space-y-6">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Website Photo Gallery</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Submit a high-quality landscape photo. The community photo with the highest aesthetic score is displayed in the Gallery!
                          </p>
                        </div>

                        {/* Active upload preview */}
                        {userPhoto ? (
                          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl space-y-3">
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">Your Active Upload</span>
                            <div className="flex gap-4 items-center">
                              <img src={userPhoto.src} alt="Your upload" className="w-20 h-16 rounded-xl object-cover border" />
                              <div>
                                <h4 className="font-bold text-xs text-gray-900 dark:text-white">{userPhoto.location}</h4>
                                <p className="text-[10px] text-gray-500 mt-0.5">Category: {userPhoto.category}</p>
                                <div className="text-[10px] font-bold text-orange-500 mt-1 flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-orange-500" />
                                  Aesthetic score rating: {userPhoto.score}
                                </div>
                              </div>
                            </div>
                            <p className="text-[10px] text-gray-500 italic">Notice: You can only share 1 picture total. Submitting a new image replaces your current upload.</p>
                          </div>
                        ) : (
                          <div className="p-4 bg-gray-50 dark:bg-gray-950 border rounded-2xl text-center text-xs text-gray-500">
                            You haven't uploaded any picture to the gallery yet. Start below!
                          </div>
                        )}

                        <form onSubmit={handlePhotoUploadSubmit} className="space-y-4">
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Location Name</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="e.g. Manali, Himachal Pradesh" 
                              value={photoLocation} 
                              onChange={(e) => setPhotoLocation(e.target.value)} 
                              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none" 
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-gray-500">Aesthetic Category</label>
                              <select value={photoCategory} onChange={(e) => setPhotoCategory(e.target.value)} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none">
                                <option value="Mountains">Mountains</option>
                                <option value="Beaches">Beaches</option>
                                <option value="Spiritual">Spiritual</option>
                                <option value="Heritage">Heritage</option>
                                <option value="Lakes">Lakes</option>
                                <option value="Waterfalls">Waterfalls</option>
                                <option value="Adventure">Adventure</option>
                              </select>
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-gray-500">Image URL</label>
                              <input 
                                type="text" 
                                required 
                                placeholder="https://unsplash.com/..." 
                                value={photoSrc} 
                                onChange={(e) => setPhotoSrc(e.target.value)} 
                                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none" 
                              />
                            </div>
                          </div>

                          <button 
                            type="submit" 
                            disabled={isUploadingPhoto}
                            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                          >
                            <Camera className="w-4 h-4" />
                            {isUploadingPhoto ? 'Evaluating Score...' : 'Upload Landscape Photo'}
                          </button>
                        </form>
                      </div>

                      {/* Right: Share traveler stories */}
                      <div className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-6 shadow-sm space-y-6">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-lg">Share Travel Experience</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Publish your travel experience. High-scoring detailed reviews automatically features on the website landing page traveler stories!
                          </p>
                        </div>

                        <form onSubmit={handleExperienceSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-gray-500">Destination Name</label>
                              <input type="text" required placeholder="e.g. Goa" value={expStoryDest} onChange={(e) => setExpStoryDest(e.target.value)} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-gray-500">Your Location</label>
                              <input type="text" required placeholder="e.g. Mumbai" value={expStoryTravelerLoc} onChange={(e) => setExpStoryTravelerLoc(e.target.value)} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none" />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Rating (1 to 5 Stars)</label>
                            <select value={expStoryRating} onChange={(e) => setExpStoryRating(parseInt(e.target.value))} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none">
                              <option value="5">⭐⭐⭐⭐⭐ (5 / 5)</option>
                              <option value="4">⭐⭐⭐⭐ (4 / 5)</option>
                              <option value="3">⭐⭐⭐ (3 / 5)</option>
                              <option value="2">⭐⭐ (2 / 5)</option>
                              <option value="1">⭐ (1 / 5)</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Story & Experience Details</label>
                            <textarea 
                              required 
                              rows={4}
                              placeholder="Describe your trip details, local insights, recommendations..." 
                              value={expStoryText} 
                              onChange={(e) => setExpStoryText(e.target.value)} 
                              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-white text-sm focus:outline-none"
                            />
                          </div>

                          <button type="submit" className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all">
                            <Send className="w-4 h-4" />
                            Publish Experience Story
                          </button>
                        </form>
                      </div>
                    </motion.div>
                  )}

                  {/* WRITE BLOG TAB */}
                  {activeTab === 'write' && (
                    <motion.div
                      key="tab-write"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-8 shadow-sm space-y-6 max-w-3xl"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Post Travel Blog & Guide</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Share tips, itineraries, and travel guides on the website blogs section.</p>
                      </div>

                      <form onSubmit={handleBlogSubmit} className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Blog Title</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="e.g. 10 Secret Places in Jaipur" 
                              value={blogTitle} 
                              onChange={(e) => setBlogTitle(e.target.value)} 
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" 
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500">Category</label>
                            <select value={blogCategory} onChange={(e) => setBlogCategory(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none">
                              <option value="Hidden Places">Hidden Places</option>
                              <option value="Travel Guide">Travel Guide</option>
                              <option value="Road Trip">Road Trip</option>
                              <option value="Food Tour">Food Tour</option>
                              <option value="Adventure Tips">Adventure Tips</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-500">Excerpt / Brief Summary</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Briefly describe what this guide is about for preview listing..." 
                            value={blogExcerpt} 
                            onChange={(e) => setBlogExcerpt(e.target.value)} 
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-500">Cover Image URL</label>
                          <input 
                            type="text" 
                            placeholder="https://images.unsplash.com/photo-..." 
                            value={blogCoverImage} 
                            onChange={(e) => setBlogCoverImage(e.target.value)} 
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-500">Blog Content (Plain text or HTML)</label>
                          <textarea 
                            required 
                            rows={8}
                            placeholder="Write your main article content here. You can use standard paragraphs or HTML tags to format your text." 
                            value={blogContent} 
                            onChange={(e) => setBlogContent(e.target.value)} 
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" 
                          />
                        </div>

                        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-md flex items-center justify-center gap-1.5 transition-all">
                          <BookOpen className="w-4 h-4" />
                          Publish Blog Post
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* PROFILE TAB */}
                  {activeTab === 'profile' && (
                    <motion.div
                      key="tab-profile"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="max-w-2xl bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-8 shadow-sm space-y-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Settings</h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Update your traveler profile details</p>
                        </div>
                        {!isEditing && (
                          <button
                            onClick={startEditing}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-200 rounded-xl text-sm font-semibold transition-colors"
                          >
                            <Edit3 className="w-4 h-4 text-blue-500" />
                            Edit
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-6 py-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white text-xl font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-lg">{user.name}</h3>
                          <p className="text-xs text-gray-500">@{user.username}</p>
                        </div>
                      </div>

                      {!isEditing ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <div className="space-y-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase">Full Name</span>
                            <p className="font-bold text-gray-900 dark:text-white text-sm">{user.name}</p>
                          </div>
                          <div className="space-y-1">
                            <span className="text-xs font-semibold text-gray-400 uppercase">Phone Number</span>
                            <p className="font-bold text-gray-900 dark:text-white text-sm">{user.phone}</p>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleUpdateProfile} className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-gray-500">Full Name</label>
                              <input
                                type="text"
                                required
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-gray-500">Phone Number</label>
                              <input
                                type="tel"
                                required
                                value={editPhone}
                                onChange={(e) => setEditPhone(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-end">
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold"
                            >
                              Save Changes
                            </button>
                            <button
                              type="button"
                              onClick={() => setIsEditing(false)}
                              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl text-xs font-semibold"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* --- ITINERARY MODAL --- */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600">Saved Itinerary</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{selectedTrip.destination}</h3>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedTrip.startDate} to {selectedTrip.endDate} • {selectedTrip.travelers} travelers
                </p>
              </div>
              <button 
                onClick={() => setSelectedTrip(null)}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-850 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-2xl text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                {selectedTrip.summary}
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="font-semibold text-gray-400 uppercase">Estimated Budget</span>
                  <p className="font-bold text-gray-900 dark:text-white">₹{selectedTrip.budget.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-gray-400 uppercase">Plan Created</span>
                  <p className="font-bold text-gray-900 dark:text-white">{new Date(selectedTrip.creationTime).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/30 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedTrip(null)}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
              >
                Close Itinerary
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* --- DYNAMIC VISIT LOG DETAILS FORM MODAL --- */}
      {activeVisitLoggingSlug && (() => {
        const destDetails = destinations.find(d => d.slug === activeVisitLoggingSlug);
        if (!destDetails) return null;
        
        // Find existing log values if any to prefill
        const existingLog = visitedLogs.find(l => l.slug === activeVisitLoggingSlug);

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-600">Travel Log Book</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-0.5">Log Trip: {destDetails.name}</h3>
                </div>
                <button 
                  onClick={() => setActiveVisitLoggingSlug(null)}
                  className="p-1.5 text-gray-400 hover:text-gray-650 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const target = e.target as any;
                  addVisitedLog(
                    activeVisitLoggingSlug,
                    parseInt(target.rating.value),
                    parseFloat(target.expense.value) || 0,
                    target.visitedHighlights.value,
                    target.foodName.value,
                    parseInt(target.foodRating.value),
                    target.weather.value,
                    target.experience.value
                  );
                  setActiveVisitLoggingSlug(null);
                }}
                className="p-6 overflow-y-auto space-y-4"
              >
                {/* Rating & Expense */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Destination Rating</label>
                    <select name="rating" defaultValue={existingLog?.rating || "5"} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none">
                      <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                      <option value="4">⭐⭐⭐⭐ (4/5)</option>
                      <option value="3">⭐⭐⭐ (3/5)</option>
                      <option value="2">⭐⭐ (2/5)</option>
                      <option value="1">⭐ (1/5)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Visit Expense (₹)</label>
                    <input type="number" required name="expense" defaultValue={existingLog?.expense || ""} placeholder="e.g. 5000" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                </div>

                {/* Weather & Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Weather Condition</label>
                    <select name="weather" defaultValue={existingLog?.weather || "Pleasant"} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none">
                      <option value="Sunny">Sunny ☀️</option>
                      <option value="Pleasant">Pleasant 🌤️</option>
                      <option value="Cold">Cold ❄️</option>
                      <option value="Rainy">Rainy 🌧️</option>
                      <option value="Hot">Hot 🌡️</option>
                      <option value="Snowing">Snowing 🌨️</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">What & Where Visited</label>
                    <input type="text" name="visitedHighlights" required defaultValue={existingLog?.visitedHighlights || ""} placeholder="e.g. golden temple, local museum, lake" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                </div>

                {/* Food Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Local Food Tried</label>
                    <input type="text" name="foodName" required defaultValue={existingLog?.foodName || ""} placeholder="e.g. butter chicken, local fish fry" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Food Rating</label>
                    <select name="foodRating" defaultValue={existingLog?.foodRating || "5"} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none">
                      <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                      <option value="4">⭐⭐⭐⭐ (4/5)</option>
                      <option value="3">⭐⭐⭐ (3/5)</option>
                      <option value="2">⭐⭐ (2/5)</option>
                      <option value="1">⭐ (1/5)</option>
                    </select>
                  </div>
                </div>

                {/* Overall experience */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500">Describe Your Experience</label>
                  <textarea name="experience" required rows={3} defaultValue={existingLog?.experience || ""} placeholder="Tell us how the trip was, tips for fellow travelers..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-150 dark:border-gray-800 justify-end">
                  <button type="submit" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm">
                    Save Journey Log
                  </button>
                  <button type="button" onClick={() => setActiveVisitLoggingSlug(null)} className="px-5 py-2.5 bg-gray-150 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold">
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        );
      })()}
    </main>
  );
}