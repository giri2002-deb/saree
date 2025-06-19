"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import sareeData from "@/data/sarees.json"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

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
      transition: { duration: 0.5 },
    },
  }

  const categories = [{ id: "all", name: "All Sarees" }, ...sareeData.categories]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHoveredCategory(category.id)}
          onHoverEnd={() => setHoveredCategory(null)}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? "bg-red-600 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md"
          }`}
        >
          <motion.span
            animate={{
              color: hoveredCategory === category.id && selectedCategory !== category.id ? "#dc2626" : undefined,
            }}
          >
            {category.name}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  )
}
