import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware(...middleware)));
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export default store;
