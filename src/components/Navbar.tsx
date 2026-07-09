import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, User, Shield } from 'lucide-react'
import { useThemeStore } from '../stores/themeStore'
import { useAuth } from '../context/AuthContext'

// AFTER:
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Journeys', path: '/journeys' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Trip Planner', path: '/trip-planner' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, toggleTheme } = useThemeStore()
    const { user } = useAuth()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="section-padding">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="group">
                        <img
                            src="/logo_05.png"
                            alt="SafarNama"
                            className="h-30 w-auto group-hover:scale-110 transition-transform"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-colors text-gray-600 dark:text-gray-300"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                        {/* User Actions */}
                        <div className="hidden sm:flex items-center gap-2">
                          {!user && (
                            <Link
                              to="/dashboard?prefill=somendra"
                              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                            >
                              <Shield className="w-3.5 h-3.5 text-blue-500" />
                              <span>Admin Login</span>
                            </Link>
                          )}
                          <Link
                              to="/dashboard"
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 
                         text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                          >
                              <User className="w-4 h-4" />
                              <span>{user ? `Hi, ${user.name.split(' ')[0]}` : 'Sign In'}</span>
                          </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition-colors text-gray-600 dark:text-gray-300"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t 
                     border-gray-100 dark:border-gray-800"
                    >
                        <div className="section-padding py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-2 text-lg font-medium ${location.pathname === link.path
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {!user && (
                                <Link
                                    to="/dashboard?prefill=somendra"
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                                >
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    <span>Admin Login</span>
                                </Link>
                            )}
                            <Link
                                to="/dashboard"
                                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-600 
                         text-white font-medium"
                            >
                                <User className="w-5 h-5" />
                                {user ? `Hi, ${user.name.split(' ')[0]}` : 'Sign In'}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}