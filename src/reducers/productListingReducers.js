// GET_LISTS
import { SET_LISTS } from "../actions/types";
// const isEmpty = require("is-empty");
const initialState = {
  // isAuthenticated: false,
  products: {},
  //loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LISTS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
