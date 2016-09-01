import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const { func, bool, string } = PropTypes;

class Header extends Component {
    static propTypes = {
        showSearch: bool,
        handleSearchTermChange: func,
        searchTerm: string,
    };

    handleSearchTermEvent = (e) => {
        this.props.handleSearchTermChange(e.target.value);
    };

    render() {
        let utilSpace;
        if (this.props.showSearch) {
            utilSpace = (<input
                className="search-input"
                placeholder="Search" type="text"
                value={this.props.searchTerm}
                onChange={this.handleSearchTermEvent}
            />);
        } else {
            utilSpace = (
                <h2 className="header-back">
                    <Link to="/search">
                        Back
                    </Link>
                </h2>
            );
        }
        return (
            <header className="header">
                <h1 className="brand">
                    <Link to="/" className="brand-link">
                        svideo
                    </Link>
                </h1>
                {utilSpace}
            </header>
        );
    }
}

//  Header.propTypes = {
//    showSearch: bool,
//    handleSearchTermChange: func,
//    searchTerm: string,
//  };
Header.defaultProps = {};

export default Header;
