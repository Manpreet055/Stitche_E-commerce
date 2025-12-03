import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const searchProducts = async (
  query,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const response = await axios.get(`${uri}/products/search?query=${query}`);
    const data = response.data.products;
    return data;
  } catch (error) {
    setError(error);
    handleApiError(error);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export default searchProducts;
