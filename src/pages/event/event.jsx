import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectArtistEvents } from '../../redux/artist/artist.selectors';
import { selectFavoriteEvents } from '../../redux/favorite/favorite.selectors';
import { toggleFavorite } from '../../redux/favorite/favorite.actions';

// Semantic Components
import { Grid, Header, Card, Checkbox, Button } from 'semantic-ui-react';
import moment from 'moment';

// utils
import { getArtistEvent, checkIfFavorite } from '../../utils/utils';

const EventPage = ({ match, history, location, events, toggleFavorite, favorites }) => {
    const [isChecked, setIsChecked] = useState(false);

    const selectedEvent = getArtistEvent(match.params.id, events, favorites);

    useEffect(() => {
        setIsChecked(checkIfFavorite(selectedEvent, favorites));
    }, []);

    const handleToggle = (e, data) => {
        setIsChecked(data.checked);
        toggleFavorite({ isChecked: data.checked, event: selectedEvent });
        history.push('/');
    };

    return (
        <Grid style={{ marginTop: 20 }} padded='vertically'>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Header as='h2' size='large' content='Event Details' />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Checkbox label='Add to favorite' onClick={handleToggle} checked={isChecked} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Date</Card.Header>
                            <Card.Meta>{moment(selectedEvent.datetime).fromNow()}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Description</Card.Header>
                            <Card.Meta>{selectedEvent.description}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Lineup</Card.Header>
                            {selectedEvent.lineup.map((l, index) => (
                                <Card.Meta key={index}>{l}</Card.Meta>
                            ))}
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Venu</Card.Header>
                            <Card.Meta>Country: {selectedEvent.venue.country}</Card.Meta>
                            <Card.Meta>City: {selectedEvent.venue.city}</Card.Meta>
                            <Card.Meta>Name: {selectedEvent.venue.name}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Offers</Card.Header>
                            <Card.Group style={{ marginTop: 10 }}>
                                {selectedEvent.offers.map((offer, index) => (
                                    <Card key={index}>
                                        <Card.Content>
                                            <Card.Meta>Status: {offer.status}</Card.Meta>
                                            <Card.Meta>Type: {offer.type}</Card.Meta>
                                            <Card.Meta>
                                                <a href={offer.url}>
                                                    <Button primary>Get Tickets</Button>
                                                </a>
                                            </Card.Meta>
                                        </Card.Content>
                                    </Card>
                                ))}
                            </Card.Group>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    events: selectArtistEvents,
    favorites: selectFavoriteEvents
});

const mapDispatchToProps = dispatch => ({
    toggleFavorite: favDetails => dispatch(toggleFavorite(favDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
