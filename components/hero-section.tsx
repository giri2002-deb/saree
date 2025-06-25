"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/ho1.avif",
    title: "Elegance Redefined",
    subtitle: "Step into timeless beauty",
    buttonText: "Explore Collection",
  },
  {
    image: "/ho2.jpg",
    title: "Vibrant Traditions",
    subtitle: "Colors that tell a story",
    buttonText: "View Colors",
  },
  {
    image: "/ho3.jpg",
    title: "Graceful Heritage",
    subtitle: "Crafted for every occasion",
    buttonText: "See More",
  },
  {
    image: "/ho4.jpg",
    title: "Luxury in Every Thread",
    subtitle: "Feel the difference",
    buttonText: "Feel the Luxury",
  },
  {
    image: "/ho5.jpg",
    title: "Unveil Your Style",
    subtitle: "Discover the collection",
    buttonText: "Start Shopping",
  },
]

const particles = [
  { left: "10%", top: "20%", size: 36, color: "bg-yellow-400", delay: 0 },
  { left: "80%", top: "15%", size: 24, color: "bg-red-400", delay: 1 },
  { left: "50%", top: "80%", size: 20, color: "bg-pink-400", delay: 2 },
  { left: "70%", top: "60%", size: 32, color: "bg-orange-400", delay: 1.5 },
  { left: "20%", top: "75%", size: 16, color: "bg-rose-300", delay: 2.5 },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const tick = () => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }
    timeoutRef.current = setTimeout(tick, 7000)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [current])

  const goToSlide = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setCurrent(idx)
  }

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Slide */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Particles */}
      {particles.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-30 z-10 ${c.color}`}
          style={{ left: c.left, top: c.top, width: c.size, height: c.size }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6 + c.delay,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-20 text-center text-white w-full px-4 sm:px-6 md:px-8 pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
              {slides[current].title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-medium">
              {slides[current].subtitle}
            </p>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {slides[current].buttonText} →
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Dots */}
        {/* <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all ${
                current === idx ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}
