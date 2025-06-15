"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function WhyWeExist() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="vision" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative group perspective-1000">
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl transform-gpu transition-all duration-500"
              >
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Woman planting seeds"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Floating Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <p className="font-inter text-white text-lg italic">
                    "Every seed planted is a prayer for tomorrow."
                  </p>
                </motion.div>
              </motion.div>

              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 bg-green-500/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
                Why We <span className="text-green-400">Exist</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mb-8"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="space-y-6"
            >
              <p className="font-inter text-xl text-gray-300 leading-relaxed">
                In every harvest, there is <span className="text-green-400 font-semibold">hope</span>. 
                But for millions of Nigerian farmers, hope alone isn't enough.
              </p>
              
              <p className="font-inter text-lg text-gray-400 leading-relaxed">
                We see the calloused hands that work before dawn. We hear the prayers whispered over cracked soil. 
                We feel the weight of uncertainty that comes with each planting season.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6"
              >
                <p className="font-inter text-green-300 text-lg italic">
                  "Technology should serve those who feed us. Innovation should reach the hands that nurture our land."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
