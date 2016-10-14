import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './rootReducer';
import {reducer as formReducer} from 'redux-form';
import cartReducer from './reducers/cart';


import routes from './routes';
const reducers = {
  form: formReducer,
  cart: cartReducer,
};
console.dir(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
render(
  <Provider store={store}>
    <Router history= {browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
