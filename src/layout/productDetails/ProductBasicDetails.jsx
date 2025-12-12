import React from "react";
import capitalizeFirstLetter from "../../utits/capitalizeLetter";
import Counter from "../../ui/Counter";
import { Button } from "flowbite-react";
import RatingComp from "./RatingComp";
import CartButton from "../../ui/CartButton";
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
    <div className="w-fit flex grow flex-col">
      <span className="font-semibold">{brand}</span>
      <span className="font-semibold md:text-2xl">{title}</span>
      <span className="font-medium mt-4 md:text-2xl">${price}</span>
      <RatingComp rating={rating} />
      <p className="mt-6 max-w-md">{description}</p>
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
      <div className="flex  mt-6 px-6 gap-3">
        <Counter productId={_id} />
        <CartButton productId={_id} />
      </div>
      <div className="flex justify-start w-full">
        <Button className="w-full max-w-xs text-nowrap mt-6 hover:scale-[1.01] ease-in-out transition-all">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductBasicDetails;
