import axios from "axios";
import { getToken } from "./cookieUtils.js";

const apiBaseUrl = "https://back-proteccion.site:3001";

const apiClient = axios.create({
  baseURL: apiBaseUrl
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken('token')}`;
  return config;
});

export default apiClient;
