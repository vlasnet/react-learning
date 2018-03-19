import React from 'react';
import './styles.css';

const SearchForm = ({onSearch}) => {
    let query = null;

    const onSubmit = evt => {
        evt.preventDefault();
        onSearch(query);
    };

    const onChange = evt => {
        query = evt.target.value;
    };

    return (
        <div>
            <form className="SearchForm" onSubmit={onSubmit}>
                <input type="text" className="SearchForm__input" placeholder="Search for movies by name..." onChange={onChange} />
                <button className="SearchForm__btn">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
