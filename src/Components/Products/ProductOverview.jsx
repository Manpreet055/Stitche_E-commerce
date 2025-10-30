import React, { useContext } from "react";
import { Carousel } from "flowbite-react";
import ApiDataContext from "../../Context/ApiDataContext";
import { useNavigate, useParams } from "react-router-dom";

const ProductOverview = () => {
  const { apiData, loadingState } = useContext(ApiDataContext);
  const { Id } = useParams();
  console.log(Id);
  const productDetails = apiData.find((item) => item.id === parseInt(Id));
  const navigate = useNavigate();

  const Goback = () => {
    navigate(-1);
  };

  // 🔒 Guard Clause - prevents crash on refresh
  if (!productDetails || !productDetails.images) {
    return (
      <div
        role="status"
        className="relative top-[50%] h-full w-full left-[50%]"
      >
        <svg
          aria-hidden="true"
          className="w-24 text-gray-200 animate-spin dark:text-gray-400 fill-rose-800"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <div className="sr-only text-black">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div>
        <button
          onClick={Goback}
          className=" px-6 py-4 ml-2 hover-transition rounded-2xl shadow-lg primary-bg"
        >
          Go Back
        </button>
      </div>
      <div className="w-full pt-6">
        <div className="w-full h-auto mb-10">
          {loadingState ? (
            <div
              role="status"
              className="flex justify-center items-center h-96"
            >
              <svg
                aria-hidden="true"
                className="w-24 text-gray-200 animate-spin dark:text-gray-400 fill-rose-800"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Spinner SVG */}
                <path d="M100 50.5908C100 78.2051..." fill="currentColor" />
                <path d="M93.9676 39.0409C96.393..." fill="currentFill" />
              </svg>
            </div>
          ) : (
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full flex justify-center">
              <Carousel className="max-w-4xl">
                 <div
                    className="flex items-center justify-center h-full w-full bg-gray-100"
                  >
                    <img
                      src={productDetails.images[0]}
                      alt={`${productDetails.title}`}
                      className="object-contain h-full max-w-full"
                    />
                  </div>
                 <div
                    className="flex items-center justify-center h-full w-full bg-gray-100"
                  >
                    <img
                      src={productDetails.images[1]}
                      alt={`${productDetails.title}`}
                      className="object-contain h-full max-w-full"
                    />
                  </div>
              </Carousel>
            </div>
          )}
        </div>

        {/* --- Product Info Section --- */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          {/* Title */}
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {productDetails.title}
            </h1>
          </div>

          {/* Pricing + Add to Cart */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              ${productDetails.price}
            </p>
            <form className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Specification
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-gray-600">
                <li>Hand cut and sewn locally</li>
                <li>Dyed with our proprietary colors</li>
                <li>Pre-washed & pre-shrunk</li>
                <li>Ultra-soft 100% cotton</li>
              </ul>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent primary-bg hover-transition px-8 py-3 text-base font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                Add to Cart
              </button>
            </form>
          </div>

          {/* Description */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-base text-gray-700">
              {productDetails.description}
            </p>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <p className="mt-4 text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
