"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, Mail, Heart, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="relative bg-black border-t border-oru-green/20 py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Nigerian landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="font-playfair text-4xl font-bold gradient-text mb-6">ORU-UBI</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              From Soil to Soul - Revolutionizing Nigerian agriculture through technology, one farmer at a time.
            </p>
            <div className="flex items-center space-x-2 text-oru-green font-semibold italic">
              <Heart className="w-5 h-5 fill-current" />
              <span>"Every seed planted is a prayer for tomorrow."</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-playfair text-xl font-bold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-oru-green" />
                <a
                  href="mailto:hello@oru-ubi.africa"
                  className="text-gray-300 hover:text-oru-green transition-colors duration-300"
                >
                  hello@oru-ubi.africa
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-oru-green" />
                <span className="text-gray-300">+234 (0) 800 ORU-UBI</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-oru-green" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-playfair text-xl font-bold text-white mb-6">Follow Our Journey</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-12 h-12 bg-oru-green/20 hover:bg-oru-green rounded-full flex items-center justify-center text-oru-green hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Stay updated with our progress as we build the future of Nigerian agriculture.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-oru-green/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <p className="text-gray-500 text-sm">© 2024 Oru-Ubi. All rights reserved.</p>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-oru-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-oru-green transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center space-x-2 text-gray-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for Nigerian farmers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
