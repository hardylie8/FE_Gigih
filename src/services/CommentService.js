import { PostInstance } from "../api/AxiosInstance";

export const postComment = async (videoId, message, token) => {
  PostInstance.defaults.headers["Authorization"] = "Bearer " + token;
  const response = await PostInstance.post("/comment", {
    videoId,
    message,
  });
  return response.data;
};
