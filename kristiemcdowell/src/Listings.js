import React, { useState, useEffect } from 'react';
import './page.css';
import HouseCard from './HouseCard'; // Import the HouseCard component
import ListingForm from './ListingForm'; // Import the ListingForm component

function Listings() {
  // Define the state to store listings
  const [listings, setListings] = useState([]);

  // Load listings from localStorage when the component mounts
  useEffect(() => {
    const storedListings = JSON.parse(localStorage.getItem('listings')) || [];
    setListings(storedListings);
  }, []);

  // Define the function to handle adding a new listing
  const handleAddListing = (newListing) => {
    // Generate a unique ID for the new listing
    const newId = Math.max(...listings.map((listing) => listing.id), 0) + 1;
    const updatedListing = { ...newListing, id: newId };

    // Update the state with the new listing
    const updatedListings = [...listings, updatedListing];
    setListings(updatedListings);

    // Save updated listings to localStorage
    localStorage.setItem('listings', JSON.stringify(updatedListings));
  };

  // Define the function to handle removing a listing by ID
  const handleRemoveListing = (id) => {
    // Filter out the listing with the specified ID
    const updatedListings = listings.filter((listing) => listing.id !== id);

    // Update the state with the updated listings
    setListings(updatedListings);

    // Save updated listings to localStorage
    localStorage.setItem('listings', JSON.stringify(updatedListings));
  };

  return (
    <div>
      <h1>Listings</h1>
      <div className="house-card-container">
        {/* Render HouseCard components for each listing */}
        {listings.map((listing) => (
          <div key={listing.id}>
            <HouseCard
              image={listing.image}
              title={listing.title}
              price={listing.price}
              location={listing.location}
            />
            {/* Add a "Remove" button that calls handleRemoveListing */}
            <button onClick={() => handleRemoveListing(listing.id)}>Remove</button>
          </div>
        ))}
      </div>
      <ListingForm onAddListing={handleAddListing} /> {/* Pass onAddListing as a prop */}
      <p>
        <a href="https://www.mcdrealty.com/">For more listings, check our main webpage</a>
      </p>
    </div>
  );
}

export default Listings;
