import { START_SEARCH, FETCH_ARTISTS_START, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAILURE, RESET_SEARCH } from '../types';

export const startSearch = () => ({
    type: START_SEARCH
});

export const fetchArtistStart = term => ({
    type: FETCH_ARTISTS_START,
    payload: term
});

export const fetchArtistSuccess = artists => ({
    type: FETCH_ARTISTS_SUCCESS,
    payload: artists
});

export const fetchArtistFailure = error => ({
    type: FETCH_ARTISTS_FAILURE,
    payload: error
});

export const resetSearch = () => ({
    type: RESET_SEARCH
});
