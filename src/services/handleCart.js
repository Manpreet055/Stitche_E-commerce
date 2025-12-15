import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;
import api from "../utils/api";

export const addProductToCart = async (
  accessToken,
  cartData,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const cart = await api.patch(`/users/cart`, cartData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(cart.data);
    setLoadingState(false);
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};

export const removeProductFromCart = async (
  accessToken,
  productId,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    await axios.delete(`${uri}/users/cart`, {
      params: { productId },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};

export const updateCartQty = async (
  accessToken,
  product,
  qty,

  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    await axios.patch(
      `${uri}/users/cart/update`,
      { product, qty },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    setLoadingState(false);
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
