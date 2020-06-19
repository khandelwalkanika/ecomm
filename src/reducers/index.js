import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});

/* Root reducer */
/* We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer. that is index.js */
