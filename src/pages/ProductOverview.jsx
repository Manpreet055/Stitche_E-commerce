import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../ui/BackButton";
import { fetchProductById } from "../services/fetchProductsData";
import AsyncBoundary from "../ui/AsyncBoundary";
import CarauselComp from "../layout/productDetails/CarauselComp";
import ProductBasicDetails from "../layout/productDetails/ProductBasicDetails";
import SimilarProducts from "../layout/productDetails/SimilarProducts";

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
    <div className="h-full w-full mt-20">
      <BackButton text="Back" />
      <div className="w-full p-6 flex flex-col xl:flex-row  gap-7 justify-center">
        <CarauselComp loadingState={loadingState} images={images} />
        <ProductBasicDetails product={product} />
      </div>
      <SimilarProducts category={category} />
    </div>
  );
};

export default ProductOverview;
