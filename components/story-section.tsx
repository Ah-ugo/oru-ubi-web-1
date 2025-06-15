"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Sprout } from "lucide-react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="African soil and seeds"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
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
            Every <span className="gradient-text">Seed</span> Has a Story
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In the heart of Nigeria, where the sun kisses the earth each
            morning, millions of hands work the soil with nothing but hope and
            determination.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Heart,
              title: "The Heart",
              story:
                "Amina wakes at 4 AM, her calloused hands already reaching for her tools. She's done this for 30 years, yet each day brings the same prayer: 'Let this harvest feed my children.'",
              image: "/image4.png",
            },
            {
              icon: Users,
              title: "The Community",
              story:
                "In Kaduna, 200 families depend on the same rain, the same soil, the same hope. When one farm fails, the entire village feels the hunger. When one succeeds, everyone celebrates.",
              image: "/image5.png",
            },
            {
              icon: Sprout,
              title: "The Dream",
              story:
                "Young Kemi sees beyond the traditional ways. She dreams of drones delivering seeds, of apps predicting weather, of technology serving those who feed the nation.",
              image: "/image6.jpeg",
            },
          ].map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-oru-green/90 rounded-full flex items-center justify-center mb-3">
                    <story.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="font-playfair text-2xl font-bold mb-4 text-white group-hover:text-oru-green transition-colors">
                {story.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {story.story}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Emotional Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect border border-oru-green/20 rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
            <blockquote className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-6 italic leading-relaxed">
              "We don't just plant seeds in the ground. We plant hope in hearts,
              dreams in minds, and futures in the hands of those who feed us
              all."
            </blockquote>
            <div className="w-16 h-1 bg-oru-green mx-auto mb-4"></div>
            <p className="text-oru-green font-semibold text-lg">
              The Oru-Ubi Promise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
