import handleApiError from "./handleApiError";
import axios from "axios";
import api from "../utils/api";
export const fetchProducts = async (
  query,
  setLoadingState,
  setError,
  setTotalPages,
  setProducts,
  currentPage,
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
    });
    const data = response.data;
    setProducts(data.products);
    setTotalPages(data.totalPages);
  } catch (error) {
    handleApiError(error);
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export const fetchProductById = async (id, setLoadingState, setError) => {
  try {
    setLoadingState(true);
    const response = await api.get(`/api/products/${id}`);
    let data = response.data.data;
    return data;
  } catch (error) {
    handleApiError(error);
    setError(error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export const toggleFeatured = async (
  _id,
  isFeatured,
  loadingState,
  setFeatured,
) => {
  try {
    loadingState(true);
    const response = await api.patch(`/products`, { _id, isFeatured });

    const data = response.data;
    const newValue = data?.isFeatured ?? isFeatured;
    setFeatured(newValue);
  } catch (error) {
    setFeatured(!isFeatured);
    handleApiError(error);
    throw error;
  } finally {
    loadingState(false);
  }
};
