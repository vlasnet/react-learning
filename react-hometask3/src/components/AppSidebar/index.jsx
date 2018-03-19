import React from 'react';
import SearchForm from 'components/SearchForm';
import SearchCategories from "components/SearchCategiries";
import Watchlist from "components/Watchlist";
import PropTypes from 'prop-types';
import './styles.css';

const AppSidebar = ({...rest}) => {
    return (
        <div className="App__sidebar">
            <SearchForm {...rest}/>
            <SearchCategories {...rest}/>
            <Watchlist {...rest}/>
        </div>
    );
};

AppSidebar.propTypes = {
    
};

export default AppSidebar;
