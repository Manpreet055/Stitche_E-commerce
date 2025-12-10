import React, { useEffect, useState } from "react";
import Counter from "../../ui/Counter";
import { Trash } from "lucide-react";
import { Spinner } from "flowbite-react";
const ProductRow = ({ products }) => {
  const handleCart = (productsArray) => {
    return productsArray.map((product) => ({
      productId: product._id,
    }));
  };

  const [cart, setCart] = useState(() => handleCart(products));

  const removeProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(() => handleCart(updatedCart));
    console.log(updatedCart);
  };

  return (
    <ul className="flex flex-col gap-2 border border-gray-300 grow rounded-2xl p-4">
      {products.map((product, index) => (
        <li
          key={index + 1}
          className="flex items-center border-t border-gray-300 justify-around py-4 w-full"
        >
          <img
            src={
              product?.media?.thumbnail ? (
                product?.media?.thumbnail
              ) : (
                <Spinner />
              )
            }
            alt="product"
            className="h-20 "
          />
          <div className="flex flex-col justify-center gap-2 mx-4">
            <h2 className="text-lg font-medium">{product?.brand}</h2>
            <p className="">{product?.title}</p>
          </div>
          <Counter />
          <span className=" ml-3 font-medium">${product?.price}</span>
          <button onClick={() => removeProduct(index)}>
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductRow;
