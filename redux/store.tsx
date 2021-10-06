import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper, Context } from 'next-redux-wrapper';
import { HYDRATE } from 'next-redux-wrapper';

import rootReducer from './reducers';
import postReducer from './reducers/postReducer';

const middleware = [thunk];

const store = createStore(
  rootReducer(),
  composeWithDevTools(applyMiddleware(...middleware))
);
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export default store;

const makeStore = (context: Context) => store;
export const wrapper = createWrapper<Store<State>>(makeStore);
