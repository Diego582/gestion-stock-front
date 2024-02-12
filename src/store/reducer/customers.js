import { createReducer } from "@reduxjs/toolkit";
import customer_actions from "../actions/customers";

const { read_customers } = customer_actions;

const initial_state = {
  customer: {},
  customers: [],
  messages: [],
};

const customer_reducer = createReducer(initial_state, (build) =>
  build.addCase(read_customers.fulfilled, (state, action) => {
    let new_state = {
      ...state,
      customers: action.payload.customers,
      messages: action.payload.messages,
    };
    return new_state;
  })
);

export default customer_reducer;
