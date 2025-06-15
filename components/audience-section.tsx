"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const audiences = [
  {
    text: "For the woman who plants before sunrise...",
    subtext: "Your dedication deserves technology that works as hard as you do.",
  },
  {
    text: "For the man who prays over cracked soil...",
    subtext: "Your faith will be met with innovation that brings rain to dry land.",
  },
  {
    text: "For the youth who dares to dream...",
    subtext: "Your vision of modern agriculture starts here, starts now.",
  },
  {
    text: "For the community that feeds a nation...",
    subtext: "Your harvest will nourish not just bodies, but the future of Nigeria.",
  },
]

export default function AudienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('/placeholder.svg?height=800&width=1200')`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8">
            Who This Is <span className="gradient-text">For</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 lg:p-12 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="font-playfair text-2xl lg:text-4xl font-bold text-white mb-4 group-hover:text-oru-green transition-colors duration-300">
                {audience.text}
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">{audience.subtext}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-oru-green/30"
        >
          <p className="font-playfair text-3xl lg:text-4xl font-bold gradient-text italic">
            "Every farmer has a story. We're here to help write the next chapter."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
