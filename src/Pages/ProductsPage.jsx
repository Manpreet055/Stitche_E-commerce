import React from "react";
import { Outlet } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="dark:text-white p-6 justify-between flex w-full">
      <div className="flex w-full h-full max-h-screen overflow-auto hide-scrollbar  ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ProductsPage;
