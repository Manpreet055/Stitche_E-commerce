import React from "react";
import { Link } from "react-router-dom";

const RenderOrderedProducts = ({ products }) => {
  return (
    <>
      <h2 className="text-2xl  font-bold mb-4">Products</h2>
      <div className="w-full rounded-lg border-theme">
        {/* Header */}
        <div className="theme-transparent py-4 grid grid-cols-5 place-items-center">
          <span className="text-lg font-semibold">Product</span>
          <span className="text-lg font-semibold"></span>
          <span className="text-lg font-semibold">Price</span>
          <span className="text-lg font-semibold">Quantity</span>
          <span className="text-lg font-semibold">Total</span>
        </div>

        <ul className="overflow-auto  grid grid-cols-1 max-h-100  gap-4  ">
          {products.map((p) => (
            <li key={p.product?._id}>
              <Link
                to={`/product/${p.product?._id}`}
                className="grid grid-cols-5 place-items-center"
              >
                <img
                  src={p?.product?.media?.thumbnail}
                  className="h-20"
                  alt=""
                />
                <span className="text-lg font-semibold">
                  {p.product?.title}
                </span>
                <span className="text-lg font-semibold">
                  ${p.product?.price}
                </span>
                <span className="text-lg font-semibold">{p.qty}</span>
                <span className="text-lg font-semibold">
                  ${p.product?.price * p.qty}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RenderOrderedProducts;
