import React, { Component, PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
import { connector } from './Store';

class Landing extends Component {
    static propTypes = {
        setSearchTerm: PropTypes.func,
        searchTerm: PropTypes.string,
    };
    handleSearchTermEvent = (event) => this.props.setSearchTerm(event.target.value);

    gotoSearch = (event) => {
        hashHistory.push('search');
        event.preventDefault();
    };

    render() {
        return (
            <div className="home-info">
                <h1 className="title">svideo</h1>
                <form onSubmit={this.gotoSearch}>
                    <input
                        className="search" type="text" placeholder="Search"
                        value={this.props.searchTerm} onChange={this.handleSearchTermEvent}
                    />
                </form>
                <Link to="/search" className="browse-all"> or Browse All</Link>
            </div>
        );
    }
}

export default connector(Landing);
