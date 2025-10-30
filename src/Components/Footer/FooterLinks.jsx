import React from "react";

const FooterLinks = (props) => {
  return (
    <div className="flex justify-evenly w-fit p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium mb-2">{props.heading}</h2>
        <a href={props.linkone} className="hover:underline w-fit hover-transition">
          {props.itemone}
        </a>
        <a href={props.linktwo} className="hover:underline w-fit hover-transition">
          {props.itemtwo}
        </a>
        <a href={props.linkthree} className="hover:underline w-fit hover-transition">
          {props.itemthree}
        </a>
        <a href={props.linkfour} className="hover:underline w-fit hover-transition">
          {props.itemfour}
        </a>
      </div>
    </div>
  );
};

export default FooterLinks;
