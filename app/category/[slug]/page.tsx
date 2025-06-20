"use client"

import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { ProductGrid } from "@/components/product-grid"
import sareeData from "@/data/sarees.json"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.slug as string

  const category = sareeData.categories.find((cat) => cat.id === categorySlug)
  const categoryProducts = sareeData.sarees.filter((saree) => saree.category === categorySlug)

  if (!category) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{category.name}</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Category Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.name} Collection</h2>
                <p className="text-gray-600">
                  Showing {categoryProducts.length} products in {category.name}
                </p>
              </div>

              {categoryProducts.length > 0 ? (
                <ProductGrid products={categoryProducts} />
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600">Check back soon for new arrivals in this category.</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}
