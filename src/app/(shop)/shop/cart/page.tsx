"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";

export default function ShopCartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center max-w-lg mx-auto">
        <ShoppingCart className="w-14 h-14 text-gray-200 mx-auto mb-5" />
        <h1 className="text-2xl font-bold text-[#0A2463] mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Browse our catalog and add items to get started.</p>
        <Link href="/shop/products" className="inline-flex items-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#091d52] transition-colors">
          Shop products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 150 ? 0 : 19.99;
  const total = totalPrice + shipping;

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-[#0A2463] mb-8">Your cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-sky-600 font-semibold mb-0.5">{product.brand}</p>
                <h3 className="font-bold text-[#0A2463] text-sm leading-snug mb-2">{product.name}</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 hover:bg-gray-50 transition-colors">
                      <Minus className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                    <span className="px-3 text-sm font-semibold text-[#0A2463]">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 hover:bg-gray-50 transition-colors">
                      <Plus className="w-3.5 h-3.5 text-gray-600" />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-[#0A2463]">${(product.price * quantity).toLocaleString()}</p>
                {quantity > 1 && <p className="text-xs text-gray-400">${product.price.toLocaleString()} each</p>}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-20">
            <h2 className="font-bold text-[#0A2463] mb-4">Order summary</h2>
            <div className="space-y-2.5 text-sm mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-green-600 font-semibold">Free</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && <p className="text-xs text-gray-400">Add ${(150 - totalPrice).toFixed(2)} more for free shipping</p>}
            </div>
            <div className="border-t border-gray-100 pt-4 mb-5">
              <div className="flex justify-between font-bold text-[#0A2463] text-lg">
                <span>Total</span>
                <span>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            <Link href="/shop/checkout" className="flex items-center justify-center gap-2 w-full bg-[#0A2463] text-white font-bold py-3.5 rounded-xl hover:bg-[#091d52] transition-colors">
              Proceed to checkout <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/shop/products" className="block text-center text-sm text-gray-400 hover:text-[#0A2463] mt-3 transition-colors">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
