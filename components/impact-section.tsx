"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const impacts = [
  {
    number: "2M+",
    label: "Farmers Empowered",
    description: "Across Nigeria, from Lagos to Kano",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: "54%",
    label: "Yield Increase",
    description: "Average improvement in crop production",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: "₦50B",
    label: "Economic Impact",
    description: "Generated for rural communities",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    number: "80%",
    label: "Waste Reduction",
    description: "Less food spoilage from farm to market",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/image1.png"
          alt="Successful harvest celebration"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8">
            The <span className="gradient-text">Impact</span> We Envision
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            These aren't just numbers. They represent families fed, dreams
            realized, and communities transformed.
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={impact.image || "/placeholder.svg"}
                  alt={impact.label}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-playfair">
                      {impact.number}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-oru-green transition-colors">
                {impact.label}
              </h3>
              <p className="text-gray-300 text-sm">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect border border-oru-green/20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <blockquote className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-6 italic leading-relaxed">
                  "Before Oru-Ubi, I was just surviving. Now, I'm thriving. My
                  children go to school, my farm feeds the community, and I have
                  hope for tomorrow."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-oru-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-oru-green font-semibold">Amina Bello</p>
                    <p className="text-gray-400 text-sm">
                      Farmer, Kaduna State
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/image4.png"
                  alt="Amina Bello"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
