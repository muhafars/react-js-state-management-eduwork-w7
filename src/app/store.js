// import { combineReducers, compose, createStore } from "redux";
// import counterReducer from "./features/counter/reducers";

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
// let store = createStore(rootReducer, composeEnhancers());
// export default store;
import { createStore, combineReducers, compose } from "redux";
import counterReducer from "./features/counter/reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers);

export default store;
