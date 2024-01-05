import { createStore, compose } from "redux";  // Import compose from Redux

import rootReducer from "./reducers/index";

// Use compose to enhance createStore with Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
