import React, { useEffect, useState } from "react";
import Counter from "../../ui/Counter";
import { removeProductFromCart } from "../../services/handleCart";
import { Trash } from "lucide-react";
import { Spinner } from "flowbite-react";
import { useUser } from "../../context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
const RenderCart = () => {
  const api = useAxiosPrivate();
  const { cart, refetchUser } = useUser();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center">
        No Products In the Cart
      </div>
    );
  }

  const handleRemove = async (productId) => {
    try {
      await removeProductFromCart(api, productId);
      await refetchUser();
    } catch (error) {
      console.error("Failed to remove from cart:", error);
    }
  };

  return (
    <ul className="flex h-full lg:max-h-[500px] overflow-auto hide-scrollbar flex-col gap-2 border border-gray-300 grow rounded-2xl p-4">
      {cart.map((p, index) => (
        <li
          onClick={() => navigate(`/product/${p.product._id}`)}
          key={index + 1}
          className="flex items-center border-t border-gray-300 justify-around py-4 w-full"
        >
          <img
            src={
              p.product?.media?.thumbnail ? (
                p.product?.media?.thumbnail
              ) : (
                <Spinner />
              )
            }
            alt="product"
            className="h-20 "
          />
          <div className="flex flex-col justify-center gap-2 mx-4">
            <h2 className="text-lg font-medium">{p.product?.brand}</h2>
            <p className="">{p.product?.title}</p>
          </div>
          <Counter productId={p.product?._id} defaultqty={p?.qty} />
          <span className=" ml-3 font-medium">
            ${(p.product?.price * p.qty).toFixed(2)}
          </span>
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleRemove(p.product?._id);
            }}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RenderCart;
