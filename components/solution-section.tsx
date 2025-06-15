"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Satellite, Brain, Network } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Smart algorithms that learn from your land",
    features: [
      "Soil health analysis",
      "Crop disease prediction",
      "Yield optimization",
      "Weather forecasting",
    ],
    image: "/image11.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Satellite,
    title: "Satellite Monitoring",
    description: "Eyes in the sky watching over your crops",
    features: [
      "Real-time crop monitoring",
      "Pest detection",
      "Irrigation optimization",
      "Growth tracking",
    ],
    image: "/image12.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Platform",
    description: "Powerful tools in the palm of your hand",
    features: [
      "Offline functionality",
      "Voice commands in local languages",
      "Simple, intuitive interface",
      "Community support",
    ],
    image: "/image13.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Network,
    title: "Connected Marketplace",
    description: "Direct connection from farm to table",
    features: [
      "Fair pricing",
      "Quality assurance",
      "Logistics support",
      "Payment security",
    ],
    image: "/image14.png",
    color: "from-orange-500 to-red-500",
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="building" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-oru-green/5 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8">
            Our <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Technology that serves humanity. Innovation that reaches the hands
            that feed us all.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative overflow-hidden rounded-3xl"
                >
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.3 + featureIndex * 0.1,
                      }}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full`}
                      ></div>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  className="pt-6"
                >
                  <button
                    className={`bg-gradient-to-r ${solution.color} text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
