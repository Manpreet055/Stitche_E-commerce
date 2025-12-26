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
      const user = fetchUser.data?.user;
      setUser(user);
    } catch (err) {
      setError((prev) => ({ ...prev, fetch: err.message }));
    } finally {
      setLoadingState(false);
    }
  }, [api, accessToken]);

  // fetching cart
  const refetchCart = async () => {
    try {
      const fetchCart = await api.get(`/cart`);
      setCart(fetchCart.data.cart);
    } catch (error) {
      setError(error.message);
    }
  };

  const logOutUser = async () => {
    try {
      await api.post(`/users/logout`);
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    refetchUser();
    refetchCart();
  }, [refetchUser]);
  return (
    <UserDataContext.Provider
      value={{
        user,
        setUser,
        cart,
        loadingState,
        error,
        setError,
        refetchUser,
        refetchCart,
        logOutUser,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUser = () => useContext(UserDataContext);
