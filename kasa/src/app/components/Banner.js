import React from 'react';
import { useLocation } from 'react-router-dom';

function Banner() {
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const bannerImage = isHomePage ? '/assets/images/image_1.jpg' : '/assets/images/image_2.jpg';
    const bannerTitleDisplay = isHomePage ? 'block' : 'none';

    return (
        <div 
            className="banner"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <p 
                className="banner-title"
                style={{ display: bannerTitleDisplay }}
            >
                Chez vous, partout et ailleurs
            </p>
        </div>
    );
}

export default Banner;
