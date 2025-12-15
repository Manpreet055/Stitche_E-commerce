import axios from "axios";
import { useAuth } from "../context/AuthProdvider";
const uri = import.meta.env.VITE_BASE_URI;
const api = axios.create({
  baseURL: uri,
  withCredentials: true,
});

const useRefreshToken = () => {
  const { setAccessToken } = useAuth();

  const refresh = async () => {
    const response = await api.post(
      "/users/refresh-token",
      {},
      {
        withCredentials: true,
      },
    );
    const token = response.data?.token;
    setAccessToken(token);
    return token;
  };
  return refresh;
};
export default useRefreshToken;
