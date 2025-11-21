import React, { useState } from "react";
import DarkModeContext from "./DarkModeContext";
const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(()=>{
    if(localStorage.getItem("Dark-mode") === "true"){
        return true;
    }else{
        return false
    }
  });
  localStorage.setItem("Dark-mode",darkMode)
  
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
