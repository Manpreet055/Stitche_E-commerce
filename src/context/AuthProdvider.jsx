import React, { useContext, useEffect, useState } from "react";
import { fetchUserData } from "../services/fetchUserData";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingState, setLoadingState] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchUserData(userId, setLoadingState, setError).then((data) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ setUser, user, error, loadingState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
