import { Heart, ShoppingCart, Star, Share2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import sareeData from "@/data/sarees.json"

// Generate static params for static export
export async function generateStaticParams() {
  return sareeData.sarees.map((saree) => ({
    id: saree.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id

  const product = sareeData.sarees.find((saree) => saree.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const relatedProducts = sareeData.sarees
    .filter((saree) => saree.category === product.category && saree.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square relative overflow-hidden rounded-lg border-2 border-gray-200"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-8">
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
                    {product.rating} (Based on customer reviews)
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
                  <span className="font-semibold text-gray-900">Category:</span>
                  <span className="ml-2 text-gray-600 capitalize">{product.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Status:</span>
                  <span className="ml-2 text-gray-600">
                    {product.isNew ? "New Arrival" : "Regular"}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 py-3 text-lg font-semibold"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Wishlist
                  </Button>
                  <Button variant="outline" size="icon" className="p-3">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {relatedProduct.isNew && (
                        <Badge className="absolute top-2 left-2 bg-green-500">NEW</Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 font-bold">₹{relatedProduct.price.toLocaleString()}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ₹{relatedProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
