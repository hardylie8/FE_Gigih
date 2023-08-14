import { defaultInstance } from "../api/AxiosInstance";

export const getLoggedInUser = async (token) => {
  defaultInstance.defaults.headers["Authorization"] = "Bearer " + token;
  const response = await defaultInstance.get("/user");
  return response.data.data;
};
