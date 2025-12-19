import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import RenderCart from "../layout/cart/RenderCart";
import OrderSummary from "../layout/cart/OrderSummary";
const Cart = () => {
  return (
    <div className="my-20 p-4 w-full theme text-theme">
      <BackButton text="Back" />
      <h2 className="text-2xl lg:text-3xl px-3 my-6 font-semibold">
        Your Cart
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-4">
        <RenderCart />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
