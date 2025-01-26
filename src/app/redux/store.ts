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

// Wishlist Item Interface
interface WishlistItem {
  _id: string;
  name: string;
  title: string;
  price: number;
  imageUrl?: string;
}

// Cart State Interface
interface CartState {
  items: CartItem[];
}

// Wishlist State Interface
interface WishlistState {
  items: WishlistItem[];
}

// Initial State
const initialCartState: CartState = {
  items: [],
};

const initialWishlistState: WishlistState = {
  items: [],
};

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item._id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Wishlist Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.items.find((item) => item._id === action.payload._id);
      if (!existingItem) {
        state.items.push(action.payload); // Add item to wishlist if it doesn't exist
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload); // Remove item from wishlist
    },
    clearWishlist: (state) => {
      state.items = []; // Clear wishlist
    },
  },
});

// Export Actions
export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

// Create Store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

// Export RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;