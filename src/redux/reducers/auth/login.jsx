/* eslint-disable import/no-anonymous-default-export */
// import { authConstants } from "../constants";
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../sagas/auth/login';

export const loginSlice = createSlice({
  name: 'login',
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
    [loginUser.pending]: (state) => {
      state.authenticating = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.adminData = payload.user;
      state.authenticated = true;
      state.authenticating = false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.errors = payload.errors || payload;
      state.authenticated = false;
      state.authenticating = false;
      state.isError = true;
      return state;
    },
  },
});

export const { clearState } = loginSlice.actions;

export const loginSelector = (state) => state.login;
