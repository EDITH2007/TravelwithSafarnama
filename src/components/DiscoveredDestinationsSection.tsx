import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, X, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { DiscoveredDestination } from '../context/AuthContext';

const defaultDiscoveries: DiscoveredDestination[] = [
  {
    id: "def-disc-1",
    name: "Mawlynnong Village",
    tagline: "Asia's cleanest village in the East Khasi Hills",
    category: "Heritage",
    locationDetailed: "East Khasi Hills, Meghalaya",
    whyVisit: "Breathtaking living root bridges and unmatched cleanliness.",
    bestTimeToVisit: "September to May",
    description: "Mawlynnong is famous for its cleanliness and natural beauty. It was awarded the cleanest village in Asia. It is home to a unique living root bridge and offers stunning skywalk view points of the Bangladesh plains.",
    howToReach: "Drive 90km from Shillong via scenic mountain roads.",
    nearestTransport: "Guwahati Railway Station / Shillong Airport",
    entryFee: 50,
    averageCost: 1500,
    isFree: false,
    facilities: ["Washroom", "Drinking Water", "Food Available", "Hotels Nearby"],
    coverImage: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    thingsToCarry: "Umbrella, comfortable walking shoes",
    thingsToAvoid: "Plastic bottles, littering (strict fine)",
    safetyTips: "Respect local Khasi customs",
    tags: ["Nature photography", "Hidden gem", "Family Trekking"],
    submittedBy: "Aarav Mehta",
    submittedByUsername: "aarav_explorer",
    status: "approved",
    creationTime: Date.now() - 50000000
  },
  {
    id: "def-disc-2",
    name: "Ziro Valley",
    tagline: "Home to the Apatani tribe and spectacular music festivals",
    category: "Mountains",
    locationDetailed: "Lower Subansiri, Arunachal Pradesh",
    whyVisit: "Lush green pine hills and unique tribal culture.",
    bestTimeToVisit: "September to November",
    description: "Ziro Valley is a beautiful plateau surrounded by pine clad hills and rice fields. It is home to the friendly Apatani tribe and is famous for hosting the Ziro Festival of Music, which attracts music lovers from all over the world.",
    howToReach: "Take overnight train from Guwahati to Naharlagun, then share cab.",
    nearestTransport: "Naharlagun Railway Station",
    entryFee: 0,
    averageCost: 2500,
    isFree: true,
    facilities: ["Parking", "Washroom", "Mobile Network", "Camping Allowed"],
    coverImage: "https://images.unsplash.com/photo-1626010448982-4d629b9d2386?w=800",
    thingsToCarry: "Warm clothes, Inner Line Permit (ILP)",
    thingsToAvoid: "Taking photos of locals without asking",
    safetyTips: "Keep insect repellent handy",
    tags: ["Camping", "Adventure", "Hidden gem"],
    submittedBy: "Sneha Rao",
    submittedByUsername: "sneha_travels",
    status: "approved",
    creationTime: Date.now() - 80000000
  }
];

