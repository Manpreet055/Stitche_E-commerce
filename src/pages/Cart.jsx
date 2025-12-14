import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import RenderCart from "../layout/cart/RenderCart";
import OrderSummary from "../layout/cart/OrderSummary";
import { useAuth } from "../context/AuthProdvider";
const Cart = () => {
  const { user } = useAuth();
  const products = user?.cart || [];
  return (
    <div className="my-20 p-4">
      <BackButton text="Back" />
      <h2 className="text-2xl lg:text-3xl px-3 my-4 font-semibold">
        Your Cart
      </h2>
      <div className="flex flex-wrap justify-evenly gap-4">
        <RenderCart products={products} />
        <OrderSummary products={products} />
      </div>
    </div>
  );
};

export default Cart;
