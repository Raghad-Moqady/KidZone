import axios from "axios";

//for Auth requests 
const authAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BURL,
});
 
export default authAxiosInstance;
