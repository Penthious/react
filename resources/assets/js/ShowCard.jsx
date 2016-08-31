import React from 'react';

const ShowCard = (props) => (
    <div className="show-card">
        <img
            src={`./img/posters/${props.poster}`}
            alt="show-card-img" className="show-card-img"
        />
        <div className="show-card-text">
            <h3 className="show-card-title">{props.title}</h3>
            <h4 className="show-card-year">{props.year}</h4>
            <p className="show-card-description">{props.description}</p>
        </div>
    </div>
);

const stringRequired = React.PropTypes.string.isRequired;

ShowCard.propTypes = {
    poster: stringRequired,
    title: stringRequired,
    year: stringRequired,
    description: stringRequired,
};

export default ShowCard;
