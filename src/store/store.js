import { configureStore } from "@reduxjs/toolkit";
import user_reducer from "./reducer/users";

export default configureStore({
  reducer: {
    users: user_reducer,
  },
});
