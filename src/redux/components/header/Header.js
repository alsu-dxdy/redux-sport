import React from 'react';
import './Header.css';
import Title from '../title/title';
import NavBar from '../nav-bar/NavBar';

function Header() {
    return (
        <div className="header">
            <Title title="Sport App" />
            <NavBar />
        </div>
    )
}

export default Header;