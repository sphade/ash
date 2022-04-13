import { api } from "./instance";

export const getDoctorData = async (page, userType, search) => {
  const { data } = await api.get(
    `admin/doctors?limit=${100}&verified=${userType}${
      !search ? "" : `&search=${search}`
    }`
  );
  const res = data.data;
  return res;
};
