import React, { useState } from "react";
import ShowMenuContext from "./ShowMenu";

const ShowMenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ShowMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </ShowMenuContext.Provider>
  );
};

export default ShowMenuContextProvider;
