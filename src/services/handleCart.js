import handleApiError from "./handleApiError";

export const addProductToCart = async (api, cartData) => {
  try {
    await api.patch(`/cart`, cartData);
  } catch (error) {
    handleApiError(error);
  }
};

export const removeProductFromCart = async (api, productId) => {
  try {
    await api.delete(`/cart`, {
      params: { productId },
    });
  } catch (error) {
    handleApiError(error);
  }
};

export const updateCartQty = async (api, product, qty) => {
  try {
    await api.patch(`/cart/update`, { product, qty });
  } catch (error) {
    handleApiError(error);
  }
};
