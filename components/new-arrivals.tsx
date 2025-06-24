"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/mock-data"

export function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)

  // Get all unique categories
  const categories = ["all", ...Array.from(new Set(products.filter(p => p.isNew).map(p => p.category)))]

  // Filter by isNew, category, and price
  const filteredArrivals = products
    .filter(product => product.isNew)
    .filter(product => selectedCategory === "all" || product.category === selectedCategory)
    .filter(product => product.price >= minPrice && product.price <= maxPrice)

  const itemsPerPage = 4
  const maxIndex = Math.max(0, filteredArrivals.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Slice for current page
  const visibleArrivals = filteredArrivals.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
            <p className="text-gray-600">Discover our latest collection of beautiful sarees</p>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={selectedCategory}
              onChange={e => { setSelectedCategory(e.target.value); setCurrentIndex(0); }}
              className="border rounded px-3 py-2"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
            <input
              type="number"
              min={0}
              value={minPrice}
              onChange={e => { setMinPrice(Number(e.target.value)); setCurrentIndex(0); }}
              placeholder="Min Price"
              className="border rounded px-3 py-2 w-24"
            />
            <input
              type="number"
              min={0}
              value={maxPrice}
              onChange={e => { setMaxPrice(Number(e.target.value)); setCurrentIndex(0); }}
              placeholder="Max Price"
              className="border rounded px-3 py-2 w-24"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {visibleArrivals.map((product) => (
                <div key={product.id} className="w-full md:w-1/4 flex-shrink-0 px-2">
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <Link href={`/products/${product.id}`}>
                        <img
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center space-x-2 mt-6">
            <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex >= maxIndex}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
