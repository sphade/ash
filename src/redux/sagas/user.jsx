import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'login/admins',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        `https://ash-tele-med.herokuapp.com/api/v1/auth/login/admins`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      if (data.success === true) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('tab', 'Overview');
        localStorage.setItem('user', JSON.stringify(data.data.user));
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
