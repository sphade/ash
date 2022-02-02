import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './reducers/auth/login';
import { forgotPasswordSlice } from './reducers/auth/forgotPassword';
import { loadState } from './sessionStorage';
import { overviewSlice } from './reducers/dashboard/overview';
import { transactionsSlice } from './reducers/dashboard/transactions';

const persistedState = loadState();
export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    overview: overviewSlice.reducer,
    transactions: transactionsSlice.reducer,
  },
  persistedState,
});
