// import { GET_PRODUCT } from "../actions/types";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  INCREMENT_ITEM,
  SET_PRICE,
  CART_ITEM,
  DELETE_ITEM,
  PLACE_ORDER,
  GET_ONE_PRODUCT,
  GET_THAT_PRODUCT,
} from "./../actions/types";
const initialState = {
  productData: [],
  cart: [],
  totalPrice: 0,
  singleProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_PRODUCT:
      return { ...state };
    case GET_THAT_PRODUCT:
      return { ...state, singleProduct: action.payload.products };
    case GET_PRODUCT:
      return {
        ...state,
      };
    case GET_ALL_PRODUCTS:
      return { ...state, productData: action.payload.products };
    case INCREMENT_ITEM:
      return {
        ...state,
        productData: state.productData.map((item) =>
          item._id === action.payload.id
            ? { ...item, numOfItems: item.numOfItems + 1 }
            : item
        ),
      };
    case SET_PRICE:
      return {
        ...state,
        totalPrice: action.payload.price,
      };
    case CART_ITEM:
      return {
        ...state,
        cart: state.productData.filter((item) => item.numOfItems > 0),
        totalPrice: state.cart.forEach((item) => {
          return state.totalPrice + item.numOfItems * item.price;
        }),
      };

    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item._id !== action.payload.id;
        }),
        productData: state.productData.map((item) =>
          item._id === action.payload.id ? { ...item, numOfItems: 0 } : item
        ),
        totalPrice: state.cart.forEach((item) => {
          return state.totalPrice + item.numOfItems * item.price;
        }),
      };
    case PLACE_ORDER:
      return {
        productData: [],
        cart: [],
      };

    default:
      return state;
  }
};

export default productReducer;
