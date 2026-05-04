"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Check, Lock } from "lucide-react";

export default function ShopCheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const shipping = totalPrice >= 150 ? 0 : 19.99;
  const total = totalPrice + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-20 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-[#0A2463] mb-3">Order received!</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          Thank you for your order. We will email you a confirmation and tracking number within 1 business day.
        </p>
        <div className="space-y-3">
          <Link href="/shop/products" className="block bg-[#0A2463] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#091d52] transition-colors">
            Continue shopping
          </Link>
          <Link href="/" className="block text-sm text-gray-400 hover:text-[#0A2463] transition-colors">
            Visit Blue Bay Mobility main site
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-[#0A2463] mb-3">Nothing in your cart</h1>
        <Link href="/shop/products" className="inline-block bg-[#0A2463] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#091d52] transition-colors">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-[#0A2463] mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h2 className="font-bold text-[#0A2463] mb-4">Contact</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">First name</label>
                <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Last name</label>
                <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
            <input type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
            <input type="tel" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
          </div>
          <div>
            <h2 className="font-bold text-[#0A2463] mb-4">Shipping address</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Street address</label>
                <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">City</label>
                  <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">State</label>
                  <input required maxLength={2} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">ZIP code</label>
                <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3E92CC]" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[#0A2463] mb-4">Payment</h2>
            <div className="bg-[#EEF4FA] border border-sky-100 rounded-xl p-4 text-sm text-gray-500">
              <div className="flex items-center gap-2 font-semibold text-[#0A2463] mb-1">
                <Lock className="w-4 h-4" />Secure payment processing
              </div>
              Payment processing will be enabled on launch. Place your order and we will contact you to complete payment.
            </div>
          </div>
          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold py-3.5 rounded-xl hover:bg-[#091d52] transition-colors">
            <Lock className="w-4 h-4" />Place order
          </button>
        </form>
        <div>
          <h2 className="font-bold text-[#0A2463] mb-4">Order summary</h2>
          <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-3 mb-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{product.name} x{quantity}</span>
                <span className="font-semibold text-[#0A2463]">${(product.price * quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-[#0A2463] text-base">
                <span>Total</span>
                <span>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
          <Link href="/shop/cart" className="text-sm text-sky-600 hover:underline">Edit cart</Link>
        </div>
      </div>
    </div>
  );
}
