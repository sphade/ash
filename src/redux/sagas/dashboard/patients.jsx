import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, token } from '../../constants';

//TODO: Update Endpoints

export const getPatients = createAsyncThunk(
  'admin/patients/all',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}patients`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await response.json();
      if (response.status === 200) {
        console.log(data.data);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish connection. ',
        },
      ]);
    }
  }
);
