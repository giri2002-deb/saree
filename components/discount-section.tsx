"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function DiscountSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/placeholder.svg?height=600&width=500&text=Traditional+Handloom+Model"
              alt="Traditional Handloom Saree"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TRADITIONAL HANDLOOM SAREES</h2>
              <p className="text-lg text-gray-600 mb-6">
                Handwoven with care, these sarees reflect the timeless heritage of traditional crafts. Each piece tells
                a story of skilled artisans and cultural legacy.
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold text-gray-900">Rs. 7999</span>
              <span className="text-lg text-gray-500 line-through">Rs. 9999</span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">30% Offer</span>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Shop Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
