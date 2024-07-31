import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return <nav className="navbar">
        <div className="navbar__logo">
            <img src="D_logo.jpg" alt="Logo Kasa" />
        </div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
    </nav>;
}

export default Navbar;