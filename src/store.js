import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index";
import rootSaga from "./sagas/rootSaga";

const initialState = {};
// const middleware = [thunk];

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);
export default store;

/*createStore() creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app. 
Our store also sends application state to our React components, which will react accordingly to that state.*/
