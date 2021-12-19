import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/user";
import { forgotPasswordSlice } from "./reducers/forgotPassword";
import { loadState } from "./localStorage";

const persistedState = loadState();
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
  },
  persistedState,
});
