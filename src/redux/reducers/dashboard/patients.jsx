import { createSlice } from '@reduxjs/toolkit';
import { getPatients } from '../../sagas/dashboard/patients';

export const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    patientsLoading: false,
    patients: [],
    patientModal: false,
  },
  reducers: {
    handleToggleModal: (state) => {
      state.patientModal = !state.patientModal;
      return state;
    },
  },
  extraReducers: {
    [getPatients.pending]: (state) => {
      state.patientsLoading = true;
      return state;
    },
    [getPatients.fulfilled]: (state, { payload }) => {
      state.patients = payload.data.patients;
      state.patientsLoading = false;
      return state;
    },
  },
});

export const { handleToggleModal } = patientsSlice.actions;

export const patientsSelector = (state) => state.patients;
