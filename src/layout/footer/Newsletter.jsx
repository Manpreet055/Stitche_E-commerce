import React, { useEffect, useState } from "react";
import { Instagram, Twitter, Github, Mail } from "lucide-react";
import api from "../../utils/api";
import { useUser } from "../../context/UserDataProvider";
const Newsletter = () => {
  const { user, refetchUser } = useUser();
  const [email, setEmail] = useState("");
  const subscribe = async () => {
    try {
      const response = await api.patch(
        `/users/subscirbe?email=${email || user?.email}`,
      );
      setEmail("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-fit  flex gap-4 flex-wrap xl:flex-col justify-center items-center">
      <div>
        {!user ? (
          ""
        ) : !user?.isSubscribed ? (
          <>
            <h4 className="sm:text-xl font-semibold">
              Subscribe To Our Newsletter{" "}
            </h4>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!email && !email.includes("@")) return;

                subscribe();
                refetchUser();
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
          </>
        ) : (
          <div className="max-w-sm mx-auto sm:mt-10 theme text-theme  overflow-hidden">
            <div className="p-2 flex items-start gap-6 ">
              <div className="flex items-center space-x-3 ">
                <div className="rounded-full theme-transparent p-2">
                  {" "}
                  <Mail />
                </div>
                <div>
                  <h3 className="text-lg text-nowrap font-bold leading-tight">
                    Newsletter Active
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    You're on the list!
                  </p>
                </div>
              </div>

              <button
                className="text-sm border-theme h-fit p-2 rounded-lg font-semibold  text-red-500"
                onClick={() => {
                  subscribe();
                  refetchUser();
                }}
              >
                Unsubscribe
              </button>
            </div>
          </div>
        )}
      </div>

      <ul className="flex gap-6 justify-evenly sm:mt-5 my-2">
        <h2 className="sm:text-xl font-medium">Join us on:</h2>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/Manpreet055">
            <Github />
          </a>
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
