import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';

import Routes from './routes';
import store from './store/configureStore';




ReactDOM.render(<Provider store={store}>
    {Routes}
</Provider>, document.getElementById('root' ) );