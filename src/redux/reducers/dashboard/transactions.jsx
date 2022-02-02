import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from '../../sagas/dashboard/transactions';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactionsLoading: false,
    transactions: [],
  },
  reducers: {},
  extraReducers: {
    [getTransactions.pending]: (state) => {
      state.transactionsLoading = true;
      return state;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.transactions = payload.data.transactions;
      state.transactionsLoading = false;
      return state;
    },
  },
});

// export const {} = transactionsSlice.actions;

export const transactionsSelector = (state) => state.transactions;
