"use client";

import { useState } from "react";
import { Star, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useCart } from "@/hooks/use-cart"; 
import { useRouter } from "next/navigation"; 

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  rating: number;
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  category: string;
  features: string[];
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  const { addItem } = useCart();
  const router = useRouter(); // 

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!product || !product.id) {
      toast.error("Invalid product.");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    };

    addItem(cartItem);
    toast.success(`${quantity} × ${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    handleAddToCart(); // First add to cart
   router.push("/checkout"); // Navigate to success page
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Image Gallery */}
      <div className="w-full lg:w-1/2 flex gap-4">
        <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                selectedImage === img ? "border-black" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-gray-100 overflow-hidden">
          <Image
            src={selectedImage}
            alt={product.name}
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="flex items-center gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">NEW</span>
          )}
          {product.isFeatured && (
            <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded">FEATURED</span>
          )}
          <span className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-medium rounded">
            {product.category.toUpperCase()}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-gray-600">{product.rating.toFixed(1)} (reviews)</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 text-sm font-medium rounded">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        <p className="text-gray-600">{product.description}</p>

        {product.features.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Features</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quantity & Buttons */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-50"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 min-w-[40px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-50"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 bg-green-600 text-white py-3 px-6 font-medium hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>

          <button className="p-3 border border-gray-300 hover:bg-gray-50 transition w-full sm:w-auto">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
