import axios from "axios";
import handleApiError from "./handleApiError";
import api from "../utils/api";
const sortData = async (
  schema,
  sortConfig,
  setLoadingState,
  setError,
  setProducts,
  page,
  limit,
) => {
  try {
    setLoadingState(true);
    const response = await api.get(`/api/sort/${schema}`, {
      params: {
        sortingOrder: sortConfig.order,
        sortField: sortConfig.field,
        limit,
        page,
      },
    });
    const sortedData = response.data.sortedData;
    setProducts(sortedData);
    return response.data;
  } catch (err) {
    handleApiError(err);
    setError(err.message || err.msg);
  } finally {
    setLoadingState(false);
  }
};

export default sortData;
