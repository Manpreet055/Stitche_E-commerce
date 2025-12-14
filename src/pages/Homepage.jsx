import React, { useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";
import HeroContent from "../layout/home/HeroContent";
import useProducts from "../hooks/useProducts";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const { products } = useProducts(4);

  return (
    <div className="w-full">
      <HeroContent />
      <div className="w-full  flex justify-between my-4 mb-4 text-xl sm:text-2xl text-start mt-4 px-3 lg:px-12 py-2 font-semibold tracking-wide">
        <div> POPULAR CATEGORIES</div>
        <NavLink
          to="products"
          className="text-lg font-medium hover-transition group flex items-center gap-2"
        >
          View All{" "}
          <ArrowRightIcon className="group-hover:translate-x-1 hover-transition" />{" "}
        </NavLink>
      </div>
      <div className="flex px-4 justify-evenly gap-4 overflow-x-scroll hide-scrollbar overflow-y-hidden">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
