"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const primaryCategories = [
  {
    slug: "manual-wheelchairs",
    label: "Manual Wheelchairs",
    desc: "Your mobility chair options can be overwhelming, but we can help you along the way. Discover the best custom wheelchair options that fit your lifestyle and needs.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop",
    manufacturers: ["Sunrise Medical", "TiLite", "Quickie"],
    imageLeft: false,
  },
  {
    slug: "power-wheelchairs",
    label: "Power Wheelchairs",
    desc: "We provide a wide range of power wheelchairs tailored to meet your unique needs and lifestyle. From complex chairs with advanced positioning to compact everyday models.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&fit=crop",
    manufacturers: ["Permobil", "Sunrise Medical"],
    imageLeft: true,
  },
];

const secondaryCategories = [
  {
    slug: "seating-positioning",
    label: "Seating & Positioning",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=500&q=80&fit=crop",
  },
  {
    slug: "power-scooters",
    label: "Power Scooters",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop",
  },
  {
    slug: "walkers-rollators",
    label: "Walkers & Rollators",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80&fit=crop",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section style={{ background: "#F5F8FC" }}>
      {/* Header */}
      <div className="container py-16 md:py-20">
        <AnimateIn className="text-center mb-16">
          <div className="section-label mb-3">Rehab Equipment Hub</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Adult mobility solutions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our complex mobility solutions are tailored to your body and your needs — evaluated and configured by our certified ATP team.
          </p>
        </AnimateIn>

        {/* Primary alternating categories — Numotion style */}
        <div className="space-y-16 mb-16">
          {primaryCategories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              className={`flex flex-col gap-8 items-center ${cat.imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="w-full md:w-[400px] flex-shrink-0">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md bg-gray-100">
                  <Image src={cat.image} alt={cat.label} fill className="object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--navy)" }}>{cat.label}</h3>
                <p className="text-gray-500 leading-relaxed mb-5 max-w-md">{cat.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.manufacturers.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-semibold px-2.5 py-1 rounded"
                      style={{ background: "rgba(10,36,99,0.07)", color: "var(--navy)" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
                  style={{ color: "var(--navy)" }}
                >
                  Browse products <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary categories — small tile grid */}
        <div>
          <AnimateIn>
            <h3 className="text-xl font-black mb-6 text-center" style={{ color: "var(--navy)" }}>Adaptive living essentials</h3>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {secondaryCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/products?category=${cat.slug}`} className="group block">
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-3 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <h4 className="font-black text-sm mb-1 group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                    {cat.label}
                  </h4>
                  <span className="text-xs font-bold flex items-center gap-1" style={{ color: "var(--sky-dark)" }}>
                    Learn more <ChevronRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimateIn className="text-center">
            <Link href="/products" className="btn btn-outline">
              View All Equipment
              <ArrowRight size={16} />
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
