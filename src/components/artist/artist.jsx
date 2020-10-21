import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading, selectIsArtistExist, selectArtistDetails, selectArtistEvents } from '../../redux/artist/artist.selectors';

// Semantic Components
import { Header, Grid, Image, Card } from 'semantic-ui-react';

// Components
import EventsList from '../events-list/events-list';

const Artist = ({ isLoading, isArtistExist, artist, events }) => {
    if (!isLoading && artist) {
        const { name, image_url, upcoming_event_count } = artist;
        return (
            <Grid style={{ marginTop: 20 }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image float='right' size='big' src={image_url} />
                    </Grid.Column>
                    <Grid.Column width={12} stretched>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>{name}</Card.Header>
                                <Card.Meta>Upcoming Events: {upcoming_event_count}</Card.Meta>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <EventsList events={events} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    } else if (!isArtistExist) {
        return <Header as='h2' size='medium' content='Artist was not found'></Header>;
    } else {
        return '';
    }
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    isArtistExist: selectIsArtistExist,
    artist: selectArtistDetails,
    events: selectArtistEvents
});

export default connect(mapStateToProps)(Artist);
