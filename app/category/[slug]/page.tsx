import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { ProductGrid } from "@/components/product-grid"
import sareeData from "@/data/sarees.json"

// Generate static params for static export
export async function generateStaticParams() {
  return sareeData.categories.map((category) => ({
    slug: category.id,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug

  const category = sareeData.categories.find((cat) => cat.id === categorySlug)
  const products = sareeData.sarees.filter((saree) => saree.category.toLowerCase() === categorySlug)

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{category.name}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.name} Collection</h2>
              <p className="text-gray-600">
                Showing {products.length} products in {category.name}
              </p>
            </div>

            {products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600">No products available in this category yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
