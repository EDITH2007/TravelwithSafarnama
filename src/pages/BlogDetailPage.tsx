import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, Calendar, Clock, Heart, Share2 } from 'lucide-react'

export default function BlogDetailPage() {
  // Mock blog data - in real app, fetch by slug
  const blog = {
    title: '10 Hidden Gems in Himachal Pradesh You Must Visit',
    content: `
      <p>Himachal Pradesh is known for its popular tourist destinations like Manali and Shimla, but there's so much more to explore beyond the beaten path. Here are 10 hidden gems that will take your breath away:</p>
      
      <h2>1. Tirthan Valley</h2>
      <p>A pristine valley located in the Kullu district, Tirthan is perfect for trout fishing and riverside camping. The Great Himalayan National Park is nearby.</p>
      
      <h2>2. Barot Valley</h2>
      <p>A relatively unexplored destination in Mandi district, known for its Uhl river and lush green landscapes. Perfect for nature lovers.</p>
      
      <h2>3. Pabbar Valley</h2>
      <p>Located in Shimla district, this valley offers trekking, camping, and stunning views of the Himalayan ranges.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1626010448982-4d629b9d2386?w=1200',
    author: {
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      bio: 'Travel writer and photographer exploring India since 2015.',
    },
    category: 'Hidden Places',
    readTime: 8,
    createdAt: '2024-01-15',
    likes: 234,
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Cover Image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="section-padding py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to blogs
            </Link>

            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 
                          rounded-full text-sm font-medium mb-4">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{blog.author.name}</div>
                  <div className="text-sm text-gray-500">{blog.author.bio}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.createdAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime} min read</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 
                               hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <Heart className="w-4 h-4" />
                <span>{blog.likes}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 
                               hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}