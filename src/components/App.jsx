import React, {Component} from 'react';
// Semantic UI (общий компонент)
import {Container} from 'semantic-ui-react';
import {Card} from 'semantic-ui-react';
// библиотека, предназначенная для выполнения HTTP-запросов, основана на промисах
import axios from 'axios';
import Navigation from './navigation/Navigation';
import Menu from '../containers/Menu';
import Filter from '../containers/Filter';
import Manufacturers from '../containers/Manufacturers';
import BookCard from '../containers/BookCard';

// библиотека react-router-dom позволяет точечно изменять разметку при переходе на новый URL
// BrowserRouter - использует html 5 history api и следит за синхронизацией ui с адрессной строкой
// Route - отвечает за отображение ui и следит за тем, чтобы пути между компонентом и адресной строкой совпадали
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

//библиотека PropTypes  позволяет описать какие типы данные и значения может принимать компонента на вход
import PropTypes from 'prop-types';

// Provider - вспомогательный метод-компонент для объединения react и redux
import {Provider} from 'react-redux';

import About_us from './navigation/About_us';
import Delivery from './navigation/Delivery';




class App extends Component {

    // перед тем как компонент начнет рендерится, мы будем отправлять запрос на сервер чтобы получить нужные данные и перенести их в   хранилище
    componentWillMount() {
        // при помощи метода  connect + функции mapDispatchToProps были перенесены actions в props. Получение каждого action происходит как вызов метода
        const {setBooks} = this.props;
        // производим запрос, в случае успеха - принимаем в функцию содержимое data из объекта с ответом (ES6)
        axios.get('/headphones.json').then(({data}) => {
            // передаём массив с книгами в action
            setBooks(data);

        });
    }

    // при помощи метода connect + функции mapStateToProps были перенесены состояния из хранилища в props
    // берем нужные состояния из props, помещаем их в переменные (ES6)
    render() {

        const {books, isReady, store} = this.props;


        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <header>
                            <Menu/>
                        </header>
                        <Container>
                            <Navigation/>
                            <main>
                                <Manufacturers/>
                                <div>
                                    <Filter/>
                                    <Card.Group itemsPerRow={3}>
                                        {!isReady
                                            ? 'Загрузка...'
                                            : books.map((book, i) => (
                                                <BookCard key={i} {...book}/>
                                            ))
                                        }
                                    </Card.Group>
                                </div>
                            </main>
                        </Container>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default (App);
