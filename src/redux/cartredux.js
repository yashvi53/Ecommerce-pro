import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity and total
        state.products[existingProductIndex].quantity += action.payload.quantity;
        state.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      } else {
        // If the product does not exist in the cart, add it
        state.products.push(action.payload);
        state.quantity += action.payload.quantity;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    updateProductQuantity: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      const oldQuantity = state.products[existingProductIndex].quantity;
      const newQuantity = action.payload.newQuantity;
      state.products[existingProductIndex].quantity = newQuantity;
      state.quantity += newQuantity - oldQuantity;
      state.total += (newQuantity - oldQuantity) * action.payload.price;
    },
  },
});

export const { addProduct, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
