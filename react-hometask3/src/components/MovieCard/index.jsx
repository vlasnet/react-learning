import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MovieCard = ({id, poster_path, title, overview, vote_average, release_date, onCardClick}) => {
    let img = (`https://image.tmdb.org/t/p/w300/${poster_path}`);
    const handleClick = () => {
        onCardClick(id);
    };

    return <div className="MovieCard" id={id}>
        <span className="MovieCard__rating">{vote_average}</span>
        <img src={img} alt="" className="MovieCard__poster"/>
        <div className="MovieInfo">
            <h2 className="MovieInfo__title">{title}</h2>
            <p className="MovieInfo__descr">{overview.length > 100 ? overview.slice(0, 100) + "..." : overview}</p>
            <p className="MovieInfo__release">Release date: {release_date}</p>
        </div>
        <button className="MovieCard__btn" onClick={handleClick}>+</button>
    </div>
};

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    onCardClick: PropTypes.func.isRequired
};

export default MovieCard;