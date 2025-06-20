import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { ProductGrid } from "@/components/product-grid"
import sareeData from "@/data/sarees.json"

// Generate static params for static export
export async function generateStaticParams() {
  return sareeData.sarees.map((saree) => ({
    id: saree.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
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

  const relatedProducts = sareeData.sarees
    .filter((saree) => saree.category === product.category && saree.id !== product.id)
    .slice(0, 8)

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{product.description}</p>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
                <p className="text-gray-600">
                  Similar products you might like
                </p>
              </div>

              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
