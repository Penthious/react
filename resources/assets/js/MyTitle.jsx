import React from 'react';

const MyTitle = props => (
    <div>
        <h1 style={{ color: props.color }}>
            {props.title}
        </h1>
    </div>
);

MyTitle.propTypes = {
    title: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
};

export default MyTitle;
