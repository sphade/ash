import axios from "axios";

export const api = axios.create({
    baseURL: "https://ash-tele-med.herokuapp.com/api/v1/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });