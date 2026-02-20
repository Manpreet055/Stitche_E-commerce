import api from "../utils/api";
export const fetchProducts = async (
  query,
  setLoadingState = () => {},
  setError = () => {},
  setTotalPages,
  setProducts,
  currentPage,
  signal = null,
) => {
  const { limit, sort, filters } = query;
  try {
    setLoadingState(true);
    const response = await api.get(`/products`, {
      params: {
        page: currentPage,
        limit,
        sortField: sort.sortField,
        sortingOrder: sort.sortingOrder,
        ...filters,
      },
      signal,
    });
    const data = response.data;
    setProducts(data.products);
    setTotalPages(data.totalPages);
  } catch (error) {
    if (error.code === "ERR_CANCELED") return;
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export const fetchProductById = async (
  id,
  setLoadingState = () => {},
  setError = () => {},
  signal,
) => {
  try {
    setLoadingState(true);
    const response = await api.get(`/products/${id}`, { signal });
    let data = response.data.data;
    return data;
  } catch (error) {
    if (error.code === "ERR_CANCELED") return;
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};
