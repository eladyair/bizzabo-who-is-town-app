import React from 'react';
import { Link } from 'react-router-dom';

// Semantic Components
import { Header } from 'semantic-ui-react';

const Heading = ({ isLink, path }) => {
    if (isLink) {
        return <Header as={Link} to={path} size='huge' content="Who's In Town?" style={{ display: 'inline-block', marginBottom: 10 }} />;
    } else {
        return <Header as='h1' size='huge' content="Who's In Town?" />;
    }
};

export default Heading;
