import axios from "axios";

//for requests without headers
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
});

axiosInstance.interceptors.request.use((config) => {
  config.params["lang"] = "en";
  return config;
});
export default axiosInstance;
