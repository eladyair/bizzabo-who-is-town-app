import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Semantic Components
import { Card, Header } from 'semantic-ui-react';
import moment from 'moment';

const EventsList = ({ events }) => {
    if (events.length > 0) {
        return (
            <Fragment>
                <Header as='h1' size='medium' content='Events:'></Header>
                <Card.Group itemsPerRow={3}>
                    {events.map(e => (
                        <Card key={e.id} as={Link} to={`/events/${e.id}`}>
                            <Card.Content>
                                <Card.Header>{e.venue.city}</Card.Header>
                                <Card.Meta>{moment(e.datetime).fromNow()}</Card.Meta>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            </Fragment>
        );
    } else {
        return <Header as='h2' size='large' content='No Upcoming events' />;
    }
};

export default EventsList;
