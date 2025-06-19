"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import sareeData from "@/data/sarees.json"

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const featuredSarees = sareeData.sarees.filter((saree) => saree.isFeatured)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredSarees.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredSarees.length) % featuredSarees.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked sarees that represent the pinnacle of traditional craftsmanship
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Carousel */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide()
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide()
                  }
                }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={featuredSarees[currentIndex]?.image}
                      alt={featuredSarees[currentIndex]?.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex items-center justify-center p-12 bg-white">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="max-w-md"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4"
                      >
                        Featured
                      </motion.span>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                      >
                        {featuredSarees[currentIndex]?.name}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-600 mb-6 leading-relaxed"
                      >
                        {featuredSarees[currentIndex]?.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center space-x-4 mb-8"
                      >
                        <span className="text-3xl font-bold text-red-600">
                          ₹{featuredSarees[currentIndex]?.price.toLocaleString()}
                        </span>
                        {featuredSarees[currentIndex]?.originalPrice && (
                          <span className="text-xl text-gray-500 line-through">
                            ₹{featuredSarees[currentIndex]?.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
                          Shop Now
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 rounded-full w-12 h-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 rounded-full w-12 h-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {featuredSarees.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-600 scale-125" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
