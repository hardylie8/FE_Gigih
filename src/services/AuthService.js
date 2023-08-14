import { defaultInstance } from "../api/AxiosInstance";

export const Login = async (data) => {
  const response = await defaultInstance.post(`/auth/login`, data);
  return response.data;
};

export const Register = async (data) => {
  const response = await defaultInstance.post(`/auth/register`, data);
  return response.data;
};
