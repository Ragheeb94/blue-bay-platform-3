"use client";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import AnimateIn from "@/components/ui/AnimateIn";
import { trustStats } from "@/lib/data";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

export default function TrustStatsSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimateIn className="text-center mb-12">
          <div className="section-label mb-3">By the Numbers</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Two decades of proven outcomes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Since 2003, we've built a reputation on clinical quality, insurance expertise, and outcomes that last.
          </p>
        </AnimateIn>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {trustStats.map((stat) => (
            <motion.div key={stat.label} variants={item}>
              <motion.div
                className="card p-8 text-center"
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(10,36,99,0.12)" }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: "var(--navy)" }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
