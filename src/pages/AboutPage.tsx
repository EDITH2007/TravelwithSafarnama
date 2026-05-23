import { motion } from 'framer-motion'
import { Compass, Heart, Globe, Users, Award } from 'lucide-react'

const stats = [
  { icon: Globe, value: '500+', label: 'Destinations' },
  { icon: Users, value: '50K+', label: 'Happy Travelers' },
  { icon: Heart, value: '4.9', label: 'Average Rating' },
  { icon: Award, value: '15+', label: 'Awards Won' },
]

const team = [
  { name: 'Somendra', role: 'Founder & CEO', image: 'public/Anu.png' },
  { name: 'Emma Watson', role: 'Head of Content', image: 'public/Emma.png' },
  { name: 'Siddhu Singh', role: 'Lead Developer', image: 'public/Siddhu.png' },
]

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="section-padding py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Compass className="w-16 h-16 mx-auto mb-6 text-orange-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            SafarNama was born from a simple idea: every journey should tell a story. 
            We're on a mission to help travelers discover the soul of India.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To inspire and empower travelers to explore India beyond the tourist trails, 
              connecting them with authentic experiences, local cultures, and hidden gems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-lg text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}