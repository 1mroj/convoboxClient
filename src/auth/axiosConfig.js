import axios from "axios";
import { SERVER_BASE_URL } from "../contants";

let authToken;

export function setAuthToken(token) {
  authToken = token;
  axiosInstance.defaults.headers.common["Authorization"] = `${token}`;
}

export function getAuthToken() {
  return authToken;
}

const axiosInstance = axios.create({
  baseURL: `${SERVER_BASE_URL}`,
  timeout: 10000,
});

export default axiosInstance;
