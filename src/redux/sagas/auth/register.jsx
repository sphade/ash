import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../constants';

export const registerUser = createAsyncThunk(
  'register/admins',
  async ({ firstName, lastName, email, password, phoneNumber }, thunkAPI) => {
    try {
      const response = await fetch(`${API}auth/register/admins`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
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
          message: 'Failed to establish connection!',
        },
      ]);
    }
  }
);
