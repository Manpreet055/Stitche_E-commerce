import api from "../utils/api";

const searchProducts = async (
  query,
  limit = 10,
  setLoadingState = () => {},
  setError = () => {},
  signal = null,
) => {
  try {
    setLoadingState(true);
    const response = await api.get(
      `/products/search?query=${query}&limit=${limit}`,
      { signal },
    );
    const data = response.data.products;
    return data;
  } catch (error) {
    if (error.code === "ERR_CANCELED") return;
    setError(error);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export default searchProducts;
