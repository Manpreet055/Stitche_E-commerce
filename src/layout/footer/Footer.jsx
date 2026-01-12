import React, { useEffect } from "react";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={`theme text-theme ${
        (pathname === "/login" || pathname === "/signup") && "hidden"
      }`}
    >
      <hr className="text-gray-400 sm:my-10 mx-2 sm:mx-10" />
      <div className="flex  justify-evenly w-full flex-wrap   ">
        <div className="mt-3 sm:mt-6 flex flex-col gap-2 items-center">
          <h1 className="text-xl sm:text-3xl  font-bold">
            Stitche <small>&nbsp;&#8482;</small>
          </h1>
          <h2 className="text-xs sm:text-lg font-medium text-center">
            Curated. Trusted. Authentic.{" "}
          </h2>
        </div>{" "}
        <div className="flex justify-between items-center gap-x-10 w-full sm:w-fit flex-col lg:flex-row">
          {" "}
          {/* All Footers links */}
          <div className="flex justify-evenly  lg:gap-1 w-full lg:w-fit">
            <FooterLinks
              heading="Categories"
              items={[
                { name: "Men's-wear", link: "/search?q=mens-wear" },
                { name: "Women's wear", link: "/search?q=womens-wear" },
                { name: "Kid's wear", link: "/search?q=kids-wear" },
              ]}
            />
            <FooterLinks
              heading="Support"
              items={[
                { name: "Contact Us", link: "contact" },
                { name: "FAQs", link: "contact#faq" },
              ]}
            />
            <FooterLinks
              heading="About Us"
              items={[
                { name: "Our Story", link: "about" },
                { name: "Careers", msg: "This feature is comming soon" },
              ]}
            ></FooterLinks>
          </div>
          {/* News letter */}
        </div>
        <Newsletter />
      </div>
      <div className="flex flex-col p-2 px-6">
        <div className="flex justify-center flex-col gap-3  px-6 mb-2 sm:mb-4 items-center">
          <h3 className="text-xs md:text-lg  font-light flex items-center gap-1">
            <small>&nbsp;&#169;</small>
            2025 Stitche. All rights are reserved.
          </h3>
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
