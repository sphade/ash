import axios from "axios";

export const api = axios.create({
  baseURL: "https://ash-tele-med.herokuapp.com/api/v1/",
});
