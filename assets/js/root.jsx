import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import _ from 'lodash';

import api from './api';

export default function root_init(node) {
    ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>, node);
}

class Root extends React.Component {
    render() {
        return <h1>Oh my, we're unfinished! come back later.</h1>;
    }
}
