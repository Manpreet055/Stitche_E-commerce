import axios from "axios";
import handleApiError from "./handleApiError";
import api from "../utils/api";

export const loginUser = async (
  data,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);

    const response = await api.post(`/users/login`, data);
    return response.data.token; // access token
  } catch (error) {
    setError(error.response?.data?.msg || error.message);
    throw error;
  } finally {
    setLoadingState(false);
  }
};

export const signupUser = async (
  formData,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const response = await axios.post(`/signup`, formData);
    const token = response.data.token;
    setLoadingState(false);
    return token;
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
