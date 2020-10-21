import { createSelector } from 'reselect';

const selectFavorite = state => state.favorite;

export const selectFavoriteEvents = createSelector([selectFavorite], favorite => favorite.favorites);
