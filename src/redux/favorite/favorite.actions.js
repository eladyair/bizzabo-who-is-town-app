import { TOGGLE_FAVORITE } from '../types';

export const toggleFavorite = favDetails => ({
    type: TOGGLE_FAVORITE,
    payload: favDetails
});
