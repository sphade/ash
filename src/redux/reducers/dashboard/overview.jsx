import { createSlice } from '@reduxjs/toolkit';
import {
  getDoctorCount,
  getPatientCount,
  getAppointmentCount,
  getTotalRevenue,
  getUsers,
  getReferrals,
} from '../../sagas/dashboard/overview';

export const overviewSlice = createSlice({
  name: 'overview',
  initialState: {
    activeTab: 'Referral',
    doctorCountLoading: false,
    doctorCount: 0,
    patientCountLoading: false,
    patientCount: 0,
    appointmentCountLoading: false,
    appointmentCount: 0,
    appointments: [],
    revenueLoading: false,
    revenue: 0,
    usersLoading: false,
    users: [],
    referralsLoading: false,
    referrals: [],
    showUserModal: false,
  },
  reducers: {
    toggleActiveTab: (state, { payload }) => {
      state.activeTab = payload;
      return state;
    },
    toggleShowModal: (state) => {
      state.showUserModal = !state.showUserModal;
      return state;
    },
  },
  extraReducers: {
    [getDoctorCount.pending]: (state) => {
      state.doctorCountLoading = true;
      return state;
    },
    [getDoctorCount.fulfilled]: (state, { payload }) => {
      state.doctorCount = payload.data.count;
      state.doctorCountLoading = false;
      return state;
    },
    [getPatientCount.pending]: (state) => {
      state.patientCountLoading = true;
      return state;
    },
    [getPatientCount.fulfilled]: (state, { payload }) => {
      state.patientCount = payload.data.count;
      state.patientCountLoading = false;
      return state;
    },
    [getAppointmentCount.pending]: (state) => {
      state.appointmentCountLoading = true;
      return state;
    },
    [getAppointmentCount.fulfilled]: (state, { payload }) => {
      state.appointmentCount = payload.data.count;
      state.appointments = payload.data.consultations;
      state.appointmentCountLoading = false;
      return state;
    },
    [getTotalRevenue.pending]: (state) => {
      state.revenueCountLoading = true;
      return state;
    },
    [getTotalRevenue.fulfilled]: (state, { payload }) => {
      state.revenue = payload.data.total;
      state.revenueLoading = false;
      return state;
    },
    [getUsers.pending]: (state) => {
      state.usersLoading = true;
      return state;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data;
      state.usersLoading = false;
      return state;
    },
    [getReferrals.pending]: (state) => {
      state.referralsLoading = true;
      return state;
    },
    [getReferrals.fulfilled]: (state, { payload }) => {
      state.referrals = payload.data;
      state.referralsLoading = false;
      return state;
    },
  },
});

export const { toggleActiveTab, toggleShowModal } = overviewSlice.actions;

export const overviewSelector = (state) => state.overview;
