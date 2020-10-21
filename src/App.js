import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Semantic Components
import { Container } from 'semantic-ui-react';

// Styles
import './App.css';

// Components
import Home from './pages/home/home';
import Event from './pages/event/event';
import Heading from './components/header/header';

function App() {
    return (
        <Container>
            <Heading isLink={true} path='/' />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/events/:id' component={Event} />
            </Switch>
        </Container>
    );
}

export default App;
