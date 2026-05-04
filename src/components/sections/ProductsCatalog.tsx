"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, FileText, Phone } from "lucide-react";
import { products, type ProductCategory } from "@/lib/data";

const categories: { value: "all" | ProductCategory; label: string }[] = [
  { value: "all", label: "All Equipment" },
  { value: "power-wheelchairs", label: "Power Wheelchairs" },
  { value: "manual-wheelchairs", label: "Manual Wheelchairs" },
  { value: "seating-positioning", label: "Seating & Positioning" },
  { value: "power-scooters", label: "Power Scooters" },
  { value: "walkers-rollators", label: "Walkers & Rollators" },
  { value: "transfer-aids", label: "Transfer Aids" },
];

const badgeColors: Record<string, string> = {
  "CRT Required":       "bg-orange-50 text-orange-700 border-orange-200",
  "Insurance Eligible": "bg-green-50 text-green-700 border-green-200",
  "Ultralight":         "bg-purple-50 text-purple-700 border-purple-200",
  "Custom Fit":         "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Active Positioning": "bg-blue-50 text-blue-700 border-blue-200",
  "Tilt-in-Space":      "bg-teal-50 text-teal-700 border-teal-200",
};

function ProductCard({ product }: { product: (typeof products)[0] }) {
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
        {/* Image */}
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

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="text-xs text-gray-400 font-medium mb-0.5">
            {product.categoryLabel} · {product.manufacturer}
          </div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-black text-base mb-1.5 hover:text-sky-600 transition-colors line-clamp-1" style={{ color: "var(--navy)" }}>
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{product.tagline}</p>

          {product.goodFor.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">Indicated for:</p>
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

          <div className="mt-auto pt-3 border-t border-gray-100 flex gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="btn btn-sm btn-outline flex-1 justify-center text-xs"
            >
              <FileText size={12} />
              View Specs
            </Link>
            <Link
              href="/consultation"
              className="btn btn-sm btn-primary flex-1 justify-center text-xs"
            >
              <Phone size={12} />
              Request Info
            </Link>
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
  const activeLabel = categories.find((c) => c.value === active)?.label ?? "All Equipment";

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
            <div className="section-label mb-3" style={{ color: "var(--sky)" }}>Rehab Equipment Hub</div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-2">{activeLabel}</h1>
            <p className="text-white/60 text-sm max-w-xl">
              Clinical reference library for therapists, ATPs, and rehab professionals. All equipment is evaluated and fitted through our certified team — not sold direct.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinical info bar */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container py-3 flex items-center gap-3 text-sm text-amber-800">
          <FileText size={15} className="flex-shrink-0 text-amber-600" />
          <span>
            <strong>This is an informational equipment library.</strong> Equipment is evaluated, prescribed, and dispensed through our certified team — not purchased online. To purchase directly, visit{" "}
            <a href="https://shop.bluebaymobility.com" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2">shop.bluebaymobility.com</a>.
          </span>
        </div>
      </div>

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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                View all equipment
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-black mb-2" style={{ color: "var(--navy)" }}>
                Therapists & ATPs
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Refer a patient or request a joint evaluation. Our certified ATPs collaborate with OTs, PTs, and prescribing physicians on complex rehab cases.
              </p>
              <Link href="/consultation" className="btn btn-primary btn-sm">
                Submit a Referral
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-black mb-2" style={{ color: "var(--navy)" }}>
                Patients & Caregivers
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Not sure what equipment you need? Take our product finder quiz or book a free consultation — we handle the evaluation, documentation, and insurance.
              </p>
              <div className="flex gap-3">
                <Link href="/quiz" className="btn btn-outline btn-sm">
                  Take the Quiz
                </Link>
                <Link href="/consultation" className="btn btn-primary btn-sm">
                  Book Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
