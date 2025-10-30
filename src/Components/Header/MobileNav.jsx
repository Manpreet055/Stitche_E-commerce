import { useContext } from "react";
import { Droplet, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowMenuContext from "../../Context/ShowMenu";
import { NavLink } from "react-router-dom";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const MobileNav = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(ShowMenuContext);

  return (
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } z-20 absolute max-w-screen top-0 dark:bg-black bg-white lg:hidden dark:text-white`}
    >
      <div className="fixed bg-black inset-0 dark:text-white z-10">
        {/* Header */}
        <div className="w-full p-4 flex justify-between">
          <div className="flex items-center dark:text-white text-2xl font-bold">
            <Droplet className="text-blue-400"></Droplet>CHROMOJET
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className=" hover-transition p1"
          >
            <X />
          </button>
        </div>
        {/* Main content Starts here */}
        <div className="px-6 py-3 text-lg flex flex-col gap-4">
          <h1 className="font-semibold ">Products</h1>
          <NavLink to="products" className="hover-transition w-fit px-3 ">
            All Products
          </NavLink>
          <h3 className="hover-transition w-fit px-3 ">Printers</h3>
          <h3 className="hover-transition w-fit px-3 ">Ink Cartridges</h3>
          <h3 className="hover-transition w-fit px-3 ">Toner Cartridges</h3>
          <h3 className="hover-transition w-fit px-3 ">Paper & Supplies</h3>
          <h3 className="hover-transition w-fit px-3 ">Others</h3>
        </div>

        <div className="px-6 py-3 text-lg flex flex-col gap-4">
          <h1 className="font-semibold">About Us</h1>
          <NavLink
            to="contact"
            className="hover-transition w-fit px-3 hover:underline"
          >
            Contact Us
          </NavLink>
          <h3 className="hover-transition w-fit px-3 ">Support</h3>
          <h3 className="hover-transition w-fit px-3 ">Blog</h3>

          <div className="flex gap-6 mt-3 text-3xl">
            <a href="#">
              <FontAwesomeIcon
                className="hover-transition"
                icon={faFacebook}
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="hover-transition"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="hover-transition"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="hover-transition"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <button className=" px-4 ml-6 py-2 border hover-transition mt-2 border-gray-300 rounded-xl">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
