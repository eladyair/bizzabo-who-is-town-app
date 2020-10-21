import React, { Fragment, useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { startSearch, fetchArtistStart, resetSearch } from '../../redux/artist/artist.actions';

// Semantic Components
import { Icon, Button } from 'semantic-ui-react';

// Styles
import './search-bar.styles.scss';

const SearchBar = ({ startSearch, fetchArtist, resetSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setSearchTerm(value);
    };

    const handleKeyUp = e => {
        if (e.keyCode === 13) {
            findArtist();
        }
    };

    const handleClick = e => {
        findArtist();
    };

    const findArtist = () => {
        startSearch();
        fetchArtist(searchTerm);
        setSearchTerm('');
    };

    const handleReset = () => {
        resetSearch();
    };

    return (
        <Fragment>
            <div className='search-container'>
                <div className='search-field'>
                    <Icon name='search' style={{ marginTop: -10, marginLeft: 5 }} />
                    <input
                        type='text'
                        className='search-input'
                        placeholder='Enter a band or a singer'
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        value={searchTerm}
                    />
                    <Button as='div' primary onClick={handleClick}>
                        Search
                    </Button>
                </div>
            </div>
            <Button as='div' secondary onClick={handleReset} className='resetBtn'>
                Reset
            </Button>
        </Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    startSearch: () => dispatch(startSearch()),
    fetchArtist: searchTerm => dispatch(fetchArtistStart(searchTerm)),
    resetSearch: () => dispatch(resetSearch())
});

export default connect(null, mapDispatchToProps)(SearchBar);
