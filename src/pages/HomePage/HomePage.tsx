import React from 'react';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';



const HomePage = () => {

	return (
		<div className="home-page">
			<div className='home-header'>
				<img src={require("../../assets/images/backgroundwebsite.png")} className='image-header' />
				{/* <div className='header-text'>
				<h1 className='showcase-content'><span className='header-colored-text'>Fast & Easy</span> Way To Rent A Car</h1>
				<p className='lead'>We offer a wide range of cars for your convenience. Choose the one that suits your needs the best.</p>
				</div> */}
			</div>
			<SearchBar />
			{/* <Slider /> */}
			<section className="home-section container">
				<h2 style={{ textDecoration: 'underline' }}>Why Choose Us?</h2>
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