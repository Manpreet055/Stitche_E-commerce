import React from "react";
import aboutImg from "../assets/images/aboutImage.webp";
import ceoImage from "../assets/images/ceo.avif";
import { Sparkles, Handshake, Gem } from "lucide-react";
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
            Stitche was founded with a clear vision: to curate authentic,
            high-quality brands that value design, performance, and
            craftsmanship. Rather than creating products, we focus on
            selection—bringing together globally respected labels known for
            their standards, innovation, and consistency.
            <br />
            <br />
            Every product on Stitche is chosen with intention, evaluated for
            quality, material integrity, and long-term value. We believe true
            quality isn’t about excess or hype, but about choosing pieces that
            stand the test of time. Our commitment is simple: offer genuine
            products from trusted brands and deliver a shopping experience built
            on transparency, confidence, and care.
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
                <Sparkles size={34} />
                <h3 className="font-semibold sm:text-xl">
                  Curated With Purpose{" "}
                </h3>
                <p className="text-center max-w-3xs">
                  {" "}
                  Every brand and product is selected intentionally—quality,
                  relevance, and value come first.{" "}
                </p>
              </div>
              <div className="flex grow text-sm sm:max-w-3xs flex-col gap-3 items-center justify-center p-2  rounded-2xl w-fit">
                <Gem size={34} />
                <h3 className="font-semibold sm:text-xl">
                  Quality Over Quantity{" "}
                </h3>
                <p className="text-center max-w-3xs ">
                  {" "}
                  We don’t chase volume or trends. We focus on products that
                  last and perform.{" "}
                </p>
              </div>
              <div className="flex grow text-sm sm:max-w-3xs flex-col gap-3 items-center justify-center p-2  rounded-2xl w-fit">
                <Handshake size={34} />
                <h3 className="font-semibold sm:text-xl">
                  Respect for Brands{" "}
                </h3>
                <p className="text-center max-w-3xs ">
                  {" "}
                  We honor the craftsmanship, innovation, and identity of every
                  brand we partner with.{" "}
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
