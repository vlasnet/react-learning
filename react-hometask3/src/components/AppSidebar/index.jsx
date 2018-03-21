import React from 'react';
import './styles.css';

const AppSidebar = (props) => {
    return (
        <div className="App__sidebar">
            {props.children}
        </div>
    );
};

export default AppSidebar;
