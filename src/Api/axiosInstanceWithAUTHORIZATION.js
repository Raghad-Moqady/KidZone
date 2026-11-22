import axios from "axios";
import useAuthStore from "../store/authStore";

const axiosInstanceWithAUTHORIZATION = axios.create({
  baseURL: import.meta.env.VITE_BURL,
});
axiosInstanceWithAUTHORIZATION.interceptors.request.use((config) => {
  const userAccessToken = useAuthStore.getState().userAccessToken;

  config.headers["Authorization"] = `Bearer ${userAccessToken}`;

  return config;
});
export default axiosInstanceWithAUTHORIZATION;
