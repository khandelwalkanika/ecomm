// import { GET_PRODUCT } from "../actions/types";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_ONE_PRODUCT,
  UPLOAD_THE_PRODUCT,
} from "./../actions/types";
const initialState = {
  productData: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case UPLOAD_THE_PRODUCT:
      return {
        ...state,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productData: action.payload.products,
      };
    case DELETE_PRODUCT:
      console.log("SOOOO WHAT IS THE STATE NOW?", state);
      return {
        ...state,
        productData: action.payload.products,
      };
    case DELETE_ONE_PRODUCT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
