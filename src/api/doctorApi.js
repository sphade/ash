import { api } from "./instance";

export const getDoctorData = async (page, userType, search) => {
  console.log(
    `admin/doctors?page=${page}&verified=${userType}${
      !search ? "" : `&search=${search}`
    }`
  );
  const { data } = await api.get(`admin/doctors?verified=${userType}`);
  const res = data.data;
  console.log("🚀 ~ file: doctorApi.js ~ line 12 ~ getDoctorData ~ res", res);
  return res;
};
