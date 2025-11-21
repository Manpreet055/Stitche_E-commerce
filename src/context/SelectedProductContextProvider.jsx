import React from "react";
import SelectedProductContext from "./SelectedProductContext";

const SelectedProductContextProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct ] = React.useState(null);
  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
};

export default SelectedProductContextProvider;
