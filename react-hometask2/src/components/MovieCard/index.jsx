import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MovieCard = ({id, title, description, rating, genres, onClick}) => (
    <div className="MovieCard">
        <button className="MovieCard__btn MovieCard__btn--del" onClick={onClick}>delete</button>
        <div className="MovieInfo">
            <h2 className="MovieInfo__title">{title}</h2>
            <p className="MovieInfo__descr">{description.length > 247 ? description.slice(0, 251) + "..." : description}</p>
            <p className="MovieInfo__rating">Rating: {rating}/10</p>
        </div>
        <ul className="GenresList">
            {genres.map(genre => <li key={id + '-' + genre} className="GenresList__item">{genre}</li>)}
        </ul>
    </div>
)

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default MovieCard;