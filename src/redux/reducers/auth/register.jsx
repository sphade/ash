/* eslint-disable import/no-anonymous-default-export */
// import { authConstants } from "../constants";
import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../../sagas/auth/register';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    adminData: null,
    authenticating: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.adminData = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticating = false;
      return state;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.authenticating = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.adminData = payload.user;
      state.authenticated = true;
      state.authenticating = false;
      return state;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.errors = payload.errors || payload;
      state.authenticated = false;
      state.authenticating = false;
      state.isError = true;
      return state;
    },
  },
});

export const { clearState } = registerSlice.actions;

export const registerSelector = (state) => state.register;
