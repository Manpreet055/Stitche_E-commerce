import React, { useState } from "react";
import BackButton from "../ui/BackButton";
import RenderCart from "../layout/cart/RenderCart";
import CartPriceSummary from "../layout/cart/CartPriceSummary";
import { useUser } from "../context/UserDataProvider";
import generatePriceDetails from "../utils/generatePriceDetails";
import AsyncBoundary from "../ui/AsyncBoundary";
import { Spinner } from "flowbite-react";

const Cart = () => {
  const { cart } = useUser();
  const priceDetails = generatePriceDetails(cart);
  return (
    <div className="my-15 sm:p-4 w-full theme text-theme">
      <div className="flex flex-col my-6 gap-y-3 items-start">
        <BackButton navPath="/" text="Back" />
        <h2 className="text-2xl lg:text-3xl px-3 font-semibold">Your Cart</h2>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap min-h-100 justify-evenly gap-4">
        <RenderCart cart={cart} fullheight />
        {cart.length !== 0 && <CartPriceSummary priceDetails={priceDetails} />}
      </div>
    </div>
  );
};

export default Cart;
