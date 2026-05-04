"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, User, PhoneCall, FileSearch, Wrench, Check, ArrowRight, ArrowLeft } from "lucide-react";

const consultTypes = [
  { id: "crt", icon: ClipboardCheck, label: "CRT Evaluation", desc: "Complex rehab technology for power chairs, manual chairs, or custom seating." },
  { id: "referral", icon: User, label: "Clinician Referral", desc: "OT, PT, or physician referring a patient for a CRT evaluation or equipment." },
  { id: "quote", icon: FileSearch, label: "Request a Quote", desc: "Get pricing and insurance estimate for a specific product." },
  { id: "repair", icon: Wrench, label: "Repair / Service", desc: "Service or repair for existing mobility equipment." },
];

const insuranceOptions = ["Medicare Part B", "Medicaid", "Medicare Advantage", "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana", "Other", "Self-pay / No insurance"];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
};

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [type, setType] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", zip: "" });
  const [insurance, setInsurance] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const goTo = (n: number) => { setDir(n > step ? 1 : -1); setStep(n); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDir(1);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center" style={{ background: "var(--gray-50)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card p-12 text-center max-w-lg mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "var(--green-light)" }}>
            <Check size={28} stroke="#16A34A" />
          </div>
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--navy)" }}>Request received!</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            A Blue Bay specialist will reach out to you within 1 business day to discuss your situation and next steps.
          </p>
          <div className="space-y-3 text-left bg-gray-50 rounded-xl p-5 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Type</span>
              <span className="font-semibold" style={{ color: "var(--navy)" }}>{consultTypes.find(c => c.id === type)?.label}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold" style={{ color: "var(--navy)" }}>{form.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Insurance</span>
              <span className="font-semibold" style={{ color: "var(--navy)" }}>{insurance || "Not provided"}</span>
            </div>
          </div>
          <a href="/" className="btn btn-primary w-full justify-center">Back to Home</a>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-3" style={{ color: "var(--sky)" }}>Get Started</div>
            <h1 className="text-4xl font-black text-white mb-3">Book a Consultation</h1>
            <p className="text-white/70 max-w-lg">Fill out the form below and a certified ATP will contact you within 1 business day.</p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 transition-all duration-300"
                  style={{
                    background: step >= s ? "var(--navy)" : "var(--gray-200)",
                    color: step >= s ? "white" : "var(--gray-500)",
                  }}
                >
                  {step > s ? <Check size={14} /> : s}
                </div>
                {s < 3 && (
                  <div className="flex-1 h-1 rounded-full transition-all duration-500" style={{ background: step > s ? "var(--navy)" : "var(--gray-200)" }} />
                )}
              </div>
            ))}
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="card p-8">
                    <h2 className="text-xl font-black mb-6" style={{ color: "var(--navy)" }}>What type of consultation do you need?</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {consultTypes.map((ct) => {
                        const Icon = ct.icon;
                        return (
                          <motion.button
                            key={ct.id}
                            onClick={() => { setType(ct.id); goTo(2); }}
                            className={`p-5 rounded-xl border-2 text-left transition-all ${type === ct.id ? "border-navy bg-blue-50" : "border-gray-200 hover:border-gray-300 bg-white"}`}
                            style={{ borderColor: type === ct.id ? "var(--navy)" : undefined }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Icon size={22} className="mb-3" style={{ color: "var(--navy)" }} />
                            <div className="font-bold text-sm mb-1" style={{ color: "var(--navy)" }}>{ct.label}</div>
                            <div className="text-xs text-gray-500">{ct.desc}</div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="card p-8">
                    <h2 className="text-xl font-black mb-6" style={{ color: "var(--navy)" }}>Your contact details</h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      {[
                        { key: "name", label: "Full name", type: "text", placeholder: "Jane Smith" },
                        { key: "phone", label: "Phone number", type: "tel", placeholder: "(714) 555-0123" },
                        { key: "email", label: "Email address", type: "email", placeholder: "jane@example.com" },
                        { key: "zip", label: "ZIP code", type: "text", placeholder: "92780" },
                      ].map(({ key, label, type, placeholder }) => (
                        <div key={key}>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{label}</label>
                          <input
                            type={type}
                            placeholder={placeholder}
                            value={form[key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                            style={{ focusRingColor: "var(--navy)" } as React.CSSProperties}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button onClick={() => goTo(1)} className="btn btn-outline">
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button
                        onClick={() => goTo(3)}
                        disabled={!form.name || !form.phone}
                        className="btn btn-primary flex-1 justify-center"
                        style={{ opacity: !form.name || !form.phone ? 0.5 : 1 }}
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <form onSubmit={handleSubmit} className="card p-8">
                    <h2 className="text-xl font-black mb-6" style={{ color: "var(--navy)" }}>Insurance & details</h2>
                    <div className="mb-5">
                      <label className="block text-sm font-semibold mb-2" style={{ color: "var(--navy)" }}>Insurance provider</label>
                      <div className="grid grid-cols-2 gap-2">
                        {insuranceOptions.map((ins) => (
                          <button
                            key={ins}
                            type="button"
                            onClick={() => setInsurance(ins)}
                            className="text-left px-3 py-2.5 rounded-lg border text-sm transition-all"
                            style={{
                              borderColor: insurance === ins ? "var(--navy)" : "var(--gray-200)",
                              background: insurance === ins ? "rgba(10,36,99,0.06)" : "white",
                              color: insurance === ins ? "var(--navy)" : "var(--gray-500)",
                              fontWeight: insurance === ins ? 600 : 400,
                            }}
                          >
                            {ins}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>
                        Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your condition, equipment needs, or any questions..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 transition-all"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => goTo(2)} className="btn btn-outline">
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button type="submit" className="btn btn-primary flex-1 justify-center">
                        Submit Request <ArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            Prefer to call? <a href="tel:18889990072" className="font-semibold hover:underline" style={{ color: "var(--navy)" }}>1-888-999-0072</a> · Mon–Fri, 9am–5pm Pacific
          </div>
        </div>
      </section>
    </>
  );
}
