//> нужен 1 reducer, который передается в функцию createStore()

// Обьединяем все reducers в одну функцию
import {combineReducers} from 'redux';
// default функция-reducer из файла ./goods.js
import goods from './goods';
import cart from './cart';
import filter from './filter';

export default combineReducers({
    goods,
    cart,
    filter
})