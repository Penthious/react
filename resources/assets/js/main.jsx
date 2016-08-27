import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Landing from './Landing';
import Search from './Search';

const App = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Landing} />
        <Route path="/search" component={Search} />
    </Router>
);

ReactDom.render(<App />, document.getElementById('app'));
