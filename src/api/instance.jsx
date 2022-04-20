import axios from "axios";
import { token } from "../redux/constants";

export const api = axios.create({
  baseURL: "https://ash-tele-med.herokuapp.com/api/v1/",
  method: "GET",
});
