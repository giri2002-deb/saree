"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { NewArrivals } from "@/components/new-arrivals"
import { DiscountSection } from "@/components/discount-section"
import { ShopByCategory } from "@/components/shop-by-category"
import { FeaturedCollection } from "@/components/featured-collection"
import { BlogSection } from "@/components/blog-section"
import Footer from "@/components/Footer"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <HeroSection />
        <NewArrivals />
        <DiscountSection />
        <ShopByCategory />
        <FeaturedCollection />
        <BlogSection />
      </main>
      <Footer />
    </motion.div>
  )
}
