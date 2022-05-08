import { api } from "./instance";

export const getTransactionData = async (userType, page) => {
  const { data } = await api.get(`/transactions`, {
    params: {
      startDate: userType,
      page: page,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data;

  return res;
};

export const getTransactionGraphData = async () => {
  const { data } = await api.get(`/transactions/graph`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.transactions;

  return res;
};

export const getRevenue = async (userType) => {
  const { data } = await api.get(`/transactions/stats`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.total;

  return res;
};
