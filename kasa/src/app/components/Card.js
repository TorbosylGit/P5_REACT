import React from 'react';

function Card({ title, cover }) {
  return (
    <div>
    <div className="card">
      <div className="card-image-container">
        <img src={cover} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
    </div>
  );
}


export default Card;
