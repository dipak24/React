import React from 'react';


import {Router, Route, IndexRoute, browserHistory } from 'react-router';


import Dashbard from './views/Dashboard';
import TodoView from './views/Todo';



let routes = (
    <Router history = {browserHistory} >
        <Route path={'/'} component={TodoView} />
        <Route path={'/movie'} component={Dashbard} />
    </Router>
);


export default routes;