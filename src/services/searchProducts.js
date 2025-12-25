import axios from "axios";
import handleApiError from "./handleApiError";
import api from "../utils/api";

const searchProducts = async (
  query,
  limit = 4,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const response = await api.get(
      `/products/search?query=${query}&limit=${limit}`,
    );
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
