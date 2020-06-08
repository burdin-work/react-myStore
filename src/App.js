import React from 'react';
import './app.css';
import {Container} from "semantic-ui-react";
import Navigation from './components/navigation/Navigation';
import Menu from './containers/Menu';
import Main from './containers/Main';
import AboutUs from "./components/navigation/AboutUs";
import Delivery from './components/navigation/Delivery';
import Contacts from './components/navigation/Contacts';
import Repairs from './components/navigation/Repairs';
import Footer from './components/Footer';

import createStore from './store';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Provider - helper component method for combining react and redux
import {Provider} from 'react-redux';
import Checkout from "./containers/Checkout";


// the default function is called from ./store.js (storage is being created), putting into a variable for use in a common component Provider
const store = createStore();


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <div id="main-container">
                    <div id="main-content">
                        <header>
                            <Menu/>
                        </header>
                        <Container>
                            <Navigation/>
                            <Switch>
                                <Route path="/about_us">
                                    <AboutUs />
                                </Route>
                                <Route path="/delivery">
                                    <Delivery/>
                                </Route>
                                <Route path="/contacts">
                                    <Contacts/>
                                </Route>
                                <Route path="/repairs">
                                    <Repairs/>
                                </Route>

                                <Route path="/checkout" component={Checkout}/>

                                <Route path="/:filter?">
                                    <Main/>
                                </Route>

                            </Switch>
                        </Container>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
};

export default App;