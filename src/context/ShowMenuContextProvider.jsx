import React, { useContext, useState } from "react";

export const ShowMenuContext = React.createContext();
export const ShowMenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ShowMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </ShowMenuContext.Provider>
  );
};

export const useMenu = () => useContext(ShowMenuContext);
