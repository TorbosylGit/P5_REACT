import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar__logo">
                    <picture>
                        <source srcSet="assets/images/M_logo.jpg" media="(max-width: 767.98px)" />
                        <source srcSet="assets/images/D_logo.jpg" media="(min-width: 768px)"/>
                        <img src="assets/images/D_logo.jpg" alt="Logo Kasa" />
                    </picture>
                </div>
            </NavLink>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
    );
}

export default Navbar;