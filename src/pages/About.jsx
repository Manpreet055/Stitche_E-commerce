import React from "react";
import aboutImg from "../assets/images/aboutImage.webp";
import ceoImage from "../assets/images/ceo.avif";
import { Hand, Leaf, Scissors } from "lucide-react";
import { Avatar, Blockquote } from "flowbite-react";
const About = () => {
  return (
    <div className="p-6 w-full   mt-10 text-theme flex flex-col  ">
      {/* Image and story */}
      <div className="flex flex-wrap gap-x-20 justify-evenly mb-10 h-fit">
        <div className="flex flex-col w-fit">
          <h2 className="text-3xl font-bold sm:text-5xl my-3 sm:my-5 text-start w-full">
            About Us
          </h2>
          <img
            className=" xl:max-w-4xl bg-center bg-cover rounded-xl my-5"
            src={aboutImg}
            alt="meeting pic"
          />{" "}
        </div>

        <div className="flex flex-col w-fit justify-center items-center">
          <h1 className="text-2xl font-bold my-3 sm:my-5 text-start w-full">
            Who We Are
          </h1>
          <p className="max-w-2xl sm:text-lg dark:text-gray-200 text-gray-500">
            Stitche was founded on the art of slow fashion and refined
            craftsmanship. Rooted in handmade excellence, we create thoughtfully
            designed garments— from hand-knitted sweaters to meticulously
            finished essentials—each shaped by skilled hands and uncompromising
            standards.
            <br />
            <br />
            Every piece reflects a balance of timeless design, premium
            materials, and deliberate attention to detail. At Stitche, we
            believe true luxury isn’t loud; it’s felt in the weight of the
            fabric, the precision of every stitch, and the way a garment lives
            with you over time. Our commitment is simple: create enduring
            clothing that honors craftsmanship and elevates everyday wear.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-around items-center ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold my-5 text-center w-full">
              Our Core Values
            </h1>
            <div className="flex flex-wrap gap-y-10 ">
              <div className="flex grow text-sm sm:max-w-3xs flex-col gap-3 items-center justify-center p-2  rounded-2xl w-fit">
                <Scissors size={34} />
                <h3 className="font-semibold sm:text-xl">Craftsmanship </h3>
                <p className="text-center max-w-3xs">
                  {" "}
                  Represents precision, tailoring, and handmade work
                </p>
              </div>
              <div className="flex grow text-sm sm:max-w-3xs flex-col gap-3 items-center justify-center p-2  rounded-2xl w-fit">
                <Leaf size={34} />
                <h3 className="font-semibold sm:text-xl">Sustainability </h3>
                <p className="text-center max-w-3xs ">
                  {" "}
                  Responsible sourcing, longevity, and respect for nature{" "}
                </p>
              </div>
              <div className="flex grow text-sm sm:max-w-3xs flex-col gap-3 items-center justify-center p-2  rounded-2xl w-fit">
                <Hand size={34} />
                <h3 className="font-semibold sm:text-xl">Human Touch </h3>
                <p className="text-center max-w-3xs ">
                  {" "}
                  Real people, real craftsmanship, no factory shortcuts.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* CEO Profile */}
          <div className="flex border border-gray-200 dark:border-gray-500 flex-wrap grow text-sm sm:max-w-2xl gap-4  items-center justify-center p-4 mt-6 sm:mt-0 rounded-xl">
            <div className="flex flex-col justify-center items-center gap-2">
              <Avatar
                img={ceoImage}
                rounded
                className="md:w-36 w-28"
                size=""
                alt="ceo img"
              />
              <h3 className="font-semibold sm:text-xl">Jane Doe</h3>
              <span className="text-center "> CEO & Founder </span>
            </div>
            <Blockquote className="text-sm sm:text-lg text-center">
              “Stitche was built on respect for craft and the belief that true
              luxury is intentional. Every garment we create reflects time,
              skill, and care—values we refuse to compromise. Our focus has
              never been speed or scale, but meaning, quality, and longevity.
              Thank you for being part of a brand that values how things are
              made as much as how they are worn.”
            </Blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
