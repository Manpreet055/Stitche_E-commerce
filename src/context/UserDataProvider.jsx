import React, { useContext, useState, useCallback, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuthentication } from "./AuthProdvider";

export const UserDataContext = React.createContext();

export const UserDataProvider = ({ children }) => {
  const api = useAxiosPrivate();
  const { accessToken } = useAuthentication();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState({});

  const refetchUser = useCallback(async () => {
    try {
      setLoadingState(true);

      const fetchUser = await api.get("/users");
      const user = fetchUser.data?.user;
      setUser(user);
      setCart(user?.cart || []);
    } catch (err) {
      setError((prev) => ({ ...prev, fetch: err.message }));
    } finally {
      setLoadingState(false);
    }
  }, [api, accessToken]);

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);
  return (
    <UserDataContext.Provider
      value={{
        user,
        cart,
        loadingState,
        error,
        refetchUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUser = () => useContext(UserDataContext);
