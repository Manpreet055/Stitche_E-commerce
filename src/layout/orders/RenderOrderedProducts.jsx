import React from "react";
import { Link } from "react-router-dom";
import { container, item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
const RenderOrderedProducts = ({ products }) => {
  return (
    <>
      <h2 className="text-2xl  font-bold mb-4">Products</h2>
      <div className="w-full rounded-lg border-theme">
        {/* Header */}
        <div className="theme-transparent py-4 grid grid-cols-[70px_1fr_80px_60px_70px]  sm:grid-cols-5 place-items-center">
          <span className="text-sm sm:text-lg font-semibold">Product</span>
          <span className="text-sm sm:text-lg font-semibold"></span>
          <span className="text-sm sm:text-lg font-semibold">Price</span>
          <span className="text-sm sm:text-lg font-semibold">Quantity</span>
          <span className="text-sm sm:text-lg font-semibold">Total</span>
        </div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={container}
          className="overflow-auto w-full p-2 sm:p-4 grid grid-cols-1 max-h-100  gap-4  "
        >
          {products.map((p) => (
            <motion.li variants={item} key={p.product?._id}>
              <Link
                to={`/product/${p.product?._id}`}
                className="grid grid-cols-[70px_1fr_70px_60px_70px] sm:grid-cols-5 place-items-center"
              >
                <img
                  loading="lazy"
                  src={p?.product?.media?.thumbnail}
                  className="h-15 sm:h-20"
                  alt=""
                />
                <span className="text-sm sm:text-lg font-semibold">
                  {p.product?.title}
                </span>
                <span className="text-sm sm:text-lg font-semibold">
                  ${p.product?.price}
                </span>
                <span className="text-sm sm:text-lg font-semibold">
                  {p.qty}
                </span>
                <span className="text-sm sm:text-lg font-semibold">
                  ${p.product?.price * p.qty}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default RenderOrderedProducts;
