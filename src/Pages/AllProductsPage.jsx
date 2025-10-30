import React from "react";
import ShowProducts from "../Components/Products/ShowProducts";

import Sidebar from "../Components/Products/Sidebar";
const AllProductsPage = () => {
  return (
    <div className="flex w-full h-full justify-center ">
      <Sidebar></Sidebar>
      <div className=" max-h-screen max-w-7xl overflow-auto hide-scrollbar"> 
        <ShowProducts></ShowProducts>
      </div>
    </div>
  );
};

export default AllProductsPage;
