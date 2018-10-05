import { LOAD_NEWS, SEARCH_NEWS } from './actionType';
import NYT_API_KEY from '../config/nytApiKey';

const NYT_STEM = 'https://api.nytimes.com/svc/topstories/v2/technology.json';

export const loadNews = () => {
    const request = fetch(`${NYT_STEM}?api-key=${NYT_API_KEY}`);
    return ({
        type: LOAD_NEWS,
        payload: request.then(response => response.json())
    });
};

export const searchNews = searchTerm => ({
    type: SEARCH_NEWS,
    payload: searchTerm
});