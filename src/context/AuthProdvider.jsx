import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        setAccessToken,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthContext);
