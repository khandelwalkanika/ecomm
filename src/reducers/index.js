import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import productListingReducer from "./productListingReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  lists: productListingReducer,
});

/* Root reducer */
/* We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer. that is index.js */
