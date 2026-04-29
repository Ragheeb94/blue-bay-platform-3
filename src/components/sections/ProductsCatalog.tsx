"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, MessageCircle, Check, ArrowRight } from "lucide-react";
import { products, type ProductCategory } from "@/lib/data";
import { useCart } from "@/context/CartContext";

const categories: { value: "all" | ProductCategory; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "power-wheelchairs", label: "Power Wheelchairs" },
  { value: "manual-wheelchairs", label: "Manual Wheelchairs" },
  { value: "seating-positioning", label: "Seating & Positioning" },
  { value: "power-scooters", label: "Power Scooters" },
  { value: "walkers-rollators", label: "Walkers & Rollators" },
  { value: "transfer-aids", label: "Transfer Aids" },
];

const badgeColors: Record<string, string> = {
  "CRT Required": "bg-orange-50 text-orange-700 border-orange-200",
  "Insurance Eligible": "bg-green-50 text-green-700 border-green-200",
  "Ready to Ship": "bg-blue-50 text-blue-700 border-blue-200",
  "Ultralight": "bg-purple-50 text-purple-700 border-purple-200",
  "Custom Fit": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Lightweight": "bg-teal-50 text-teal-700 border-teal-200",
};

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.requiresConsultation || !product.price) return;
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
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="card overflow-hidden flex flex-col h-full"
        whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(10,36,99,0.12)" }}
        transition={{ duration: 0.25 }}
      >
        <Link href={`/products/${product.slug}`} className="block relative h-52 overflow-hidden bg-gray-50">
          <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} className="absolute inset-0">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </motion.div>
          {product.isFeatured && (
            <span
              className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md text-white"
              style={{ background: "var(--navy)" }}
            >
              Featured
            </span>
          )}
          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
            {product.badges.slice(0, 2).map((b) => (
              <span
                key={b}
                className={`text-xs font-semibold px-2 py-0.5 rounded border ${badgeColors[b] || "bg-gray-50 text-gray-600 border-gray-200"}`}
              >
                {b}
              </span>
            ))}
          </div>
        </Link>

        <div className="p-5 flex flex-col flex-1">
          <div className="text-xs text-gray-400 font-medium mb-0.5">
            {product.categoryLabel} · {product.brand}
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-black text-base mb-1.5 hover:text-sky-600 transition-colors line-clamp-1" style={{ color: "var(--navy)" }}>
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{product.tagline}</p>

          {product.goodFor.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 mb-1.5">Good for:</p>
              <ul className="space-y-1">
                {product.goodFor.slice(0, 2).map((g) => (
                  <li key={g} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Check size={10} className="text-green-500 flex-shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-3 border-t border-gray-100">
            <div className="text-base font-black mb-3" style={{ color: "var(--navy)" }}>
              {product.priceRange}
            </div>
            <div className="flex gap-2">
              <Link href={`/products/${product.slug}`} className="btn btn-sm btn-outline flex-1 justify-center text-xs">
                View Details
              </Link>
              {product.requiresConsultation ? (
                <Link href="/consultation" className="btn btn-sm btn-primary flex-1 justify-center text-xs">
                  <MessageCircle size={13} />
                  Consult
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="btn btn-sm btn-primary flex-1 justify-center text-xs"
                >
                  {added ? (
                    <><Check size={13} /> Added</>
                  ) : (
                    <><ShoppingCart size={13} /> Add</>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsCatalog() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<"all" | ProductCategory>("all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActive(cat as ProductCategory);
  }, [searchParams]);

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);
  const activeLabel = categories.find((c) => c.value === active)?.label ?? "All Products";

  return (
    <>
      {/* Hero banner */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label mb-3" style={{ color: "var(--sky)" }}>Product Catalog</div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">{activeLabel}</h1>
            <p className="text-white/60">{filtered.length} product{filtered.length !== 1 ? "s" : ""} available</p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat.value
                    ? "text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={active === cat.value ? { background: "var(--navy)" } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium">No products in this category yet.</p>
              <button onClick={() => setActive("all")} className="btn btn-outline mt-4">
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: "var(--gray-50)" }}>
        <div className="container text-center">
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--navy)" }}>
            Not sure what you need?
          </h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Our certified ATPs help you find the right equipment based on your condition, lifestyle, and insurance.
          </p>
          <Link href="/quiz" className="btn btn-primary mr-3">
            Take the Product Finder Quiz
            <ArrowRight size={16} />
          </Link>
          <Link href="/consultation" className="btn btn-outline">
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
