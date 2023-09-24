import React from 'react';
import "./page.css";
import stockphoto from './images/beautifulhomestockphoto.jpg'

function HouseCard({ image, title, price, location }) {
  return (
    <div className="house-card">
      <img src={image} alt="stock photo" id="housephoto"/>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Location: {location}</p>
    </div>
  );
}

function Listings() {
  return (
    <div>
      <h1>Listings</h1>
      <div className="house-card-container">
        <HouseCard
          image={stockphoto} // Replace with actual image URL
          title="Beautiful Home"
          price="300,000"
          location="City A, State"
        />
        <HouseCard
          image="placeholder2.jpg" // Replace with actual image URL
          title="Cozy Cottage"
          price="200,000"
          location="City B, State"
        />
        <HouseCard
          image="placeholder3.jpg" // Replace with actual image URL
          title="Luxury Mansion"
          price="1,000,000"
          location="City C, State"
        />
        {/* Add more HouseCard components as needed */}
      </div>

    <p>
    <a href="https://www.mcdrealty.com/">For more listings, check our main webpage</a>
    </p>

    </div>
  );
}

export default Listings;

