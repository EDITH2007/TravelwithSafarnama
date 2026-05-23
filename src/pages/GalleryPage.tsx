import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin } from 'lucide-react'

const galleryImages = [
  { id: '1', src: 'https://images.unsplash.com/photo-1626010448982-4d629b9d2386?w=800', location: 'Manali, Himachal Pradesh', category: 'Mountains' },
  { id: '2', src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800', location: 'Goa', category: 'Beaches' },
  { id: '3', src: 'https://images.unsplash.com/photo-1561361058-e1bf90f9bf25?w=800', location: 'Varanasi, Uttar Pradesh', category: 'Spiritual' },
  { id: '4', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', location: 'Leh, Ladakh', category: 'Mountains' },
  { id: '5', src: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800', location: 'Jaipur, Rajasthan', category: 'Heritage' },
  { id: '6', src: 'https://images.unsplash.com/photo-1595658658481-d50d3f27d0c8?w=800', location: 'Hampi, Karnataka', category: 'Heritage' },
  { id: '7', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', location: 'Pangong Lake, Ladakh', category: 'Lakes' },
  { id: '8', src: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800', location: 'Dudhsagar Falls, Goa', category: 'Waterfalls' },
  { id: '9', src: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800', location: 'Solang Valley, Manali', category: 'Adventure' },
]

const categories = ['All', 'Mountains', 'Beaches', 'Spiritual', 'Heritage', 'Lakes', 'Waterfalls', 'Adventure']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="section-padding py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="heading-lg text-gray-900 dark:text-white mb-4">Photo Gallery</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A visual journey through India's most stunning landscapes and moments.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.location}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{image.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}