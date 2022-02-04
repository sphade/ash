import { createSlice } from '@reduxjs/toolkit';
import { getDoctors } from '../../sagas/dashboard/doctors';

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctorsLoading: false,
    doctors: [],
    doctorModal: false,
  },
  reducers: {
    handleToggleModal: (state) => {
      state.doctorModal = !state.doctorModal;
      return state;
    },
  },
  extraReducers: {
    [getDoctors.pending]: (state) => {
      state.doctorsLoading = true;
      return state;
    },
    [getDoctors.fulfilled]: (state, { payload }) => {
      state.doctors = payload.data;
      state.doctorsLoading = false;
      return state;
    },
  },
});

export const { handleToggleModal } = doctorsSlice.actions;

export const doctorsSelector = (state) => state.doctors;
