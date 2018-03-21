import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WatchlistCard = ({id, poster_path, title, release_date, vote_average, onWatchCardClick}) => {
    let image = (`https://image.tmdb.org/t/p/w300/${poster_path}`);
    return (
        <div className="WatchlistCard" id={id}>
            <img src={image} alt="" className="WatchlistCard__img"/>
            <div className="WatchlistCard__body">
                <h3 className="WatchlistCard__title">{title}</h3>
                <p className="WatchlistCard__release">Released: {release_date}</p>
                <p className="WatchlistCard__rating">Rating: {vote_average}</p>
                <button className="WatchlistCard__btn" onClick={() => onWatchCardClick(id)}>-</button>
            </div>
        </div>
    );
};

WatchlistCard.propTypes = {

};

export default WatchlistCard;
