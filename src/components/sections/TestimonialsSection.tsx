"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import { testimonials } from "@/lib/data";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <AnimateIn className="text-center mb-12">
          <div className="section-label mb-3">Client Stories</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Hear from people we've helped
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From first-time equipment users to experienced self-propellers — here's what our clients say.
          </p>
        </AnimateIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.slice(0, 3).map((t) => (
            <motion.div key={t.id} variants={item}>
              <motion.div
                className="card p-7 h-full flex flex-col"
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(10,36,99,0.1)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={20} style={{ color: "var(--sky)", opacity: 0.5 }} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--navy)" }}>{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
