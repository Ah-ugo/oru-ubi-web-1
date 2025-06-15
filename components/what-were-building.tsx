"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Scan, Bug, DrillIcon as Drone, ShoppingCart, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "Soil Scanning",
    description: "AI-powered soil analysis to optimize crop yields and reduce waste.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Bug,
    title: "Disease Detection",
    description: "Early detection of crop diseases using computer vision technology.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Drone,
    title: "Drone Delivery",
    description: "Autonomous delivery of seeds, fertilizers, and tools to remote farms.",
    color: "from-teal-400 to-cyan-500",
    badge: "Coming Soon",
  },
  {
    icon: ShoppingCart,
    title: "Farm-to-Table",
    description: "Direct marketplace connecting farmers with consumers and retailers.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Data & Research",
    description: "Comprehensive analytics and insights for smarter farming decisions.",
    color: "from-blue-400 to-indigo-500",
  },
]

export default function WhatWereBuilding() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="building" className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(39,174,96,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(39,174,96,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            What We're <span className="text-green-400">Building</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"></div>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary agric-tech solutions designed for the African farmer, built with cutting-edge technology and
            deep understanding of local needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group relative perspective-1000"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full transform-gpu transition-all duration-500 group-hover:border-green-500/30">
                {/* Coming Soon Badge */}
                {feature.badge && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {feature.badge}
                  </motion.div>
                )}

                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-playfair text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-3xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="font-inter text-lg text-gray-400 mb-8">Ready to be part of the agricultural revolution?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(39, 174, 96, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-inter font-semibold px-10 py-4 rounded-full text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300"
          >
            Learn More About Our Technology
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
