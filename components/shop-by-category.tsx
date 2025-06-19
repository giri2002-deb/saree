"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import sareeData from "@/data/sarees.json"

export function ShopByCategory() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Create a grid of 8 items by duplicating categories
  const gridItems = [...sareeData.categories, ...sareeData.categories].slice(0, 8)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">SHOP BY CATEGORY</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {gridItems.map((category, index) => (
            <motion.div
              key={`${category.id}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/category/${category.id}`}>
                <div className="aspect-[3/4] relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                    <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
                      <span>Rs. 3999</span>
                      <span className="line-through text-white/70">Rs. 4599</span>
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white rounded-full p-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
