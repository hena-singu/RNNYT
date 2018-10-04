import { createSelector } from 'reselect';
import { reshapeNewsData } from '../utils/dataTransformations';

// Input selector
const newsSelector = state => state.news;

// Memorized selectors
const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
);

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
);