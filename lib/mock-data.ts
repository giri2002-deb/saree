export interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  images: string[]
  description: string
  features: string[]
  tags: string[]
  isNew: boolean
}

const imagePool = [
  "/download (2).jpg",
  "/download (3).jpg",
  "/download (4).jpg",
  "/download (5).jpg",
  "/download (6).jpg",
]

function getRotatingImages(start: number, count: number): string[] {
  const result: string[] = []
  for (let i = 0; i < count; i++) {
    result.push(imagePool[(start + i) % imagePool.length])
  }
  return result
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Silk Wedding Saree",
    category: "Wedding Sarees",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    images: getRotatingImages(0, 4),
    description:
      "Exquisite royal silk saree perfect for weddings and special occasions. Features intricate gold embroidery and traditional motifs.",
    features: [
      "Pure silk fabric",
      "Hand-embroidered gold work",
      "Traditional motifs",
      "Includes matching blouse piece",
      "Dry clean only",
    ],
    tags: ["wedding", "silk", "traditional", "embroidered"],
    isNew: true,
  },
  {
    id: "2",
    name: "Elegant Party Wear Georgette",
    category: "Georgette Sarees",
    price: 149,
    rating: 4.5,
    images: getRotatingImages(1, 3),
    description:
      "Flowing georgette saree with contemporary design, perfect for evening parties and celebrations.",
    features: [
      "Lightweight georgette fabric",
      "Contemporary print",
      "Easy to drape",
      "Machine washable",
      "Includes blouse piece",
    ],
    tags: ["party", "georgette", "contemporary", "lightweight"],
    isNew: true,
  },
  {
    id: "3",
    name: "Cotton Daily Wear Comfort",
    category: "Cotton Sarees",
    price: 79,
    rating: 4.3,
    images: getRotatingImages(2, 2),
    description:
      "Comfortable cotton saree for everyday wear. Breathable fabric with beautiful prints.",
    features: [
      "100% cotton fabric",
      "Breathable and comfortable",
      "Vibrant prints",
      "Easy maintenance",
      "Perfect for daily wear",
    ],
    tags: ["daily", "cotton", "comfortable", "printed"],
    isNew: false,
  },
  {
    id: "4",
    name: "Designer Chiffon Drape",
    category: "Chiffon Sarees",
    price: 199,
    originalPrice: 249,
    rating: 4.6,
    images: getRotatingImages(3, 3),
    description:
      "Luxurious chiffon saree with designer patterns and elegant draping. Perfect for cocktail parties and formal events.",
    features: [
      "Premium chiffon fabric",
      "Designer patterns",
      "Elegant draping",
      "Lightweight and flowy",
      "Includes designer blouse",
    ],
    tags: ["party", "chiffon", "designer", "formal"],
    isNew: true,
  },
  {
    id: "5",
    name: "Traditional Banarasi Silk",
    category: "Wedding Sarees",
    price: 449,
    rating: 4.9,
    images: getRotatingImages(4, 4),
    description:
      "Authentic Banarasi silk saree with traditional weaving patterns. A timeless piece for weddings and festivals.",
    features: [
      "Authentic Banarasi silk",
      "Traditional weaving",
      "Rich gold zari work",
      "Heritage craftsmanship",
      "Includes matching blouse",
    ],
    tags: ["wedding", "banarasi", "silk", "traditional", "zari"],
    isNew: false,
  },
  {
    id: "6",
    name: "Modern Printed Cotton",
    category: "Cotton Sarees",
    price: 89,
    rating: 4.2,
    images: getRotatingImages(0, 2),
    description:
      "Contemporary printed cotton saree with modern designs. Perfect for office wear and casual outings.",
    features: [
      "Soft cotton fabric",
      "Modern print designs",
      "Comfortable fit",
      "Easy to maintain",
      "Versatile styling",
    ],
    tags: ["daily", "cotton", "modern", "printed", "office"],
    isNew: true,
  },
  {
    id: "7",
    name: "Festive Silk Blend",
    category: "Silk Sarees",
    price: 179,
    rating: 4.4,
    images: getRotatingImages(1, 3),
    description:
      "Beautiful silk blend saree perfect for festivals and celebrations. Features vibrant colors and traditional motifs.",
    features: [
      "Silk blend fabric",
      "Vibrant colors",
      "Traditional motifs",
      "Festival ready",
      "Includes blouse piece",
    ],
    tags: ["festival", "silk-blend", "traditional", "colorful"],
    isNew: false,
  },
  {
    id: "8",
    name: "Luxury Organza Evening",
    category: "Party Wear",
    price: 259,
    originalPrice: 299,
    rating: 4.7,
    images: getRotatingImages(2, 3),
    description:
      "Sophisticated organza saree with subtle shimmer. Perfect for evening events and formal occasions.",
    features: [
      "Premium organza fabric",
      "Subtle shimmer effect",
      "Sophisticated design",
      "Evening wear perfect",
      "Designer blouse included",
    ],
    tags: ["party", "organza", "evening", "shimmer", "formal"],
    isNew: true,
  },
]
