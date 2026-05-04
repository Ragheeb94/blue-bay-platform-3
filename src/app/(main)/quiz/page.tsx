"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, RotateCcw } from "lucide-react";
import { products } from "@/lib/data";
import Image from "next/image";

const questions = [
  {
    id: "who",
    question: "Who needs the equipment?",
    options: [
      { value: "myself", label: "Myself", desc: "I'm the person who will use it" },
      { value: "child", label: "My child", desc: "Under 18 years old" },
      { value: "parent", label: "A parent or family member", desc: "Adult I care for" },
      { value: "patient", label: "My patient", desc: "I'm a clinician referring" },
    ],
  },
  {
    id: "need",
    question: "What is the primary need?",
    options: [
      { value: "full-time", label: "Full-time wheelchair use", desc: "Primary means of mobility" },
      { value: "part-time", label: "Part-time mobility support", desc: "Walk some, roll some" },
      { value: "pressure", label: "Pressure injury prevention", desc: "Sitting support & cushioning" },
      { value: "transfer", label: "Transfer & bathroom safety", desc: "Getting in and out safely" },
    ],
  },
  {
    id: "environment",
    question: "Where will it primarily be used?",
    options: [
      { value: "indoor", label: "Indoors only", desc: "Home, office, care facility" },
      { value: "outdoor", label: "Indoors and outdoors", desc: "Community use, travel" },
      { value: "travel", label: "Frequent travel", desc: "Airports, hotels, on-the-go" },
      { value: "both", label: "Varied environments", desc: "Multiple settings daily" },
    ],
  },
  {
    id: "insurance",
    question: "What is your insurance situation?",
    options: [
      { value: "medicare", label: "Medicare", desc: "Medicare Part B" },
      { value: "medicaid", label: "Medicaid", desc: "State Medicaid plan" },
      { value: "private", label: "Private insurance", desc: "Employer or marketplace plan" },
      { value: "selfpay", label: "Self-pay", desc: "Out of pocket" },
    ],
  },
];

function getResults(answers: Record<string, string>) {
  const { need, environment } = answers;

  if (need === "pressure") {
    return products.filter((p) => p.category === "seating-positioning").slice(0, 3);
  }
  if (need === "transfer") {
    return products.filter((p) => p.category === "transfer-aids" || p.category === "walkers-rollators").slice(0, 3);
  }
  if (need === "part-time") {
    return products.filter((p) => ["walkers-rollators", "power-scooters"].includes(p.category)).slice(0, 3);
  }
  if (need === "full-time" && environment === "travel") {
    return products.filter((p) => p.badges.includes("Ready to Ship") && p.category !== "seating-positioning").slice(0, 3);
  }
  if (need === "full-time") {
    return products.filter((p) => p.category === "power-wheelchairs").slice(0, 3);
  }
  return products.filter((p) => p.isFeatured).slice(0, 3);
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  const select = (val: string) => {
    const newAnswers = { ...answers, [current.id]: val };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setDir(1);
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const back = () => {
    if (step > 0) { setDir(-1); setStep(step - 1); }
  };

  const reset = () => { setStep(0); setAnswers({}); setDone(false); setDir(1); };

  const results = done ? getResults(answers) : [];

  return (
    <>
      <section className="py-16" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label mb-3" style={{ color: "var(--sky)" }}>Product Finder</div>
            <h1 className="text-4xl font-black text-white mb-2">Find the right equipment</h1>
            <p className="text-white/70">Answer 4 quick questions to get personalized recommendations.</p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container max-w-xl mx-auto">
          {!done ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="w-full h-2 rounded-full" style={{ background: "var(--gray-200)" }}>
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ background: "var(--navy)" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={step}
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h2 className="text-2xl font-black mb-6" style={{ color: "var(--navy)" }}>{current.question}</h2>
                    <div className="space-y-3">
                      {current.options.map((opt) => (
                        <motion.button
                          key={opt.value}
                          onClick={() => select(opt.value)}
                          className="w-full p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all"
                          style={{
                            borderColor: answers[current.id] === opt.value ? "var(--navy)" : "var(--gray-200)",
                            background: answers[current.id] === opt.value ? "rgba(10,36,99,0.05)" : "white",
                          }}
                          whileHover={{ borderColor: "var(--navy)", scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                            style={{
                              borderColor: answers[current.id] === opt.value ? "var(--navy)" : "var(--gray-300)",
                              background: answers[current.id] === opt.value ? "var(--navy)" : "transparent",
                            }}
                          >
                            {answers[current.id] === opt.value && <Check size={14} stroke="white" />}
                          </div>
                          <div>
                            <div className="font-bold text-sm" style={{ color: "var(--navy)" }}>{opt.label}</div>
                            <div className="text-xs text-gray-500">{opt.desc}</div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    {step > 0 && (
                      <button onClick={back} className="btn btn-outline mt-6">
                        <ArrowLeft size={16} /> Back
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="section-label mb-1">Your Results</div>
                  <h2 className="text-2xl font-black" style={{ color: "var(--navy)" }}>Recommended for you</h2>
                </div>
                <button onClick={reset} className="btn btn-sm btn-outline gap-1.5 text-xs">
                  <RotateCcw size={13} /> Retake
                </button>
              </div>

              <div className="space-y-4 mb-8">
                {results.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    className="card overflow-hidden flex gap-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(10,36,99,0.1)" }}
                  >
                    <div className="w-28 h-28 relative flex-shrink-0">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="p-4 flex flex-col justify-center flex-1">
                      <div className="text-xs text-gray-400 mb-0.5">{p.categoryLabel} · {p.brand}</div>
                      <h3 className="font-black text-sm mb-1" style={{ color: "var(--navy)" }}>{p.name}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">{p.tagline}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black" style={{ color: "var(--navy)" }}>{p.manufacturer}</span>
                        <Link href={`/products/${p.slug}`} className="text-xs font-bold flex items-center gap-1" style={{ color: "var(--sky-dark)" }}>
                          View <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="card p-6 text-center">
                <p className="text-sm text-gray-500 mb-4">Not finding the right fit? A certified ATP can evaluate your needs in person.</p>
                <Link href="/consultation" className="btn btn-primary w-full justify-center">
                  Book a Free Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
