import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email')
      return
    }
    setIsSubmitted(true)
    toast.success('Welcome to SafarNama! Check your inbox.')
    setEmail('')
  }

  return (
    <section className="py-20 section-padding bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <Mail className="w-12 h-12 text-white/80 mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the SafarNama Community
            </h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
              Get weekly travel inspiration, hidden gem alerts, and exclusive deals 
              delivered straight to your inbox.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 text-white"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">You're all set! Happy travels! 🎉</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-4 rounded-xl bg-white/20 backdrop-blur-sm 
                             text-white placeholder-white/60 outline-none border border-white/20
                             focus:border-white/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-4 bg-white text-blue-700 rounded-xl font-medium 
                             hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                </div>
              </form>
            )}

            <p className="text-blue-200/60 text-sm mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}