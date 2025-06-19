import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedCategories() {
  const categories = [
    {
      name: "Wedding Sarees",
      href: "/products?category=wedding",
      image: "/placeholder.svg?height=300&width=400&text=Wedding+Sarees",
      description: "Exquisite bridal collection",
    },
    {
      name: "Party Wear",
      href: "/products?category=party",
      image: "/placeholder.svg?height=300&width=400&text=Party+Wear+Sarees",
      description: "Glamorous evening wear",
    },
    {
      name: "Daily Wear",
      href: "/products?category=daily",
      image: "/placeholder.svg?height=300&width=400&text=Daily+Wear+Sarees",
      description: "Comfortable everyday elegance",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every occasion and style preference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
