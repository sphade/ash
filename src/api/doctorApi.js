import { api } from "./instance";

export const getDoctorData = async (page, userType, search) => {
  const { data } = await api.get(
    `admin/doctors?limit=100&verified=${userType}&search=${search}
    `
  );
  const res = data.data;
  console.log("🚀 ~ file: doctorApi.js ~ line 9 ~ getDoctorData ~ res", res);
  return res;
};
export const getDoctorCount = async () => {
  const { data } = await api.get(`/admin/doctors/count`);
  const res = data.data.count;
  return res;
};
