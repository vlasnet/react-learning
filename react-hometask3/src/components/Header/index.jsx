import React from 'react';
import Navigation from 'components/Navigation';
import './styles.css';

const Header = ({text}) => (
    <header className="Header">
        <h1 className="Header__logo">{text}</h1>
        <Navigation/>
    </header>
);

export default Header;