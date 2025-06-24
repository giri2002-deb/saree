"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

export default function AboutPage() {
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every saree is carefully crafted with attention to detail and traditional techniques.",
      icon: "✨",
    },
    {
      title: "Heritage & Tradition",
      description: "We preserve and celebrate the rich heritage of Indian textile traditions.",
      icon: "🏛️",
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We ensure the best shopping experience.",
      icon: "❤️",
    },
    {
      title: "Sustainable Fashion",
      description: "We promote sustainable and eco-friendly fashion practices.",
      icon: "🌱",
    },
  ]

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
          <div className="w-full">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">About SAREE</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Celebrating the timeless elegance of Indian sarees with a perfect blend of tradition and modernity
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="w-full">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Founded with a passion for preserving the rich heritage of Indian textiles, SAREE has been at the
                    forefront of bringing authentic, high-quality sarees to women across the globe. Our journey began with
                    a simple vision: to make the timeless elegance of traditional Indian sarees accessible to every woman.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we work directly with skilled artisans and weavers across India, ensuring that each saree tells
                    a story of craftsmanship, tradition, and cultural heritage. From the intricate Banarasi silks to
                    comfortable cotton weaves, every piece in our collection is carefully curated to meet the highest
                    standards of quality and authenticity.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src="/sh6.jpg"
                    alt="Our Story"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="w-full">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The principles that guide us in everything we do
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="w-full">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To empower women by providing them with authentic, high-quality sarees that celebrate their
                    individuality while honoring the rich cultural heritage of India. We strive to bridge the gap between
                    traditional craftsmanship and contemporary fashion, making timeless elegance accessible to every
                    woman, everywhere.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}
