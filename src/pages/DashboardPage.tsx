import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, MapPin, User, Phone, Lock, Eye, EyeOff, 
  Edit3, LogOut, X, Compass, DollarSign, Calendar, 
  Plus, Trash, Star, Briefcase, ChevronRight,
  Camera, BookOpen, Send, CheckSquare, Shield
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
    addExperience,
    discoveredDestinations, saveDiscovery, deleteDiscovery,
    adminApproveDiscovery, adminRejectDiscovery
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
  const [activeTab, setActiveTab] = useState<'overview' | 'wishlist' | 'visitedPlacesTab' | 'trips' | 'expenses' | 'share' | 'write' | 'profile' | 'myDiscoveries' | 'adminApprovals'>('overview');

  // Discovery submission states
  const [showDiscoveryWizard, setShowDiscoveryWizard] = useState(false);
  const [editingDiscovery, setEditingDiscovery] = useState<any | null>(null);
  const [showFormPreview, setShowFormPreview] = useState(false);

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

  // Handle transition from Admin Login navbar action
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsLoginTab(true);
    }
  }, []);

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

  // Discoveries filtering
  const userDiscoveries = discoveredDestinations.filter((d) => d.submittedByUsername === user?.username);
  const pendingDiscoveries = discoveredDestinations.filter((d) => d.status === 'pending');

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

  const handleSaveDiscoveryForm = (e: React.FormEvent, status: 'draft' | 'pending') => {
    e.preventDefault();
    const target = e.target as any;
    
    const facilitiesList = [
      'Parking', 'Washroom', 'Drinking Water', 'Food Available', 
      'Hotels Nearby', 'Camping Allowed', 'Wheelchair Accessible', 
      'Mobile Network', 'ATM nearby', 'Petrol Pump'
    ].filter(fac => target[`fac_${fac.replace(/\s+/g, '')}`]?.checked);

    const tagsList = target.tags.value.split(',').map((t: string) => t.trim()).filter(Boolean);

    saveDiscovery({
      id: editingDiscovery?.id || undefined,
      name: target.discoveryName.value,
      tagline: target.tagline.value,
      category: target.category.value,
      locationDetailed: target.locationDetailed.value,
      whyVisit: target.whyVisit.value,
      bestTimeToVisit: target.bestTimeToVisit.value,
      description: target.description.value,
      howToReach: target.howToReach.value,
      nearestTransport: target.nearestTransport.value,
      entryFee: parseFloat(target.entryFee.value) || 0,
      averageCost: parseFloat(target.averageCost.value) || 0,
      isFree: target.isFree.checked,
      facilities: facilitiesList,
      coverImage: target.coverImage.value || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      thingsToCarry: target.thingsToCarry.value,
      thingsToAvoid: target.thingsToAvoid.value,
      safetyTips: target.safetyTips.value,
      tags: tagsList,
      status: status
    });
    
    setShowDiscoveryWizard(false);
    setEditingDiscovery(null);
    setShowFormPreview(false);
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
                    {(() => {
                      const navItems = [
                        { id: 'overview', name: 'Dashboard', icon: Compass },
                        { id: 'wishlist', name: 'Wishlist', icon: Heart, badge: savedDestinations.length },
                        { id: 'visitedPlacesTab', name: 'Visited Places', icon: MapPin, badge: visitedPlaces.length },
                        { id: 'myDiscoveries', name: 'My Discoveries', icon: Eye, badge: userDiscoveries.length },
                        { id: 'trips', name: 'My Trip Plans', icon: Briefcase, badge: tripPlans.length },
                        { id: 'expenses', name: 'Expense Tracker', icon: DollarSign },
                        { id: 'share', name: 'Share Photo & Story', icon: Camera },
                        { id: 'write', name: 'Write Travel Blog', icon: Edit3 },
                        { id: 'profile', name: 'Profile Settings', icon: User },
                      ];

                      if (user?.username === 'somendra') {
                        navItems.splice(4, 0, { id: 'adminApprovals', name: 'Admin Panel', icon: Shield, badge: pendingDiscoveries.length });
                      }

                      return navItems.map((item) => (
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
                      ));
                    })()}
                  </nav>

                  {/* Share Discovery Button */}
                  <button
                    onClick={() => {
                      setEditingDiscovery(null);
                      setShowDiscoveryWizard(true);
                    }}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-650 hover:from-orange-600 hover:to-red-700 text-white rounded-xl text-xs font-extrabold shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <Plus className="w-4 h-4" />
                    Share Your Discovery
                  </button>
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
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-200">
                      {user.username === 'somendra' ? 'Welcome Admin' : 'Welcome Back Traveler,'}
                    </span>
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
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Wishlist Destinations</h2>
                          <p className="text-xs text-gray-500 dark:text-gray-400">View and manage your saved travel destinations</p>
                        </div>
                        <Link 
                          to="/destinations"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 w-fit"
                        >
                          <Compass className="w-4 h-4" />
                          Explore New Destinations
                        </Link>
                      </div>
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
                        <div className="text-center py-12 bg-white dark:bg-gray-900 border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                          <Heart className="w-10 h-10 mx-auto text-gray-300 mb-3" />
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">Your wishlist is empty</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Explore and add your favorite destinations to start planning!</p>
                          <Link 
                            to="/destinations" 
                            className="inline-flex items-center gap-1.5 mt-4 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                          >
                            <Compass className="w-3.5 h-3.5" />
                            Explore Destinations
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
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

                  {/* MY DISCOVERIES TAB */}
                  {activeTab === 'myDiscoveries' && (
                    <motion.div
                      key="tab-my-discoveries"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Shared Discoveries</h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Manage and track travel destinations you have discovered and submitted.</p>
                        </div>
                        <button
                          onClick={() => {
                            setEditingDiscovery(null);
                            setShowDiscoveryWizard(true);
                          }}
                          className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-blue-700 transition-colors"
                        >
                          <Plus className="w-4 h-4" /> Share Location
                        </button>
                      </div>

                      {userDiscoveries.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {userDiscoveries.map((discovery) => (
                            <div key={discovery.id} className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
                              <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-950">
                                <img 
                                  src={discovery.coverImage} 
                                  alt={discovery.name} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 flex gap-1.5">
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white shadow-sm uppercase ${
                                    discovery.status === 'approved' ? 'bg-green-600' :
                                    discovery.status === 'pending' ? 'bg-amber-500 animate-pulse' :
                                    discovery.status === 'rejected' ? 'bg-red-650' : 'bg-gray-500'
                                  }`}>
                                    {discovery.status === 'pending' ? 'Pending Approval' : discovery.status}
                                  </span>
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-sm uppercase">
                                    {discovery.category}
                                  </span>
                                </div>
                                <button 
                                  onClick={() => deleteDiscovery(discovery.id)}
                                  className="absolute top-3 right-3 p-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-md text-red-500 hover:scale-105 transition-transform"
                                >
                                  <Trash className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-1">
                                  <span className="text-[10px] text-gray-400 font-semibold uppercase">{discovery.locationDetailed}</span>
                                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mt-0.5">{discovery.name}</h3>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium italic">"{discovery.tagline}"</p>
                                  <p className="text-xs text-gray-650 dark:text-gray-300 line-clamp-2 mt-2 leading-relaxed">{discovery.description}</p>
                                </div>

                                <div className="flex gap-2 justify-end pt-3 border-t border-gray-100 dark:border-gray-800">
                                  {discovery.status === 'draft' && (
                                    <button 
                                      onClick={() => {
                                        setEditingDiscovery(discovery);
                                        setShowDiscoveryWizard(true);
                                      }}
                                      className="px-3.5 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-semibold transition-all"
                                    >
                                      Edit Draft
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => setEditingDiscovery(discovery)}
                                    className="px-3.5 py-1.5 bg-gray-50 dark:bg-gray-850 hover:bg-gray-150 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold transition-all"
                                  >
                                    View Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-white dark:bg-gray-900 border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                          <Eye className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">No discoveries shared yet</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto">
                            Did you find an amazing place that is not listed? Share it with the community and let others discover it!
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* ADMIN APPROVALS PANEL */}
                  {activeTab === 'adminApprovals' && user?.username === 'somendra' && (
                    <motion.div
                      key="tab-admin-approvals"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Approval Panel</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Review traveler discoveries and approve or reject their publish requests.</p>
                      </div>

                      {pendingDiscoveries.length > 0 ? (
                        <div className="space-y-4">
                          {pendingDiscoveries.map((discovery) => (
                            <div key={discovery.id} className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-6 shadow-sm space-y-4">
                              <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-950 shrink-0">
                                  <img src={discovery.coverImage} alt={discovery.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 space-y-2">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full">
                                        {discovery.category}
                                      </span>
                                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mt-1">{discovery.name}</h3>
                                      <p className="text-xs text-gray-450 font-medium">Location: {discovery.locationDetailed}</p>
                                    </div>
                                    <div className="text-right">
                                      <span className="text-xs text-gray-500 font-semibold block">Submitted by:</span>
                                      <span className="text-xs font-bold text-gray-900 dark:text-white">@{discovery.submittedByUsername} ({discovery.submittedBy})</span>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-650 dark:text-gray-300 italic">"{discovery.tagline}"</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mt-1">{discovery.description}</p>
                                </div>
                              </div>

                              {/* Accordion Expanded Details */}
                              <div className="bg-gray-50 dark:bg-gray-950/40 p-4 rounded-xl space-y-3 text-xs">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <span className="font-bold text-gray-400 block uppercase tracking-wider text-[10px]">Why Visit:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-0.5">{discovery.whyVisit}</p>
                                  </div>
                                  <div>
                                    <span className="font-bold text-gray-400 block uppercase tracking-wider text-[10px]">Best Time & Transport:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-0.5">{discovery.bestTimeToVisit} • {discovery.nearestTransport}</p>
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-2 border-gray-200/50 dark:border-gray-800/40">
                                  <div>
                                    <span className="font-bold text-gray-400 block uppercase tracking-wider text-[10px]">How to Reach:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-0.5">{discovery.howToReach}</p>
                                  </div>
                                  <div>
                                    <span className="font-bold text-gray-400 block uppercase tracking-wider text-[10px]">Budget & Entry Fee:</span>
                                    <p className="text-gray-700 dark:text-gray-300 mt-0.5">
                                      {discovery.isFree ? 'Free to visit' : `Entry: ₹${discovery.entryFee} • Average Spend: ₹${discovery.averageCost}`}
                                    </p>
                                  </div>
                                </div>
                                <div className="border-t pt-2 border-gray-200/50 dark:border-gray-800/40">
                                  <span className="font-bold text-gray-400 block uppercase tracking-wider text-[10px]">Available Facilities:</span>
                                  <div className="flex flex-wrap gap-1.5 mt-1">
                                    {discovery.facilities.map(f => (
                                      <span key={f} className="bg-gray-200/60 dark:bg-gray-800 px-2 py-0.5 rounded text-[10px] text-gray-650 dark:text-gray-300 font-semibold">{f}</span>
                                    ))}
                                  </div>
                                </div>
                                <div className="border-t pt-2 border-gray-200/50 dark:border-gray-800/40">
                                  <span className="font-bold text-gray-400 block uppercase tracking-wider text-[10px]">Tips & Tags:</span>
                                  <p className="text-gray-700 dark:text-gray-300 mt-0.5"><span className="font-semibold text-gray-400">Carry:</span> {discovery.thingsToCarry} | <span className="font-semibold text-gray-400">Avoid:</span> {discovery.thingsToAvoid} | <span className="font-semibold text-gray-400">Safety:</span> {discovery.safetyTips}</p>
                                  <div className="flex flex-wrap gap-1.5 mt-2">
                                    {discovery.tags.map(t => (
                                      <span key={t} className="bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full text-[9px] font-bold">#{t}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-3 justify-end pt-2">
                                <button
                                  onClick={() => adminApproveDiscovery(discovery.id)}
                                  className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors"
                                >
                                  Approve & Publish
                                </button>
                                <button
                                  onClick={() => adminRejectDiscovery(discovery.id)}
                                  className="px-5 py-2 bg-red-600 hover:bg-red-750 text-white rounded-xl text-xs font-bold shadow-sm transition-colors"
                                >
                                  Reject Request
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-20 bg-white dark:bg-gray-900 border border-dashed border-gray-200 dark:border-gray-800 rounded-3xl">
                          <CheckSquare className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">All requests reviewed</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">There are no pending traveler-discovered destinations for review.</p>
                        </div>
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

      {/* --- TRAVELER DISCOVERY WIZARD MODAL --- */}
      {showDiscoveryWizard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            <div className="p-6 border-b border-gray-150 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-950/20">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full">Explorer Program</span>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-1.5">
                  {editingDiscovery ? 'Edit Travel Discovery' : 'Share Your Travel Discovery'}
                </h3>
              </div>
              <button 
                onClick={() => {
                  setShowDiscoveryWizard(false);
                  setEditingDiscovery(null);
                  setShowFormPreview(false);
                }}
                className="p-1.5 text-gray-400 hover:text-gray-650 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* If Preview mode is active, render preview screen. Otherwise, form screen */}
            {showFormPreview ? (
              <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-gray-50/50 dark:bg-gray-950/10">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl text-xs text-blue-800 dark:text-blue-300">
                  ℹ️ This is a layout preview of how your discovered destination will be presented to other travelers.
                </div>
                
                {/* Visual Preview Card */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-800/60 rounded-3xl overflow-hidden shadow-md max-w-xl mx-auto">
                  <div className="relative h-56 bg-gray-100 dark:bg-gray-950">
                    <img 
                      id="preview-img" 
                      src={(document.getElementById('discoveryForm') as any)?.coverImage?.value || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800'} 
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as any).src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800';
                      }}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-600 text-white rounded-full uppercase">
                        {(document.getElementById('discoveryForm') as any)?.category?.value || 'Mountains'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                        {(document.getElementById('discoveryForm') as any)?.locationDetailed?.value || 'Detailed Location'}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                        {(document.getElementById('discoveryForm') as any)?.discoveryName?.value || 'Destination Name'}
                      </h4>
                      <p className="text-xs font-semibold text-gray-500 italic mt-0.5">
                        "{(document.getElementById('discoveryForm') as any)?.tagline?.value || 'Short Tagline'}"
                      </p>
                    </div>

                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-gray-500 block uppercase tracking-wider text-[9px]">Why Visit:</span>
                      <p className="text-gray-650 dark:text-gray-300">{(document.getElementById('discoveryForm') as any)?.whyVisit?.value || 'About the place...'}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs border-t pt-3 border-gray-100 dark:border-gray-800">
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[9px] block">Best Time:</span>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{(document.getElementById('discoveryForm') as any)?.bestTimeToVisit?.value || 'Winter'}</p>
                      </div>
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[9px] block">Nearest Station:</span>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{(document.getElementById('discoveryForm') as any)?.nearestTransport?.value || 'Local Bus'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-150 dark:border-gray-800">
                  <button 
                    type="button" 
                    onClick={() => setShowFormPreview(false)}
                    className="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-bold transition-all"
                  >
                    Back to Edit
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      const formEl = document.getElementById('discoveryForm') as HTMLFormElement;
                      if (formEl) {
                        const event = new Event('submit', { cancelable: true, bubbles: true });
                        (event as any).submitStatus = 'pending';
                        formEl.dispatchEvent(event);
                      }
                    }}
                    className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                  >
                    Submit for Approval
                  </button>
                </div>
              </div>
            ) : (
              <form 
                id="discoveryForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  const submitStatus = (e.nativeEvent as any).submitter?.getAttribute('data-status') || (e as any).submitStatus || 'draft';
                  handleSaveDiscoveryForm(e, submitStatus);
                }}
                className="p-6 overflow-y-auto space-y-6 flex-1"
              >
                {/* 1. Basic Information */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">1. Basic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Destination Name*</label>
                      <input type="text" required name="discoveryName" defaultValue={editingDiscovery?.name || ""} placeholder="e.g. Tirthan Valley" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Tagline*</label>
                      <input type="text" required name="tagline" defaultValue={editingDiscovery?.tagline || ""} placeholder="e.g. A serene trout paradise" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Category*</label>
                      <select name="category" defaultValue={editingDiscovery?.category || "Mountains"} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none">
                        <option value="Mountains">Mountains</option>
                        <option value="Beaches">Beaches</option>
                        <option value="Spiritual">Spiritual</option>
                        <option value="Heritage">Heritage</option>
                        <option value="Lakes">Lakes</option>
                        <option value="Waterfalls">Waterfalls</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Forest">Forest</option>
                        <option value="Desert">Desert</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2. Detailed Location */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">2. Detailed Location</h4>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Detailed Address / State & District*</label>
                    <input type="text" required name="locationDetailed" defaultValue={editingDiscovery?.locationDetailed || ""} placeholder="e.g. Kullu District, Himachal Pradesh" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                </div>

                {/* 3. About the Destination */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">3. About the Destination</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Why should people visit?*</label>
                      <input type="text" required name="whyVisit" defaultValue={editingDiscovery?.whyVisit || ""} placeholder="e.g. Untouched nature, fishing, river treks" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Best time to visit*</label>
                      <input type="text" required name="bestTimeToVisit" defaultValue={editingDiscovery?.bestTimeToVisit || ""} placeholder="e.g. March to June & October to November" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Detailed Description*</label>
                    <textarea required name="description" rows={3} defaultValue={editingDiscovery?.description || ""} placeholder="Write a brief overview describing the beauty of this hidden place..." className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                </div>

                {/* 4. Travel Details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">4. Travel Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">How to reach (Directions)*</label>
                      <input type="text" required name="howToReach" defaultValue={editingDiscovery?.howToReach || ""} placeholder="e.g. Take overnight bus from Delhi to Aut, then local cab" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Nearest Transportation Hub (Airport/Train)*</label>
                      <input type="text" required name="nearestTransport" defaultValue={editingDiscovery?.nearestTransport || ""} placeholder="e.g. Bhuntar Airport (Airport) or Joginder Nagar (Train)" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                  </div>
                </div>

                {/* 5. Budget */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">5. Budget</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Entry Fee (₹)</label>
                      <input type="number" name="entryFee" defaultValue={editingDiscovery?.entryFee || 0} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Average cost per person (₹)*</label>
                      <input type="number" required name="averageCost" defaultValue={editingDiscovery?.averageCost || 0} placeholder="e.g. 3000" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="flex items-center gap-2 pb-2.5">
                      <input type="checkbox" id="isFree" name="isFree" defaultChecked={editingDiscovery?.isFree || false} className="rounded border-gray-350 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="isFree" className="text-xs font-semibold text-gray-500">Is it Free to Visit?</label>
                    </div>
                  </div>
                </div>

                {/* 6. Facilities Checkboxes */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">6. Facilities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {[
                      'Parking', 'Washroom', 'Drinking Water', 'Food Available', 
                      'Hotels Nearby', 'Camping Allowed', 'Wheelchair Accessible', 
                      'Mobile Network', 'ATM nearby', 'Petrol Pump'
                    ].map(fac => {
                      const formattedName = fac.replace(/\s+/g, '');
                      const isChecked = editingDiscovery?.facilities?.includes(fac);
                      return (
                        <div key={fac} className="flex items-center gap-2">
                          <input type="checkbox" id={`fac_${formattedName}`} name={`fac_${formattedName}`} defaultChecked={isChecked} className="rounded border-gray-350 text-blue-600 focus:ring-blue-500" />
                          <label htmlFor={`fac_${formattedName}`} className="text-[11px] font-semibold text-gray-650 dark:text-gray-400 leading-none">{fac}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 7. Upload Media */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">7. Upload Media</h4>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Cover Image URL* (accepts any image link)</label>
                    <input type="text" required name="coverImage" defaultValue={editingDiscovery?.coverImage || ""} placeholder="https://images.unsplash.com/photo-..." className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                </div>

                {/* 8. Tips */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">8. Tips</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Things to Carry*</label>
                      <input type="text" required name="thingsToCarry" defaultValue={editingDiscovery?.thingsToCarry || ""} placeholder="e.g. Trekking shoes, warm jacket" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Things to Avoid*</label>
                      <input type="text" required name="thingsToAvoid" defaultValue={editingDiscovery?.thingsToAvoid || ""} placeholder="e.g. Do not litter, avoid monsoon nights" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-500">Safety Tips*</label>
                      <input type="text" required name="safetyTips" defaultValue={editingDiscovery?.safetyTips || ""} placeholder="e.g. Keep map offline, check landslides reports" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                    </div>
                  </div>
                </div>

                {/* 9. Tags */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">9. Tags</h4>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500">Tags (comma-separated list)*</label>
                    <input type="text" required name="tags" defaultValue={editingDiscovery?.tags?.join(', ') || "Nature photography, Sunrise, Sunset, Hidden gem"} placeholder="e.g. Family Trekking, Sunrise, Sunset, Camping, Hidden gem" className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-950 dark:text-white text-sm focus:outline-none" />
                  </div>
                </div>

                {/* 10. Attribute */}
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-blue-650 dark:text-blue-400 uppercase tracking-wider border-b pb-1 border-gray-100 dark:border-gray-800">10. Attribute</h4>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400">Discoverer Name (Prefilled)</label>
                    <input type="text" readOnly value={user?.name} className="w-full px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-950 text-gray-500 text-sm cursor-not-allowed focus:outline-none" />
                  </div>
                </div>

                {/* 11. Confirmation */}
                <div className="flex items-start gap-2.5 bg-gray-50 dark:bg-gray-950/20 p-4 rounded-xl">
                  <input type="checkbox" required id="confirmAccurate" className="mt-0.5 rounded border-gray-350 text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="confirmAccurate" className="text-xs font-semibold text-gray-650 dark:text-gray-400 leading-normal">
                    11. I confirm that the information submitted above is accurate to the best of my knowledge, and I understand it will be peer-reviewed by the site administrator before publication.
                  </label>
                </div>

                {/* 12. Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-150 dark:border-gray-800 justify-end">
                  <button 
                    type="submit" 
                    data-status="draft"
                    className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-bold transition-all"
                  >
                    Save as Draft
                  </button>
                  <button 
                    type="button" 
                    onClick={() => {
                      setShowFormPreview(true);
                    }}
                    className="px-5 py-2.5 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-xl text-xs font-bold transition-all"
                  >
                    Preview Layout
                  </button>
                  <button 
                    type="submit" 
                    data-status="pending"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
                  >
                    Submit Destination
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* --- TRAVELER DISCOVERY DETAIL MODAL --- */}
      {editingDiscovery && !showDiscoveryWizard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
          >
            <div className="p-6 border-b border-gray-150 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-950/20">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full">{editingDiscovery.category}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{editingDiscovery.name}</h3>
                <p className="text-xs text-gray-400 font-medium">Discovered by: {editingDiscovery.submittedBy} (@{editingDiscovery.submittedByUsername})</p>
              </div>
              <button 
                onClick={() => setEditingDiscovery(null)}
                className="p-1.5 text-gray-400 hover:text-gray-650 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-150 dark:bg-gray-950">
                <img src={editingDiscovery.coverImage} alt={editingDiscovery.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white shadow-sm uppercase ${
                    editingDiscovery.status === 'approved' ? 'bg-green-600' :
                    editingDiscovery.status === 'pending' ? 'bg-amber-500 animate-pulse' :
                    editingDiscovery.status === 'rejected' ? 'bg-red-650' : 'bg-gray-500'
                  }`}>
                    Status: {editingDiscovery.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Description & Highlights</h4>
                  <p className="text-gray-650 dark:text-gray-350 leading-relaxed mt-1">{editingDiscovery.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t pt-4 border-gray-100 dark:border-gray-800">
                  <div>
                    <span className="font-bold text-gray-405 uppercase tracking-wider text-[10px] block">Why Visit:</span>
                    <p className="text-gray-750 dark:text-gray-300 mt-0.5">{editingDiscovery.whyVisit}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-405 uppercase tracking-wider text-[10px] block">Best Time to Visit:</span>
                    <p className="text-gray-750 dark:text-gray-300 mt-0.5">{editingDiscovery.bestTimeToVisit}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t pt-4 border-gray-100 dark:border-gray-800">
                  <div>
                    <span className="font-bold text-gray-405 uppercase tracking-wider text-[10px] block">How to Reach:</span>
                    <p className="text-gray-750 dark:text-gray-300 mt-0.5">{editingDiscovery.howToReach}</p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-405 uppercase tracking-wider text-[10px] block">Nearest Transport:</span>
                    <p className="text-gray-750 dark:text-gray-300 mt-0.5">{editingDiscovery.nearestTransport}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t pt-4 border-gray-100 dark:border-gray-800">
                  <div>
                    <span className="font-bold text-gray-405 uppercase tracking-wider text-[10px] block">Budget Details:</span>
                    <p className="text-gray-750 dark:text-gray-300 mt-0.5">
                      {editingDiscovery.isFree ? 'Free to visit!' : `Entry Fee: ₹${editingDiscovery.entryFee} | Avg Cost: ₹${editingDiscovery.averageCost}`}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-gray-450 uppercase tracking-wider text-[10px] block">Facilities:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {editingDiscovery.facilities.map((f: string) => (
                        <span key={f} className="bg-gray-100 dark:bg-gray-805 px-2 py-0.5 rounded text-[9px] text-gray-600 dark:text-gray-400 font-semibold">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 border-gray-100 dark:border-gray-800 space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">Travel Tips</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-blue-50/50 dark:bg-blue-950/20 p-3 rounded-xl">
                      <span className="font-bold text-blue-650 dark:text-blue-400 block mb-0.5">👜 Carry</span>
                      <p className="text-gray-650 dark:text-gray-350">{editingDiscovery.thingsToCarry}</p>
                    </div>
                    <div className="bg-red-50/50 dark:bg-red-950/20 p-3 rounded-xl">
                      <span className="font-bold text-red-650 dark:text-red-400 block mb-0.5">🚫 Avoid</span>
                      <p className="text-gray-650 dark:text-gray-350">{editingDiscovery.thingsToAvoid}</p>
                    </div>
                    <div className="bg-green-50/50 dark:bg-green-950/20 p-3 rounded-xl">
                      <span className="font-bold text-green-650 dark:text-green-400 block mb-0.5">🛡️ Safety</span>
                      <p className="text-gray-650 dark:text-gray-355">{editingDiscovery.safetyTips}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 border-gray-100 dark:border-gray-800">
                  <span className="font-bold text-gray-404 uppercase tracking-wider text-[10px] block mb-1">Tags:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {editingDiscovery.tags.map((t: string) => (
                      <span key={t} className="bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-bold">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-150 dark:border-gray-850 bg-gray-50/50 dark:bg-gray-950/25 flex justify-end">
              <button 
                onClick={() => setEditingDiscovery(null)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}