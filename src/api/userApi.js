import { api } from "./instance";

export const getUsersData = async (page, userType, search, filterDate) => {
  const { data } = await api.get(
    `/users?page=${page}&userType=${userType}&startDate=${filterDate || ""}${
      !search ? "" : `&search=${search}`
    }`
  );
  const res = data.data;
  console.log("🚀 ~ file: userApi.js ~ line 10 ~ getUsersData ~ res", res);
  return res;
};

export const getUser = () => api.get(`/users`).then((res) => res.data.data);
