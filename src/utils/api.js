import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;

const api = axios.create({
  baseURL: uri,
  withCredentials: true,
});

export default api;
