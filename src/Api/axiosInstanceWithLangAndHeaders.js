import axios from "axios";
import useAuthStore from "../store/authStore";

const axiosInstanceWithLangAndHeaders = axios.create({
  baseURL: import.meta.env.VITE_BURL,
});
axiosInstanceWithLangAndHeaders.interceptors.request.use((config) => {
  const userAccessToken = useAuthStore.getState().userAccessToken;
  config.headers["Authorization"] = `Bearer ${userAccessToken}`;

  config.params["lang"] = "en";

  return config;
});
export default axiosInstanceWithLangAndHeaders;
