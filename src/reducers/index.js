import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducers";
import adminReducer from "./adminReducer";
export default combineReducers({
  productData: productReducer,
  auth: authReducer,
  adminCrud: adminReducer,
});

/* Root reducer */
/* We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer. that is index.js */
