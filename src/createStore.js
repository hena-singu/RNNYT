import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import newsFeedReducer from './reducers/newsFeedReducer';
import searchNewsReducer from './reducers/searchNewsReducer';

// const middleware = applyMiddleware(
//     thunk,
//     createLogger({collapsed:true}),
//     routerMiddleware(broserHistory)
// );
//const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        combineReducers({
            newsFeedReducer,
            searchNewsReducer
        }),
        initialState,
        //applyMiddleware(logger)
    )
);