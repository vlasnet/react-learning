import React from 'react';
import './styles.css';

class Navigation extends React.Component {
    render() {
        return (
            <ul className="Navigation">
                <li className="Navigation__item">
                    <a className="Navigation__link" href="">about</a>
                </li>
                <li className="Navigation__item">
                    <a className="Navigation__link" href="">browse</a>
                </li>
                <li className="Navigation__item">
                    <a className="Navigation__link" href="">login</a>
                </li>
            </ul>
        )
    }
}

export default Navigation;