import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen theme  text-theme flex flex-col items-center justify-center px-6">
      <div className="z-10 text-center space-y-6 max-w-md">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-[#333]">
          404
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-widest">
            Thread Lost
          </h2>
          <p className="text-gray-400 sm:text-lg leading-relaxed">
            The piece you're looking for seems to be missing from our
            collection. It may have been moved or unstitched.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <Link
            to="/"
            className="inline-block px-10 py-4 border border-whie font-medium uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
          >
            Return to Shop
          </Link>
        </div>
      </div>

      {/* Footer Brand subtle text */}
      <p className="absolute bottom-10 text-xs text-gray-600 uppercase tracking-[0.5em]">
        Stitche
      </p>
    </div>
  );
};

export default ErrorPage;
