//> нужен 1 reducer, который передается в функцию createStore()

// Обьединяем все reducers в одну функцию
import {combineReducers} from 'redux';
// default функция-reducer из файла ./books.js
import books from './books';
import cart from './cart';
import filter from './filter';

export default combineReducers({
    books,
    cart,
    filter
})