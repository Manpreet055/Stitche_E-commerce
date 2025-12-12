import React, { useContext, useEffect } from "react";
import { handleCart } from "../services/handleCart";
const CartButton = ({ productId }) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        handleCart({ productId, qty: 1 });
      }}
      className="rounded-2xl p-3 border"
    >
      Add to Cart{" "}
    </button>
  );
};

export default CartButton;
