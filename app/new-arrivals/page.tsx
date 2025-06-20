"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { ProductGrid } from "@/components/product-grid"
import sareeData from "@/data/sarees.json"
import type { Product } from "@/lib/mock-data"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

export default function NewArrivalsPage() {
  const newArrivals = (sareeData.sarees as any[])
    .map((saree) => {
      return {
        ...saree,
        tags: Array.isArray(saree.tags) ? saree.tags : [],
      } as Product
    })
    .filter((saree) => saree.isNew)

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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">New Arrivals</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our latest collection of beautiful sarees, featuring the newest designs and trends
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-8">
                <p className="text-gray-600">Showing {newArrivals.length} new arrivals</p>
              </div>
              <ProductGrid products={newArrivals} />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}
