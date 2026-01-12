import React from "react";
import aboutImg from "../assets/images/aboutImage.webp";
import ceoImage from "../assets/images/ceo.avif";
import { Hand, Leaf, Scissors } from "lucide-react";
import { Avatar, Blockquote } from "flowbite-react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="p-6 w-full   mt-10 text-theme flex flex-col  ">
      {/* Image and story */}
      <div className="flex flex-wrap gap-x-20 justify-evenly mb-10 h-fit">
        <div className="flex flex-col w-fit">
          <h2 className="text-3xl font-bold sm:text-5xl my-3 sm:my-5 text-start w-full">
            About Us
          </h2>
          <motion.img
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" xl:max-w-4xl bg-center bg-cover rounded-xl my-5"
            src={aboutImg}
            alt="meeting pic"
          />{" "}
        </div>

        <div className="flex flex-col w-fit justify-center items-center">
          <h1 className="text-2xl font-bold my-3 sm:my-5 text-start w-full">
            Who We Are
          </h1>
          <motion.p
            initial={{ translateX: 100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl sm:text-lg dark:text-gray-200 text-gray-500"
          >
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
          </motion.p>
        </div>
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
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
          <motion.div
            initial={{ translateX: 100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex border border-gray-200 dark:border-gray-500 flex-wrap grow text-sm sm:max-w-2xl gap-4  items-center justify-center p-4 mt-6 sm:mt-0 rounded-xl"
          >
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
              “At Stitche, our role is simple: to bring the world’s most
              respected brands together in one trusted space. Every label we
              offer is chosen for its quality, innovation, and authenticity. We
              don’t chase trends—we curate them. Our commitment is to give our
              customers access to genuine products, transparent service, and a
              shopping experience built on trust.”
            </Blockquote>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
