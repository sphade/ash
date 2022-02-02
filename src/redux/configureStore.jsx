import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './reducers/auth/login';
import { forgotPasswordSlice } from './reducers/auth/forgotPassword';
import { loadState } from './sessionStorage';
import { overviewSlice } from './reducers/dashboard/overview';
import { transactionsSlice } from './reducers/dashboard/transactions';
import { doctorsSlice } from './reducers/dashboard/doctors';
import { consultationsSlice } from './reducers/dashboard/consultations';

const persistedState = loadState();
export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    overview: overviewSlice.reducer,
    transactions: transactionsSlice.reducer,
    doctors: doctorsSlice.reducer,
    consultations: consultationsSlice.reducer,
  },
  persistedState,
});
