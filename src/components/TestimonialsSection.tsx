import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    location: 'Delhi',
    rating: 5,
    text: 'SafarNama helped me discover Hampi - a place I never knew existed! The detailed guides and local tips made my trip unforgettable.',
    destination: 'Hampi',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    avatar: 'public/Siddhu.png',
    location: 'Mumbai',
    rating: 5,
    text: 'The trip planner feature is a game-changer. I planned my entire Ladakh trip in minutes with perfect itinerary suggestions.',
    destination: 'Leh-Ladakh',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    location: 'Bangalore',
    rating: 5,
    text: 'Found the most romantic honeymoon spots in Goa through SafarNama. The hidden beach recommendations were spot on!',
    destination: 'Goa',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 section-padding bg-blue-900 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">
            Traveler Stories
          </span>
          <h2 className="heading-lg mt-3 text-white">
            What Our Travelers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-200 mb-6 leading-relaxed">{testimonial.text}</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-blue-300">Visited {testimonial.destination}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}