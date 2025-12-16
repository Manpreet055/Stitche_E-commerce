import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const loginUser = async (
  data,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);

    const response = await axios.post(`${uri}/users/login`, data);
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
    const response = await axios.post(`${uri}`, formData);
    const token = response.data.token;
    setLoadingState(false);
    return token;
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
