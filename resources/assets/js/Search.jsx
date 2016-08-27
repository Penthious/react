import React from 'react';
import ShowCard from './ShowCard';

const data = require('../../../public/data');

const Search = () => (
    <div className="container">
        <div className="shows">
            {data.shows.map((show) => (
                <ShowCard {...show} key={show.imdbID} />
                )
            )}
        </div>
    </div>
);


export default Search;
