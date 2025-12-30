import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

// This context api handles access and refresh tokens ,token exchnages etc .

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

// Created custom hook from the context
export const useAuthentication = () => useContext(AuthContext);
