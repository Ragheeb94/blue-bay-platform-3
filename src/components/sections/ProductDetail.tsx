"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle, Check, X, ChevronRight, ArrowRight } from "lucide-react";
import { type Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import AnimateIn from "@/components/ui/AnimateIn";

const badgeColors: Record<string, string> = {
  "CRT Required": "bg-orange-50 text-orange-700 border border-orange-200",
  "Insurance Eligible": "bg-green-50 text-green-700 border border-green-200",
  "Ready to Ship": "bg-blue-50 text-blue-700 border border-blue-200",
  "Ultralight": "bg-purple-50 text-purple-700 border border-purple-200",
  "Custom Fit": "bg-indigo-50 text-indigo-700 border border-indigo-200",
  "Lightweight": "bg-teal-50 text-teal-700 border border-teal-200",
};

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetail({ product, related }: Props) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product.price) return;
    dispatch({
      type: "ADD_ITEM",
      payload: {
        slug: product.slug,
        name: product.name,
        brand: product.brand,
        price: product.price,
        priceLabel: product.priceRange,
        image: product.image,
        categoryLabel: product.categoryLabel,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/products" className="hover:text-navy transition-colors">Products</Link>
            <ChevronRight size={14} />
            <Link href={`/products?category=${product.category}`} className="hover:text-navy transition-colors">
              {product.categoryLabel}
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-600 font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main product section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <AnimateIn direction="left">
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-square shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateIn>

            {/* Info */}
            <AnimateIn direction="right">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map((b) => (
                  <span key={b} className={`text-xs font-bold px-2.5 py-1 rounded-md ${badgeColors[b] || "bg-gray-100 text-gray-600"}`}>
                    {b}
                  </span>
                ))}
              </div>

              <div className="text-sm font-semibold mb-1" style={{ color: "var(--sky-dark)" }}>
                {product.categoryLabel} · {product.brand}
              </div>
              <h1 className="text-3xl font-black mb-2" style={{ color: "var(--navy)" }}>{product.name}</h1>
              <p className="text-gray-500 leading-relaxed mb-6">{product.tagline}</p>

              <div className="text-2xl font-black mb-6" style={{ color: "var(--navy)" }}>
                {product.priceRange}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-8">
                {product.requiresConsultation ? (
                  <Link href="/consultation" className="btn btn-primary btn-lg">
                    <MessageCircle size={18} />
                    Request a Quote
                  </Link>
                ) : (
                  <motion.button
                    onClick={handleAddToCart}
                    className="btn btn-primary btn-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingCart size={18} /> Add to Cart</>}
                  </motion.button>
                )}
                <Link href="/consultation" className="btn btn-outline btn-lg">
                  Book Consultation
                </Link>
              </div>

              {/* Good for / Not ideal */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: "var(--green-light)" }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-3">Good for</p>
                  <ul className="space-y-2">
                    {product.goodFor.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-green-800">
                        <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-4 bg-red-50">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3">Not ideal for</p>
                  <ul className="space-y-2">
                    {product.notIdealFor.map((n) => (
                      <li key={n} className="flex items-start gap-2 text-sm text-red-800">
                        <X size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <AnimateIn>
            <h2 className="text-2xl font-black mb-8" style={{ color: "var(--navy)" }}>Specifications</h2>
            <div className="card overflow-hidden">
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center px-6 py-4 ${i !== product.specs.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span className="text-sm font-semibold text-gray-500">{spec.label}</span>
                  <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container">
            <AnimateIn>
              <h2 className="text-2xl font-black mb-8" style={{ color: "var(--navy)" }}>
                More in {product.categoryLabel}
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <AnimateIn key={rel.slug} delay={i * 0.1}>
                  <Link href={`/products/${rel.slug}`}>
                    <motion.div
                      className="card overflow-hidden"
                      whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(10,36,99,0.1)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="relative h-44 bg-gray-50">
                        <Image src={rel.image} alt={rel.name} fill className="object-cover" />
                      </div>
                      <div className="p-5">
                        <div className="text-xs text-gray-400 mb-1">{rel.brand}</div>
                        <h3 className="font-black text-sm mb-1" style={{ color: "var(--navy)" }}>{rel.name}</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-3">{rel.tagline}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>{rel.priceRange}</span>
                          <span className="text-xs font-bold flex items-center gap-1" style={{ color: "var(--sky-dark)" }}>
                            View <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14" style={{ background: "var(--navy)" }}>
        <div className="container text-center">
          <h2 className="text-2xl font-black text-white mb-3">Need help choosing?</h2>
          <p className="text-white/60 mb-6 max-w-md mx-auto">
            Our certified ATPs evaluate your needs and configure equipment around your body and lifestyle.
          </p>
          <Link href="/consultation" className="btn btn-lg" style={{ background: "var(--sky)", color: "white", border: "none" }}>
            Book a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
