import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
	const navigate = useNavigate(); 
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

	const diff = new Date(dropoffDate).getTime() - new Date(pickupDate).getTime();
	const days = diff / (1000 * 60 * 60 * 24);
	localStorage.setItem('pickupDate', pickupDate);
	localStorage.setItem('dropoffDate', dropoffDate);
	localStorage.setItem('location', location);
	localStorage.setItem('days', days.toString());
	// sayfayı yenile

	navigate('/cars', { state: { pickupDate, dropoffDate, location, days } });	
	window.location.reload();
};

  const today = new Date().toISOString().split('T')[0];

  return (
	<form onSubmit={handleSubmit} className="search-bar">
	  <label>
		Pick-up Date
		<input
		  className="form-input" type="date" value={pickupDate}
		  onChange={(e) => setPickupDate(e.target.value)}
		  min={today} required />
	  </label>
	  <label>
		Drop-off Date
		<input
		  className="form-input" type="date" value={dropoffDate}
		  onChange={(e) => setDropoffDate(e.target.value)}
		  min={pickupDate} required />
	  </label>
	  <label>
		Location
		<input
		  className="form-input" type="text" value={location}
		  onChange={(e) => setLocation(e.target.value)} required />
	  </label>
	  <button type="submit">Search</button>
	</form>
  );
}

export default SearchBar;