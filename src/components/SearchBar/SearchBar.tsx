import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface City {
	index: number,
  name: string;
}
function SearchBar() {
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [location, setLocation] = useState();
  const [cities, setCities] = useState<City[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const diff =
      new Date(dropoffDate).getTime() - new Date(pickupDate).getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    localStorage.setItem("pickupDate", pickupDate);
    localStorage.setItem("dropoffDate", dropoffDate);
    localStorage.setItem("location", location);
    localStorage.setItem("days", days.toString());
    // sayfayı yenile

    navigate("/cars", { state: { pickupDate, dropoffDate, location, days } });
    window.location.reload();
  };

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const handleCity = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/cars/getLocation`
      );
      setCities(response.data);
    };
  }, []);
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <label>
        Pick-up Date
        <input
          className="form-input"
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          min={today}
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
          min={pickupDate}
          required
        />
      </label>
      <label>
        Location
        <select className="form-input-dropdown">
          <option value="" disabled>
            Select a Location
          </option>
          {cities &&
            cities.map((city, id) => (
              <option key={city.index} value={city.index}>
                {city.name}
              </option>
            ))}
        </select>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
