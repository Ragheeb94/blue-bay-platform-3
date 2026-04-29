"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User, Heart, Stethoscope } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const audiences = [
  {
    icon: User,
    label: "Patients & Users",
    href: "/who-we-help#patients",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&fit=crop",
    heading: "Mobility that fits your life",
    desc: "Whether you're navigating a new diagnosis, a changing condition, or simply need an upgrade — we match equipment to your exact body, environment, and goals.",
    features: ["Certified ATP evaluation", "Custom fit and configuration", "Full insurance handling", "In-home delivery & training"],
  },
  {
    icon: Heart,
    label: "Caregivers & Families",
    href: "/who-we-help#caregivers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80&fit=crop",
    heading: "Support for the people who give it",
    desc: "Helping a loved one find the right equipment can feel overwhelming. We guide your family through every step — from first call to delivery day.",
    features: ["Plain-language guidance", "Family included in evaluation", "Caregiver training included", "Ongoing support access"],
  },
  {
    icon: Stethoscope,
    label: "OTs & Clinicians",
    href: "/who-we-help#clinicians",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80&fit=crop",
    heading: "A CRT partner your patients can trust",
    desc: "We work alongside your clinical team — not around them. Credentialed ATPs, thorough documentation, and a process built for referral partners.",
    features: ["Direct ATP collaboration", "Clinical documentation support", "Fast referral turnaround", "Transparent progress updates"],
  },
];

export default function AudienceSection() {
  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <AnimateIn className="text-center mb-12">
          <div className="section-label mb-3">Who We Help</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Built for every person in the journey
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From patients to caregivers to clinicians — we have a clear process for everyone involved.
          </p>
        </AnimateIn>

        <div className="space-y-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            const isEven = i % 2 === 1;
            return (
              <AnimateIn key={a.label} delay={i * 0.1}>
                <motion.div
                  className="card overflow-hidden"
                  whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(10,36,99,0.12)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                    {/* Image */}
                    <div className="lg:w-[42%] relative overflow-hidden h-64 lg:h-auto">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={a.image}
                          alt={a.label}
                          fill
                          className="object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: "linear-gradient(to right, transparent 60%, rgba(248,250,252,0.4))" }}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-[58%] p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: "rgba(10,36,99,0.08)" }}
                        >
                          <Icon size={20} style={{ color: "var(--navy)" }} />
                        </div>
                        <span className="section-label">{a.label}</span>
                      </div>
                      <h3 className="text-2xl font-black mb-3" style={{ color: "var(--navy)" }}>
                        {a.heading}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">{a.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {a.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: "var(--green-light)" }}>
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href={a.href} className="inline-flex items-center gap-1.5 text-sm font-bold hover:gap-2.5 transition-all" style={{ color: "var(--navy)" }}>
                        Learn more <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
