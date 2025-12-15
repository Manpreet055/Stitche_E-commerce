import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProdvider";
import useRefreshToken from "./useRefreshToken";
const uri = import.meta.env.VITE_BASE_URI;
const api = axios.create({
  baseURL: uri,
});

const useAxios = () => {
  const refresh = useRefreshToken();
  const { accessToken } = useAuth();
  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken || ""}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(prevRequest);
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

export default useAxios;
