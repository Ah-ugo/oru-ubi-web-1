"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CloudRain, TrendingDown, AlertTriangle, Clock } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Unpredictable Weather",
    stat: "40%",
    description: "of crops lost to unexpected weather patterns",
    image: "/image7.png",
    story:
      "When the rains don't come, or come too late, entire harvests disappear. Families go hungry.",
  },
  {
    icon: TrendingDown,
    title: "Low Yields",
    stat: "60%",
    description: "below potential due to poor soil management",
    image: "/image8.png",
    story:
      "The same land that fed our ancestors now struggles to feed our children.",
  },
  {
    icon: AlertTriangle,
    title: "Disease & Pests",
    stat: "30%",
    description: "of crops destroyed by preventable diseases",
    image: "/image9.png",
    story:
      "By the time farmers notice the problem, it's often too late to save the harvest.",
  },
  {
    icon: Clock,
    title: "Market Access",
    stat: "50%",
    description: "of produce spoils before reaching market",
    image: "/image10.png",
    story:
      "Fresh vegetables rot in villages while cities pay premium prices for imports.",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8 text-white">
            The <span className="text-red-400">Harsh Reality</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Behind every statistic is a human story. Behind every number is a
            family's struggle.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={problem.image || "/placeholder.svg"}
                  alt={problem.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Stat Overlay */}
                <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-white">
                    {problem.stat}
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-red-300 font-semibold">
                  {problem.description}
                </p>
                <p className="text-gray-300 leading-relaxed italic">
                  "{problem.story}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="glass-effect border border-red-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-6">
              But what if it didn't have to be this way?
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              What if technology could predict the weather, prevent diseases,
              optimize yields, and connect farmers directly to markets?
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-oru-green mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
