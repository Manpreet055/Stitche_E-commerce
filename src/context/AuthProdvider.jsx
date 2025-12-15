import React, { useContext, useCallback, useEffect, useState } from "react";
import { fetchUserData } from "../services/handleUser";
import { authStore } from "../utils/authStore";
const uri = import.meta.env.VITE_BASE_URI;

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loadingState, setLoadingState] = useState({});
  const [error, setError] = useState({});

  const refetchUser = useCallback(async () => {
    if (accessToken && accessToken !== "") {
      try {
        const fetchedUser = await fetchUserData(
          accessToken,
          setLoadingState,
          setError,
        );
        setUser(fetchedUser);
        setCart(fetchedUser?.cart || []); // Sync cart with fetched user data
      } catch (err) {
        setError({ ...error, fetch: err.message });
      }
    }
  }, [accessToken]);

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
        setAccessToken,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
