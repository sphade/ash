import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../constants';

export const changeAdminPassword = createAsyncThunk(
  'change/password/admins',
  async ({ oldPassword, newPassword }, thunkAPI) => {
    try {
      const response = await fetch(`${API}admin/me/password`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });
      let data = await response.json();
      if (data.success === true) {
        return data;
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