export default function DiscoveredDestinationsSection() {
  const { discoveredDestinations } = useAuth();
  const [selectedDiscovery, setSelectedDiscovery] = useState<DiscoveredDestination | null>(null);

  // Combine custom approved user discoveries with high-quality defaults
  const approvedDiscoveries = [
    ...defaultDiscoveries,
    ...discoveredDestinations.filter(d => d.status === 'approved')
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800/40 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Explorer discoveries
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
            Discovered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500">Travelers</span>
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
            Explore unique offbeat locations, secret viewpoints, and clean tribal villages shared directly by our global travel community.
          </p>
        </div>

        {/* Discoveries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedDiscoveries.map((discovery, index) => (
            <motion.div
              key={discovery.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedDiscovery(discovery)}
            >
              <div className="relative h-60 overflow-hidden bg-gray-150 dark:bg-gray-950">
                <img 
                  src={discovery.coverImage} 
                  alt={discovery.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category & Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-sm uppercase tracking-wider">
                    {discovery.category}
                  </span>
                  {discovery.isFree && (
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-green-600 text-white shadow-sm uppercase tracking-wider">
                      Free Entry
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-orange-500" />
                    <span className="truncate">{discovery.locationDetailed}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-extrabold text-xl text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {discovery.name}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                    "{discovery.tagline}"
                  </p>
                  <p className="text-xs text-gray-655 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {discovery.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/30 flex items-center justify-center text-blue-600 font-extrabold text-[10px]">
                      {discovery.submittedBy.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-450 block leading-none font-semibold">Shared By</span>
                      <span className="text-[11px] font-bold text-gray-800 dark:text-gray-200">
                        {discovery.submittedBy}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-blue-650 dark:text-blue-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300">
                    Explore details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Modal */}
        <AnimatePresence>
          {selectedDiscovery && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-850 rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-150 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-950/20">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full">
                      {selectedDiscovery.category}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-2 leading-none">
                      {selectedDiscovery.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      {selectedDiscovery.locationDetailed}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedDiscovery(null)}
                    className="p-1.5 text-gray-400 hover:text-gray-650 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs leading-relaxed">
                  <div className="relative h-60 rounded-2xl overflow-hidden bg-gray-105 dark:bg-gray-950">
                    <img 
                      src={selectedDiscovery.coverImage} 
                      alt={selectedDiscovery.name} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white">
                        Discovery ID: {selectedDiscovery.id}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Description & Overview</h4>
                      <p className="text-gray-650 dark:text-gray-350 leading-relaxed mt-1">{selectedDiscovery.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 border-gray-100 dark:border-gray-800">
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block">Why Visit:</span>
                        <p className="text-gray-755 dark:text-gray-300 mt-0.5 font-medium">{selectedDiscovery.whyVisit}</p>
                      </div>
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block">Best Time to Visit:</span>
                        <p className="text-gray-755 dark:text-gray-300 mt-0.5 font-medium">{selectedDiscovery.bestTimeToVisit}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 border-gray-100 dark:border-gray-805">
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block">How to Reach (Directions):</span>
                        <p className="text-gray-755 dark:text-gray-300 mt-0.5 font-medium">{selectedDiscovery.howToReach}</p>
                      </div>
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block">Nearest Transport Station:</span>
                        <p className="text-gray-755 dark:text-gray-300 mt-0.5 font-medium">{selectedDiscovery.nearestTransport}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 border-gray-100 dark:border-gray-805">
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block">Budget Highlights:</span>
                        <p className="text-gray-755 dark:text-gray-300 mt-0.5 font-medium">
                          {selectedDiscovery.isFree ? '🍀 Free Entry' : `Entry Fee: ₹${selectedDiscovery.entryFee} • Avg cost per person: ₹${selectedDiscovery.averageCost}`}
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block">Facilities Checklist:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedDiscovery.facilities.map(f => (
                            <span key={f} className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-[9px] text-gray-600 dark:text-gray-400 font-semibold">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Travel tips */}
                    <div className="border-t pt-4 border-gray-100 dark:border-gray-800 space-y-2">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Travel Tips & Guide</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-blue-50/50 dark:bg-blue-950/20 p-3 rounded-xl border border-blue-100/10">
                          <span className="font-bold text-blue-650 dark:text-blue-400 block mb-0.5">👜 Things to Carry</span>
                          <p className="text-gray-655 dark:text-gray-350">{selectedDiscovery.thingsToCarry}</p>
                        </div>
                        <div className="bg-red-50/50 dark:bg-red-950/20 p-3 rounded-xl border border-red-100/10">
                          <span className="font-bold text-red-655 dark:text-red-400 block mb-0.5">🚫 Things to Avoid</span>
                          <p className="text-gray-655 dark:text-gray-350">{selectedDiscovery.thingsToAvoid}</p>
                        </div>
                        <div className="bg-green-50/50 dark:bg-green-950/20 p-3 rounded-xl border border-green-100/10">
                          <span className="font-bold text-green-655 dark:text-green-400 block mb-0.5">🛡️ Safety Guide</span>
                          <p className="text-gray-655 dark:text-gray-350">{selectedDiscovery.safetyTips}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 border-gray-100 dark:border-gray-800">
                      <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block mb-1">Tags:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedDiscovery.tags.map(t => (
                          <span key={t} className="bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-bold">#{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer close button */}
                <div className="p-6 border-t border-gray-155 dark:border-gray-850 bg-gray-50/50 dark:bg-gray-950/25 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[10px] text-gray-400 block leading-none font-semibold">Discovery Contributor</span>
                    <span className="text-[11px] font-bold text-gray-850 dark:text-gray-200">
                      {selectedDiscovery.submittedBy} (@{selectedDiscovery.submittedByUsername})
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedDiscovery(null)}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 transition-all"
                  >
                    Close Discovery details
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
