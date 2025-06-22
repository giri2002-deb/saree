"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function FeaturedCollection() {
  const featuredItems = [
    {
      id: 1,
      name: "BANARASI COTTON",
      image: "/images (2).jpg",
      category: "banarasi",
    },
    {
      id: 2,
      name: "WOVEN KUPPADAM SILK BLEND SAREE",
      image: "/images (3).jpg",
      category: "silk",
    },
    {
      id: 3,
      name: "TEAL BLUE COTTON SAREE",
      image: "/images (4).jpg",
      category: "cotton",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">FEATURED COLLECTION</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/category/${item.category}`}>
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
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
