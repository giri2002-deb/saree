"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Categories", href: "/categories" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const categories = [
    { name: "Banarasi Silk", href: "/category/banarasi" },
    { name: "Kuppadam", href: "/category/kuppadam" },
    { name: "Handloom", href: "/category/handloom" },
    { name: "Cotton Sarees", href: "/category/cotton" },
    { name: "Silk Collection", href: "/category/silk" },
  ]

  const customerService = [
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
    { name: "Return Policy", href: "/returns" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-red-600 py-16"
      >
        <div className="text-center w-full">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Stay in Style
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-red-100 mb-8 text-lg"
          >
            Subscribe to get updates on new arrivals and exclusive offers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900 border-0 rounded-full px-6 py-3 text-lg"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full text-lg">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-red-400">
              SAREE
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              Discover the beauty of traditional Indian sarees with our curated collection of premium fabrics and
              timeless designs. Each piece tells a story of heritage and elegance.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-colors rounded-full"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <motion.li
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors block"
                    whileHover={{ x: 5 }}
                  >
                    {category.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Customer Service */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Contact Us</h4>
            <div className="space-y-4 mb-8">
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <Mail className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@saree.com</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                <Phone className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 876-5432</span>
              </motion.div>
              <motion.div className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                <MapPin className="h-4 w-4 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  123 Fashion Street
                  <br />
                  New York, NY 10001
                </span>
              </motion.div>
            </div>

            <h5 className="font-semibold mb-4 text-white">Customer Service</h5>
            <ul className="space-y-2">
              {customerService.slice(0, 3).map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm block"
                    whileHover={{ x: 5 }}
                  >
                    {service.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border-t border-gray-800"
      >
        <div className="py-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Return Policy", "Shipping Info"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <motion.p
              className="text-gray-400 text-sm text-center md:text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              © 2024 SAREE. All Rights Reserved. | Made with ❤️ for Saree Lovers
            </motion.p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
