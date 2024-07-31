import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <nav className="navbar">
        <div className="navbar__logo">
            <img src="D_logo.jpg" alt="Logo Kasa" />
        </div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
    </nav>;
}

export default Navbar;