import { api } from "./instance";

export const getUsersData = async (args) => {
  const { data } = await api.get(`/users`, {
    params: {
      page: args.page,
      userType: args.userType,
      startDate: args.filterDate,
      search: args.search,
      doctors: args.doctorsNo,
      patients: args.patientsNo,
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

export const getUser = async () => {
  const { data } = await api.get(`/users`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data;

  return res;
};
