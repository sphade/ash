/* eslint-disable import/no-anonymous-default-export */
// import { authConstants } from "../constants";
import { createSlice } from '@reduxjs/toolkit';
import { getResetCode, verifyResetCode } from '../../sagas/auth/forgotPassword';

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState: {
    isAdminEmail: false,
    isResetCode: false,
    isResetSuccess: false,
    loading: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.isAdminEmail = false;
      state.isResetCode = false;
      state.isResetSuccess = false;
      state.loading = false;
      state.isError = false;
      state.errors = null;
      return state;
    },
  },
  extraReducers: {
    [getResetCode.pending]: (state) => {
      state.loading = true;
    },
    [getResetCode.fulfilled]: (state) => {
      state.loading = false;
      state.isAdminEmail = true;
      return state;
    },
    [getResetCode.rejected]: (state, { payload }) => {
      state.errors = payload.errors || payload;
      state.isError = true;
      state.isAdminEmail = false;
      state.loading = false;
      return state;
    },
    [verifyResetCode.pending]: (state) => {
      state.loading = true;
    },
    [verifyResetCode.fulfilled]: (state) => {
      state.loading = false;
      state.isResetCode = true;
      return state;
    },
    [verifyResetCode.rejected]: (state, { payload }) => {
      state.errors = payload.errors || payload;
      state.isError = true;
      state.isResetCode = false;
      state.loading = false;
      return state;
    },
  },
});

export const { clearState } = forgotPasswordSlice.actions;

export const forgotPasswordSelector = (state) => state.forgotPassword;
