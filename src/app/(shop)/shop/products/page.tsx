"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { shopProducts, categories, type Category } from "@/lib/shopProducts";
import { ShoppingCart, Check } from "lucide-react";

function AddToCartButton({ productId }: { productId: string }) {
  const { addToCart, items } = useCart();
  const product = shopProducts.find((p) => p.id === productId)!;
  const inCart = items.some((i) => i.product.id === productId);
  return (
    <button
      onClick={(e) => { e.preventDefault(); addToCart(product); }}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
        inCart ? "bg-green-100 text-green-700" : "bg-[#0A2463] text-white hover:bg-[#091d52]"
      }`}
    >
      {inCart ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
      {inCart ? "Added" : "Add to cart"}
    </button>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Category | null;
  const [activeCategory, setActiveCategory] = useState<Category | null>(initialCategory);
  const filtered = activeCategory ? shopProducts.filter((p) => p.category === activeCategory) : shopProducts;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-[#0A2463] mb-8">All Products</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
            !activeCategory ? "bg-[#0A2463] text-white border-[#0A2463]" : "bg-white text-gray-600 border-gray-200 hover:border-[#0A2463] hover:text-[#0A2463]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeCategory === cat ? "bg-[#0A2463] text-white border-[#0A2463]" : "bg-white text-gray-600 border-gray-200 hover:border-[#0A2463] hover:text-[#0A2463]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-400 mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/shop/products/${product.slug}`}>
              <div className="relative h-48 bg-gray-100">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </Link>
            <div className="p-4">
              <p className="text-xs font-semibold text-sky-600 uppercase tracking-wide mb-1">{product.brand}</p>
              <Link href={`/shop/products/${product.slug}`}>
                <h3 className="font-bold text-[#0A2463] mb-2 hover:underline underline-offset-2 leading-snug">{product.name}</h3>
              </Link>
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#0A2463]">${product.price.toLocaleString()}</span>
                <AddToCartButton productId={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShopProductsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-400">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
