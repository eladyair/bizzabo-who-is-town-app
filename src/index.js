import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// Styles
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// Components
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
