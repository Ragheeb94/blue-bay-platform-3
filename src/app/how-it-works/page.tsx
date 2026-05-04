"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Phone, ClipboardCheck, Shield, Wrench, Truck, Plus, Minus, Check } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";

const steps = [
  {
    num: 1,
    icon: FileText,
    title: "Submit your request",
    duration: "5 minutes",
    desc: "Browse our equipment catalog or fill out the consultation form to get started. You can also call us directly. There's no commitment — just an opening conversation.",
    checklist: ["Browse products online or call us", "Tell us about your condition and goals", "We'll confirm receipt within 4 business hours"],
  },
  {
    num: 2,
    icon: Phone,
    title: "Talk to your specialist",
    duration: "Within 1 business day",
    desc: "An ATP (Assistive Technology Professional) reviews your request and calls you to discuss your situation, answer questions, and outline the path forward.",
    checklist: ["Dedicated ATP assigned to your case", "No-pressure, informational call", "We'll outline insurance options upfront"],
  },
  {
    num: 3,
    icon: ClipboardCheck,
    title: "Clinical evaluation",
    duration: "1–2 hours",
    desc: "We schedule a thorough evaluation — in your home or at your clinic — with your occupational therapist or physical therapist present. We assess your needs, measure your body, and identify the right equipment.",
    checklist: ["In-home or clinic evaluation (your choice)", "OT or PT included in the session", "Body measurements and functional assessment", "Equipment recommendations reviewed with you"],
  },
  {
    num: 4,
    icon: Shield,
    title: "Insurance verification & approval",
    duration: "2–6 weeks",
    desc: "We prepare and submit all clinical documentation, including the Letter of Medical Necessity. We handle all back-and-forth with your insurer and keep you updated throughout.",
    checklist: ["Medicare, Medicaid, and private insurance", "Letter of Medical Necessity prepared by our team", "We handle all denials and appeals", "You receive a clear quote before any commitment"],
  },
  {
    num: 5,
    icon: Wrench,
    title: "Custom build & quality check",
    duration: "2–4 weeks after approval",
    desc: "Your equipment is ordered from the manufacturer and configured to your exact specifications — seating dimensions, drive controls, accessories, and positioning components.",
    checklist: ["Built to your body measurements", "All components configured before shipment", "Quality check performed by our team", "Tracking provided when shipped"],
  },
  {
    num: 6,
    icon: Truck,
    title: "Delivery, fitting & training",
    duration: "In-home, scheduled with you",
    desc: "We deliver to your home, perform the final fitting and adjustment, and train you (and your caregiver if applicable) on safe use and daily maintenance. A 30-day follow-up is included.",
    checklist: ["In-home delivery and setup", "Final adjustments made on-site", "Full training for user and caregiver", "30-day follow-up call included"],
  },
];

const faqs = [
  {
    q: "Do I need a referral from a doctor or therapist?",
    a: "For complex rehab technology (CRT) items covered by Medicare or Medicaid, a physician's order and an OT or PT evaluation are required. We guide you through all of this — if you don't have an existing therapist, we can help connect you with one.",
  },
  {
    q: "How long does the entire process take?",
    a: "The timeline varies depending on insurance and complexity. For standard equipment with existing documentation, 6–10 weeks is typical. For complex CRT with custom seating, 12–16 weeks is common. We're transparent throughout — you'll always know where things stand.",
  },
  {
    q: "What insurance do you accept?",
    a: "We work with Medicare Part B, Medicaid, Medicare Advantage, Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, Humana, and many other private plans. Contact us if you're unsure about your specific coverage.",
  },
  {
    q: "What if my insurance denies the claim?",
    a: "We handle denials and appeals on your behalf. Our team is experienced in the documentation required to support appeals, and we have a strong track record of successful reversals.",
  },
  {
    q: "Do you ship equipment nationally?",
    a: "Yes. While we conduct in-home evaluations in Southern California (Orange County, LA County, San Diego, Riverside, San Bernardino), we ship equipment nationwide for appropriate product types.",
  },
  {
    q: "What happens after I receive my equipment?",
    a: "Every delivery includes in-home fitting, adjustment, and training. A 30-day follow-up call is included. After that, we remain available for ongoing maintenance, repairs, and re-evaluations when your needs change.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{q}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--gray-100)" }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <div className="section-label mb-4" style={{ color: "var(--sky)" }}>The Process</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Simple steps, expert support
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From first contact to in-home delivery — every step is managed by our certified team so you can focus on your health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={step.num} delay={i * 0.07}>
                  <motion.div
                    className="card p-8 flex flex-col sm:flex-row gap-6"
                    whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(10,36,99,0.1)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl"
                        style={{ background: "var(--navy)" }}
                      >
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={18} style={{ color: "var(--sky-dark)" }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--sky-dark)" }}>
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-black mb-2" style={{ color: "var(--navy)" }}>{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed mb-4">{step.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.checklist.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance section */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="section-label mb-3">Insurance</div>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
                We handle insurance, start to finish
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Insurance documentation for complex rehab technology is demanding — clinical notes, body measurements, functional assessments, and Letters of Medical Necessity all have to meet payer standards. Our team manages all of it.
              </p>
              <Link href="/consultation" className="btn btn-primary">
                Check My Coverage
                <ArrowRight size={16} />
              </Link>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {["Medicare Part B", "Medicaid", "Medicare Advantage", "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana"].map((ins) => (
                  <div key={ins} className="card p-4 text-sm font-semibold" style={{ color: "var(--navy)" }}>
                    <Check size={14} className="text-green-500 mb-1.5" />
                    {ins}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container max-w-2xl mx-auto">
          <AnimateIn className="text-center mb-10">
            <div className="section-label mb-3">FAQs</div>
            <h2 className="text-3xl font-black" style={{ color: "var(--navy)" }}>Common questions</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="card p-6">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
