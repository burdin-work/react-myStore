//> Единое хранилище для проекта

// {createStore} - метод  чтобы создавать хранилище
import { createStore } from 'redux'
// {applyMiddleware} - метод для подключения вспомогательных методов (напр. redux-logger: следит за всеми изменениями, которые происходят в хранилище + вывод в консоль
import { applyMiddleware } from 'redux'
// redux-logger - библиотека следит за всеми изменениями, которые происходят в хранилище + вывод в консоль
import logger from 'redux-logger'
// default из файла reducers/index.js
import rootReducer from './reducers'


// Функция объявление хранилища. функция принимает 2 параметра: функцию-reducer, которая возвращает новое состояние хранилища и вспомогательные методы хранилища (например логгер)
export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store
};
