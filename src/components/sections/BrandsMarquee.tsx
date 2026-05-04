"use client";
import { motion } from "framer-motion";

const partnerBrands = [
  {
    name: "Permobil",
    category: "Power Wheelchairs",
    description: "Sweden's leading complex rehab power chair manufacturer",
    accent: "#1A3A6B",
  },
  {
    name: "Sunrise Medical",
    category: "Power & Manual Chairs",
    description: "Makers of Quickie & Zippie, global CRT leader",
    accent: "#E8312E",
  },
  {
    name: "Pride Mobility",
    category: "Power Chairs & Scooters",
    description: "America's top scooter and power chair brand",
    accent: "#004B8D",
  },
  {
    name: "Future Mobility",
    category: "Walkers & Rollators",
    description: "Lightweight everyday mobility aids built for active living",
    accent: "#2E7D32",
  },
  {
    name: "TiLite",
    category: "Manual Wheelchairs",
    description: "Titanium ultralight custom manual chair specialists",
    accent: "#37474F",
  },
  {
    name: "Ki Mobility",
    category: "Manual Wheelchairs",
    description: "Rigid and folding aluminum custom manual chairs",
    accent: "#1565C0",
  },
  {
    name: "ROHO",
    category: "Seating & Cushions",
    description: "Air-cell pressure management cushion systems",
    accent: "#6A1B9A",
  },
  {
    name: "Jay",
    category: "Seating & Positioning",
    description: "Contoured foam & fluid wheelchair seating systems",
    accent: "#00695C",
  },
];

export default function BrandsMarquee() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--sky-dark)" }}>
            Manufacturer Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "var(--navy)" }}>
            Brands we carry &amp; service
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We work exclusively with the world&rsquo;s leading complex rehab technology manufacturers, so you get equipment that&rsquo;s built to last and backed by our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partnerBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-gray-100 bg-white p-5 hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base mb-3 flex-shrink-0"
                style={{ background: brand.accent }}
              >
                {brand.name.charAt(0)}
              </div>
              <div className="font-black text-base mb-0.5" style={{ color: "var(--navy)" }}>
                {brand.name}
              </div>
              <div className="text-xs font-semibold mb-2" style={{ color: "var(--sky-dark)" }}>
                {brand.category}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{brand.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
