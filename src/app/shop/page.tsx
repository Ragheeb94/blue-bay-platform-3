"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check, ArrowRight, Truck, RotateCcw, ShieldCheck, Phone } from "lucide-react";
import { shopProducts, type ShopProduct } from "@/lib/data";
import { useCart } from "@/context/CartContext";

const shopCategories = [
  { value: "all", label: "All Products" },
  { value: "scooters", label: "Scooters" },
  { value: "walkers", label: "Walkers & Rollators" },
  { value: "seating", label: "Seating & Positioning" },
  { value: "transfer", label: "Transfer Aids" },
];

function ShopCard({ product }: { product: ShopProduct }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    dispatch({
      type: "ADD_ITEM",
      payload: {
        slug: product.slug,
        name: product.name,
        brand: product.brand,
        price: product.price,
        priceLabel: product.priceLabel,
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
        <div className="relative h-52 overflow-hidden bg-gray-50">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span className="font-bold text-gray-500 text-sm bg-white px-3 py-1 rounded-full shadow-sm">Pre-order</span>
            </div>
          )}
          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
            {product.badges.map((b) => (
              <span key={b} className="text-xs font-semibold px-2 py-0.5 rounded border bg-blue-50 text-blue-700 border-blue-200">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="text-xs text-gray-400 font-medium mb-0.5">{product.categoryLabel} · {product.brand}</div>
          <h3 className="font-black text-base mb-1.5 line-clamp-1" style={{ color: "var(--navy)" }}>{product.name}</h3>
          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.tagline}</p>

          <ul className="mb-4 space-y-1">
            {product.specs.slice(0, 2).map((s) => (
              <li key={s.label} className="text-xs text-gray-600">
                <span className="font-semibold text-gray-400">{s.label}:</span> {s.value}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-3 border-t border-gray-100">
            <div className="text-2xl font-black mb-3" style={{ color: "var(--navy)" }}>{product.priceLabel}</div>
            <button
              onClick={handleAdd}
              disabled={!product.inStock}
              className={`btn btn-sm w-full justify-center ${product.inStock ? "btn-primary" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
            >
              {added ? (
                <><Check size={14} /> Added to Cart</>
              ) : product.inStock ? (
                <><ShoppingCart size={14} /> Add to Cart</>
              ) : (
                "Pre-order — Contact Us"
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ShopPage() {
  const { dispatch } = useCart();
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? shopProducts : shopProducts.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, var(--sky-dark) 0%, var(--sky) 100%)" }}
      >
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-3 text-white/70">Liberty Care · Blue Bay Shop</div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Shop Mobility Equipment</h1>
            <p className="text-white/70 text-sm max-w-xl">
              Direct-purchase mobility products from our Liberty Care catalog. Ships to your door — no clinical evaluation required for these products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container py-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2"><Truck size={15} className="text-sky-500" /> Free shipping on orders over $150</span>
            <span className="flex items-center gap-2"><RotateCcw size={15} className="text-sky-500" /> 30-day returns</span>
            <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-sky-500" /> All products include manufacturer warranty</span>
            <span className="flex items-center gap-2"><Phone size={15} className="text-sky-500" /> Setup support included</span>
          </div>
        </div>
      </div>

      {/* Clinical rehab notice */}
      <div className="bg-navy-50 border-b border-gray-100" style={{ background: "var(--gray-50)" }}>
        <div className="container py-3 flex items-center gap-3 text-sm text-gray-600">
          <span>
            Looking for complex rehab equipment (power wheelchairs, custom manual chairs)?{" "}
            <Link href="/products" className="font-bold underline underline-offset-2" style={{ color: "var(--navy)" }}>
              Visit our Equipment Hub
            </Link>{" "}
            — those require clinical evaluation and are not sold direct.
          </span>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {shopCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat.value ? "text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={active === cat.value ? { background: "var(--sky-dark)" } : {}}
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ShopCard key={p.slug} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Cart CTA */}
      <section className="py-14" style={{ background: "var(--gray-50)" }}>
        <div className="container text-center">
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--navy)" }}>Need help deciding?</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Our team can advise on the right product for your situation — no pressure, no consultation fee.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => dispatch({ type: "OPEN" })} className="btn btn-primary">
              <ShoppingCart size={16} /> View Cart
            </button>
            <Link href="/consultation" className="btn btn-outline">
              Talk to a Specialist
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
