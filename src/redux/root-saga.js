import { all, call } from 'redux-saga/effects';

// Sagas
import { artistsSagas } from './sagas/artist.sagas';

export default function* rootSaga() {
    yield all([call(artistsSagas)]);
}
