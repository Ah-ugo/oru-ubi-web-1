"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const poeticLines = [
  "For the woman who plants before sunrise...",
  "For the man who prays over cracked soil...",
  "For the youth who dares to dream...",
  "For the communities that feed our nation...",
  "For the future we're planting today...",
]

export default function WhoThisIsFor() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-green-400/10 rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Who This Is <span className="text-green-400">For</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"></div>
        </motion.div>

        {/* Poetic Lines */}
        <div className="space-y-12">
          {poeticLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 transform-gpu transition-all duration-500 group-hover:border-green-500/30"
              >
                <p className="font-playfair text-2xl md:text-3xl text-white leading-relaxed group-hover:text-green-400 transition-colors duration-300">
                  {line}
                </p>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Floating accent */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.5 }}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full opacity-60"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-3xl p-12">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="font-playfair text-3xl md:text-4xl text-green-400 font-bold leading-relaxed"
            >
              This is for everyone who believes that technology should serve humanity, not the other way around.
            </motion.p>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400/30"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
