"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Phone, ClipboardCheck, Shield, Wrench, Truck } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  { num: 1, icon: FileText, title: "Submit your request", duration: "5 min", desc: "Browse products or fill out the consultation form online or by phone." },
  { num: 2, icon: Phone, title: "Talk to your specialist", duration: "Within 1 business day", desc: "An ATP reviews your situation and outlines the path forward." },
  { num: 3, icon: ClipboardCheck, title: "Clinical evaluation", duration: "1–2 hours", desc: "In-home or clinic evaluation with your therapy team to assess needs and fit." },
  { num: 4, icon: Shield, title: "Insurance verification", duration: "2–6 weeks", desc: "We prepare and submit all documentation. You stay in the loop throughout." },
  { num: 5, icon: Wrench, title: "Custom build & quality check", duration: "2–4 weeks after approval", desc: "Your equipment is built to your specifications and verified before shipment." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

export default function HowItWorksSection() {
  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <AnimateIn className="text-center mb-12">
          <div className="section-label mb-3">The Process</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Simple steps, expert support
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From first contact to in-home delivery, every step is managed by our team so you can focus on what matters.
          </p>
        </AnimateIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.num} variants={item} className="relative">
                <motion.div
                  className="card p-6 h-full"
                  whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(10,36,99,0.1)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-black text-sm"
                      style={{ background: "var(--navy)" }}
                    >
                      {step.num}
                    </div>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(14,165,233,0.1)" }}
                    >
                      <Icon size={17} style={{ color: "var(--sky-dark)" }} />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "var(--navy)" }}>
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold mb-2" style={{ color: "var(--sky-dark)" }}>
                    {step.duration}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 -right-2.5 z-10 w-5 h-5 items-center justify-center">
                    <ArrowRight size={14} style={{ color: "var(--sky)" }} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <AnimateIn delay={0.3} className="text-center mt-10">
          <Link href="/how-it-works" className="btn btn-outline">
            See full process details
            <ArrowRight size={16} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
