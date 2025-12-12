import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const handleCart = async (
  cartData,
  setLoadingState = () => {},
  setError = () => {},
) => {
  const userId = localStorage.getItem("userId") || "";
  try {
    setLoadingState(true);
    const response = await axios.patch(`${uri}/users/cart/${userId}`, [
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
