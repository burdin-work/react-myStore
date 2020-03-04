// В этом файле происходит процесс сборки всех компонентов и подключение приложения в html-страницу

import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import {Container} from "semantic-ui-react";
import createStore from './store';

import Navigation from './components/navigation/Navigation';
import Menu from './containers/Menu';
import Main from './containers/Main';

import About_us from './components/navigation/About_us';
import Delivery from './components/navigation/Delivery';
import Contacts from './components/navigation/Contacts';
import Repairs from './components/navigation/Repairs';


// библиотека react-router-dom позволяет точечно изменять разметку при переходе на новый URL
// BrowserRouter - использует html 5 history api и следит за синхронизацией ui с адрессной строкой
// Route - отвечает за отображение ui и следит за тем, чтобы пути между компонентом и адресной строкой совпадали
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

// Provider - вспомогательный метод-компонент для объединения react и redux
import {Provider} from 'react-redux';

// происходит вызов default-функции из ./store.js (создается хранилище), помещение в переменную для использования в общем компоненте Provider
const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <header>
                    <Menu/>
                </header>
                <Container>
                    <Navigation/>
                    <Switch>
                        <Route path="/about_us">
                            <About_us />
                        </Route>
                        <Route path="/delivery">
                            <Delivery />
                        </Route>
                        <Route path="/contacts">
                            <Contacts />
                        </Route>
                        <Route path="/repairs">
                            <Repairs />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>

                    </Switch>
                </Container>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);