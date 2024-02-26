import { createReducer } from "@reduxjs/toolkit";
import product_actions from "../actions/products";

const { read_products, read_product } = product_actions;

const initial_state = {
  product: {},
  products: [],
  messages: [],
};

const product_reducer = createReducer(initial_state, (build) =>
  build
    .addCase(read_products.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        products: action.payload.customers,
        messages: action.payload.messages,
      };
      return new_state;
    })
    .addCase(read_product.fulfilled, (state, action) => {
      let new_state = {
        ...state,
        product: action.payload.customer,
        messages: action.payload.messages,
      };
      return new_state;
    })
);

export default product_reducer;
