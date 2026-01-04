import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/fetchProductsData";
import AsyncBoundary from "../ui/AsyncBoundary";
import CarauselComp from "../layout/productDetails/CarauselComp";
import ProductBasicDetails from "../layout/productDetails/ProductBasicDetails";
import SimilarProducts from "../layout/productDetails/SimilarProducts";
import CustomerReview from "../layout/productDetails/CustomerReview";
import useBackNavigation from "../hooks/useBackNavigation";

const ProductDetailsPage = () => {
  const { BackButton } = useBackNavigation();
  const [product, setProduct] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetchProductById(id, setLoadingState, setError).then(setProduct);
  }, [id]);

  const { category = "", media = {} } = product ?? {};

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
    <section className="h-full w-full my-16 sm:my-20">
      <div className="w-full px-2 sm:px-4 py-2">{BackButton()}</div>
      <div className="w-full p-3 sm:p-6 flex flex-col md:flex-row  gap-7 justify-center">
        <CarauselComp loadingState={loadingState} images={images} />
        <ProductBasicDetails product={product} />
      </div>
      <SimilarProducts category={category} />
      <CustomerReview />
    </section>
  );
};

export default ProductDetailsPage;
