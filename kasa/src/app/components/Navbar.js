import React from "react";
import "./Navbar.css"

function Navbar() {
    return <nav className="navbar">
        <div className="navbar_logo">
            <img src="D_logo.jpg" alt="Logo Kasa" />
        </div>
        <div>Accueil</div>
        <div>A Propos</div>

    </nav>;
}

export default Navbar;