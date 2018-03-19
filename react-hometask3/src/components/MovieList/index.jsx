import React from 'react';
import MovieCard from 'components/MovieCard';
import PropTypes from "prop-types";
import './styles.css';

const MovieList = ({movies, ...rest}) => {
    return (
    <div className="MovieList">
        {movies.map(movie => (
            <div className="MovieList__item" key={movie.id}>
                <MovieCard
                    {...movie}
                    {...rest}
                />
            </div>
        ))}
    </div>
    )
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    )
};

MovieList.defaultProps = {
    movies: []
};

export default MovieList;