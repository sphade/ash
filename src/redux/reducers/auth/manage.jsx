/* eslint-disable import/no-anonymous-default-export */
// import { authConstants } from "../constants";
import { createSlice } from '@reduxjs/toolkit';
import { changeAdminPassword } from '../../sagas/auth/manage';

export const manageSlice = createSlice({
  name: 'manage',
  initialState: {
    changePasswordLoading: false,
    changePasswordSuccess: false,
    changePasswordError: false,
    changePasswordErrors: [],
  },
  reducers: {
    clearState: (state) => {
      state.changePasswordLoading = false;
      state.changePasswordSuccess = false;
      state.changePasswordError = false;
      state.changePasswordErrors = [];
      return state;
    },
  },
  extraReducers: {
    [changeAdminPassword.pending]: (state) => {
      state.changePasswordLoading = true;
      return state;
    },
    [changeAdminPassword.fulfilled]: (state) => {
      state.changePasswordLoading = false;
      state.changePasswordSuccess = true;
      state.changePasswordError = false;
      state.changePasswordErrors = [];
      return state;
    },
    [changeAdminPassword.rejected]: (state, { payload }) => {
      state.changePasswordLoading = false;
      state.changePasswordSuccess = false;
      state.changePasswordError = true;
      state.changePasswordErrors = payload.errors || payload;
      return state;
    },
  },
});

export const { clearState } = manageSlice.actions;

export const manageSelector = (state) => state.manage;
