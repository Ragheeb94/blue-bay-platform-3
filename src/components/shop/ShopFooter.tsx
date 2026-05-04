import Link from "next/link";
import { categories } from "@/lib/shopProducts";

export default function ShopFooter() {
  return (
    <footer className="bg-[#0A2463] text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base font-black mb-1">Blue Bay Shop</h3>
            <p className="text-sky-300 text-sm mb-4">Part of Blue Bay Mobility Inc.</p>
            <p className="text-sky-100 text-sm leading-relaxed">
              Your trusted source for everyday mobility aids and accessories. Delivered with care.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sky-200 mb-3 text-sm uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/shop/products?category=${encodeURIComponent(cat)}`}
                    className="text-sky-100 hover:text-white text-sm transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sky-200 mb-3 text-sm uppercase tracking-wide">Help</h4>
            <ul className="space-y-2 text-sm text-sky-100">
              <li><Link href="/" className="hover:text-white transition-colors">Blue Bay Mobility Inc. →</Link></li>
              <li>Free shipping on orders over $150</li>
              <li>30-day hassle-free returns</li>
              <li>Expert support: 1-888-999-0072</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-sky-300">
          <p>Blue Bay Shop is operated by Blue Bay Mobility Inc. · Tustin, CA</p>
          <p>© {new Date().getFullYear()} Blue Bay Mobility Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
