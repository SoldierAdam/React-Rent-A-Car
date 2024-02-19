import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchBar() {
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [location, setLocation] = useState<number | string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const diff =
      new Date(dropoffDate).getTime() - new Date(pickupDate).getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    localStorage.setItem("pickupDate", pickupDate);
    localStorage.setItem("dropoffDate", dropoffDate);
    localStorage.setItem("location",location.toString());
    localStorage.setItem("days", days.toString());
    // sayfayı yenile

    navigate("/cars", { state: { pickupDate, dropoffDate, location, days } });
    window.location.reload();
  };

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const handleCity = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/cars/getLocation"
        );

        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    handleCity();
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
        <select className="form-input-dropdown" onChange={(e) => setLocation(e.target.value)}>
          <option  value="">Select a Location</option>
          {cities.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
