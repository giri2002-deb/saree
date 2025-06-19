"use client"

import type React from "react"

import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/mock-data"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { addItem } = useCart()

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 hover:bg-white"
                onClick={(e) => handleAddToCart(product, e)}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                NEW
              </span>
            )}
            {product.originalPrice && (
              <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                SALE
              </span>
            )}
          </div>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors">{product.name}</h3>
            </Link>
            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
