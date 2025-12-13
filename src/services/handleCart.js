import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const addProductToCart = async (
  cartData,
  setLoadingState = () => {},
  setError = () => {},
) => {
  const userId = localStorage.getItem("userId") || "";
  try {
    setLoadingState(true);
    const response = await axios.patch(`${uri}/users/cart?userId=${userId}`, [
      cartData,
    ]);
    const data = response.data.cart;
    console.log(data);
    setLoadingState(false);
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
export const removeProductFromCart = async (
  productId,
  setLoadingState = () => {},
  setError = () => {},
) => {
  const userId = localStorage.getItem("userId") || "";
  try {
    setLoadingState(true);
    const response = await axios.delete(
      `${uri}/users/cart?userId=${userId}&productId=${productId}`,
    );
    const data = response.data.user;
    console.log(data);
    setLoadingState(false);
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
