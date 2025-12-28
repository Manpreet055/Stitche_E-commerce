const generatePriceDetails = (cart) => {
  //calculate the  base price first
  const Sum = cart.reduce(
    (acc, p) => acc + (p?.product?.price || 0) * p.qty,
    0,
  );

  //perform all math using  numbers
  const PriceAfterDiscount = Sum * 0.9;
  const Discount = Sum - PriceAfterDiscount;
  const DeliveryFee = Sum * 0.01;
  const Total = PriceAfterDiscount + DeliveryFee;

  // convert to fixed strings only at the end for the UI
  return {
    sumofProductsPrice: Sum.toFixed(2),
    priceAfterDiscount: PriceAfterDiscount.toFixed(2),
    discount: Discount.toFixed(2),
    deliveryFee: DeliveryFee.toFixed(2),
    subTotal: Total.toFixed(2),
  };
};

export default generatePriceDetails;
