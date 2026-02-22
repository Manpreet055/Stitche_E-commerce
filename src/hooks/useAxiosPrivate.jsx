import { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../context/AuthProdvider";
import api from "../utils/api";
import { toast } from "react-toastify";

const useAxiosPrivate = () => {
  const { accessToken, setAccessToken } = useAuthentication();
  const navigate = useNavigate();

  // Use refs to avoid stale closures in interceptors
  const isRefreshing = useRef(false);
  const failedQueue = useRef([]);

  const refresh = useCallback(async () => {
    try {
      const response = await api.post("/users/refresh-token");
      const token = response.data?.token;
      if (!token) throw new Error("No token received");
      setAccessToken(token);
      return token;
    } catch (err) {
      // Clear auth state and redirect to login (no reload)
      setAccessToken("");
      await api.post("/users/logout");
      navigate("/login", { replace: true });
      throw err;
    }
  }, [setAccessToken, navigate]);

  useEffect(() => {
    const processQueue = (error, token = null) => {
      failedQueue.current.forEach(({ resolve, reject }) => {
        if (error) reject(error);
        else resolve(token);
      });
      failedQueue.current = [];
    };

    // Request interceptor:  attach access token
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (accessToken && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response interceptor: handle errors
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Skip refresh-token endpoint itself
        if (originalRequest.url?.includes("/refresh-token")) {
          return Promise.reject(error);
        }

        // --- COLD START RETRY (502/503/504 only) ---
        const COLD_START_STATUSES = [502, 503, 504];
        const MAX_RETRIES = 2;
        originalRequest._retryCount = originalRequest._retryCount || 0;

        if (
          COLD_START_STATUSES.includes(error.response?.status) &&
          originalRequest._retryCount < MAX_RETRIES
        ) {
          originalRequest._retryCount += 1;

          // Show toast only on first retry
          if (originalRequest._retryCount === 1) {
            toast.loading(
              <div className="flex flex-col items-center justify-center gap-1 text-center w-full">
                <span className="text-lg font-bold">Waking up server...</span>
                <p className="text-sm opacity-80">This may take a moment</p>
              </div>,
              {
                toastId: "server-wakeup",
                position: "top-center",
                autoClose: false,
              },
            );
          }

          // Exponential backoff
          const delay = originalRequest._retryCount * 2000;
          await new Promise((resolve) => setTimeout(resolve, delay));

          toast.dismiss("server-wakeup");
          return api(originalRequest);
        }

        // --- AUTH REFRESH (401 only) ---
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          // If already refreshing, queue this request
          if (isRefreshing.current) {
            return new Promise((resolve, reject) => {
              failedQueue.current.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          isRefreshing.current = true;

          try {
            const newToken = await refresh();
            processQueue(null, newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          } catch (err) {
            processQueue(err, null);
            return Promise.reject(err);
          } finally {
            isRefreshing.current = false;
          }
        }

        // All other errors:  pass through
        return Promise.reject(error);
      },
    );

    // Cleanup:  eject interceptors on unmount
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);

  return api;
};

export default useAxiosPrivate;
