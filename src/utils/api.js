import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;

const api = axios.create({
  baseURL: uri,
  withCredentials: true,
  timeout: 15000,
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export default api;
