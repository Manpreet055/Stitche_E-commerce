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

  const { images = [] } = media || {};

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
      <div className="w-full p-3 sm:p-6 flex flex-col md:flex-row items-center md:items-start  gap-7 justify-center">
        <CarauselComp id={id} loadingState={loadingState} images={images} />
        <ProductBasicDetails product={product} />
        <ul className="xl:hidden px-2 flex text-theme h-full my-8 flex-col gap-2 ">
          <h2 className="text-xl font-bold ">Key Features</h2>

          <li className="font-medium flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Premium quality materials for long-lasting durability</span>
          </li>

          <li className="font-medium flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Comfortable fit designed for everyday wear</span>
          </li>

          <li className="font-medium flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Easy care and maintenance instructions included</span>
          </li>

          <li className="font-medium flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Available in multiple sizes and color options</span>
          </li>
        </ul>
      </div>
      <SimilarProducts category={category} />
      <CustomerReview />
    </section>
  );
};

export default ProductDetailsPage;
