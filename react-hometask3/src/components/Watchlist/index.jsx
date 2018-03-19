import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import WatchlistCard from "../WatchlistCard";

const Watchlist = ({...rest}) => {
    return (
        <div className="Watchlist">
            <h2 className="Watchlist__title">watchlist</h2>
            {!rest.watchlist.length && <p className="Watchlist__msg">Add movies to watchlist...</p>}
            {rest.watchlist.map(movie => {
                return (
                <WatchlistCard key={movie.id}{...movie}{...rest}/>
            )
        })}
        </div>
    );
};

Watchlist.propTypes = {

};

export default Watchlist;
