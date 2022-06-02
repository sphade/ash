import axios from "axios";

export const api = axios.create({
  baseURL: "https://ash-biomedical-backend.herokuapp.com/api/v1/",
});
