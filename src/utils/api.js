import axios from "axios";
const VITE_BASE_URI = import.meta.env.VITE_BASE_URI || "http://localhost:3000";
const VITE_TIMEOUT = import.meta.env.VITE_TIMEOUT || 15000;
const api = axios.create({
  baseURL: VITE_BASE_URI,
  withCredentials: true,
  timeout: VITE_TIMEOUT,
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export default api;
