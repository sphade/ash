import { api } from "./instance";

export const getTransactionData = async (userType) => {
  const { data } = await api.get(`/transactions?startDate=${userType}`);
  const res = data.data.transactions;
  

  return res;
};
