import { createAsyncThunk } from '@reduxjs/toolkit';
import { API} from '../../constants';
const token = sessionStorage.getItem('token');
export const getTransactions = createAsyncThunk(
  'admin/transactions/all',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}transactions`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
