import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';

function NavBar() {
    return (
        <nav className="menu">
            <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Home</NavLink>
            <NavLink to="/tips" activeClassName="menu__link_active" className="menu__link">Tips</NavLink>
            <NavLink to="/about-us" activeClassName="menu__link_active" className="menu__link">About us</NavLink>

        </nav>
    )
}

export default NavBar;