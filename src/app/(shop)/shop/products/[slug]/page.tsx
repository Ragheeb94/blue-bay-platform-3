"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { getProductBySlug } from "@/lib/shopProducts";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check, ChevronRight, Truck, RotateCcw, Shield } from "lucide-react";

export default function ShopProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const inCart = items.some((i) => i.product.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/shop" className="hover:text-[#0A2463] transition-colors">Shop</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/shop/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#0A2463] transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-600 font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        </div>
        <div>
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wide mb-2">{product.brand}</p>
          <h1 className="text-3xl font-bold text-[#0A2463] mb-3">{product.name}</h1>
          <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>
          <div className="text-3xl font-bold text-[#0A2463] mb-6">${product.price.toLocaleString()}</div>
          <button
            onClick={handleAdd}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-base transition-colors mb-4 ${
              added || inCart ? "bg-green-500 text-white" : "bg-[#0A2463] text-white hover:bg-[#091d52]"
            }`}
          >
            {added || inCart ? (
              <><Check className="w-5 h-5" />{added ? "Added to cart!" : "In cart"}</>
            ) : (
              <><ShoppingCart className="w-5 h-5" />Add to cart</>
            )}
          </button>
          {inCart && (
            <Link href="/shop/cart" className="block w-full text-center border border-[#0A2463] text-[#0A2463] font-semibold py-3 rounded-xl hover:bg-[#EEF4FA] transition-colors mb-4">
              View cart
            </Link>
          )}
          <div className="space-y-2.5 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-sky-500 flex-shrink-0" />Free shipping on orders over $150</div>
            <div className="flex items-center gap-2"><RotateCcw className="w-4 h-4 text-sky-500 flex-shrink-0" />30-day returns</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-sky-500 flex-shrink-0" />Secure checkout</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-10">
        <h2 className="text-xl font-bold text-[#0A2463] mb-5">Key features</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 bg-[#EEF4FA] rounded-2xl p-6 border border-sky-100">
        <p className="font-semibold text-[#0A2463] mb-1">Need a custom-fit or insurance-covered chair?</p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Complex rehab equipment requires a clinical evaluation and insurance authorization. Our certified ATP team handles the entire process.
        </p>
        <Link href="/consultation" className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors">
          Book a free evaluation <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
