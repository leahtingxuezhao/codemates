import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from "./authReducer";
// import postReducer from "./postReducer";
import promiseMiddleware from "redux-promise-middleware";

const rootReducer = combineReducers({
  authReducer
  // postReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
