"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useParams } from "next/navigation"
import { Heart, ShoppingCart, Star, Minus, Plus, Share2 } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import sareeData from "@/data/sarees.json"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = sareeData.sarees.find((saree) => saree.id === productId)

  if (!product) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    )
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const relatedProducts = sareeData.sarees
    .filter((saree) => saree.category === product.category && saree.id !== product.id)
    .slice(0, 4)

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

      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images?.[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>

              {product.images && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === index ? "border-red-500 scale-105" : "border-gray-200"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Badges */}
              <div className="flex space-x-2">
                {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">NEW</Badge>}
                {discount > 0 && <Badge className="bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>}
              </div>

              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-red-600">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">Fabric:</span>
                  <span className="ml-2 text-gray-600">{product.fabric}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Work:</span>
                  <span className="ml-2 text-gray-600">{product.work}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Occasion:</span>
                  <span className="ml-2 text-gray-600">{product.occasion}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Category:</span>
                  <span className="ml-2 text-gray-600 capitalize">{product.category}</span>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-gray-900">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="rounded-full"
                    >
                      <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="outline" size="lg" className="rounded-full">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-red-600 text-red-600 hover:bg-red-50"
                >
                  Buy Now
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-24"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.a
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-red-600">
                            ₹{relatedProduct.price.toLocaleString()}
                          </span>
                          {relatedProduct.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{relatedProduct.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>

      <Footer />
    </motion.div>
  )
}
