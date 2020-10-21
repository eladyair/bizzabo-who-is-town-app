export const getArtistEvent = (eventId, events, favorites) => {
    const favEvent = favorites.find(e => e.id === eventId);

    if (favEvent) {
        return favEvent;
    } else {
        return events.find(e => e.id === eventId);
    }
};

export const checkIfFavorite = (selectedEvent, favorites) => {
    const favEvent = favorites.find(f => f.id === selectedEvent.id);

    return favEvent ? true : false;
};
