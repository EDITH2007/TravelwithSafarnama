import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const blogs = [
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
  },
]

export default function BlogsPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="section-padding py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="heading-lg text-gray-900 dark:text-white mb-4">
              Travel Stories & Guides
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Inspiring stories, detailed guides, and expert tips from fellow travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blogs/${blog.slug}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm 
                                hover:shadow-xl transition-all duration-500 card-hover">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime} min read</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 
                                   group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {blog.author.name}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 
                                             transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}