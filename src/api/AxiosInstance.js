import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const defaultInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export const PostInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
