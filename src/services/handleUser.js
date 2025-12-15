import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const fetchUserData = async (
  accessToken,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);
    const response = await axios.get(`${uri}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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
  data,
  setLoadingState = () => {},
  setError = () => {},
) => {
  try {
    setLoadingState(true);

    const response = await axios.post(`${uri}/users/login`, data, {
      withCredentials: true, // REQUIRED
    });
    console.log(response.data.token);
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
    const response = await axios.post(`${uri}/users/signup`, formData);
    const token = response.data.token;
    setLoadingState(false);
    return token;
  } catch (error) {
    handleApiError(error, setError);
  } finally {
    setLoadingState(false);
  }
};
