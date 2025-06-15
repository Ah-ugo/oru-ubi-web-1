"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scan, Bug, DrillIcon as Drone, ShoppingCart, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "Soil Scanning",
    description: "AI-powered soil analysis to optimize crop selection and yield potential.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Bug,
    title: "Disease Detection",
    description: "Early identification of crop diseases using computer vision technology.",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: Drone,
    title: "Drone Delivery",
    description: "Automated delivery of seeds, fertilizers, and tools directly to farms.",
    color: "from-teal-400 to-cyan-600",
    badge: "Coming Soon",
  },
  {
    icon: ShoppingCart,
    title: "Farm-to-Table Marketplace",
    description: "Direct connection between farmers and consumers for fair pricing.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: BarChart3,
    title: "Research & Data",
    description: "Comprehensive analytics and insights to drive agricultural innovation.",
    color: "from-blue-400 to-indigo-600",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="building" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-oru-gray" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
            What We're <span className="gradient-text">Building</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary tools and platforms designed to empower every farmer, from the smallest plot to the largest
            plantation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Badge */}
                {feature.badge && (
                  <div className="absolute top-4 right-4 bg-oru-green text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {feature.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-white group-hover:text-oru-green transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-oru-green to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
