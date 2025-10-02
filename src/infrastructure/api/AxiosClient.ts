import axios from "axios";
import { getClientSubdomain } from "../../utils/getSubdomain";
import Cookies from "js-cookie";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // para Vite
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // permite enviar cookies
});
// Interceptor para agregar token y subdominio
axiosClient.interceptors.request.use(async (config) => {
  const token = Cookies.get("token");
  const subdomain = getClientSubdomain(); // subdominio actual
  if (token) config.headers["x-token"] = token;
  if (subdomain) config.headers["x-subdomain"] = subdomain;

  return config;
});
