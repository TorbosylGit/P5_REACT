import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Error404 = () => {
    return (
        <>
            <Navbar />
            <div className="error404">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retournez sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    );
};

export default Error404;
