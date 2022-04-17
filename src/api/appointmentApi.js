import { api } from "./instance";

export const getAppointmentData = async (search, page,filterDate) => {
  const { data } = await api.get(`consultations?page=${page}&search=${search}&startDate=${filterDate}`);
  const res = data.data.consultations;

  return res;
};

export const getAppointmentFilterData = async (args) => {
  const { data } = await api.get(
    `consultations?page=${args.page}&search=${args.search}&status=${args.userType} `
  );
  const res = data.data.consultations;

  return res;
};
export const getAppointmentCount = async () => {
  const { data } = await api.get(`consultations`);
  const res = data.data.count;

  return res;
};

export const getReferralsData = async () => {
  const { data } = await api.get(`referrals?page=${1}&limit=${200}`);
  const res = data;

  return res;
};
