import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Camera, Star } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const categories = ['All', 'Mountains', 'Beaches', 'Spiritual', 'Heritage', 'Lakes', 'Waterfalls', 'Adventure']

export default function GalleryPage() {
  const { galleryPhotos } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<any | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryPhotos 
    : galleryPhotos.filter(img => img.category === selectedCategory)

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
              A collection of the highest-rated landscape pictures submitted by our travelers for each location.
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
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50 shadow-sm"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.location}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Score Tag */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 z-10">
                    <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                    Rating: {image.score}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                    <div className="flex items-center gap-1.5 text-white font-bold text-base">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-300 mt-1 font-medium">
                      <span>By {image.uploadedBy}</span>
                      <span className="uppercase text-[9px] tracking-wider font-semibold text-blue-400">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white dark:bg-gray-900 border border-dashed rounded-3xl max-w-xl mx-auto">
              <Camera className="w-12 h-12 mx-auto text-gray-300 mb-4" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">The gallery is empty</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Be the first to upload a landscape picture for your location from the User Dashboard!</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.location}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 text-white flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {selectedImage.location}
                  </h3>
                  <p className="text-xs text-gray-300 mt-0.5">Uploaded by {selectedImage.uploadedBy} • Aesthetic score: {selectedImage.score}</p>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-1 bg-white/10 rounded-lg">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}