import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, DollarSign, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'

export default function TripPlannerPage() {
  const [step, setStep] = useState(1)
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 2,
    budget: 15000,
  })

  const handleNext = () => {
    if (step === 1 && !tripData.destination) {
      toast.error('Please enter a destination')
      return
    }
    if (step < 3) setStep(step + 1)
    else {
      toast.success('Trip plan created successfully!')
    }
  }

  return (
    <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="section-padding py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h1 className="heading-lg text-gray-900 dark:text-white mb-4">
              AI Trip Planner
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Let us create the perfect itinerary for your next adventure.
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
                  ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-24 md:w-40 h-1 mx-2 
                    ${step > s ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Where do you want to go?
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={tripData.destination}
                      onChange={(e) => setTripData({ ...tripData, destination: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 
                               bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                      placeholder="e.g., Manali, Goa, Varanasi..."
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  When are you traveling?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={tripData.startDate}
                        onChange={(e) => setTripData({ ...tripData, startDate: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={tripData.endDate}
                        onChange={(e) => setTripData({ ...tripData, endDate: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={tripData.travelers}
                      onChange={(e) => setTripData({ ...tripData, travelers: parseInt(e.target.value) })}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 
                               bg-gray-50 dark:bg-gray-800 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What's your budget?
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget per person (₹)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="range"
                      min={5000}
                      max={100000}
                      step={1000}
                      value={tripData.budget}
                      onChange={(e) => setTripData({ ...tripData, budget: parseInt(e.target.value) })}
                      className="w-full mt-4"
                    />
                    <div className="text-center mt-4 text-2xl font-bold text-blue-600">
                      ₹{tripData.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-xl 
                           text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium 
                         hover:bg-blue-700 transition-colors ml-auto"
              >
                {step === 3 ? 'Create Plan' : 'Next'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}