import { api } from "./instance";

export const getDoctorData = async (page, userType, search) => {
  const { data } = await api.get(`admin/doctors`, {
    params: {
      verified: userType,
      search: search,
      page: page,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data;
  console.log("🚀 ~ file: doctorApi.js ~ line 9 ~ getDoctorData ~ res", res);
  return res;
};
export const getDoctorCount = async () => {
  const { data } = await api.get(`/admin/doctors/count`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.count;
  return res;
};
