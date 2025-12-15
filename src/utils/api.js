import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;
import { authStore } from "./authStore";

const api = axios.create({
  baseURL: uri,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = authStore.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // retry only once
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // call refresh-token endpoint (cookie sent automatically)
        const res = await axios.post(
          "http://localhost:3000/users/refresh-token",
          {},
          { withCredentials: true },
        );

        // save new access token in store
        authStore.setAccessToken(res.data.token);

        // retry the original request with new token
        originalRequest.headers.Authorization = `Bearer ${res.data.token}`;
        return api(originalRequest);
      } catch (err) {
        // refresh failed → logout user
        authStore.logout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
