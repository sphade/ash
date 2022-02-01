import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../constants';

const token = sessionStorage.getItem('token');

export const getDoctorCount = createAsyncThunk(
  'admin/doctor',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}admin/doctors/count`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.status);
      let data = await response.json();
      if (response.status === 200) {
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

export const getPatientCount = createAsyncThunk(
  'admin/patient',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}admin/patients/count`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.status);
      let data = await response.json();
      if (response.status === 200) {
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

export const getAppointmentCount = createAsyncThunk(
  'admin/appointment',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}consultations`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.status);
      let data = await response.json();
      if (response.status === 200) {
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

export const getTotalRevenue = createAsyncThunk(
  'admin/revenue',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}transactions/stats`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.status);
      let data = await response.json();
      if (response.status === 200) {
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

export const getUsers = createAsyncThunk('admin/users', async (thunkAPI) => {
  try {
    const response = await fetch(`${API}users`, {
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
});

export const getReferrals = createAsyncThunk(
  'admin/referrals',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}referrals`, {
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
