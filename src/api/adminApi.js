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
