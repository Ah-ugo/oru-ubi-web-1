"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function JoinWaitlist() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "farmer",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={ref} id="waitlist" className="relative py-32 bg-gradient-to-b from-black to-green-900/20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(39,174,96,0.1)_0%,transparent_50%)] bg-[length:100px_100px]"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Join the <span className="text-green-400">Movement</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
          <p className="font-inter text-xl text-gray-300 leading-relaxed">
            Be among the first to experience the future of African agriculture. Your journey from soil to soul starts
            here.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative group perspective-1000"
        >
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 transform-gpu transition-all duration-500 group-hover:border-green-500/30">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <label className="block font-inter text-green-400 text-sm font-semibold mb-3">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-6 py-4 text-white font-inter text-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="relative"
                >
                  <label className="block font-inter text-green-400 text-sm font-semibold mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-6 py-4 text-white font-inter text-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                {/* Role Select */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="relative"
                >
                  <label className="block font-inter text-green-400 text-sm font-semibold mb-3">I am a...</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-6 py-4 text-white font-inter text-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                  >
                    <option value="farmer">Farmer</option>
                    <option value="partner">Partner</option>
                    <option value="supporter">Supporter</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.1 }}
                  className="text-center pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(39, 174, 96, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group bg-gradient-to-r from-green-500 to-green-600 text-white font-inter font-bold px-12 py-4 rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed transform-gpu transition-all duration-300"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      {isLoading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Join the Waitlist</span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            ) : (
              // Success State
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle size={40} className="text-white" />
                </motion.div>

                <h3 className="font-playfair text-3xl font-bold text-white mb-4">Welcome to the Movement!</h3>
                <p className="font-inter text-lg text-gray-300 mb-8">
                  Thank you for joining us. We'll keep you updated on our journey from soil to soul.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsSubmitted(false)}
                  className="text-green-400 hover:text-green-300 font-inter font-semibold transition-colors"
                >
                  Add another person →
                </motion.button>
              </motion.div>
            )}

            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-green-400/20 rounded-tl-lg"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-green-400/20 rounded-br-lg"></div>
          </div>

          {/* 3D Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
        </motion.div>
      </div>
    </section>
  )
}
