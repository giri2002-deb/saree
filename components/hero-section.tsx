"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                GRACE IN EVERY{" "}
                <motion.span
                  className="text-red-600"
                  animate={{ color: ["#dc2626", "#f59e0b", "#dc2626"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  THREAD
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-2xl md:text-4xl font-semibold text-gray-700"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Story in Every Drape
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                Discover the elegance of traditional Indian sarees crafted with love, heritage, and timeless beauty for
                every special occasion.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Explore Collection →
                    </motion.span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "500+", label: "Premium Sarees" },
                { number: "50+", label: "Categories" },
                { number: "10K+", label: "Happy Customers" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-red-600"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <img
                    src="/download.jpg"
                  
                    alt="Elegant Saree 1"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6 mt-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <img
                    src="/download (1).jpg"
                    alt="Elegant Saree 2"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-400 rounded-full opacity-20"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
