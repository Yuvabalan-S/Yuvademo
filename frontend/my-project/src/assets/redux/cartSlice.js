import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({...item,
          quantity: 1,
          totalPrice: item.price,
          
        });
      }
    },

    removefromcart: (state, action) => {
      state.cartItems = state.cartItems.filter(cart => cart._id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i._id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
 
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
  },
});

export const {addtocart,removefromcart,  increaseQuantity,decreaseQuantity,} = cartSlice.actions
  
export default cartSlice.reducer;
