import { api } from "./instance";

export const getPatientData = async (userType, search, page) => {
  const { data } = await api.get(`/admin/patients`);
  console.log(
    "🚀 ~ file: patientApi.js ~ line 5 ~ getPatientData ~ data",
    data
  );
  const res = data.data.patients;
  return res;
};

export const getPatientCount = async () => {
  const { data } = await api.get(`/admin/patients/count`);
  const res = data.data.count;
  return res;
};

export const getPlans = async () => {
  const { data } = await api.get(`plans`);
  const res = data.data;

  return res;
};
