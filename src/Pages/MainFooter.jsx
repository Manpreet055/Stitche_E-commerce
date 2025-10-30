import React from "react";
import { Copyright } from "lucide-react";

import FooterLinks from "../Components/Footer/FooterLinks";
const MainFooter = () => {
  return (
    <footer>
      <div className="flex justify-evenly flex-wrap">
        <div className="mt-8 w-full xl:w-fit flex flex-col justify-evenly items-center">
          <img
            src="/src/assets/Chromojet_logo.webp"
            className="h-11 w-fit"
            alt=""
          />

          <h2 className="text-xl max-w-sm text-center">
            Your Trusted source for Printers, Printer Accessories and Flex
            items.
          </h2>
        </div>{" "}
        
        <FooterLinks
          heading="Shop"
          itemone="Printers"
          itemtwo="Ink Cartidges"
          itemthree="Toner Cartidges"
          itemfour="Paper & Supplies"
        ></FooterLinks>
        <FooterLinks
          heading="Support"
          itemone="FAQs"
          itemtwo="Customer Care"
          itemthree="Returns & Refunds"
          itemfour="Track Your Order"
        ></FooterLinks>
        <FooterLinks
          heading="Follow us"
          itemone="Facebook"
          itemtwo="Instagram"
          itemthree="LinkedIn"
          itemfour="Youtube"
        ></FooterLinks>
        <FooterLinks
          heading="Shop"
          itemone="Printers"
          itemtwo="Ink Cartidges"
          itemthree="Toner Cartidges"
          itemfour="Paper & Supplies"
        ></FooterLinks>
      </div>
      <div className="flex flex-col p-2 px-6">
        <div className="w-full flex justify-between lg:justify-evenly flex-wrap gap-4 items-center">
          <h4 className="text-xl font-semibold">
            Subscribe To Our Newsletter{" "}
          </h4>
          <form className="flex h-15 py-2 w-fit ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border px-3 max-w-[250px] md:max-w-sm bg-white  border-r-0 border-gray-500 rounded-l-lg"
            />
            <button
              type="submit"
              className="primary-bg flex justify-center items-center    dark:text-white border-l-1 border-gray-500 hover-transition p-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-center flex-col gap-3  px-6 mb-4 items-center">
          <h3 className="md:text-lg  font-light flex items-center gap-1">
            <Copyright className="h-4" />
            2025 Chromojet. All rights are reserved.
          </h3>
          <h1 className="text-sm font-light flex items-center">
            Privacy | Service | Terms & Conditions
          </h1>
        </div>
      </div>{" "}
      <div className="w-full text-center py-6">
        Made with Love❤ From{" "}
        <a
          href="mailto:singhmanpreet57577@gmail.com"
          className="hover:underline"
        >
          singhmanpreet57577@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;
