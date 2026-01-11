import React from "react";
import capitalizeFirstLetter from "../../utils/capitalizeLetter";
import Counter from "../../ui/Counter";
import ProductRating from "./ProductRating";
import AddToCartButton from "../cart/AddToCartButton";
import BuyButton from "../../ui/BuyButton";

const ProductBasicDetails = ({ product }) => {
  const {
    _id,
    title,
    brand,
    description,
    price,
    category,
    subCategory,
    rating,
  } = product;
  const stock = product?.stock ?? product?.quantity ?? 0;

  return (
    <div className="w-fit flex grow flex-col theme text-theme">
      <span className="font-semibold">{brand}</span>
      <span className="font-semibold md:text-2xl">{title}</span>
      <span className="font-medium mt-4 md:text-2xl">${price}</span>
      <ProductRating rating={rating} />
      <p className="mt-2 sm:mt-4 max-w-md">{description}</p>
      <p className=" mt-2">
        <span className="font-medium lg:text-lg">Category</span> :{" "}
        {capitalizeFirstLetter(category)}/{subCategory}
      </p>
      <p className="mt-2 font-medium lg:text-lg">
        Stock :{" "}
        {stock === 0
          ? "Currently out of stock"
          : stock <= 10
            ? `Only ${stock}  left`
            : `${stock} In Stock `}
      </p>
      <div className="mt-6 ">
        <Counter productId={_id} />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <AddToCartButton
          theme="rounded sm:max-w-xs text-center h-fit w-full flex gap-2 items-center justify-center p-2.5 border-theme"
          product={_id}
          text="Add to Cart"
        />
        <BuyButton product={_id} />
      </div>
    </div>
  );
};

export default ProductBasicDetails;
