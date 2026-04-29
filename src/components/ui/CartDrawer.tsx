"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { state, dispatch, totalItems, subtotal } = useCart();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: "CLOSE" })}
          />
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} style={{ color: "var(--navy)" }} />
                <h2 className="font-bold text-lg" style={{ color: "var(--navy)" }}>
                  Your Cart {totalItems > 0 && <span className="text-sm font-normal text-gray-500">({totalItems})</span>}
                </h2>
              </div>
              <button
                onClick={() => dispatch({ type: "CLOSE" })}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-gray-200" />
                  <p className="text-gray-500">Your cart is empty.</p>
                  <Link
                    href="/products"
                    onClick={() => dispatch({ type: "CLOSE" })}
                    className="btn btn-primary btn-sm"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                state.items.map((item) => (
                  <div key={item.slug} className="flex gap-4 p-4 rounded-xl border border-gray-100">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                      <Image src={item.image} alt={item.name} width={80} height={80} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 mb-0.5">{item.categoryLabel}</p>
                      <p className="font-semibold text-sm text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500 mb-2">{item.brand}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => dispatch({ type: "UPDATE_QTY", payload: { slug: item.slug, quantity: item.quantity - 1 } })}
                            className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => dispatch({ type: "UPDATE_QTY", payload: { slug: item.slug, quantity: item.quantity + 1 } })}
                            className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                            {item.priceLabel}
                          </span>
                          <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.slug })}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {state.items.length > 0 && (
              <div className="p-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-gray-400">CRT items are quoted separately. Prices subject to insurance verification.</p>
                <Link
                  href="/checkout"
                  onClick={() => dispatch({ type: "CLOSE" })}
                  className="btn btn-primary w-full justify-center"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={() => dispatch({ type: "CLEAR" })}
                  className="w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
