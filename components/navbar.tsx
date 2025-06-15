"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Solutions", href: "#building" },
    { name: "Join Waitlist", href: "#waitlist" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-oru-green/20 shadow-lg"
            : "bg-black/20 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 z-50">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#home")
                }}
                className="font-playfair text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
              >
                ORU-UBI
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    color: "#27AE60",
                  }}
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white hover:text-oru-green transition-all duration-300 cursor-pointer group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-oru-green transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-white hover:text-oru-green transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-6 h-0.5 bg-current transform origin-center"
                />
                <motion.div
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-6 h-0.5 bg-current transform origin-center top-2"
                />
                <motion.div
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-6 h-0.5 bg-current transform origin-center top-4"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-oru-green/20 z-40 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8">
                {/* Navigation Items */}
                <div className="flex-1 px-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="block px-4 py-4 text-lg font-medium text-white hover:text-oru-green hover:bg-oru-green/10 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>

                  {/* CTA Button in Mobile Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="mt-8 px-4"
                  >
                    <a
                      href="#waitlist"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick("#waitlist")
                      }}
                      className="block w-full bg-gradient-to-r from-oru-green to-green-600 text-white text-center font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-oru-green transition-all duration-300 cursor-pointer"
                    >
                      Join the Revolution
                    </a>
                  </motion.div>
                </div>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="px-6 pt-6 border-t border-oru-green/20"
                >
                  <p className="text-sm text-gray-400 text-center">From Soil to Soul</p>
                  <p className="text-xs text-gray-500 text-center mt-1">Revolutionizing Nigerian Agriculture</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
