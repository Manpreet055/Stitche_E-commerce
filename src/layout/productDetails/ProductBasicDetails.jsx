import React from "react";
import capitalizeFirstLetter from "../../utits/capitalizeLetter";
import Counter from "../../ui/Counter";
import { Button } from "flowbite-react";
import RatingComp from "./RatingComp";
const ProductBasicDetails = ({ product }) => {
  const { title, brand, description, price, category, subCategory, rating } =
    product;
  console.log(product);

  return (
    <div className="w-fit flex grow flex-col">
      <span className="font-semibold">{brand}</span>
      <span className="font-semibold md:text-2xl">{title}</span>
      <span className="font-medium mt-4 md:text-2xl">${price}</span>
      <RatingComp rating={rating} />
      <p className="mt-3">{description}</p>
      <p className=" mt-2">
        <span className="font-medium lg:text-lg">Category</span> :{" "}
        {capitalizeFirstLetter(category)}/{subCategory}
      </p>
      <div className="flex justify-start w-full">
        <div className="flex justify-between mt-6 px-6 gap-3">
          <Counter />
          <Button className="text-nowrap hover:scale-[1.01] ease-in-out transition-all">
            Add to Cart
          </Button>
        </div>
        <Button className="text-nowrap mt-6 hover:scale-[1.01] ease-in-out transition-all">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductBasicDetails;
