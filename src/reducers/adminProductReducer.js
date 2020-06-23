// GET_LISTS
import {
  ADD_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/types";
const initialState = {
  // isAuthenticated: false,
  productData: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case GET_PRODUCT:
      return {
        ...state,
        productData: action.payload.products,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productData: action.payload.products,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productData: action.payload.products,
      };
    default:
      return state;
  }
}
