import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchCategories = ({onCategorySearch}) => {
    return (
        <div className="SearchCategories">
            <button className="SearchCategories__btn" onClick={() => (onCategorySearch('popular'))}>POPULAR</button>
            <button className="SearchCategories__btn" onClick={() => (onCategorySearch('top_rated'))}>TOP RATED</button>
            <button className="SearchCategories__btn" onClick={() => (onCategorySearch('upcoming'))}>UPCOMING</button>
        </div>
    );
};

SearchCategories.propTypes = {};

export default SearchCategories;
