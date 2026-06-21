// app/lib/store.js - Shopping cart and app state management

import { create } from 'zustand';

export const useStore = create((set, get) => ({
  cart: [],
  
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existing = state.cart.find(item => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      return {
        cart: [...state.cart, { ...product, quantity }]
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter(item => item.id !== productId)
    }));
  },

  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cart: state.cart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },

  getCartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartCount: () => {
    const { cart } = get();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
}));
