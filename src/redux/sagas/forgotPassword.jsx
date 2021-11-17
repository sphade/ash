import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../constants";
// import Server from "../../hooks/Server";
export const getResetCode = createAsyncThunk(
  "admin/reset-password",
  async ({ email }, thunkAPI) => {
    try {
      const response = await fetch(`${API}auth/admin/reset-password`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      await new Promise((res) => setTimeout(res, 500));
      let data = await response.json();
      if (data.success === true) {
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const verifyResetCode = createAsyncThunk(
  "admin/reset-password/verify",
  async ({ resetCode }, thunkAPI) => {
    try {
      const response = await fetch(
        `${API}auth/reset-password/${resetCode}/verify`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      await new Promise((res) => setTimeout(res, 500));
      let data = await response.json();
      if (data.success === true) {
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
