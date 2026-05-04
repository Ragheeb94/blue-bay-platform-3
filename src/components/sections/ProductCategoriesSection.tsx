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
    desc: "Complex Rehab Technology (CRT) power chairs from Permobil and Quickie — rear-wheel, front-wheel, and mid-wheel drive with full power positioning.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",
    count: "5 products",
    manufacturers: ["Permobil", "Sunrise Medical"],
  },
  {
    slug: "manual-wheelchairs",
    label: "Manual Wheelchairs",
    desc: "Custom ultralight rigid frames in titanium (TiLite Aero Z) and aluminum (Quickie GT Sport) — built to your exact measurements by our certified ATPs.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    count: "2 products",
    manufacturers: ["Sunrise Medical"],
  },
  {
    slug: "seating-positioning",
    label: "Seating & Positioning",
    desc: "Clinical seating systems and pressure management cushions from Jay (Sunrise Medical) and ROHO (Permobil) — evaluated and configured for each user.",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=600&q=80&fit=crop",
    count: "3 products",
    manufacturers: ["Permobil", "Sunrise Medical"],
  },
  {
    slug: "power-scooters",
    label: "Power Scooters",
    desc: "Travel-friendly and full-featured scooters from Pride Mobility — from the 5-piece Go-Go for travel to the long-range Revo 2.0 for daily community use.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    count: "2 products",
    manufacturers: ["Pride Mobility"],
  },
  {
    slug: "walkers-rollators",
    label: "Walkers & Rollators",
    desc: "Lightweight aluminum and carbon fibre rollators and walkers from Future Mobility — for post-surgical recovery and active daily use.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop",
    count: "3 products",
    manufacturers: ["Future Mobility"],
  },
  {
    slug: "transfer-aids",
    label: "Transfer Aids",
    desc: "Bath transfer systems for safe, independent bathtub entry — designed for users who cannot step over the tub edge safely.",
    image: "https://images.unsplash.com/photo-1584998604882-94bf3d6e3b0e?w=600&q=80&fit=crop",
    count: "1 product",
    manufacturers: ["Future Mobility"],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

export default function ProductCategoriesSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimateIn className="text-center mb-12">
          <div className="section-label mb-3">Rehab Equipment Hub</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Equipment for every mobility need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Clinical reference library featuring Permobil, Sunrise Medical, Pride Mobility, and Future Mobility — evaluated and configured by our certified ATP team.
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
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{cat.desc}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cat.manufacturers.map((m) => (
                        <span key={m} className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-500">{m}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: "var(--sky-dark)" }}>
                      Browse equipment <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <AnimateIn className="text-center mt-10">
          <Link href="/products" className="btn btn-outline">
            Browse All Equipment
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
