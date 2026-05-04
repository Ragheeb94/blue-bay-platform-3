"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/shopProducts";

export default function ShopNavbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#0A2463] text-white shadow-md sticky top-0 z-30">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/shop" className="flex flex-col leading-tight">
            <span className="text-base font-black tracking-tight">Blue Bay Shop</span>
            <span className="text-[10px] text-sky-300 font-medium">Part of Blue Bay Mobility Inc.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/shop/products?category=${encodeURIComponent(cat)}`}
                className="px-3 py-2 rounded-lg text-sky-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden md:inline text-xs text-sky-300 hover:text-white border border-sky-500 rounded-lg px-3 py-1.5 transition-colors font-medium"
            >
              Main Site
            </Link>
            <Link href="/shop/cart" className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3E92CC] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden border-t border-white/10 py-3 flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/shop/products?category=${encodeURIComponent(cat)}`}
                className="text-sky-100 hover:text-white px-3 py-2 rounded-lg transition-colors text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </Link>
            ))}
            <Link
              href="/"
              className="text-sky-300 hover:text-white px-3 py-2 rounded-lg transition-colors text-sm mt-2 border-t border-white/10 pt-3"
              onClick={() => setMobileOpen(false)}
            >
              Visit Main Site →
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
