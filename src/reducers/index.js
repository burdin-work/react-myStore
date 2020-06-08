//> need 1 reducer, which is passed to createStore()

// Combine all reducers into one function
import {combineReducers} from 'redux';
// default function-reducer from file ./goods.js
import goods from './goods';
import cart from './cart';
import filter from './filter';

export default combineReducers({
    goods,
    cart,
    filter
})