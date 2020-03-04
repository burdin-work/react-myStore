// В этом файле происходит процесс сборки всех компонентов и подключение приложения в html-страницу

import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
// default-функция из ./store.js
import createStore from './store';
// контейнер возвращает компонент с новыми данными (здесь они устанавливаются в props)
import App from './containers/App';

// происходит вызов default-функции из ./store.js (создается хранилище), помещение в переменную для использования в общем компоненте Provider
const store = createStore();

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);