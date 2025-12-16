import handleApiError from "./handleApiError";

export const addProductToCart = async (api, cartData) => {
  try {
    const cart = await api.patch(`/users/cart`, cartData);
    console.log(cart.data);
  } catch (error) {
    handleApiError(error);
  }
};

export const removeProductFromCart = async (api, productId) => {
  try {
    await api.delete(`/users/cart`, {
      params: { productId },
    });
  } catch (error) {
    handleApiError(error);
  }
};

export const updateCartQty = async (api, product, qty) => {
  try {
    await api.patch(`/users/cart/update`, { product, qty });
  } catch (error) {
    handleApiError(error);
  }
};
