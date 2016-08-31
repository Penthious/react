import React from 'react';

const Layout = (props) => (
    <div className="app-container">
        {props.children}
    </div>
);

Layout.propTypes = {
    children: React.PropTypes.element.isRequired,
};

export default Layout;
