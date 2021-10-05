import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { HYDRATE } from "next-redux-wrapper";


import rootReducer from "./reducers";
import postReducer from "./reducers/postReducer";

const middleware = [thunk];



const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware(...middleware)));
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export default store;

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
