import React, { useContext, useCallback, useEffect, useState } from "react";
import { fetchUserData } from "../services/handleUser";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loadingState, setLoadingState] = useState({});
  const [error, setError] = useState({});

  const refetchUser = useCallback(async () => {
    const userId = localStorage.getItem("userId");
    if (userId && userId !== "undefined") {
      try {
        const fetchedUser = await fetchUserData(
          userId,
          setLoadingState,
          setError,
        );
        setUser(fetchedUser);
        setCart(fetchedUser?.cart || []); // Sync cart with fetched user data
      } catch (err) {
        setError({ ...error, fetch: err.message });
      }
    }
  }, [error]);

  useEffect(() => {
    refetchUser(); // Fetch on mount
  }, [refetchUser]); //

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        cart,
        setCart,
        error,
        setError,
        refetchUser,
        loadingState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
