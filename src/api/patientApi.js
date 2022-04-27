import { api } from "./instance";

export const getPatientData = async (userType, search, page) => {
  const { data } = await api.get(`/admin/patients`, {
    params: {
      search: search,
      plan: userType,
      page:page
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

export const getPatientCount = async () => {
  const { data } = await api.get(`/admin/patients/count`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data.count;
  return res;
};

export const getPlans = async () => {
  const { data } = await api(`plans`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = data.data;

  return res;
};
