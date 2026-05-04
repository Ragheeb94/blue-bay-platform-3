"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ChevronRight, Phone, FileText } from "lucide-react";
import { products, type ProductCategory } from "@/lib/data";

// ─── Category definitions ─────────────────────────────────────────────────────

const primaryCategories = [
  {
    slug: "power-wheelchairs" as ProductCategory,
    label: "Power Wheelchairs",
    desc: "Blue Bay carries the full range of complex rehab power wheelchairs. From advanced tilt-in-space and standing systems to compact mid-wheel drive chairs for daily community use, every chair is configured to your measurements by our in-house ATP.",
    image: "https://permobilwebcdn.azureedge.net/media/h54fexcb/m3-corpus_woman_city-driving_01_web.jpg",
    subcategories: ["Complex Power Wheelchairs", "Power Tilt & Recline", "Power Standing", "Mid-Wheel Drive", "Front-Wheel Drive", "Rear-Wheel Drive"],
    manufacturers: ["Permobil", "Sunrise Medical"],
    imageLeft: false,
  },
  {
    slug: "manual-wheelchairs" as ProductCategory,
    label: "Manual Wheelchairs",
    desc: "From ultralight titanium rigid frames to folding travel chairs, our certified ATP team helps match you with the right manual wheelchair based on a clinical evaluation of your body, lifestyle, and functional goals.",
    image: "https://www.sunrisemedical.ca/getattachment/Manual-Wheelchairs/Quickie/folding-wheelchairs/Quickie-2-Family/Q2-Sage-Green.webp.aspx",
    subcategories: ["Ultralight Wheelchairs", "Rigid Frame", "Folding Frame", "Sport Wheelchairs", "Custom Fit"],
    manufacturers: ["Sunrise Medical", "TiLite", "Quickie"],
    imageLeft: true,
  },
];

const secondaryCategories = [
  {
    slug: "seating-positioning" as ProductCategory,
    label: "Seating & Positioning",
    desc: "Our seating and positioning components are support systems configured to your body. From cushions to backs and lateral supports, we provide individualized postural support.",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=700&q=80&fit=crop",
    manufacturers: ["Permobil (ROHO)", "Sunrise Medical (Jay)"],
  },
  {
    slug: "power-scooters" as ProductCategory,
    label: "Power Scooters",
    desc: "Travel-friendly and full-featured scooters for community independence, from lightweight folders for air travel to long-range models for daily use.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop",
    manufacturers: ["Pride Mobility"],
  },
  {
    slug: "walkers-rollators" as ProductCategory,
    label: "Walkers & Rollators",
    desc: "Lightweight aluminum and carbon fibre rollators and walkers for post-surgical recovery and active daily use at every level of ambulatory need.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop",
    manufacturers: ["Future Mobility"],
  },
  {
    slug: "transfer-aids" as ProductCategory,
    label: "Transfer Aids",
    desc: "Safe transfer equipment designed to reduce injury risk for users and caregivers. Bath transfer systems and boards for safe daily transfers.",
    image: "https://images.unsplash.com/photo-1584998604882-94bf3d6e3b0e?w=700&q=80&fit=crop",
    manufacturers: ["Future Mobility"],
  },
];

const allCategories = [...primaryCategories, ...secondaryCategories];

const badgeColors: Record<string, string> = {
  "CRT Required":       "bg-orange-50 text-orange-700 border-orange-200",
  "Insurance Eligible": "bg-green-50 text-green-700 border-green-200",
  "Ultralight":         "bg-purple-50 text-purple-700 border-purple-200",
  "Custom Fit":         "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Active Positioning": "bg-blue-50 text-blue-700 border-blue-200",
  "Tilt-in-Space":      "bg-teal-50 text-teal-700 border-teal-200",
};

// ─── Product tile ─────────────────────────────────────────────────────────────

