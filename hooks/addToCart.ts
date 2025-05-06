import { CartTypes } from "@/types/cart.types";
import { create } from "zustand";

export const useAddToCart = create<CartTypes>((set) => ({
  cart: [],
  total: 0,
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.size === product.size
      );
  
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.size === product.size
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    });
  },
  
  updateQuantity: (id: any, size: any, delta: number) => {
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: (item.quantity || 1) + delta }
            : item
        )
        .filter((item) => item.quantity > 0); // Optional: remove if quantity < 1
  
      return { cart: updatedCart };
    });
  },
  
  removeFromCart: (id: any, size: any) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== id || item.size !== size
      ),
    }));
  }
}));
