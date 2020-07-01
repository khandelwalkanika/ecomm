// import { GET_PRODUCT } from "../actions/types";
import { GET_ALL_PRODUCTS, GET_PRODUCT } from "./../actions/types";
const initialState = {
  productData: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state };
    case GET_ALL_PRODUCTS:
      return { ...state, productData: action.payload.products };
    default:
      return state;
  }
};

export default productReducer;
