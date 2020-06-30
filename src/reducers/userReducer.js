// GET_LISTS
import {
  INCREMENT_ITEM,
  CART_ITEM,
  DELETE_ITEM,
  SET_PRICE,
  PLACE_ORDER,
} from "../actions/types";
const initialState = {
  productData: [],
  cart: [],
  totalPrice: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
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
}
