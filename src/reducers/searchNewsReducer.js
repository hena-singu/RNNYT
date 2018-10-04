import { SEARCH_NEWS } from '../actions/actionType';

export default (state = '', action = {}) => {
    switch (action.type) {
        case SEARCH_NEWS:
            return action.payload;
        default:
            return state;
    }
}