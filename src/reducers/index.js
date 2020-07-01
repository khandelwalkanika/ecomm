import { combineReducers } from "redux";
import productReducer from "./productReducer";
export default combineReducers({
  productData: productReducer,
});

/* Root reducer */
/* We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer. that is index.js */
