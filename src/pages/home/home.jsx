import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../redux/artist/artist.selectors';

// Semantic Components
import { Grid } from 'semantic-ui-react';

// Components
import SearchBar from '../../components/search-bar/search-bar';
import Artist from '../../components/artist/artist';
import Favorites from '../../components/favorites/favorites';
import Loading from '../../components/loading/loading';

const HomePage = ({ isLoading }) => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <SearchBar />
                    {isLoading ? <Loading /> : <Artist />}
                </Grid.Column>
                <Grid.Column width={8}>
                    <Favorites />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading
});

export default connect(mapStateToProps)(HomePage);
