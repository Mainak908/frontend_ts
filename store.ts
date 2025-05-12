import { create } from "zustand";

export interface usertype {
  name: string;
  email: string;
}
interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  src: string;
}

interface userAuthState {
  user: null | usertype;
  login: (userData: usertype) => void;
  logout: () => void;

  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;

  updateQuantity: (id: number, action: "increment" | "decrement") => void;
  removeFromCart: (id: number) => void;
  removeAll: () => void;
}

export const useAuthStore = create<userAuthState>((set) => ({
  cartItems: [],
  login: (userData: usertype) => set({ user: userData }),
  logout: () => set({ user: null }),
  user: null,

  addToCart: (helmet) =>
    set((state) => {
      const itemExists = state.cartItems.find((item) => item.id === helmet.id);

      if (itemExists) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === helmet.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, { ...helmet, quantity: 1 }],
      };
    }),

  updateQuantity: (id, action) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increment"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      ),
    })),

  removeFromCart: (id: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  removeAll: () => set(() => ({ cartItems: [] })),
}));
