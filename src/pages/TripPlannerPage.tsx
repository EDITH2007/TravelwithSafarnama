import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, DollarSign, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'
import { planTrip } from '../services/puter'
import type { TripPlan, TripPlanDay } from '../services/puter'

const initialPlanData = {
  destination: '',
  startDate: '',
  endDate: '',
  travelers: 2,
  budget: 15000,
}

export default function TripPlannerPage() {
  const [step, setStep] = useState(1)
  const [tripData, setTripData] = useState(initialPlanData)
  const [plan, setPlan] = useState<TripPlan | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleNext = async () => {
    if (step === 1 && !tripData.destination) {
      toast.error('Please enter a destination')
      return
    }

    if (step === 2) {
      if (!tripData.startDate || !tripData.endDate) {
        toast.error('Please select both travel dates')
        return
      }
    }

    if (step === 3) {
      setIsGenerating(true)
      try {
        const generatedPlan = await planTrip(tripData)
        setPlan(generatedPlan)
        setStep(4)
        toast.success('Trip plan created successfully!')
      } catch (error) {
        toast.error('Unable to generate the trip plan. Please try again.')
      } finally {
        setIsGenerating(false)
      }
      return
    }

    if (step < 3) setStep(step + 1)
  }

  const handleReset = () => {
    setTripData(initialPlanData)
    setPlan(null)
    setIsGenerating(false)
    setStep(1)
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
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
                  ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                  {s}
                </div>
                {s < 4 && (
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
                      onChange={(e) => setTripData({ ...tripData, budget: parseInt(e.target.value, 10) })}
                      className="w-full mt-4"
                    />
                    <div className="text-center mt-4 text-2xl font-bold text-blue-600">
                      ₹{tripData.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && plan && (
              <div className="space-y-8">
                <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/50 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Your AI-Powered Itinerary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">{plan.summary}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Why this plan works</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{plan.analysis.overview}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{plan.analysis.focus}</p>
                    <p className="text-gray-600 dark:text-gray-300">{plan.analysis.recommendation}</p>
                  </div>
                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Planner advice</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{plan.analysis.whyItWorks}</p>
                    <p className="text-gray-600 dark:text-gray-300">{plan.analysis.budgetNote}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Top places to cover in {plan.destination}</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {plan.topPlaces.map((place) => (
                      <div key={place.name} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-950">
                        <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-2">{place.type}</p>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{place.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{place.description}</p>
                        <p className="text-sm mt-3 text-gray-500 dark:text-gray-400">{place.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  {plan.itinerary.map((day: TripPlanDay) => (
                    <div key={day.day} className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{day.title}</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400">Day {day.day}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{day.description}</p>
                      <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                        {day.activities.map((activity: string, index: number) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Trip Details</h3>
                    <p className="text-gray-600 dark:text-gray-300">Destination: {plan.destination}</p>
                    <p className="text-gray-600 dark:text-gray-300">Dates: {plan.startDate} - {plan.endDate}</p>
                    <p className="text-gray-600 dark:text-gray-300">Travelers: {plan.travelers}</p>
                    <p className="text-gray-600 dark:text-gray-300">Daily Budget: ₹{plan.dailyBudget.toLocaleString()}</p>
                  </div>
                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">AI Planning Tips</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                      {plan.tips.map((tip: string, index: number) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  disabled={isGenerating}
                  className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-xl 
                           text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
              )}

              {step === 4 ? (
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors ml-auto"
                >
                  Plan Again
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium 
                         hover:bg-blue-700 transition-colors ml-auto"
                >
                  {step === 3 ? (isGenerating ? 'Generating...' : 'Create Plan') : 'Next'}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}