function ProductTile({ product }: { product: (typeof products)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.isFeatured && (
            <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md text-white" style={{ background: "var(--navy)" }}>
              Featured
            </span>
          )}
          <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
            {product.badges.slice(0, 1).map((b) => (
              <span key={b} className={`text-xs font-semibold px-2 py-0.5 rounded border ${badgeColors[b] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "var(--sky-dark)" }}>
          {product.manufacturer}
        </div>
        <h3 className="font-black text-lg mb-1.5 group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">{product.tagline}</p>
        {product.goodFor.slice(0, 2).map((g) => (
          <div key={g} className="flex items-start gap-1.5 text-xs text-gray-600 mb-1">
            <Check size={11} className="text-green-500 flex-shrink-0 mt-0.5" />
            {g}
          </div>
        ))}
      </Link>
      <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
        <Link href={`/products/${product.slug}`} className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--navy)" }}>
          View specs <ChevronRight size={14} />
        </Link>
        <Link href="/consultation" className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--sky-dark)" }}>
          Request info <ChevronRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Landing view ─────────────────────────────────────────────────────────────

function LandingView() {
  return (
    <>
      {/* Hero, matches how-it-works and who-we-help dark navy style */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none text-white opacity-[0.03]">BB</span>
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label mb-4" style={{ color: "var(--sky)" }}>Equipment Hub</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 text-white max-w-2xl">
              Rehab &amp; mobility equipment, built around you
            </h1>
            <p className="text-white/70 text-lg max-w-lg leading-relaxed">
              Blue Bay Mobility is your Southern California source for complex rehab technology, evaluated, funded, and delivered by our certified ATP team.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/consultation" className="btn btn-primary" style={{ background: "var(--sky)", color: "#fff" }}>
                Book a Free Evaluation
                <ArrowRight size={16} />
              </Link>
              <Link href="/how-it-works" className="text-white/80 font-semibold text-sm flex items-center gap-1.5 hover:text-white transition-colors">
                How the process works <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinical notice */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container py-3 flex items-center gap-3 text-sm text-amber-800">
          <FileText size={14} className="flex-shrink-0 text-amber-600" />
          <span>
            <strong>Clinical reference library.</strong> Equipment is evaluated, prescribed, and dispensed through our certified ATP team, not sold online.{" "}
            <a href="https://shop.bluebaymobility.com" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2">
              Shop direct equipment →
            </a>
          </span>
        </div>
      </div>

      {/* Primary category sections, alternating image + text */}
      {primaryCategories.map((cat, i) => {
        const catProducts = products.filter((p) => p.category === cat.slug);
        return (
          <section
            key={cat.slug}
            className="py-16 md:py-24"
            style={{ background: i % 2 === 0 ? "#ffffff" : "#F5F8FC" }}
          >
            <div className="container">
              <div
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  cat.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <motion.div
                  className="w-full lg:w-[480px] flex-shrink-0"
                  initial={{ opacity: 0, x: cat.imageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image src={cat.image} alt={cat.label} fill className="object-cover" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: cat.imageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
                    {cat.label}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-7 max-w-lg">{cat.desc}</p>

                  {/* Equipment types */}
                  <div className="mb-7">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Equipment types</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.subcategories.map((sub) => (
                        <span
                          key={sub}
                          className="text-sm px-3 py-1.5 rounded-full border font-medium bg-white"
                          style={{ borderColor: "#d0dff0", color: "var(--navy)" }}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Manufacturers */}
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Partner manufacturers</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.manufacturers.map((m) => (
                        <span key={m} className="text-xs font-semibold px-2.5 py-1 rounded" style={{ background: "rgba(10,36,99,0.07)", color: "var(--navy)" }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                    style={{ color: "var(--navy)" }}
                  >
                    Browse products <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Adaptive living essentials */}
      <section className="py-16 md:py-20" style={{ background: "#F5F8FC" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "var(--navy)" }}>
              Adaptive living essentials
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Beyond power and manual wheelchairs, we carry seating systems, scooters, walkers, and transfer aids to support every aspect of independent daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryCategories.map((cat, i) => {
              const count = products.filter((p) => p.category === cat.slug).length;
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={`/products?category=${cat.slug}`} className="group block">
                    <div className="relative h-52 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <h3 className="font-black text-base mb-1.5 group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                      {cat.label}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">{cat.desc}</p>
                    <span className="text-xs font-bold flex items-center gap-1" style={{ color: "var(--sky-dark)" }}>
                      Learn more <ChevronRight size={13} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <h2 className="text-2xl font-black text-center mb-10" style={{ color: "var(--navy)" }}>How it works</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { step: "Step 1", label: "Evaluation", desc: "Meet with our certified ATP for a clinical assessment of your needs and goals." },
              { step: "Step 2", label: "Medical documentation", desc: "We handle the Letter of Medical Necessity and all insurer paperwork." },
              { step: "Step 3", label: "Funding", desc: "We verify your Medicare, Medicaid, or private insurance coverage upfront." },
              { step: "Step 4", label: "Delivery", desc: "Your equipment is custom-built and delivered with a full fitting session." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-4"
                  style={{ background: "var(--navy)" }}
                >
                  {i + 1}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{s.step}</p>
                <h3 className="font-black text-sm mb-2" style={{ color: "var(--navy)" }}>{s.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white mb-2">Expert guidance &amp; support</h2>
            <p className="text-white/60 max-w-md mx-auto text-sm">
              We want to make the process as easy as possible, from working with clinicians and insurers to customizing your equipment so it's perfect for you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📞", label: "Call us", sub: "1-888-999-0072", href: "tel:18889990072" },
              { icon: "📋", label: "Book consultation", sub: "Free, no obligation", href: "/consultation" },
              { icon: "📍", label: "Find our branch", sub: "Tustin, California", href: "/about" },
              { icon: "✉️", label: "Contact us", sub: "info@bluebaymobility.com", href: "mailto:info@bluebaymobility.com" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-6 text-center block"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-bold text-white text-sm mb-0.5">{item.label}</p>
                <p className="text-white/50 text-xs">{item.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Category view ────────────────────────────────────────────────────────────

function CategoryView({ category }: { category: ProductCategory }) {
  const catDef = allCategories.find((c) => c.slug === category);
  const filtered = products.filter((p) => p.category === category);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container py-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/products" className="hover:text-navy transition-colors">Equipment Hub</Link>
            <ChevronRight size={14} />
            <span className="text-gray-600 font-medium">{catDef?.label ?? category}</span>
          </div>
        </div>
      </div>

      {/* Category hero, image-backed */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        {catDef && (
          <Image
            src={catDef.image}
            alt={catDef.label}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0" style={{ background: "rgba(10,36,99,0.68)" }} />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container pb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-3">{catDef?.label ?? category}</h1>
              {catDef && <p className="text-white/70 max-w-lg text-sm leading-relaxed">{catDef.desc}</p>}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical notice */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container py-3 flex items-center gap-3 text-sm text-amber-800">
          <FileText size={14} className="flex-shrink-0 text-amber-600" />
          <span><strong>Clinical reference only.</strong> Equipment is evaluated and dispensed through our certified team, not sold online.</span>
        </div>
      </div>

      {/* Subcategory chips */}
      {catDef && "subcategories" in catDef && (catDef as typeof primaryCategories[0]).subcategories.length > 0 && (
        <div className="bg-white border-b border-gray-100">
          <div className="container py-4">
            <div className="flex flex-wrap gap-2">
              {(catDef as typeof primaryCategories[0]).subcategories.map((sub) => (
                <span
                  key={sub}
                  className="text-sm px-3 py-1.5 rounded-full border font-medium"
                  style={{ borderColor: "#d0dff0", color: "var(--navy)" }}
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product tiles, Numotion subcategory style */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((p) => (
                <ProductTile key={p.slug} product={p} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p>No products in this category yet.</p>
              <Link href="/products" className="btn btn-outline mt-4">View all equipment</Link>
            </div>
          )}
        </div>
      </section>

      {/* "Want this equipment?" CTA hub, Numotion subcategory page CTA */}
      <section className="py-16" style={{ background: "#EEF4FA" }}>
        <div className="container">
          <h2 className="text-2xl font-black mb-8 text-center" style={{ color: "var(--navy)" }}>
            Want this equipment?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-base mb-2" style={{ color: "var(--navy)" }}>Medical necessity</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                A physician's prescription and clinical evaluation by our certified ATP is required to qualify for complex rehab equipment through insurance.
              </p>
              <Link href="/how-it-works" className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--sky-dark)" }}>
                Learn more <ChevronRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-base mb-2" style={{ color: "var(--navy)" }}>Insurance coverage</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Medicare Part B, Medicaid, Medi-Cal, and most private insurers cover qualifying equipment. We verify your coverage upfront at no cost.
              </p>
              <Link href="/consultation" className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "var(--sky-dark)" }}>
                Verify my coverage <ChevronRight size={14} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-base mb-2" style={{ color: "var(--navy)" }}>Get started today</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Ready to begin? Book a free consultation or speak with a specialist, no commitment required.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/consultation" className="btn btn-sm btn-primary">
                  <Phone size={14} /> Book consultation
                </Link>
                <Link href="/products" className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all mt-1" style={{ color: "var(--navy)" }}>
                  ← All equipment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function ProductsCatalog() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<ProductCategory | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    setCategory(cat ? (cat as ProductCategory) : null);
  }, [searchParams]);

  if (category) return <CategoryView category={category} />;
  return <LandingView />;
}
