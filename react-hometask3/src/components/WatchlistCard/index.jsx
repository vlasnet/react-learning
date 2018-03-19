import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WatchlistCard = ({id, img, title, release, rating, onWatchCardClick}) => {
    let image = (`https://image.tmdb.org/t/p/w300/${img}`);
    return (
        <div className="WatchlistCard" id={id}>
            <img src={image} alt="" className="WatchlistCard__img"/>
            <div className="WatchlistCard__body">
                <h3 className="WatchlistCard__title">{title}</h3>
                <p className="WatchlistCard__release">{release}</p>
                <p className="WatchlistCard__rating">{rating}</p>
                <button className="WatchlistCard__btn" onClick={() => onWatchCardClick(id)}>-</button>
            </div>
        </div>
    );
};

WatchlistCard.propTypes = {

};

export default WatchlistCard;
