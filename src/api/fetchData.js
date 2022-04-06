import axios from "axios";

const api = axios.create({
  baseURL: "https://ash-tele-med.herokuapp.com/api/v1/",
  headers: { "Content-Type": "application/json" },
});
