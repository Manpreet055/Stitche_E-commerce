import axios from "axios";
import handleApiError from "../services/handleApiError";
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
