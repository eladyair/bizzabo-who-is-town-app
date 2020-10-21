import { START_SEARCH, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAILURE, RESET_SEARCH } from '../types';

const initialState = {
    events: [],
    loading: false,
    artist: null,
    isArtistExist: true,
    error: null
};

const artistReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case START_SEARCH:
            return {
                ...state,
                loading: true
            };
        case FETCH_ARTISTS_SUCCESS:
            if (payload.upcoming_event_count === 0) {
                return {
                    ...state,
                    loading: false,
                    artist: payload,
                    events: []
                };
            } else {
                return {
                    ...state,
                    loading: false,
                    artist: null,
                    isArtistExist: payload.length > 0,
                    events: [...payload]
                };
            }

        case FETCH_ARTISTS_FAILURE:
            return {
                ...state,
                events: [],
                loading: false,
                artist: null,
                isArtistExist: false,
                error: payload
            };
        case RESET_SEARCH:
            return {
                events: [],
                loading: false,
                artist: null,
                isArtistExist: true,
                error: null
            };
        default:
            return state;
    }
};

export default artistReducer;
