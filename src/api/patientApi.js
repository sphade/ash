import { api } from "./instance";

export const getPatientData = async (userType, search, page) => {
  const { data } = await api.get(`admin/patients?limit=${100}`);
  const res = data.data.patients;
  return res;
};
