import React, { useState } from 'react';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = pictures.length;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    const currentImage = pictures[currentIndex];

    return (
        <div className="carousel">
            {totalImages > 1 && (
                <i
                    className="fas fa-chevron-up"
                    onClick={handlePrevClick}
                    style={{ transform: 'rotate(270deg)' }}
                ></i>
            )}
            <img src={currentImage} alt="Logement" className="carousel-image" />
            {totalImages > 1 && (
                <i
                    className="fas fa-chevron-up"
                    onClick={handleNextClick}
                    style={{ transform: 'rotate(90deg)' }}
                ></i>
            )}
            {totalImages > 1 && (
                <div className="carousel-counter">
                    {currentIndex + 1}/{totalImages}
                </div>
            )}
        </div>
    );
}

export default Carousel;
