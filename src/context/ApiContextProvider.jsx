import React, { useEffect, useState } from "react";
import ApiDataContext from "./ApiDataContext";
import axios from "axios";

const ApiContextProvider = ({ children }) => {
  let [apiData, setApiData] = useState([]);
  let [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    async function fetchApiData() {
      try {
        let response = await axios.get(
          "https://dummyjson.com/products/category/smartphones"
        );

        setApiData(response.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingState(false);
      }
    }
    fetchApiData();
  }, []);
  return (
    <ApiDataContext.Provider value={{ apiData, loadingState }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiContextProvider;
