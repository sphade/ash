import { api } from "./instance";

export const getAppointmentData = async () => {
  const { data } = await api.get(`consultations?page=${1}&limit=${200}`);
  const res = data.data.consultations;

  return res;
};
export const getAppointmentFilterData = async (userType) => {
  const { data } = await api.get(
    `consultations?page=${1}&limit=${200}${
      !userType === undefined ? "" : `&status=${userType}`
    }`
  );
  const res = data.data.consultations;

  return res;
};
