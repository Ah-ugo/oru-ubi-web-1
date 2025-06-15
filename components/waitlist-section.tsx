"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { CheckCircle, Loader2, Users, Bell, Gift } from "lucide-react"

export default function WaitlistSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "farmer",
    location: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Celebration of harvest"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-oru-green/20 via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect border border-oru-green/30 rounded-3xl p-12 lg:p-16"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <CheckCircle className="w-24 h-24 text-oru-green mx-auto mb-8" />
            </motion.div>

            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Welcome to the Revolution!
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              You're now part of a movement that will transform Nigerian agriculture. Together, we're planting the seeds
              of change.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-oru-green mx-auto mb-2" />
                <p className="text-sm text-gray-400">Join 10,000+ farmers</p>
              </div>
              <div className="text-center">
                <Bell className="w-8 h-8 text-oru-green mx-auto mb-2" />
                <p className="text-sm text-gray-400">Get early access</p>
              </div>
              <div className="text-center">
                <Gift className="w-8 h-8 text-oru-green mx-auto mb-2" />
                <p className="text-sm text-gray-400">Exclusive benefits</p>
              </div>
            </div>

            <div className="pt-8 border-t border-oru-green/20">
              <p className="text-oru-green font-semibold text-lg italic">
                "Every great harvest begins with a single seed of hope."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="Farmers working together"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8">
            Join the <span className="gradient-text">Movement</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be among the first to experience the future of Nigerian agriculture. Your journey from soil to soul starts
            here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect border border-oru-green/20 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-oru-green mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oru-green focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-oru-green mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oru-green focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-oru-green mb-2">
                      I am a...
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-oru-green focus:border-transparent transition-all duration-300"
                    >
                      <option value="farmer" className="bg-black text-white">
                        Farmer
                      </option>
                      <option value="partner" className="bg-black text-white">
                        Partner
                      </option>
                      <option value="supporter" className="bg-black text-white">
                        Supporter
                      </option>
                      <option value="investor" className="bg-black text-white">
                        Investor
                      </option>
                      <option value="other" className="bg-black text-white">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-oru-green mb-2">
                      Location (State)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oru-green focus:border-transparent transition-all duration-300"
                      placeholder="e.g., Lagos, Kaduna"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-oru-green to-green-600 hover:from-green-600 hover:to-oru-green disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-oru-green/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Joining the Revolution...</span>
                    </>
                  ) : (
                    <span>Join the Revolution</span>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400">
                  By joining, you agree to receive updates about Oru-Ubi. We respect your privacy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-3xl font-bold text-white mb-6">What You'll Get</h3>
            </div>

            {[
              {
                icon: "🌱",
                title: "Early Access",
                description: "Be the first to use our revolutionary farming tools",
              },
              {
                icon: "📚",
                title: "Exclusive Content",
                description: "Access to farming guides, weather insights, and market data",
              },
              {
                icon: "🤝",
                title: "Community Support",
                description: "Connect with fellow farmers and agricultural experts",
              },
              {
                icon: "💰",
                title: "Special Pricing",
                description: "Exclusive discounts and free trial periods",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 p-4 glass-effect rounded-xl border border-white/10 hover:border-oru-green/30 transition-all duration-300"
              >
                <div className="text-2xl">{benefit.icon}</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
