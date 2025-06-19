"use client"

import { motion } from "framer-motion"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CardProps {
  saree: {
    id: number
    name: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    reviews: number
    isNew?: boolean
    tags: string[]
  }
  index?: number
}

export default function Card({ saree, index = 0 }: CardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const discount = saree.originalPrice
    ? Math.round(((saree.originalPrice - saree.price) / saree.originalPrice) * 100)
    : 0

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  }

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.img
          src={saree.image}
          alt={saree.name}
          className="w-full h-full object-cover"
          variants={imageVariants}
          animate={isHovered ? "hover" : "rest"}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Overlay */}
        <motion.div
          variants={overlayVariants}
          animate={isHovered ? "hover" : "rest"}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isHovered ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3 }}
            className="flex space-x-3"
          >
            <Button size="icon" className="bg-white/90 hover:bg-white text-gray-900 rounded-full shadow-lg">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="bg-white/90 hover:bg-white border-white rounded-full shadow-lg"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {saree.isNew && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full"
            >
              NEW
            </motion.span>
          )}
          {discount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full"
            >
              {discount}% OFF
            </motion.span>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {saree.name}
        </motion.h3>

        {/* Rating */}
        <motion.div
          className="flex items-center space-x-1 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(saree.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {saree.rating} ({saree.reviews})
          </span>
        </motion.div>

        {/* Price */}
        <motion.div
          className="flex items-center space-x-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-xl font-bold text-gray-900">₹{saree.price.toLocaleString()}</span>
          {saree.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{saree.originalPrice.toLocaleString()}</span>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap gap-1 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {saree.tags.slice(0, 3).map((tag, index) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Add to Cart Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Button
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300"
            size="lg"
          >
            <motion.span whileHover={{ x: 5 }} className="flex items-center justify-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
