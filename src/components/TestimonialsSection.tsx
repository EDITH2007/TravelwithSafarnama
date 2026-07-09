import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function TestimonialsSection() {
  const { landingPageStories } = useAuth()

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
          <p className="text-gray-300 text-sm mt-3 max-w-lg mx-auto">
            Highlighting the top-scored travel diaries and stories uploaded by our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingPageStories.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-blue-400" />
                  <div className="bg-white/10 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    Score: {testimonial.score || 0}
                  </div>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm italic">"{testimonial.text}"</p>
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-blue-300">
                  <span>Visited {testimonial.destination}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}