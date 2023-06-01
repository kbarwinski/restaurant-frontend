import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { MenuCardProps } from "../../components/menu/menucard/menucard";

export interface CartItem {
  item: MenuCardProps;
  quantity: number;
}

// Define a type for the slice state
export interface CartState {
  items: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "Cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart (state, action: PayloadAction<MenuCardProps>) {
        const item = action.payload;
        const itemInCart = state.items.find((i) => i.item.id === item.id);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            state.items.push({ item, quantity: 1 });
        }
    },
    removeFromCart (state, action: PayloadAction<MenuCardProps>) {
        const item = action.payload;
        const itemInCart = state.items.find((i) => i.item.id === item.id);
        if (itemInCart) {
            if (itemInCart.quantity === 1) {
                state.items = state.items.filter((i) => i.item.id !== item.id);
            } else {
                itemInCart.quantity--;
            }
        }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectItems = (state: RootState) => state.cart.items;

export default CartSlice.reducer;
