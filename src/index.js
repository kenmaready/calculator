import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App.js';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const ProvidedApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<ProvidedApp />, document.querySelector("#root"));