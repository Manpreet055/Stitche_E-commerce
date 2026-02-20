import React, { useContext, useState, useCallback, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuthentication } from "./AuthProdvider";
import api from "../utils/api";
const UserDataContext = React.createContext();

export const UserDataProvider = ({ children }) => {
  const apiPrivate = useAxiosPrivate();
  const { accessToken } = useAuthentication();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState({});

  const logOutUser = async () => {
    try {
      await api.post(`/users/logout`);
      setUser(null);
      setCart([]);
    } catch (error) {
      setError(error.message);
    } finally {
      localStorage.setItem("isAuthenticated", "false");
    }
  };
  // refetch user
  const refetchUser = useCallback(
    async (signal) => {
      try {
        setLoadingState(true);
        const fetchUser = await api.get("/users", { signal });
        setUser(fetchUser.data?.user);
        setCart(fetchUser.data?.user?.cart);
        localStorage.setItem("isAuthenticated", "true");
      } catch (err) {
        if (err.code === "ERR_CANCELED") return;
        setError(err.message);
        setCart([]);
        setUser(null);
        localStorage.setItem("isAuthenticated", "false");
      } finally {
        setLoadingState(false);
      }
    },
    [apiPrivate],
  );

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        await api.get("/health", { signal: controller.signal });
      } catch (e) {
        if (e.name === "CanceledError") return;
        setError(e?.message ?? "Health check failed");
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    refetchUser(controller.signal);
    return () => {
      controller.abort();
    };
  }, [refetchUser]);
  return (
    <UserDataContext.Provider
      value={{
        user,
        setUser,
        setCart,
        cart,
        loadingState,
        error,
        setError,
        refetchUser,
        logOutUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUser = () => useContext(UserDataContext);
