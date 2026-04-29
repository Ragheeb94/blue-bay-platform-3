import { Suspense } from "react";
import ProductsCatalog from "@/components/sections/ProductsCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our full catalog of mobility equipment — power wheelchairs, manual wheelchairs, scooters, seating, walkers, and transfer aids.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Loading products…</div></div>}>
      <ProductsCatalog />
    </Suspense>
  );
}
