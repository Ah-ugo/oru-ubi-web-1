"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const visionPoints = [
  {
    title: "For the woman who plants before sunrise...",
    description:
      "Technology that works as tirelessly as she does, predicting weather patterns and optimizing every seed planted.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "For the man who prays over cracked soil...",
    description: "AI-powered soil analysis that turns prayers into precise action, bringing life back to the land.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "For the youth who dares to dream...",
    description: "A platform where traditional wisdom meets cutting-edge innovation, creating the future of farming.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "For the community that feeds a nation...",
    description: "Connected networks that ensure no harvest goes to waste, no farmer stands alone.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-oru-green/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We see a Nigeria where every farmer is empowered, every harvest is abundant, and every family is fed.
          </p>
        </motion.div>

        {/* Vision Points */}
        <div className="space-y-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <motion.div whileHover={{ scale: 1.02, rotateY: 2 }} className="relative overflow-hidden rounded-3xl">
                  <img
                    src={point.image || "/placeholder.svg"}
                    alt={point.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-white leading-tight">{point.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{point.description}</p>
                <div className="w-16 h-1 bg-oru-green rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="glass-effect border border-oru-green/30 rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto">
            <h3 className="font-playfair text-4xl lg:text-5xl font-bold gradient-text mb-8 leading-tight">
              From Soil to Soul: Technology with Heart
            </h3>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              This is more than agriculture. This is about dignity, hope, and the fundamental right of every person to
              feed their family and build their future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
