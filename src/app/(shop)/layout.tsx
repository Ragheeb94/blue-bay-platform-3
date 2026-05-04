import { CartProvider } from "@/context/CartContext";
import ShopNavbar from "@/components/shop/ShopNavbar";
import ShopFooter from "@/components/shop/ShopFooter";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ShopNavbar />
      <main className="flex-1">{children}</main>
      <ShopFooter />
    </CartProvider>
  );
}
