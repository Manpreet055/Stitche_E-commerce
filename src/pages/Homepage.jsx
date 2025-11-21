import React from "react";
import { ArrowRightIcon } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { motion } from "framer-motion";
import HeroContent from "../layout/home/HeroContent"
import Banner from "../ui/Banner";

const Homepage = () => {
  let logos = [
    "/src/assets/BannerImages/FastTrack.webp",
    "/src/assets/BannerImages/Fabman.webp",
    "/src/assets/BannerImages/SadafDesign.webp",
    "/src/assets/BannerImages/SanableDigi.webp",
    "/src/assets/BannerImages/SanableStudio.webp",
    "/src/assets/BannerImages/SMS.webp",
    "/src/assets/BannerImages/Wizcraft.webp",
  ];

  let allogos = [...logos, ...logos];
  return (
    <div className="w-full">
      <HeroContent></HeroContent>
      <div className="w-full  flex justify-between my-4 mb-4 text-xl sm:text-2xl text-start mt-4 px-3 lg:px-12 py-2 font-semibold tracking-wide">
        <div> POPULAR CATEGORIES</div>
        <div className="text-lg font-medium hover-transition group flex items-center gap-2">
          View All{" "}
          <ArrowRightIcon className="group-hover:translate-x-1 hover-transition" />{" "}
        </div>
      </div>
      <div className="flex px-4 justify-evenly gap-4 overflow-x-scroll hide-scrollbar overflow-y-hidden">
        <ProductCard
          image="src/assets/Printer.png"
          productname="Printers"
          price="Starting from $129.99"
        ></ProductCard>
        <ProductCard
          productname="Eco Solvent Inks"
          price="Starting from $129.99"
          image="src/assets/Ink_image.webp"
        ></ProductCard>
        <ProductCard
          image="src/assets/acrylic.webp"
          productname="Acrylic sheets"
          price="Starting from $129.99"
        ></ProductCard>
        <ProductCard
          image="src/assets/flex_rolls.webp"
          productname="Flex Rolls"
          price="Starting from $129.99"
        ></ProductCard>
      </div>
      <div className="flex my-6 justify-between items-center md:justify-around p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Get Our Latest Deals</h3>
          <p className="text-sm">
            Signup for our newsletter and recieve exclusive offers and discounts
          </p>
        </div>
        <button className="py-3 hover-transition rounded-lg  px-6 primary-bg text-white text-nowrap">
          Sign Up
        </button>
      </div>
      <Banner>
        {allogos.map((src, i) => (
          <img key={i} src={src} alt="brand" className="h-24 w-auto " />
        ))}
      </Banner>
    </div>
  );
};

export default Homepage;
