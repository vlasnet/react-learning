import React from 'react';
import MovieCard from 'components/MovieCard';
import PropTypes from "prop-types";
import './styles.css';

const MovieList = ({movies, onCardClick}) => (
    <div className="MovieList">
        {movies.map(movie => (
            <MovieCard
                key={movie.id}
                {...movie}
                onClick={() => {
                    onCardClick(movie.id);
                }}
            />
        ))}
    </div>
);

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ),
    onCardClick: PropTypes.func.isRequired
};

MovieList.defaultProps = {
    movies: []
};

export default MovieList;