"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";

const headline = ["The right", "mobility equipment,", "matched to you."];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, var(--navy-light) 100%)" }}
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, var(--sky) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, var(--sky-dark) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left, Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "rgba(14, 165, 233, 0.18)", color: "var(--sky)" }}
            >
              <Star size={11} fill="currentColor" />
              Complex Rehab Technology Specialists
            </motion.div>

            <div className="mb-6">
              {headline.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-white font-black leading-[1.08] tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg"
            >
              We collaborate with your clinical team, configure everything around your body and lifestyle, and take care of insurance from start to finish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link href="/products" className="btn btn-lg" style={{ background: "var(--sky)", color: "white", border: "none" }}>
                  Find My Equipment
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link href="/consultation" className="btn btn-lg btn-outline-white">
                  Book Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {[
                { icon: Shield, text: "Insurance handled" },
                { icon: Star, text: "Certified ATPs" },
                { icon: Clock, text: "48hr quote turnaround" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-white/60">
                  <Icon size={14} className="text-sky-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right, Image */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=85&fit=crop"
                  alt="Person using mobility equipment"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(7,26,74,0.3) 0%, transparent 60%)" }}
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 top-8 bg-white rounded-xl p-3 shadow-xl"
              >
                <div className="text-2xl font-black" style={{ color: "var(--navy)" }}>22+</div>
                <div className="text-xs text-gray-500 font-medium">Years experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05, duration: 0.5 }}
                className="absolute -right-6 bottom-12 bg-white rounded-xl p-3 shadow-xl"
              >
                <div className="text-2xl font-black" style={{ color: "var(--navy)" }}>5,000+</div>
                <div className="text-xs text-gray-500 font-medium">Clients served</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute left-4 -bottom-4 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2"
                style={{ background: "var(--sky)" }}
              >
                <Shield size={16} className="text-white" />
                <span className="text-white text-sm font-bold">98% Insurance Verified</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
