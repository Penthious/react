import React, { PropTypes } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';
import { connector } from './Store';

const { string, object } = PropTypes;

const Search = (props) => (
    <div className="container">
        <Header showSearch />
        <div className="shows">
            {props.route.shows
                .filter((show) => `${show.title} ${show.description}`
                    .toUpperCase()
                    .indexOf(props.searchTerm.toUpperCase()) >= 0
                ).map(
                    (show) => <ShowCard {...show} key={show.imdbID} />
                )
            }
        </div>
    </div>
);
Search.propTypes = {
    route: object.isRequired,
    searchTerm: string.isRequired,
};


export default connector(Search);
