import React, {Component} from 'react';
// Semantic UI (общий компонент)
import {Card} from 'semantic-ui-react';
//axios - библиотека, предназначенная для выполнения HTTP-запросов, основана на промисах
import axios from 'axios';
import Filter from '../containers/Filter';
import Manufacturers from '../containers/Manufacturers';
import ItemCard from '../containers/Card';
import SelectedItem from '../containers/SelectedItem';
import MoreGoods from '../containers/MoreGoods';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class Main extends Component {

    // перед тем как компонент начнет рендерится, мы будем отправлять запрос на сервер чтобы получить нужные данные и перенести их в   хранилище
    componentWillMount() {
        // при помощи метода  connect + функции mapDispatchToProps были перенесены actions в props. Получение каждого action происходит как вызов метода
        const {setGoods} = this.props;
        // производим запрос, в случае успеха - принимаем в функцию содержимое data из объекта с ответом (ES6)
        axios.get('/headphones.json').then(({data}) => {
            // передаём массив с книгами в action
            setGoods(data);

        });
    }


    // при помощи метода connect + функции mapStateToProps были перенесены состояния из хранилища в props
    // берем нужные состояния из props, помещаем их в переменные (ES6)
    render() {

        const {goods, isReady} = this.props;

        return (
            <div>
                <Router>
                    <main>

                        <Switch>

                            <Route path="/:id" component={SelectedItem}/>


                            <Route path="/">
                                <Manufacturers/>
                                <div>
                                    <Filter/>
                                    <Card.Group itemsPerRow={3}>
                                        {!isReady
                                            ? 'Загрузка...'
                                            : goods.map((item, i) => (
                                                <ItemCard key={i} {...item} />
                                            ))
                                        }
                                    </Card.Group>
                                    <MoreGoods/>
                                </div>
                            </Route>

                        </Switch>
                    </main>
                </Router>
            </div>
        )
    }
}

export default (Main);
