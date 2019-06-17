import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import home from './modules/home'
import menu from './modules/menu'
import time from './modules/time'
import order from './modules/order'
import mine from './modules/mine'
import shop from './modules/shop'
import cart from './modules/cart'

const reducer = combineReducers({
    home,
    menu,
    time,
    order,
    mine,
    shop,
    cart
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
);

export default store;