import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducers";
export default combineReducers({
  productData: productReducer,
  auth: authReducer,
});

/* Root reducer */
/* We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer. that is index.js */
