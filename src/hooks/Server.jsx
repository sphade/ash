import axios from "axios";

const Server = axios.create({
  baseURL: "https://ash-biomedical-backend.herokuapp.com/api/v1/",
  headers: { "Content-Type": "application/json" },
});

export default Server;
