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
  const refetchUser = useCallback(async () => {
    try {
      setLoadingState(true);
      const fetchUser = await Promise.race([
        api.get("/users"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error(" refetchUser timeout")), 15000),
        ),
      ]);
      setUser(fetchUser.data?.user);
      setCart(fetchUser.data?.user?.cart);
      localStorage.setItem("isAuthenticated", "true");
    } catch (err) {
      setError(err.message);
      setCart([]);
      setUser(null);
      localStorage.setItem("isAuthenticated", "false");
    } finally {
      setLoadingState(false);
    }
  }, [apiPrivate]);

  useEffect(() => {
    (async () => {
      try {
        await api.get("/health");
      } catch (e) {
        setError(e?.message ?? "Health check failed");
      }
    })();
  }, []);

  useEffect(() => {
    refetchUser();
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
