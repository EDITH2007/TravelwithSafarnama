import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function BlogsPage() {
  const { blogs } = useAuth()

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
              Inspiring stories, detailed guides, and expert tips shared by our community travelers.
            </p>
          </div>

          {blogs.length > 0 ? (
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

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-2">
                            <img
                              src={blog.author.avatar}
                              alt={blog.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                              {blog.author.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white dark:bg-gray-900 border border-dashed rounded-3xl max-w-xl mx-auto">
              <BookOpen className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">No travel blogs published</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Be the first to share a travel guide or story from the User Dashboard!</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}