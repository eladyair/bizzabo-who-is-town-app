import favorites from '../../components/favorites/favorites';
import { TOGGLE_FAVORITE } from '../types';

const initialState = {
    favorites: []
};

const favoriteReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_FAVORITE:
            const isChecked = payload.isChecked;

            if (isChecked) {
                const updatedFavorites = [...state.favorites];
                updatedFavorites.push(payload.event);
                return {
                    favorites: [...updatedFavorites]
                };
            } else {
                const updatedFavorites = state.favorites.filter(e => e.id !== payload.event.id);

                return {
                    favorites: [...updatedFavorites]
                };
            }
        default:
            return state;
    }
};

export default favoriteReducer;
