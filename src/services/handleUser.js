import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const fetchUserData = async (
  userId,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const response = await axios.get(`${uri}/users/${userId}`);
    const user = response.data.user;
    setLoadingState(false);
    return user;
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};

export const loginUser = async (
  query,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const response = await axios.get(`${uri}/users/login`, {
      params: {
        ...query,
      },
    });

    const data = response.data;
    setLoadingState(false);
    return data;
  } catch (error) {
    handleApiError(error);
    setError(error.message);
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
    const response = await axios.post(`${uri}/users/signup`, formData);
    const user = response.data.user;
    setLoadingState(false);
    return user;
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
