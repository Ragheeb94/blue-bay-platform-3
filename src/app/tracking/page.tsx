"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Check, Clock } from "lucide-react";
import { trackingSteps } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const DEMO_ORDER = "BBM-2024-0047";

export default function TrackingPage() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState<string | null>(null);
  const [activeStep] = useState(3); // demo: Clinical Evaluation
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === DEMO_ORDER || input.trim() !== "") {
      setOrder(input.trim() || DEMO_ORDER);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <section className="py-20" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-4" style={{ color: "var(--sky)" }}>Order Status</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Track Your Order</h1>
            <p className="text-white/70 max-w-lg mb-8">Enter your order number to see the current status of your equipment.</p>

            <form onSubmit={handleSearch} className="flex gap-3 max-w-md">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`e.g. ${DEMO_ORDER}`}
                className="flex-1 bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-all"
              />
              <button type="submit" className="btn btn-sm" style={{ background: "var(--sky)", color: "white", border: "none" }}>
                <Search size={16} /> Track
              </button>
            </form>
            {error && <p className="text-red-300 text-sm mt-2">Order not found. Try {DEMO_ORDER} for a demo.</p>}
          </motion.div>
        </div>
      </section>

      {order && (
        <section className="section" style={{ background: "var(--gray-50)" }}>
          <div className="container max-w-2xl mx-auto">
            <AnimateIn>
              <div className="card p-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="section-label">Order #{order.toUpperCase()}</div>
                  <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 font-bold px-2.5 py-1 rounded-full">In Progress</span>
                </div>
                <h2 className="text-xl font-black mb-8" style={{ color: "var(--navy)" }}>
                  Currently: {trackingSteps[activeStep - 1].label}
                </h2>

                <div className="space-y-0">
                  {trackingSteps.map((ts, i) => {
                    const done = i + 1 < activeStep;
                    const active = i + 1 === activeStep;
                    const future = i + 1 > activeStep;
                    return (
                      <div key={ts.id} className="flex gap-4">
                        {/* Timeline */}
                        <div className="flex flex-col items-center">
                          <motion.div
                            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm border-2 transition-all"
                            style={{
                              background: done ? "var(--green)" : active ? "var(--navy)" : "white",
                              borderColor: done ? "var(--green)" : active ? "var(--navy)" : "var(--gray-200)",
                              color: done || active ? "white" : "var(--gray-400)",
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.08 }}
                          >
                            {done ? <Check size={16} /> : ts.id}
                          </motion.div>
                          {i < trackingSteps.length - 1 && (
                            <div className="w-0.5 flex-1 my-1 min-h-[32px]" style={{ background: done ? "var(--green)" : "var(--gray-200)" }} />
                          )}
                        </div>

                        {/* Content */}
                        <div className="pb-8 flex-1">
                          <div className={`font-bold text-sm mb-0.5 ${future ? "text-gray-400" : ""}`} style={{ color: future ? undefined : done ? "var(--green)" : "var(--navy)" }}>
                            {ts.label}
                            {active && (
                              <span className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                                <Clock size={11} /> Active
                              </span>
                            )}
                          </div>
                          <p className={`text-sm leading-relaxed ${future ? "text-gray-400" : "text-gray-500"}`}>{ts.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-2 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">Questions about your order?</p>
                  <a href="tel:18889990072" className="font-bold text-sm" style={{ color: "var(--navy)" }}>1-888-999-0072</a>
                  <span className="text-gray-400 text-sm"> · </span>
                  <a href="mailto:info@bluebaymobility.com" className="font-bold text-sm" style={{ color: "var(--navy)" }}>info@bluebaymobility.com</a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {!order && (
        <section className="section bg-white">
          <div className="container max-w-lg mx-auto text-center">
            <AnimateIn>
              <h2 className="text-xl font-black mb-3" style={{ color: "var(--navy)" }}>How order tracking works</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                When you submit a request or order, we'll email you an order number. Enter it above to see exactly where your equipment is in our 6-stage process — from referral received to in-home delivery.
              </p>
              <p className="text-gray-400 text-xs mt-4">Try <strong>{DEMO_ORDER}</strong> to see a demo</p>
            </AnimateIn>
          </div>
        </section>
      )}
    </>
  );
}
