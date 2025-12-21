import React, { useEffect } from "react";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";

const MainFooter = () => {
  return (
    <footer className="theme text-theme">
      <div className="flex  justify-evenly flex-wrap">
        <div className="mt-3 sm:mt-6 flex flex-col gap-2 items-center">
          <h1 className="text-2xl sm:text-3xl  font-bold">
            Stitche <small>&nbsp;&#8482;</small>
          </h1>
          <h2 className="text-sm sm:text-lg font-medium text-center">
            Made By Hand. Designed to Tell Your Story.{" "}
          </h2>
        </div>{" "}
        <div className="flex justify-evenly items-center gap-x-10 w-fit flex-col lg:flex-row">
          {" "}
          {/* All Footers links */}
          <div className="flex justify-evenly lg:gap-10 w-full lg:w-fit">
            <FooterLinks
              heading="Categories"
              items={[
                { name: "Men's-wear", msg: "This feature is comming soon" },
                { name: "Women's wear", msg: "This feature is comming soon" },
                { name: "Kid's wear", msg: "This feature is comming soon" },
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
          <Newsletter />
        </div>
      </div>
      <div className="flex flex-col p-2 px-6">
        <div className="flex justify-center flex-col gap-3  px-6 mb-4 items-center">
          <h3 className="text-sm md:text-lg  font-light flex items-center gap-1">
            <small>&nbsp;&#169;</small>
            2025 Stitche. All rights are reserved.
          </h3>
        </div>
      </div>{" "}
    </footer>
  );
};

export default MainFooter;
