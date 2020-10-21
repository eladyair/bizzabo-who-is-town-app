import { createSelector } from 'reselect';

const selectArtist = state => state.artist;

export const selectIsLoading = createSelector([selectArtist], artist => artist.loading);

export const selectIsArtistExist = createSelector([selectArtist], artist => artist.isArtistExist);

export const selectArtistDetails = createSelector([selectArtist], artist => {
    if (artist.artist) {
        return artist.artist;
    } else if (artist.events[0]) {
        return artist.events[0].artist;
    } else {
        return null;
    }
});

export const selectArtistEvents = createSelector([selectArtist], artist => artist.events);
