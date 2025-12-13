import React, { useContext, useEffect } from "react";
import { addProductToCart } from "../services/handleCart";
import { useAuth } from "../context/AuthProdvider";
const CartButton = ({ productId }) => {
  const { user } = useAuth();
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        addProductToCart({ productId, qty: 1 });
        user.cart.push({ product: productId, qty: 1 });
      }}
      className="rounded-2xl p-3 border"
    >
      Add to Cart{" "}
    </button>
  );
};

export default CartButton;
