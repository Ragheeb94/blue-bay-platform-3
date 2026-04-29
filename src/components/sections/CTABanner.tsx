"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

export default function CTABanner() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}
    >
      {/* Decorative blob */}
      <motion.div
        className="absolute right-[-80px] top-[-80px] w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--sky) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 text-center">
        <AnimateIn>
          <div className="section-label mb-4" style={{ color: "var(--sky)" }}>
            Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Ready to get moving?
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-8">
            Browse our full catalog or speak directly with a certified ATP. Insurance handling included.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/products"
                className="btn btn-lg"
                style={{ background: "var(--sky)", color: "white", border: "none" }}
              >
                Browse Equipment
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link href="/consultation" className="btn btn-lg btn-outline-white">
                Book Consultation
              </Link>
            </motion.div>
          </div>
          <a
            href="tel:18889990072"
            className="inline-flex items-center gap-2 mt-6 text-white/50 hover:text-white/80 text-sm transition-colors"
          >
            <Phone size={14} />
            Or call us: 1-888-999-0072
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
