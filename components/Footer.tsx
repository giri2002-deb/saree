"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export default function Footer() {
  // ... (same quickLinks, categories, customerService as before)

  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-red-600 py-12 px-4"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
          >
            Stay in Style
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-red-100 mb-6 text-base sm:text-lg"
          >
            Subscribe to get updates on new arrivals and exclusive offers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white text-gray-900 border-0 rounded-full px-6 py-3 text-lg"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full text-lg w-full sm:w-auto">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-12 px-6 w-full max-w-7xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-red-400">
              SAREE
            </motion.h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the beauty of traditional Indian sarees with our curated collection of premium fabrics and
              timeless designs.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
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
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <motion.a href={link.href} className="text-gray-300 hover:text-white transition-colors block" whileHover={{ x: 5 }}>
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
              {categories.map((cat, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <motion.a href={cat.href} className="text-gray-300 hover:text-white transition-colors block" whileHover={{ x: 5 }}>
                    {cat.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Customer Service */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">contact@saree.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">+1 (555) 876-5432</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin className="h-4 w-4 text-red-400 mt-1" />
                <span className="text-gray-300">
                  123 Fashion Street
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            <h5 className="font-semibold mt-6 mb-3 text-white">Customer Service</h5>
            <ul className="space-y-2 text-sm">
              {customerService.slice(0, 3).map((svc, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <motion.a href={svc.href} className="text-gray-300 hover:text-white block" whileHover={{ x: 5 }}>
                    {svc.name}
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
        className="border-t border-gray-800 text-center sm:text-left"
      >
        <div className="py-6 px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            {["Privacy Policy", "Terms & Conditions", "Return Policy", "Shipping Info"].map((item, index) => (
              <motion.a
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                className="hover:text-white"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.p className="text-gray-400">
            © 2024 SAREE. All Rights Reserved. | Made with for Saree Lovers
          </motion.p>
        </div>
      </motion.div>
    </footer>
  )
}
