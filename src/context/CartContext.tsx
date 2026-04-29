"use client";
import { createContext, useContext, useReducer, useEffect, useCallback } from "react";

export interface CartItem {
  slug: string;
  name: string;
  brand: string;
  price: number;
  priceLabel: string;
  image: string;
  quantity: number;
  categoryLabel: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QTY"; payload: { slug: string; quantity: number } }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "HYDRATE"; payload: CartItem[] };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.slug === action.payload.slug);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.slug === action.payload.slug ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }], isOpen: true };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.slug !== action.payload) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: action.payload.quantity <= 0
          ? state.items.filter((i) => i.slug !== action.payload.slug)
          : state.items.map((i) =>
              i.slug === action.payload.slug ? { ...i, quantity: action.payload.quantity } : i
            ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "HYDRATE":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  subtotal: number;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bb-cart");
      if (saved) dispatch({ type: "HYDRATE", payload: JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("bb-cart", JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
