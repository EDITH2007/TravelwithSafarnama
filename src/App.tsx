import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useThemeStore } from './stores/themeStore'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DestinationsPage from './pages/DestinationsPage'
import DestinationDetailPage from './pages/DestinationDetailPage'
import JourneysPage from './pages/JourneysPage'
import JourneyDetailPage from './pages/JourneyDetailPage'
import ExperiencesPage from './pages/ExperiencesPage'
import ExperienceDetailPage from './pages/ExperienceDetailPage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import TripPlannerPage from './pages/TripPlannerPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DashboardPage from './pages/DashboardPage'
import SearchResultsPage from './pages/SearchResultsPage'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/journeys/:slug" element={<JourneyDetailPage />} />
          <Route path="/road-trips" element={<JourneysPage defaultCategory="road-trip" />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/experiences/:slug" element={<ExperienceDetailPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/trip-planner" element={<TripPlannerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  )
}

export default App