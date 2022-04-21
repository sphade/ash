import { api } from "./instance";

export const getAppointmentData = async (args) => {
  const { data } = await api.get(`consultations`, {
    params: {
      page: args.page,
      status: args.userType,
      search: args.search,
      startDate: args.filterDate,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.consultations;
 

  return res;
};

export const getAppointmentFilterData = async (args) => {
  const { data } = await api.get(`consultations`, {
    params: {
      page: args.page,
      status: args.userType,
      search: args.search,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.consultations;

  return res;
};
export const getAppointmentCount = async () => {
  const { data } = await api.get(`consultations`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.count;

  return res;
};

export const getReferralsData = async () => {
  const { data } = await api.get(`referrals?page=${1}&limit=${200}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data;

  return res;
};
