import React, { useEffect, useState } from "react";
import Counter from "../../ui/Counter";
import { Trash } from "lucide-react";
import { Spinner } from "flowbite-react";
import { removeProductFromCart } from "../../services/handleCart";
import { useNavigate } from "react-router-dom";
const ProductRow = ({ products }) => {
  const navigate = useNavigate();
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center">
        No Products In the Cart
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2 border border-gray-300 grow rounded-2xl p-4">
      {products.map((p, index) => (
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
          <Counter productId={p.product._id} defaultqty={p.qty} />
          <span className=" ml-3 font-medium">
            ${(p.product?.price * p.qty).toFixed(2)}
          </span>
          <button
            onClick={(event) => {
              event.stopPropagation();
              removeProductFromCart(p?.product._id);
            }}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductRow;
