import { api } from "./instance";

export const getUsersData = async (page, userType, search, filterDate) => {
  const { data } = await api.get(`/users`, {
    params: {
      page: page,
      userType: userType,
      startDate: filterDate,
      search: search,
    },
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data;

  return res;
};

export const getUser = () => api.get(`/users`).then((res) => res.data.data);
