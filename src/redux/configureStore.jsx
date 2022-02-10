import { configureStore } from '@reduxjs/toolkit';
import {
  loginSlice,
  forgotPasswordSlice,
  manageSlice,
  registerSlice,
} from './reducers/auth';
import {
  overviewSlice,
  patientsSlice,
  transactionsSlice,
  doctorsSlice,
  consultationsSlice,
} from './reducers/dashboard';

export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    manage: manageSlice.reducer,
    forgotPassword: forgotPasswordSlice.reducer,
    overview: overviewSlice.reducer,
    transactions: transactionsSlice.reducer,
    doctors: doctorsSlice.reducer,
    consultations: consultationsSlice.reducer,
    patients: patientsSlice.reducer,
  },
});
