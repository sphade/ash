import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage';
import { loginSlice, forgotPasswordSlice, manageSlice } from './reducers/auth';
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
    manage: manageSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    overview: overviewSlice.reducer,
    transactions: transactionsSlice.reducer,
    doctors: doctorsSlice.reducer,
    consultations: consultationsSlice.reducer,
    patients: patientsSlice.reducer,
  },
  persistedState,
});
