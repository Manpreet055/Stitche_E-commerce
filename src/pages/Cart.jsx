import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import ProductRow from "../layout/cart/ProductRow";
import OrderSummary from "../layout/cart/OrderSummary";
import useProducts from "../hooks/useProducts";
const Cart = () => {
  const { products } = useProducts(4);
  return (
    <div className="mt-20 p-4">
      <BackButton text="Back" />
      <h2 className="text-2xl lg:text-3xl px-3 my-4 font-semibold">
        Your Cart
      </h2>
      <div className="flex flex-wrap justify-evenly gap-4">
        <ProductRow products={products} />
        <OrderSummary products={products} />
      </div>
    </div>
  );
};

export default Cart;
