"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Equipment Hub",
    href: "/products",
    dropdown: [
      { label: "Power Wheelchairs", href: "/products?category=power-wheelchairs" },
      { label: "Manual Wheelchairs", href: "/products?category=manual-wheelchairs" },
      { label: "Seating & Positioning", href: "/products?category=seating-positioning" },
      { label: "Power Scooters", href: "/products?category=power-scooters" },
      { label: "Walkers & Rollators", href: "/products?category=walkers-rollators" },
      { label: "Transfer Aids", href: "/products?category=transfer-aids" },
    ],
  },
  {
    label: "Who We Help",
    href: "/who-we-help",
    dropdown: [
      { label: "Patients & Users", href: "/who-we-help#patients" },
      { label: "Caregivers & Families", href: "/who-we-help#caregivers" },
      { label: "OTs & Clinicians", href: "/who-we-help#clinicians" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Shop", href: "/shop" },
  { label: "Track Order", href: "/tracking" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "var(--navy-dark)" }} className="hidden lg:block">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-xs text-white/70">
            <span>The U.S. arm of Medics Mobility Inc., Est. 2003 · Tustin, California</span>
            <div className="flex items-center gap-6">
              <span>Mon–Fri, 9am–5pm Pacific</span>
              <a href="tel:18889990072" className="flex items-center gap-1.5 text-white hover:text-sky-300 transition-colors font-medium">
                <Phone size={13} />
                1-888-999-0072
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-30 bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <Image src="/logo.png" alt="Blue Bay Mobility" width={40} height={40} className="rounded-full" />
              <div>
                <div className="font-black text-base leading-tight" style={{ color: "var(--navy)" }}>
                  Blue Bay
                </div>
                <div className="text-[10px] text-gray-400 font-medium tracking-wide uppercase leading-tight">
                  Mobility Inc.
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-navy hover:bg-gray-50 transition-all"
                    style={{ color: openDropdown === item.label ? "var(--navy)" : undefined }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors font-medium"
                              style={{ color: undefined }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/consultation"
                className="hidden lg:flex btn btn-sm btn-primary"
                style={{ background: "var(--navy)" }}
              >
                Book Consultation
              </Link>
              <button
                className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="container py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-500 hover:text-navy rounded-lg hover:bg-gray-50"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <a href="tel:18889990072" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600">
                    <Phone size={15} /> 1-888-999-0072
                  </a>
                  <Link href="/consultation" className="btn btn-primary btn-sm mx-4" onClick={() => setMobileOpen(false)}>
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
