import React, { useContext, useEffect, useState } from "react";
import { Carousel, Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import BackButton from "../ui/BackButton";
import { fetchProductById } from "../services/fetchProductsData";
import AsyncBoundary from "../ui/AsyncBoundary";

const ProductOverview = () => {
  const [product, setProduct] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetchProductById(id, setLoadingState, setError).then((data) =>
      setProduct(data),
    );
  }, [id]);

  const {
    title = "",
    _id = "",
    description = "",
    category = "",
    subCategory = "",
    brand = "",
    sku = "",
    stock = 0,
    quantity = 0,
    price = 0,
    discount = {},
    rating = 0,
    media = {},
    isFeatured = false,
    timestamps = {},
  } = product ?? {};

  const { thumbnail = "", images = [] } = media || {};

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (typeof product !== "object" || Object.keys(product).length === 0) {
    return <AsyncBoundary customMessage="No Product found." />;
  }
  return (
    <div className="h-full w-full">
      <BackButton />
      <div className="w-full pt-6">
        <div className="w-full h-auto mb-10">
          {/* Images Slider*/}
          {loadingState ? (
            <div role="status" className="flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              {/* <Carousel>
                {images.map((img, index) => (
                  <img className="w-full h-full" key={index} src={img} alt="Product img" />
                ))}
              </Carousel> */}
            </div>
          )}
        </div>

        {/* --- Product Info Section --- */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          {/* Title */}
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {title}
            </h1>
          </div>

          {/* Pricing + Add to Cart */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">${price}</p>
          </div>

          {/* Description */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-base text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
