import React from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "flowbite-react";

const FooterLinks = ({ heading = "", items = [], children }) => {
  return (
    <div className="flex text-theme justify-evenly w-fit p-4">
      <div className="flex flex-col gap-3">
        <h2 className=" sm:text-xl font-medium mb-2 text-nowrap">{heading}</h2>
        {items.map((i) =>
          !i.msg ? (
            <NavLink
              to={i?.link ?? "#"}
              className="text-sm sm:text-lg  hover:underline text-nowrap w-fit hover-transition"
            >
              {i.name}
            </NavLink>
          ) : (
            <Popover
              aria-labelledby="default-popover"
              content={
                <div className="w-64 text-sm theme">
                  <div className="px-3 py-2">
                    <p>{i.msg}</p>
                  </div>
                </div>
              }
            >
              <button className="text-sm sm:text-lg  hover:underline text-nowrap w-fit hover-transition">
                {i.name}
              </button>
            </Popover>
          ),
        )}
        {children}
      </div>
    </div>
  );
};

export default FooterLinks;
