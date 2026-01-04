import { useEffect, useCallback, useRef } from "react";
import api from "../utils/api";
import { useAuthentication } from "../context/AuthProdvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAxiosPrivate = () => {
  const { accessToken, setAccessToken } = useAuthentication();
  const navigate = useNavigate();
  const isRefreshing = useRef(false);
  const failedQueue = useRef([]);

  const refresh = useCallback(async () => {
    try {
      const response = await api.post("/users/refresh-token");
      const token = response.data?.token;
      setAccessToken(token);
      return token;
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
      (response) => {
        //Dismiss the loading toast immediately
        toast.dismiss("server-wakeup");
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (originalRequest.url.includes("/refresh-token")) {
          return Promise.reject(error);
        }

        //SERVER SLEEP (500 ERROR) RETRY LOGIC ---
        const MAX_RETRIES = 5;
        originalRequest._retryCount = originalRequest._retryCount || 0;

        if (
          error.response?.status === 500 &&
          originalRequest._retryCount < MAX_RETRIES
        ) {
          originalRequest._retryCount += 1;

          if (originalRequest._retryCount === 1) {
            toast.loading(
              <div className="flex flex-col items-center justify-center gap-1 text-center w-full">
                <span className="text-lg font-bold">Booting backend...</span>
                <p className="text-sm opacity-80">
                  Stitching things together... hang tight!
                </p>
              </div>,
              {
                toastId: "server-wakeup",
                position: "top-center",
                className: "custom-center-toast",
              },
            );
          }

          const delay = originalRequest._retryCount * 2000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          return api(originalRequest);
        }

        //If retries failed or it's a different error, dismiss the toast
        toast.dismiss("server-wakeup");

        //AUTHENTICATION (401 ERROR) REFRESH LOGIC ---
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
