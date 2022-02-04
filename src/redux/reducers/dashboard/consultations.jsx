import { createSlice } from '@reduxjs/toolkit';
import { getConsultations } from '../../sagas/dashboard/consultations';

export const consultationsSlice = createSlice({
  name: 'consultations',
  initialState: {
    consultationsLoading: false,
    consultations: [],
    consultationModal: false,
  },
  reducers: {
    handleToggleModal: (state) => {
      state.consultationModal = !state.consultationModal;
      return state;
    },
  },
  extraReducers: {
    [getConsultations.pending]: (state) => {
      state.consultationsLoading = true;
      return state;
    },
    [getConsultations.fulfilled]: (state, { payload }) => {
      state.consultations = payload.data;
      state.consultationsLoading = false;
      return state;
    },
  },
});

export const { handleToggleModal } = consultationsSlice.actions;

export const consultationsSelector = (state) => state.consultations;
