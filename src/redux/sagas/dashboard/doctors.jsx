import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../constants';

//TODO: Update Endpoints
export const getDoctors = createAsyncThunk(
  'admin/doctors/all',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}admin/doctors`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      let data = await response.json();
      if (response.status === 200) {
        // console.log(data.data);
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
