// GET_LISTS
import {
  ADD_PRODUCT,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  INCREMENT_ITEM,
} from "../actions/types";
const initialState = {
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
    case INCREMENT_ITEM:
      return {
        ...state,
        productData: state.productData.map((item) =>
          item._id === action.payload.id
            ? { ...item, numOfItems: item.numOfItems + 1 }
            : item
        ),
      };
    default:
      return state;
  }
}
