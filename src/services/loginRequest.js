import axios from "axios";
import handleApiError from "./handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

export const loginUser = async (query) => {
  try {
    const response = await axios.get(`${uri}/users/login`, {
      params: {
        ...query,
      },
    });

    const data = response.data.user;
    console.log(data);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};
