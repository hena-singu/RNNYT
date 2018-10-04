import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

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
        applyMiddleware(logger)
    )
);