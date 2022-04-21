import { api } from "./instance";

export const getTransactionData = async (userType) => {
  const { data } = await api.get(`/transactions`, {
    params: {
      startDate: userType,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.transactions;

  return res;
};
