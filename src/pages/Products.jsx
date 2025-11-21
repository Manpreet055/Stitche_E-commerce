import React from "react";
import ShowProducts from "../layout/products/ShowProducts"
const Products = () => {
  return (
    <div className="flex w-full h-full justify-center ">
      <div className=" max-h-screen max-w-7xl overflow-auto hide-scrollbar"> 
        <ShowProducts></ShowProducts>
      </div>
    </div>
  );
};

export default Products;
