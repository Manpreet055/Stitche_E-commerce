import React, { useEffect, useState } from "react";
import Counter from "../../ui/Counter";
import { Trash } from "lucide-react";
import { Spinner } from "flowbite-react";
import { useUser } from "../../context/UserDataProvider";
import { NavLink, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { container, item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";

const RenderCart = ({ cart, fullheight = false }) => {
  const api = useAxiosPrivate();
  const { setCart, setError, loadingState } = useUser();

  // Empty cart states handles
  if (cart.length === 0) {
    return (
      <div className="flex  flex-col gap-y-6 justify-center items-center">
        <span className="text-lg">Cart is empty</span>
        <NavLink
          to="/products"
          className="btn-primary w-fit theme-alt text-theme-alt"
        >
          Shop now
        </NavLink>
      </div>
    );
  }

  const handleRemove = (productId) => {
    api
      .delete(`/cart`, {
        params: { productId },
      })
      .then((res) => setCart(res.data?.cart))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex h-full relative  theme text-theme  flex-col gap-2 border-theme grow rounded sm:p-4">
      {/* Header */}
      <div className="grid grid-cols-[60px_100px_1fr_60px_70px] sm:grid-cols-5 md:text-xl place-items-center py-4 w-full">
        <span></span>
        <span>Brand</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>

      {/* List Rendering */}
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className={`overflow-auto px-1 hide-scrollbar ${fullheight && "lg:min-h-125 lg:max-h-125"}`}
      >
        {loadingState ? (
          <AsyncBoundary
            loader={<Spinner color="gray" />}
            loadingState={true}
            errorState={null}
          />
        ) : (
          cart.map((p, index) => (
            <motion.li variants={item} key={index + 1}>
              <NavLink
                to={`/product/${p.product._id}`}
                className="grid grid-cols-[60px_100px_1fr_60px_70px] sm:grid-cols-5 place-items-center border-t border-gray-300 py-4 w-full"
              >
                <img
                  loading="lazy"
                  src={
                    p.product?.media?.thumbnail ? (
                      p.product?.media?.thumbnail
                    ) : (
                      <Spinner />
                    )
                  }
                  alt="product"
                  className=" sm:w-] sm:grid-col20 h-full sm:h-20 "
                />
                <div className="flex place-self-start flex-col justify-center gap-2 mx-4">
                  <h2 className=" sm:text-xl font-medium">
                    {p.product?.brand}
                  </h2>
                  <p className="truncate text-sm sm:text-lg w-20 sm:w-full">
                    {p.product?.title}
                  </p>
                </div>
                <Counter productId={p.product?._id} defaultqty={p?.qty} />
                <span className=" ml-3 font-medium">
                  ${(p.product?.price * p.qty).toFixed(2)}
                </span>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleRemove(p.product?._id);
                  }}
                >
                  <Trash />
                </button>
              </NavLink>
            </motion.li>
          ))
        )}
      </motion.ul>
    </div>
  );
};

export default RenderCart;
