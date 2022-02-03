import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './sessionStorage';
import { loginSlice, forgotPasswordSlice } from './reducers/auth';
import {
  overviewSlice,
  patientsSlice,
  transactionsSlice,
  doctorsSlice,
  consultationsSlice,
} from './reducers/dashboard';

const persistedState = loadState();
export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    overview: overviewSlice.reducer,
    transactions: transactionsSlice.reducer,
    doctors: doctorsSlice.reducer,
    consultations: consultationsSlice.reducer,
    patients: patientsSlice.reducer,
  },
  persistedState,
});
