import React from "react";

import mensWear from "../../assets/categories/mens-wear.webp";
import womensWear from "../../assets/categories/womens-wear.webp";
import kidsWear from "../../assets/categories/kids-wear.webp";
import accessories from "../../assets/categories/accessories.webp";
import footWear from "../../assets/categories/foot-wear.webp";
import { useNavigate } from "react-router-dom";
const CategoryCards = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full my-6 ">
      <h2 className="text-lg md:text-2xl  font-semibold mx-2 my-4 md:ml-20">
        Categories
      </h2>

      <div className="flex gap-3 justify-evenly hide-scrollbar max-w-screen overflow-x-auto">
        <div
          onClick={() => navigate(`/search?q=mens-wear`)}
          className="grid h-full min-w-40 gap-3  pb-2 text-black bg-white rounded-2xl place-items-center"
        >
          <img
            loading="lazy"
            src={mensWear}
            className="w-40 max-h-33 h-33  lg:w-50 lg:max-h-45 lg:h-45  xl:w-60 xl:max-h-55 xl:h-55  object-cover object-center rounded-t-2xl"
            alt="mens-wear"
          />
          <span className="text-sm sm:text-base">Men's Wear</span>
        </div>
        <div
          onClick={() => navigate(`/search?q=womens-wear`)}
          className="grid h-full min-w-40 gap-3  pb-2 text-black bg-white rounded-2xl place-items-center"
        >
          <img
            loading="lazy"
            src={womensWear}
            className="w-40 max-h-33 h-33  lg:w-50 lg:max-h-45 lg:h-45  xl:w-60 xl:max-h-55 xl:h-55 object-cover object-center rounded-t-2xl"
            alt="mens-wear"
          />
          <span className="text-sm sm:text-base">Women's Wear</span>
        </div>
        <div className="grid h-full min-w-40 gap-3  pb-2 text-black bg-white rounded-2xl place-items-center">
          <img
            loading="lazy"
            src={kidsWear}
            onClick={() => navigate(`/search?q=kids-wear`)}
            className="w-40 max-h-33 h-33  lg:w-50 lg:max-h-45 lg:h-45  xl:w-60 xl:max-h-55 xl:h-55 object-cover object-center rounded-t-2xl"
            alt="mens-wear"
          />
          <span className="text-sm sm:text-base">Kid's Wear</span>
        </div>
        <div
          onClick={() => navigate(`/search?q=footwear`)}
          className="grid h-full min-w-40 gap-3  pb-2 text-black bg-white rounded-2xl place-items-center"
        >
          <img
            loading="lazy"
            src={footWear}
            className="w-40 max-h-33 h-33  lg:w-50 lg:max-h-45 lg:h-45  xl:w-60 xl:max-h-55 xl:h-55 object-cover object-center rounded-t-2xl"
            alt="mens-wear"
          />
          <span className="text-sm sm:text-base">Footwear</span>
        </div>
        <div
          onClick={() => navigate(`/search?q=accessories`)}
          className="grid h-full min-w-40 gap-3  pb-2 text-black bg-white rounded-2xl place-items-center"
        >
          <img
            loading="lazy"
            src={accessories}
            className="w-40 max-h-33 h-33  lg:w-50 lg:max-h-45 lg:h-45  xl:w-60 xl:max-h-55 xl:h-55 object-cover object-center rounded-t-2xl"
            alt="mens-wear"
          />
          <span className="text-sm sm:text-base">Accessories</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
