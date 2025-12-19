import React, { useEffect } from "react";
import { Copyright } from "lucide-react";
import FooterLinks from "./FooterLinks";

const MainFooter = () => {
  return (
    <footer>
      <div className="flex justify-evenly flex-wrap">
        <div className="mt-8 flex flex-col gap-2 items-center">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Stitche <small>&nbsp;&#8482;</small>
          </h1>
          <h2 className="text-xl font-medium text-center">
            Made By Hand. Designed to Tell Your Story.{" "}
          </h2>
        </div>{" "}
        <div className="flex justify-evenly gap-10 w-fit flex-col lg:flex-row">
          {" "}
          <div className="flex justify-evenly gap-10 w-full lg:w-fit">
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
          <div className="w-full flex my-auto flex-col">
            <h4 className="text-xl font-semibold">
              Subscribe To Our Newsletter{" "}
            </h4>
            <form className="flex h-15 py-2 w-fit ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border px-3  md:max-w-sm bg-white  border-r-0 border-gray-500 rounded-l-lg"
              />
              <button
                type="submit"
                className="flex justify-center border border-gray-500 hover: items-center p-4 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 px-6">
        <div className="flex justify-center flex-col gap-3  px-6 mb-4 items-center">
          <h3 className="md:text-lg  font-light flex items-center gap-1">
            <small>&nbsp;&#169;</small>
            2025 Stitche. All rights are reserved.
          </h3>
        </div>
      </div>{" "}
    </footer>
  );
};

export default MainFooter;
