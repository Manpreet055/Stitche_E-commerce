import React, { useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";
import HeroContent from "../layout/home/HeroContent";
import useProducts from "../hooks/useProducts";
import { NavLink } from "react-router-dom";
import SalesCard from "../layout/home/SalesCard";
import CategoryCards from "../layout/home/CategoryCards";
import Banner from "../Animations/Banner";
import bannerImgLinks from "../utils/bannerImgLinks";

const Homepage = () => {
  const { products } = useProducts(5);
  return (
    <section className="w-full theme text-theme p-3 sm:p-10">
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
      <div className="w-full">
        <h2 className="text-lg md:text-2xl  font-semibold  ">Popular Brands</h2>
        <Banner>
          {bannerImgLinks.map((img, idx) => (
            <div
              key={idx}
              className="bg-white shrink-0 min-w-32 sm:min-w-40 min-h-20 grid place-items-center"
            >
              <img
                src={img}
                loading="lazy"
                className="p-2 h-20 w-auto"
                alt={`logo-${idx}`}
              />
            </div>
          ))}
        </Banner>
      </div>
    </section>
  );
};

export default Homepage;
