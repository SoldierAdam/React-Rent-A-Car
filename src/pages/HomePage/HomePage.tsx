import React from 'react';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('https://www.sixt.com.tr/storage/cache/0dbb6065ef9782661e4e5089ace294e187a0201d.webp')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
	backgroundPosition: 'center',
  };

  return (
    <div className="home-page">
      <header style={backgroundImageStyle} className="home-header">
        <h1 className='showcase-content'>Welcome to Our <span className='text-primary'>Car Rental</span> </h1>
        <p className='lead'>We offer a wide range of cars for your convenience. Choose the one that suits your needs the best.</p>
      </header>
	  <SearchBar />
      <section className="home-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-car-side"></i>
            <h3>Wide Range of Cars</h3>
            <p>From compact cars for city driving to luxury cars for a comfortable ride, we have it all.</p>
          </div>
          <div className="feature">
            <i className="fas fa-star"></i>
            <h3>Quality Service</h3>
            <p>We strive to provide the best service and meet all your car rental needs.</p>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Safe & Reliable</h3>
            <p>All our cars are regularly serviced and maintained to ensure your safety and comfort.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;