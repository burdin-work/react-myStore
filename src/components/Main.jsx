import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
//axios - library designed to execute HTTP requests is based on promises
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

    // before the component starts rendering, we will send a request to the server to get the necessary data and transfer it to the storage
    componentWillMount() {
        // using the connect + method mapDispatchToProps transferred actions to props. Getting every action happens as a method call
        const {setGoods} = this.props;
        // make a request, if successful, we take the contents of data from the object with the response (ES6)
        axios.get('/headphones.json').then(({data}) => {
            // pass an array to action
            setGoods(data);

        });
    }


    // using the connect + method of the mapStateToProps function, the states were transferred from the repository to props
    // take the necessary states from props, put them in variables (ES6)
    render() {


        const {goods, isReady, numDisplays, goodsLength} = this.props;

        const showButtMoreGoods = (goods, numDisplays) => {
            if (numDisplays < goodsLength) {
                return <MoreGoods/>
            } else {
                return <div></div>
            }
        }

        return (
            <div>
                <main>
                    <Switch>
                        <Route path="/:id" render={(props) => <SelectedItem {...props}/>}/>

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
                                {showButtMoreGoods(goods, numDisplays)}
                            </div>
                        </Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default (Main);
