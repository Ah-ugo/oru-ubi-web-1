"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play } from "lucide-react";

interface FloatingPoint {
  left: string;
  top: string;
}

export default function HeroSection() {
  const [floatingPoints, setFloatingPoints] = useState<FloatingPoint[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const generatedPoints: FloatingPoint[] = Array.from({ length: 12 }).map(
      () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 2,
        delay: Math.random() * 2,
      })
    );
    setFloatingPoints(generatedPoints);
  }, []);

  if (floatingPoints.length === 0) {
    return null;
  }

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="/image3.png"
            alt="Nigerian farmer at sunrise with golden fields"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingPoints.map((point, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-oru-green/30 rounded-full"
            style={{
              left: point.left,
              top: point.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex items-center h-full"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* <div className="inline-flex items-center space-x-2 bg-oru-green/20 backdrop-blur-sm border border-oru-green/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-oru-green rounded-full animate-pulse"></div>
                <span className="text-oru-green font-semibold text-sm">
                  Coming Soon
                </span>
              </div> */}

              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white mb-2">ORU-UBI</span>
                <span className="block gradient-text text-4xl md:text-5xl lg:text-6xl">
                  From Soil to Soul
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl"
            >
              Every sunrise brings hope to millions of Nigerian farmers. We're
              here to turn that hope into harvest, that dream into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-oru-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-oru-green/25"
              >
                <span>Join the Revolution</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  →
                </motion.div>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group glass-effect border border-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:border-oru-green/50"
              >
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="relative"
              >
                <img
                  src="/image2.png"
                  alt="Nigerian farmer holding fresh harvest"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -top-6 -left-6 bg-oru-green/90 backdrop-blur-sm rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-white">2M+</div>
                <div className="text-sm text-white/80">Farmers to Impact</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute -bottom-6 -right-6 glass-effect border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-oru-green">54%</div>
                <div className="text-sm text-white/80">Yield Increase</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-oru-green cursor-pointer transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
