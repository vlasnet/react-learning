import React from 'react';
import Navigation from 'components/Navigation';
import './styles.css';

class Header extends React.Component {
    render() {
        const {text} = this.props;
        return (
            <header className="Header">
                <h1 className="Header__logo">{text}</h1>
                <Navigation />
            </header>
        );
    }
}

export default Header;