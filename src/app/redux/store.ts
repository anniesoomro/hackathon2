import { createSlice, configureStore } from "@reduxjs/toolkit";

// Cart Item Interface
interface CartItem {
  _id: string;
  name: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

// Cart State Interface
interface CartState {
  items: CartItem[];
}

// Initial State
const initialState: CartState = {
  items: [], // Initialize items as an empty array
};

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item to cart
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export Actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Create Store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Export RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;