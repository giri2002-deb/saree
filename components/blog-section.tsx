"use client"

import { motion } from "framer-motion"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Kuppadam Silk Cotton Sarees - A Blend of Heritage and Elegance",
      image: "/placeholder.svg?height=250&width=400&text=Blog+Post+1",
      excerpt: "Discover the rich heritage and timeless elegance of Kuppadam silk cotton sarees...",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Art of Draping: Traditional vs Modern Styles",
      image: "/placeholder.svg?height=250&width=400&text=Blog+Post+2",
      excerpt: "Learn about different draping styles and how to choose the perfect one for your occasion...",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Caring for Your Precious Sarees: A Complete Guide",
      image: "/placeholder.svg?height=250&width=400&text=Blog+Post+3",
      excerpt: "Essential tips and tricks to maintain the beauty and longevity of your saree collection...",
      date: "March 5, 2024",
      readTime: "6 min read",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">OUR BLOG</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                >
                  Read More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
