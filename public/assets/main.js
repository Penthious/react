import React from 'react';
import ReactDom from 'react-dom';

const div = React.DOM.div;
const h1 = React.DOM.h1;

const MyTitle = React.createClass({
    render(){
        return (
            div(null,
                h1(null, 'Check out this other thing!')
            )
        )
    }
});

const MyFirstComponent = (
        div(null,
            React.createElement(MyTitle, null),
            React.createElement(MyTitle, null),
            React.createElement(MyTitle, null),
            React.createElement(MyTitle, null)
        )
    );

ReactDom.render(MyFirstComponent, document.getElementById('app'));


