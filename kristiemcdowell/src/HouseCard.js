// HouseCard.js
import React from 'react';

function HouseCard({ image, title, price, location }) {
  return (
    <div className="house-card">
      <img src={image} alt="stock photo" id="housephoto" />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default HouseCard;
