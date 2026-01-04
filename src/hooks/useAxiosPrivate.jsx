import { useEffect, useCallback, useRef } from "react";
import api from "../utils/api";
import { useAuthentication } from "../context/AuthProdvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const useAxiosPrivate = () => {
  const { accessToken, setAccessToken } = useAuthentication();
  const navigate = useNavigate();

  // Using refs for queue and refreshing state to avoid closure issues in the effect
  const isRefreshing = useRef(false);
  const failedQueue = useRef([]);

  const refresh = useCallback(async () => {
    try {
      const response = await api.post("/users/refresh-token");
      const token = response.data?.token;
      setAccessToken(token);
      return token; // Return the token so the queue can use it
    } catch (err) {
      await api.post(`/users/logout`);
      window.location.reload();
      throw err;
    }
  }, [setAccessToken]);

  useEffect(() => {
    const processQueue = (error, token = null) => {
      failedQueue.current.forEach(({ resolve, reject }) => {
        if (error) reject(error);
        else resolve(token);
      });
      failedQueue.current = [];
    };

    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Skip logic for refresh-token calls themselves
        if (originalRequest.url.includes("/refresh-token")) {
          return Promise.reject(error);
        }

        // --- 1. SERVER SLEEP (500 ERROR) RETRY LOGIC ---
        const MAX_RETRIES = 5;
        originalRequest._retryCount = originalRequest._retryCount || 0;

        if (
          error.response?.status === 500 &&
          originalRequest._retryCount < MAX_RETRIES
        ) {
          originalRequest._retryCount += 1;
          if (originalRequest._retryCount === 1) {
            toast.info("Our server is waking up... please hold on a moment!", {
              autoClose: 5000,
              toastId: "server-wakeup", // Prevents duplicate toasts
            });
          }

          // Exponential backoff: Wait longer each time (e.g., 2s, 4s, 6s)
          const delay = originalRequest._retryCount * 2000;
          await new Promise((resolve) => setTimeout(resolve, delay));

          return api(originalRequest);
        }

        // --- 2. AUTHENTICATION (401 ERROR) REFRESH LOGIC ---
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            }).then((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return api(originalRequest);
            });
          }

          isRefreshing.current = true;
          try {
            const newToken = await refresh();
            processQueue(null, newToken);

            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          } catch (err) {
            processQueue(err, null);
            navigate("/login");
            return Promise.reject(err);
          } finally {
            isRefreshing.current = false;
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh, navigate]);

  return api;
};

export default useAxiosPrivate;
