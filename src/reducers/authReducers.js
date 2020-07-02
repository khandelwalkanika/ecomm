import {
  SET_CURRENT_USER,
  USER_LOADING,
  LOGOUT_USER,
  SET_USER,
  REGISTER_USER,
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  userRole: null,
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        userRole: action.payload.role,
      };
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        userRole: action.payload.role,
      };
    case REGISTER_USER:
      return {
        ...state,
      };

    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        user: {},
        userRole: null,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
/* Reducers are pure functions that specify how application state should change in response to an action. Reducers respond with the new state, which is passed to our store and, in turn, our UI. */
