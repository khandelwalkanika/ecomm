import {
  GET_PRODUCT,
  INCREMENT_ITEM,
  CART_ITEM,
  SET_PRICE,
  DELETE_ITEM,
} from "./../actions/types";

export const getProducts = () => ({
  type: GET_PRODUCT,
});

// export const getOneProduct = (id) => ({
//   type: GET_ONE_PRODUCT,
//   payload: { id },
// });
export const onAddingToCart = (id) => ({
  type: INCREMENT_ITEM,
  payload: { id },
});

export const yourCart = () => ({
  type: CART_ITEM,
});

export const onDeletingFromCart = (id) => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const setPrice = (price) => ({
  type: SET_PRICE,
  payload: { price },
});
