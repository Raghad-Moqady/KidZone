import axios from "axios";

//for requests without headers
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
});
export default axiosInstance;