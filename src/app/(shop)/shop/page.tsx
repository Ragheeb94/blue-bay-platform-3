import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categories } from "@/lib/shopProducts";
import { ShoppingCart, Truck, RotateCcw, Phone, ChevronRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  "Power Scooters": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "Rollators & Walkers": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  "Manual Wheelchairs": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  "Daily Living Aids": "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80",
  "Accessories": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
};

export default function ShopHomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A2463] text-white py-20 px-4">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-4">Blue Bay Shop</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Everyday mobility.<br />Delivered to your door.
            </h1>
            <p className="text-sky-100 text-lg leading-relaxed mb-8">
              Shop scooters, rollators, walkers, manual wheelchairs, and daily living aids. No prescription needed. Fast shipping across the US.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop/products"
                className="inline-flex items-center gap-2 bg-[#3E92CC] hover:bg-[#2d7ab5] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Shop All Products
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-sky-400 text-sky-200 hover:text-white hover:border-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Need custom rehab equipment? Visit Main Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#EEF4FA] border-b border-sky-100">
        <div className="container py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#0A2463]">
          <div className="flex items-center gap-2.5 font-medium">
            <Truck className="w-4 h-4 text-sky-500 flex-shrink-0" />
            Free shipping on orders over $150
          </div>
          <div className="flex items-center gap-2.5 font-medium">
            <RotateCcw className="w-4 h-4 text-sky-500 flex-shrink-0" />
            30-day hassle-free returns
          </div>
          <div className="flex items-center gap-2.5 font-medium">
            <Phone className="w-4 h-4 text-sky-500 flex-shrink-0" />
            Expert support: 1-888-999-0072
          </div>
        </div>
      </div>

      {/* Category grid */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-[#0A2463] mb-8">Shop by category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/shop/products?category=${encodeURIComponent(cat)}`}
              className="group block rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-36 bg-gray-100">
                <Image
                  src={categoryImages[cat] ?? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"}
                  alt={cat}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0A2463]/40 group-hover:bg-[#0A2463]/30 transition-colors" />
              </div>
              <div className="p-3 bg-white">
                <p className="font-semibold text-sm text-[#0A2463] leading-tight">{cat}</p>
                <span className="text-xs text-sky-600 flex items-center gap-0.5 mt-1">
                  Shop now <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0A2463]">Featured products</h2>
            <Link href="/shop/products" className="text-sm font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <Link
                key={product.id}
                href={`/shop/products/${product.slug}`}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 bg-gray-100">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-sky-600 uppercase tracking-wide mb-1">{product.brand}</p>
                  <h3 className="font-bold text-[#0A2463] mb-1 group-hover:underline underline-offset-2">{product.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#0A2463]">${product.price.toLocaleString()}</span>
                    <span className="text-xs bg-[#0A2463] text-white px-3 py-1.5 rounded-lg font-semibold">View product</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#3E92CC] text-white py-14">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Need complex rehab equipment?</h2>
            <p className="text-white/80">Power wheelchairs and custom seating require a clinical evaluation and insurance authorization.</p>
          </div>
          <Link href="/" className="flex-shrink-0 bg-white text-[#0A2463] font-bold px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors">
            Visit Blue Bay Mobility
          </Link>
        </div>
      </section>
    </>
  );
}
