"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const categories = [
  {
    slug: "power-wheelchairs",
    label: "Power Wheelchairs",
    desc: "Rehab-grade and consumer power chairs for full-time users with complex or moderate support needs.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",
    count: "4 products",
  },
  {
    slug: "manual-wheelchairs",
    label: "Manual Wheelchairs",
    desc: "Custom ultralight titanium frames and reliable everyday chairs for self-propellers and assisted users.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    count: "2 products",
  },
  {
    slug: "seating-positioning",
    label: "Seating & Positioning",
    desc: "Air-cell cushions, gel cushions, and positioning systems for pressure management and postural support.",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=600&q=80&fit=crop",
    count: "3 products",
  },
  {
    slug: "power-scooters",
    label: "Power Scooters",
    desc: "Travel-friendly and everyday scooters for community independence — from lightweight folders to long-range models.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    count: "3 products",
  },
  {
    slug: "walkers-rollators",
    label: "Walkers & Rollators",
    desc: "Lightweight rollators and walkers for users who need stability support while staying mobile.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop",
    count: "3 products",
  },
  {
    slug: "transfer-aids",
    label: "Transfer Aids",
    desc: "Bathtub transfer benches and transfer equipment for safe daily transfers with or without caregiver help.",
    image: "https://images.unsplash.com/photo-1584998604882-94bf3d6e3b0e?w=600&q=80&fit=crop",
    count: "1 product",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

export default function ProductCategoriesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimateIn className="text-center mb-12">
          <div className="section-label mb-3">Our Products</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Equipment for every mobility need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From complex rehab technology to everyday mobility aids — we carry and configure equipment across every category.
          </p>
        </AnimateIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={item}>
              <Link href={`/products?category=${cat.slug}`}>
                <motion.div
                  className="card overflow-hidden flex flex-col sm:flex-row group cursor-pointer h-full"
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(10,36,99,0.14)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                    <motion.div className="absolute inset-0" whileHover={{ scale: 1.07 }} transition={{ duration: 0.4 }}>
                      <Image src={cat.image} alt={cat.label} fill className="object-cover" />
                    </motion.div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="text-xs font-semibold text-gray-400 mb-1">{cat.count}</div>
                    <h3 className="text-lg font-black mb-2 group-hover:text-sky-600 transition-colors" style={{ color: "var(--navy)" }}>
                      {cat.label}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: "var(--sky-dark)" }}>
                      Browse products <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <AnimateIn className="text-center mt-10">
          <Link href="/products" className="btn btn-outline">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
