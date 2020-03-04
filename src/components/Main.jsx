import React, {Component} from 'react';
// Semantic UI (общий компонент)
import {Card} from 'semantic-ui-react';
//axios - библиотека, предназначенная для выполнения HTTP-запросов, основана на промисах
import axios from 'axios';
import Filter from '../containers/Filter';
import Manufacturers from '../containers/Manufacturers';
import BookCard from '../containers/BookCard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";
import About_us from "../index";


class Main extends Component {

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

        const {books, isReady} = this.props;



        return (
            <div>
                <Router>
                            <main>
                                <Manufacturers/>
                                <div>
                                    <Filter/>
                                    <Switch>

                                        <Route path="/models">
                                            <h1>MODELS</h1>
                                        </Route>

                                        <Route path="/">
                                            <Card.Group itemsPerRow={3}>
                                                {!isReady
                                                    ? 'Загрузка...'
                                                    : books.map((book, i) => (
                                                        <BookCard key={i} {...book}/>
                                                    ))
                                                }
                                            </Card.Group>
                                        </Route>

                                    </Switch>
                                </div>
                            </main>
                </Router>
            </div>
        )
    }
}

export default (Main);
