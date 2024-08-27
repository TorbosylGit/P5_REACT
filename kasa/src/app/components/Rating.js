import React from 'react';

const Rating = ({ rating }) => {
    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className='on'>★</span>);
            } else {
                stars.push(<span key={i} className='off'>★</span>); // ☆
            }
        }
        return stars;
    };

    return (
        <div className='rating-container'>
            {renderRatingStars(rating)}
        </div>
    );
};

export default Rating;
