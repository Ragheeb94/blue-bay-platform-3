"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";

const timeline = [
  { year: "2003", title: "Medics Mobility Inc. founded", desc: "Launched in Ontario, Canada with a focus on complex rehab technology for clients with neurological and physical disabilities." },
  { year: "2010", title: "ATP team expands", desc: "Grew our team of certified ATPs and established clinical partnerships with major rehab centres across Ontario." },
  { year: "2016", title: "Standardized clinical process", desc: "Developed our intake, evaluation, and documentation workflow, the same process now used in all Blue Bay evaluations." },
  { year: "2024", title: "Blue Bay Mobility opens in California", desc: "Expanded to Tustin, CA to serve the U.S. market. Blue Bay brings two decades of CRT expertise to clients across the United States." },
  { year: "Today", title: "Serving Southern California & beyond", desc: "In-home evaluations across Orange County, LA County, San Diego, Riverside, and San Bernardino. Nationwide equipment shipping." },
];

const competencies = [
  { title: "Clinician Collaboration", desc: "We work directly with your OT, PT, or physician, not around them." },
  { title: "Seating & Positioning", desc: "Deep expertise in pressure management, posture support, and long-term positioning outcomes." },
  { title: "Power Mobility Setup", desc: "Drive control programming, seating function configuration, and alternative access setup." },
  { title: "Insurance Navigation", desc: "Medicare, Medicaid, and private insurance documentation prepared and submitted by our team." },
  { title: "Care Coordination", desc: "We communicate across the full care team, client, caregiver, therapist, physician." },
  { title: "Service & Maintenance", desc: "Ongoing repairs, troubleshooting, and preventive maintenance scheduling." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <div className="section-label mb-4" style={{ color: "var(--sky)" }}>About Us</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Two decades of complex rehab expertise
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Blue Bay Mobility is the U.S. extension of Medics Mobility Inc., an Ontario-based CRT provider established in 2003. We bring our clinical process, certified expertise, and outcomes-focused practice to clients across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateIn>
              <div className="section-label mb-3">Our Mission</div>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
                The right equipment, matched to you
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team includes credentialed ATPs (Assistive Technology Professionals) and certified specialists who work directly with your clinical team to find the right equipment, configure it for your body, and navigate insurance from start to finish.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                We believe that the right mobility equipment, properly configured and fully supported, changes lives. Every evaluation we conduct, every chair we deliver, is oriented around one goal: equipping you to live as fully as possible.
              </p>
              <Link href="/consultation" className="btn btn-primary">
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </AnimateIn>

            <AnimateIn delay={0.12}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop"
                  alt="Blue Bay Mobility team"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container max-w-2xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <div className="section-label mb-3">Our History</div>
            <h2 className="text-3xl font-black" style={{ color: "var(--navy)" }}>20+ years in the making</h2>
          </AnimateIn>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimateIn key={item.year} delay={i * 0.08}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-md"
                      style={{ background: i === timeline.length - 1 ? "var(--sky)" : "var(--navy)" }}
                    >
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 mt-2" style={{ background: "var(--gray-200)" }} />
                    )}
                  </div>
                  <div className="pt-3 pb-4">
                    <h3 className="font-black text-base mb-1" style={{ color: "var(--navy)" }}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core competencies */}
      <section className="section bg-white">
        <div className="container">
          <AnimateIn className="text-center mb-12">
            <div className="section-label mb-3">What We Do</div>
            <h2 className="text-3xl font-black" style={{ color: "var(--navy)" }}>Core competencies</h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((comp, i) => (
              <AnimateIn key={comp.title} delay={i * 0.07}>
                <motion.div
                  className="card p-6"
                  whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(10,36,99,0.1)" }}
                  transition={{ duration: 0.25 }}
                >
                  <Check size={18} className="mb-3" style={{ color: "var(--sky-dark)" }} />
                  <h3 className="font-black text-base mb-2" style={{ color: "var(--navy)" }}>{comp.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{comp.desc}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="section-label mb-3">Location</div>
              <h2 className="text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>Find us in Tustin, CA</h2>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <p><strong style={{ color: "var(--navy)" }}>Blue Bay Mobility Inc.</strong><br />3002 Dow Ave Unit 312<br />Tustin, CA 92780</p>
                <p><strong style={{ color: "var(--navy)" }}>Hours:</strong> Mon–Fri, 9am–5pm Pacific</p>
                <p><strong style={{ color: "var(--navy)" }}>Phone:</strong> <a href="tel:18889990072" className="hover:underline">1-888-999-0072</a></p>
                <p><strong style={{ color: "var(--navy)" }}>Email:</strong> <a href="mailto:info@bluebaymobility.com" className="hover:underline">info@bluebaymobility.com</a></p>
              </div>
              <p className="text-sm text-gray-500">
                We conduct in-home evaluations across Orange County, Los Angeles County, San Diego County, Riverside County, and San Bernardino County. Equipment shipping is available nationwide.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="card p-8 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4"
                  style={{ background: "var(--navy)" }}
                >
                  BB
                </div>
                <h3 className="font-black text-lg mb-1" style={{ color: "var(--navy)" }}>Blue Bay Mobility Inc.</h3>
                <p className="text-sm text-gray-500 mb-1">The U.S. arm of Medics Mobility Inc.</p>
                <p className="text-xs text-gray-400 mb-6">Ontario, Canada · Est. 2003</p>
                <Link href="/consultation" className="btn btn-primary w-full justify-center">
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
