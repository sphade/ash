import { api } from "./instance";

export const UploadPicture = async (formData) => {
  const res = await api.patch(`admin/avatar`, formData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const loginIn = async ({ email, password }) => {
  const res = await api.post(
    `auth/login/admins`,
    {
      email,
      password,
    },
    {
      headers: {
        
        Accept: 'application/json',
          'Content-Type': 'application/json',
      },
    }
  );
  return res.data;
};
export const disableUser = async (data) => {
  await api.patch(
    "/users",
    data,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export const resetUserPassword = async (user) => {
  await api.patch(
    `/users/${user.id}`,
    {
      userType: user.role,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export const verifyDoctor = async (user) => {
  await api.patch(
    `/auth/doctors/${user?.id}/verify`,
    {
      doctorId: user?.id,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};