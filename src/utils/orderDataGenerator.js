import generatePriceDetails from "./generatePriceDetails";

const orderDataGenerator = (cart = [], user = []) => {
  const {
    sumofProductsPrice,
    discount,
    deliveryFee,
    priceAfterDiscount,
    subTotal,
  } = generatePriceDetails(cart);
  const userAddress = user?.profile?.address ?? {};
  const { city, postalCode, street, country } = userAddress;

  const date = Date.now(); //Current date for order details
  const randomOrderId = Math.floor(1000000 + Math.random() * 9000000);

  // generating random payment methods and transaction and tracking id
  const paymentMethod = ["card", "paypal", "cod"];
  const randomPaymentMethod = Math.floor(Math.random() * paymentMethod.length);
  const transactionId = Math.floor(100000000 + Math.random() * 900000000);
  const trackingId = Math.floor(100000 + Math.random() * 900000);

  const cartProducts = cart.map((p) => ({
    product: p?.product?._id ?? "undefined",
    qty: p?.qty,
  }));

  // Creating orderData
  const orderData = {
    products: cartProducts,
    totalAmount: sumofProductsPrice,
    priceAfterDiscount,
    subTotal,
    deliveryFee,
    discount,
    payment: {
      method: paymentMethod[randomPaymentMethod],
      transactionId,
    },
    shipping: {
      city,
      postalCode,
      street,
      country,
      trackingId,
    },
    orderStatus: "pending",
  };

  return { orderData, date, randomOrderId };
};

export default orderDataGenerator;
