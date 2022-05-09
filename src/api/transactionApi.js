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

export const getTransactionGraphData = async (chartDate) => {
  const { data } = await api.get(`/transactions/graph`, {
    params: {
     startDate: chartDate,
      limit: 20000,
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
