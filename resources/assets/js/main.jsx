import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Search from './Search';
import Layout from './Layouts';
import Details from './Details';
import { store } from './Store';

const { shows } = require('../../../public/data');

class App extends React.Component {
    assignShow(nextState, replace) {
        const showArray = shows.filter((show) => show.imdbID === nextState.params.id);
        if (showArray.length < 1) {
            return replace('/');
        }
        Object.assign(nextState.params, showArray[0]);
        return nextState;
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Landing} />
                        <Route path="/search" component={Search} shows={shows} />
                        <Route path="/details/:id" component={Details} onEnter={this.assignShow} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
