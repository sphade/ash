import { api } from "./instance";

export const getTransactionData = async () => {
  const { data } = await api.get(`/transactions?page=${1}&limit=${200}`);
  const res = data;
  console.log(
    "🚀 ~ file: transactionApi.js ~ line 8 ~ getTransactionData ~ res",
    res
  );

  return res;
};
