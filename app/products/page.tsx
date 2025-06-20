"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { products } from "@/lib/mock-data"

interface Filters {
  category: string
  priceRange: number[]
  sortBy: string
}

export default function ProductsPage() {
  const [filters, setFilters] = useState<Filters>({
    category: "",
    priceRange: [0, 1000],
    sortBy: "name",
  })

  const filteredProducts = products
    .filter((product) => {
      if (filters.category && product.category.toLowerCase() !== filters.category) {
        return false
      }
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
            <p className="text-gray-600">Discover our complete collection of beautiful sarees</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters filters={filters} onFiltersChange={setFilters} />
            </div>
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
