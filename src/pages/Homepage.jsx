import React, { useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";
import HeroContent from "../layout/home/HeroContent";
import useProducts from "../hooks/useProducts";
import { NavLink } from "react-router-dom";
import SalesCard from "../layout/home/SalesCard";
import CategoryCards from "../layout/home/CategoryCards";

const Homepage = () => {
  const { products } = useProducts(5);
  return (
    <div className="w-full theme text-theme p-3 sm:p-10">
      <HeroContent />
      <CategoryCards />
      <SalesCard />

      <div className="w-full text-theme flex justify-between my-4 mx-auto sm:text-2xl font-semibold">
        <span>New Arrivals</span>
        <NavLink
          to="products"
          className="sm:text-lg font-medium hover-transition group flex items-center gap-2"
        >
          View All{" "}
          <ArrowRightIcon
            size={20}
            className="group-hover:translate-x-1 hover-transition"
          />{" "}
        </NavLink>
      </div>
      <div className="flex  max-w-screen w-full gap-2 overflow-auto hide-scrollbar mb-5 justify-evenly">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
