import { useEffect, useCallback } from "react";
import api from "../utils/api";
import { useAuthentication } from "../context/AuthProdvider";
import { Navigate } from "react-router-dom";
const useAxiosPrivate = () => {
  const { accessToken, setAccessToken } = useAuthentication();

  // 1️⃣ refresh function wrapped in useCallback
  const refresh = useCallback(async () => {
    try {
      const response = await api.post("/users/refresh-token");
      const token = response.data?.token;
      setAccessToken(token);
    } catch (err) {
      // logout(); // if refresh fails, force
      throw err;
    }
  }, [setAccessToken]);

  let isRefreshing = false;
  let failedQueue = [];
  useEffect(() => {
    const processQueue = (error, token = null) => {
      failedQueue.forEach(({ resolve, reject }) => {
        if (error) reject(error);
        else resolve(token);
      });
      failedQueue = [];
    };

    // 2️⃣ request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        // always attach latest token
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // 3️⃣ response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (originalRequest.url.includes("/refresh-token")) {
          return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          if (isRefreshing) {
            // if a refresh is already in progress, wait for it
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            }).then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return api(originalRequest);
            });
          }

          isRefreshing = true;
          try {
            const newToken = await refresh();
            processQueue(null, newToken);

            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          } catch (err) {
            processQueue(err, null);
            <Navigate to="/login" />;

            return Promise.reject(err);
          } finally {
            isRefreshing = false;
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);

  return api;
};

export default useAxiosPrivate;
