"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, User, Heart, Stethoscope } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import CTABanner from "@/components/sections/CTABanner";

const audiences = [
  {
    id: "patients",
    icon: User,
    label: "Patients & Users",
    heading: "Mobility that fits your life",
    intro: "Whether you've recently received a diagnosis, your condition has changed, or your current equipment no longer serves your needs, we're built to help you find the right solution, configured around your specific body and lifestyle.",
    body: "Our certified ATPs (Assistive Technology Professionals) conduct a thorough clinical evaluation, in your home or clinic, working alongside your existing therapy team. We don't just hand you a chair. We configure every component, verify insurance coverage, and follow up after delivery to make sure everything is working for you.",
    features: [
      "Certified ATP evaluation (in-home or clinic)",
      "Equipment configured to your body dimensions and goals",
      "Medicare, Medicaid, and private insurance handled",
      "In-home delivery, fitting, and training",
      "30-day follow-up included",
      "Ongoing maintenance and repair support",
    ],
    cta: { label: "Find My Equipment", href: "/products" },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop",
  },
  {
    id: "caregivers",
    icon: Heart,
    label: "Caregivers & Families",
    heading: "Support for the people who give it",
    intro: "Navigating mobility equipment for a loved one can feel overwhelming, especially when insurance, clinical requirements, and equipment options all seem to require a specialist to understand. We make this manageable.",
    body: "From the first call to delivery day, we guide your entire family through the process. We explain every step in plain language, include caregivers in the evaluation, and train everyone involved in safe use. You won't be left holding paperwork or chasing approvals, we handle that.",
    features: [
      "Plain-language guidance throughout the process",
      "Family members included in evaluation sessions",
      "Insurance paperwork handled by our team",
      "Caregiver training on equipment use and maintenance",
      "Single point of contact for all questions",
      "Post-delivery support and check-ins",
    ],
    cta: { label: "Book a Family Consultation", href: "/consultation" },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop",
  },
  {
    id: "clinicians",
    icon: Stethoscope,
    label: "OTs & Clinicians",
    heading: "A CRT partner your patients can trust",
    intro: "We work alongside your clinical team, not around them. Our certified ATPs collaborate directly with OTs, PTs, physicians, and rehab centres to ensure every evaluation and equipment recommendation is clinically grounded.",
    body: "We understand that your reputation depends on the referral partners you choose. That's why we prioritize documentation quality, communication, and outcomes. We provide timely updates, prepare thorough Letters of Medical Necessity, and handle insurance submission so you can focus on clinical care.",
    features: [
      "Direct collaboration with referring OTs and PTs",
      "Credentialed ATPs on every complex case",
      "Thorough LMN and clinical documentation support",
      "Transparent progress updates at every stage",
      "Fast turnaround on referral intake",
      "Available for joint evaluations on complex cases",
    ],
    cta: { label: "Submit a Referral", href: "/consultation" },
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&fit=crop",
  },
];

export default function WhoWeHelpPage() {
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
            <div className="section-label mb-4" style={{ color: "var(--sky)" }}>Who We Help</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Built for every person in the mobility journey
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From the person in the chair to the clinician writing the prescription, we have a clear, supported process for everyone involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audience sections */}
      {audiences.map((aud, i) => {
        const Icon = aud.icon;
        const isEven = i % 2 === 1;
        return (
          <section key={aud.id} id={aud.id} className="section" style={{ background: i % 2 === 0 ? "white" : "var(--gray-50)" }}>
            <div className="container">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Text */}
                <AnimateIn delay={0.05}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(10,36,99,0.08)" }}>
                      <Icon size={22} style={{ color: "var(--navy)" }} />
                    </div>
                    <span className="section-label">{aud.label}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight" style={{ color: "var(--navy)" }}>
                    {aud.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{aud.intro}</p>
                  <p className="text-gray-500 leading-relaxed mb-6">{aud.body}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-8">
                    {aud.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--green-light)" }}>
                          <Check size={10} stroke="#16A34A" />
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link href={aud.cta.href} className="btn btn-primary">
                    {aud.cta.label}
                    <ArrowRight size={16} />
                  </Link>
                </AnimateIn>

                {/* Image */}
                <AnimateIn delay={0.15}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={aud.image} alt={aud.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,74,0.25) 0%, transparent 60%)" }} />
                  </motion.div>
                </AnimateIn>
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
