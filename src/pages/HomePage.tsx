import HeroSection from '../components/HeroSection'
import FeaturedDestinations from '../components/FeaturedDestinations'
import CategoriesSection from '../components/CategoriesSection'
import HiddenGemsSection from '../components/HiddenGemsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import NewsletterSection from '../components/NewsletterSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedDestinations />
      <CategoriesSection />
      <HiddenGemsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}