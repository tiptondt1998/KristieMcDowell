import React, { useState } from 'react';

function ListingForm({ onAddListing }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new listing object
    const newListing = {
      title,
      price,
      location,
      image,
    };

    // Call the callback function to add the new listing
    onAddListing(newListing);

    // Clear the form fields
    setTitle('');
    setPrice('');
    setLocation('');
    setImage('');
  };

  return (
    <div className="listing-form">
      <h2>Add New Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Add Listing</button>
      </form>
    </div>
  );
}

export default ListingForm;
