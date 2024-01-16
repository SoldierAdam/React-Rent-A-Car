import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission here
  };

  return (
	<form onSubmit={handleSubmit} className="search-bar">
	  <label>
		Pick-up Date
		<input
		  className="form-input"
		  type="date"
		  value={pickupDate}
		  onChange={(e) => setPickupDate(e.target.value)}
		  required
		/>
	  </label>
	  <label>
		Drop-off Date
		<input
		  className="form-input"
		  type="date"
		  value={dropoffDate}
		  onChange={(e) => setDropoffDate(e.target.value)}
		  required
		/>
	  </label>
	  <label>
		Location
		<input
		  className="form-input"
		  type="text"
		  value={location}
		  onChange={(e) => setLocation(e.target.value)}
		  required
		/>
	  </label>
	  <button type="submit">Search</button>
	</form>
  );
}

export default SearchBar;