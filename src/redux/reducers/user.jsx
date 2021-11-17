/* eslint-disable import/no-anonymous-default-export */
// import { authConstants } from "../constants";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../sagas/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    authenticating: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
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
      state.userData = payload.user;
      state.authenticated = true;
      state.authenticating = false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.errors = payload.errors;
      state.authenticated = false;
      state.authenticating = false;
      state.isError = true;
      return state;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
