import React, { useContext, useState, useCallback, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuthentication } from "./AuthProdvider";

const UserDataContext = React.createContext();

export const UserDataProvider = ({ children }) => {
  const api = useAxiosPrivate();
  const { accessToken } = useAuthentication();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState({});

  // refetch user
  const refetchUser = useCallback(async () => {
    try {
      setLoadingState(true);
      const fetchUser = await api.get("/users");
      const data = fetchUser.data;
      setUser(data?.user);
      setCart(data?.user?.cart);
      localStorage.setItem("isAuthenticated", "true");
    } catch (err) {
      setError(err.message);
      setCart([]);
      setUser(null);
    } finally {
      setLoadingState(false);
    }
  }, [api, accessToken]);

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
