import { configureStore } from "@reduxjs/toolkit";
import user_reducer from "./reducer/users";
import customer_reducer from "./reducer/customers";
import product_reducer from "./reducer/products";

export default configureStore({
  reducer: {
    users: user_reducer,
    customers: customer_reducer,
    products: product_reducer,
  },
});
