import { createSlice } from '@reduxjs/toolkit';
import { getDoctors } from '../../sagas/dashboard/doctors';

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctorsLoading: false,
    doctors: [],
  },
  reducers: {},
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

// export const {} = doctorsSlice.actions;

export const doctorsSelector = (state) => state.doctors;
