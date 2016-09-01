import React, { PropTypes, Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

const { func } = PropTypes;

class Search extends Component {
    static propTypes = {
        route: func.IsRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
    }

    handleSearchTermChange = (searchTerm) => {
        this.setState({ searchTerm });
    };

    render() {
        return (
            <div className="container">
                <Header
                    showSearch
                    handleSearchTermChange={this.handleSearchTermChange}
                    searchTerm={this.state.searchTerm}
                />
                <div className="shows">
                    {this.props.route.shows
                        .filter((show) => `${show.title} ${show.description}`
                            .toUpperCase()
                            .indexOf(this.state.searchTerm.toUpperCase()) >= 0
                        ).map((show) => <ShowCard {...show} key={show.imdbID} />
                        )}
                </div>
            </div>
        );
    }

}


export default Search;
