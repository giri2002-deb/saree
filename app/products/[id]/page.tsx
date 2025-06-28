// app/products/[id]/page.tsx

import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { ProductGrid } from "@/components/product-grid";
import sareeData from "@/data/sarees.json";
import ProductDetailClient from "@/components/ProductDetailClient";

interface PageProps {
  params: {
    id: string;
  };
}

// ✅ Generate static paths for each product ID
export async function generateStaticParams() {
  return sareeData.sarees.map((saree) => ({
    id: saree.id,
  }));
}

// ✅ Server component
export default function ProductPage({ params }: PageProps) {
  const product = sareeData.sarees.find((s) => s.id === params.id);

  if (!product) return notFound(); // ✅ Best practice in Next.js

  const relatedProducts = sareeData.sarees
    .filter((s) => s.category === product.category && s.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <ProductDetailClient product={product} />
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
