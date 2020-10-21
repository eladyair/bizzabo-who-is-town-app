import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFavoriteEvents } from '../../redux/favorite/favorite.selectors';

// Semantic Components
import { Header, Card } from 'semantic-ui-react';
import moment from 'moment';

const Favorites = ({ favorites }) => {
    return (
        <Fragment>
            <Header as='h1' size='large' textAlign='center' content='Favorites' />
            <Card.Group itemsPerRow={1} style={{ marginTop: 20 }}>
                {favorites.map(f => (
                    <Card key={f.id} as={Link} to={`/events/${f.id}`}>
                        <Card.Content>
                            <Card.Header>{f.venue.city}</Card.Header>
                            <Card.Meta>{moment(f.datetime).fromNow()}</Card.Meta>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    favorites: selectFavoriteEvents
});

export default connect(mapStateToProps)(Favorites);
