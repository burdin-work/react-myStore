//> Single repository for the project

// {createStore} - method to create storage
import { createStore } from 'redux'
// {applyMiddleware} - method for connecting auxiliary methods (e.g. redux-logger: monitors all changes that occur in the repository + output to the console
import { applyMiddleware } from 'redux'
// redux-logger - the library monitors all changes that occur in the repository + output to the console
import logger from 'redux-logger'
// default from file reducers/index.js
import rootReducer from './reducers'


// Function declaration of storage. the function takes 2 parameters: the reducer function, which returns the new state of the storage and auxiliary storage methods (for example, a logger)
export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store
};
