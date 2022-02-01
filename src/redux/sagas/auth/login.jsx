import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../constants';

export const loginUser = createAsyncThunk(
  'login/admins',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(`${API}auth/login/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let data = await response.json();
      if (data.success === true) {
        sessionStorage.setItem('token', data.data.token);
        sessionStorage.setItem('tab', 'Overview');
        sessionStorage.setItem('user', JSON.stringify(data.data.user));
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed to establish internet connection!',
        },
      ]);
    }
  }
);
