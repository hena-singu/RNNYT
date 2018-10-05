import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import newsFeedReducer from './reducers/newsFeedReducer';
import searchNewsReducer from './reducers/searchNewsReducer';

const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        combineReducers({
            news: newsFeedReducer,
            searchTerm: searchNewsReducer
        }),
        initialState,
        applyMiddleware(logger, promiseMiddleware)
    )
);