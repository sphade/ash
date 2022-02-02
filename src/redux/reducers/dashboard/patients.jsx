import { createSlice } from '@reduxjs/toolkit';
import { getPatients } from '../../sagas/dashboard/patients';

export const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    patientsLoading: false,
    patients: [],
  },
  reducers: {},
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

// export const {} = patientsSlice.actions;

export const patientsSelector = (state) => state.patients;
