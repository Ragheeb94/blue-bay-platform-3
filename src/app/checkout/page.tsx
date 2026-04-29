"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, Check, ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

export default function CheckoutPage() {
  const { state, dispatch, totalItems, subtotal } = useCart();
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "", city: "", state: "", zip: "" });

  const goTo = (n: number) => { setDir(n > step ? 1 : -1); setStep(n); };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    dispatch({ type: "CLEAR" });
  };

  if (confirmed) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center" style={{ background: "var(--gray-50)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-12 text-center max-w-lg mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "var(--green-light)" }}>
            <Check size={28} stroke="#16A34A" />
          </div>
          <h2 className="text-2xl font-black mb-3" style={{ color: "var(--navy)" }}>Order Received!</h2>
          <p className="text-gray-500 mb-4">
            Thank you, {contact.name.split(" ")[0]}. A Blue Bay specialist will contact you within 1 business day to confirm your order and verify insurance eligibility.
          </p>
          <p className="text-xs text-gray-400 mb-8">Order confirmation sent to {contact.email || "your email"}</p>
          <Link href="/tracking" className="btn btn-primary w-full justify-center mb-3">Track My Order</Link>
          <Link href="/" className="btn btn-outline w-full justify-center">Back to Home</Link>
        </motion.div>
      </div>
    );
  }

  if (totalItems === 0 && step === 1) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6" style={{ background: "var(--gray-50)" }}>
        <ShoppingBag size={56} className="text-gray-200" />
        <h2 className="text-xl font-black" style={{ color: "var(--navy)" }}>Your cart is empty</h2>
        <Link href="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <>
      <section className="py-12" style={{ background: "linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)" }}>
        <div className="container">
          <div className="section-label mb-2" style={{ color: "var(--sky)" }}>Checkout</div>
          <h1 className="text-3xl font-black text-white">Your Cart</h1>
        </div>
      </section>

      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8 max-w-sm">
            {["Cart", "Details", "Confirm"].map((label, i) => (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-all"
                  style={{ background: step > i + 1 ? "var(--green)" : step === i + 1 ? "var(--navy)" : "var(--gray-200)", color: step >= i + 1 ? "white" : "var(--gray-500)" }}
                >
                  {step > i + 1 ? <Check size={12} /> : i + 1}
                </div>
                <span className="text-xs font-semibold text-gray-500 hidden sm:block">{label}</span>
                {i < 2 && <div className="flex-1 h-0.5 rounded" style={{ background: step > i + 1 ? "var(--navy)" : "var(--gray-200)" }} />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                {step === 1 && (
                  <motion.div key="cart" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                    <div className="card p-6 space-y-4">
                      <h2 className="font-black text-lg mb-4" style={{ color: "var(--navy)" }}>Review your cart</h2>
                      {state.items.map((item) => (
                        <div key={item.slug} className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                            <Image src={item.image} alt={item.name} width={80} height={80} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-400 mb-0.5">{item.categoryLabel}</div>
                            <div className="font-bold text-sm mb-0.5" style={{ color: "var(--navy)" }}>{item.name}</div>
                            <div className="text-xs text-gray-500 mb-3">{item.brand}</div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button onClick={() => dispatch({ type: "UPDATE_QTY", payload: { slug: item.slug, quantity: item.quantity - 1 } })} className="w-7 h-7 rounded-lg border flex items-center justify-center hover:bg-gray-50">
                                  <Minus size={12} />
                                </button>
                                <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                                <button onClick={() => dispatch({ type: "UPDATE_QTY", payload: { slug: item.slug, quantity: item.quantity + 1 } })} className="w-7 h-7 rounded-lg border flex items-center justify-center hover:bg-gray-50">
                                  <Plus size={12} />
                                </button>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="font-black text-sm" style={{ color: "var(--navy)" }}>${(item.price * item.quantity).toLocaleString()}</span>
                                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.slug })} className="p-1 text-gray-300 hover:text-red-500 transition-colors">
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <button onClick={() => goTo(2)} className="btn btn-primary w-full justify-center mt-4">
                        Continue to Details <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="details" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                    <form onSubmit={(e) => { e.preventDefault(); goTo(3); }} className="card p-6">
                      <h2 className="font-black text-lg mb-6" style={{ color: "var(--navy)" }}>Contact & Shipping</h2>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        {[
                          { key: "name", label: "Full name", placeholder: "Jane Smith", type: "text" },
                          { key: "email", label: "Email", placeholder: "jane@example.com", type: "email" },
                          { key: "phone", label: "Phone", placeholder: "(714) 555-0123", type: "tel" },
                          { key: "zip", label: "ZIP code", placeholder: "92780", type: "text" },
                        ].map(({ key, label, placeholder, type }) => (
                          <div key={key}>
                            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{label}</label>
                            <input type={type} placeholder={placeholder} value={contact[key as keyof typeof contact]} onChange={(e) => setContact({ ...contact, [key]: e.target.value })}
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all" required={key !== "zip"} />
                          </div>
                        ))}
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>Street address</label>
                        <input type="text" placeholder="123 Main St" value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>City</label>
                          <input type="text" value={contact.city} onChange={(e) => setContact({ ...contact, city: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>State</label>
                          <input type="text" placeholder="CA" value={contact.state} onChange={(e) => setContact({ ...contact, state: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all" />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => goTo(1)} className="btn btn-outline"><ArrowLeft size={16} /> Back</button>
                        <button type="submit" className="btn btn-primary flex-1 justify-center">Review Order <ArrowRight size={16} /></button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="confirm" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                    <form onSubmit={handleConfirm} className="card p-6">
                      <h2 className="font-black text-lg mb-6" style={{ color: "var(--navy)" }}>Confirm your order</h2>
                      <div className="space-y-2 mb-6 p-4 rounded-xl" style={{ background: "var(--gray-50)" }}>
                        <div className="flex justify-between text-sm"><span className="text-gray-500">Name</span><span className="font-semibold" style={{ color: "var(--navy)" }}>{contact.name}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-500">Email</span><span className="font-semibold" style={{ color: "var(--navy)" }}>{contact.email}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-gray-500">Phone</span><span className="font-semibold" style={{ color: "var(--navy)" }}>{contact.phone}</span></div>
                        {contact.address && <div className="flex justify-between text-sm"><span className="text-gray-500">Address</span><span className="font-semibold text-right" style={{ color: "var(--navy)" }}>{contact.address}, {contact.city} {contact.state} {contact.zip}</span></div>}
                      </div>
                      <p className="text-xs text-gray-400 mb-6">
                        By placing this order, a Blue Bay specialist will contact you within 1 business day to confirm availability, insurance eligibility, and delivery timeline. No payment is collected at this stage.
                      </p>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => goTo(2)} className="btn btn-outline"><ArrowLeft size={16} /> Back</button>
                        <button type="submit" className="btn btn-primary flex-1 justify-center"><Check size={16} /> Place Order</button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Order summary sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-black mb-4" style={{ color: "var(--navy)" }}>Order Summary</h3>
                <div className="space-y-3 mb-4">
                  {state.items.map((item) => (
                    <div key={item.slug} className="flex justify-between text-sm">
                      <span className="text-gray-500 truncate pr-2">{item.name} ×{item.quantity}</span>
                      <span className="font-semibold flex-shrink-0" style={{ color: "var(--navy)" }}>${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between font-black">
                    <span>Subtotal</span>
                    <span style={{ color: "var(--navy)" }}>${subtotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">CRT items quoted separately. Insurance may cover partial or full cost.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
