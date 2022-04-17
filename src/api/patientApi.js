import { api } from "./instance";

export const getPatientData = async (userType, search, page) => {
  const { data } = await api.get(`/admin/patients`);
  const res = data.data.patients;
  return res;
};

export const getPlans = async () => {
  const { data } = await api.get(`plans`);
  const res = data.data;

  return res;
};
