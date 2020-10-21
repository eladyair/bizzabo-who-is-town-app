import axios from 'axios';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { FETCH_ARTISTS_START } from '../types';
import { fetchArtistSuccess, fetchArtistFailure } from '../artist/artist.actions';

const ARTIST_API = 'https://rest.bandsintown.com/artists/[ARTIST-NAME]/?app_id=5';

const EVENTS_API = 'https://rest.bandsintown.com/artists/[ARTIST-NAME]/events?app_id=5';

export function* onFetchArtistsStart() {
    yield takeLatest(FETCH_ARTISTS_START, onFetchArtistsAsync);
}

export function* onFetchArtistsAsync({ payload }) {
    try {
        const artistApiUrl = ARTIST_API.replace('[ARTIST-NAME]', payload);

        let res = yield axios.get(artistApiUrl);

        // If there are events for this artist
        if (res.data.upcoming_event_count > 0) {
            const eventsApiUrl = EVENTS_API.replace('[ARTIST-NAME]', payload);
            res = yield axios.get(eventsApiUrl);
        }

        yield put(fetchArtistSuccess(res.data));
    } catch (error) {
        yield put(fetchArtistFailure(error));
    }
}

export function* artistsSagas() {
    yield all([call(onFetchArtistsStart)]);
}
