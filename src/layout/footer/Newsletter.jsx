import React, { useEffect, useState } from "react";
import { Instagram, Twitter, Github, Mail } from "lucide-react";
import api from "../../utils/api";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const subscribe = async () => {
    try {
      const response = await api.patch("/users/subscribe", email);
      console.log("Subscribed", response);
      setEmail("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full flex  flex-col">
      <h4 className="sm:text-xl font-semibold">Subscribe To Our Newsletter </h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          subscribe();
        }}
        className="flex h-15 py-2 w-fit  "
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border text-xs sm:text-sm px-3 max-w-48  md:max-w-sm  border-r-0 border-gray-500 rounded-l-lg"
        />
        <button
          type="submit"
          className="text-sm flex justify-center border border-gray-500 hover: items-center p-2 sm:p-4 rounded-r-lg"
        >
          Subscribe
        </button>
      </form>
      <ul className="flex justify-evenly sm:mt-5 my-2">
        <h2 className="sm:text-xl font-medium">Join us on:</h2>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <Github />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Mail />
        </li>
      </ul>
    </div>
  );
};

export default Newsletter;
