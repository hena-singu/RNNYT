import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearthTerm } from '../utils/dataTransformations';

// News input selector
const newsSelector = state => state.news;

// News memoized selectors
const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
);

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
);

// Search input selector
const searchTermSelector = state => state.searchTerm;

// Search memoized selectors
const caseInsensitiveSearchTermSelector = createSelector(
    searchTermSelector,
    searchTerm => searchTerm.toLowerCase()
);

export const searchNewsSelector = createSelector(
    [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
    filterNewsBySearthTerm
);