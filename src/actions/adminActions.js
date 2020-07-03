import { DELETE_PRODUCT } from "./../actions/types";

export const deleteThisProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: { id },
});

// export const onAddingToCart = (id) => ({
//   type: INCREMENT_ITEM,
//   payload: { id },
// });
