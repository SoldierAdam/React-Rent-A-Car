import React from 'react';
import './../styles/style.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Index = () => {
	return (
		<div>

			<title>Hotel BT | Welcome</title>

			<header>

				<div id="showcase">
					<div className="container">
						<div className="showcase-content">
							<h1><span className="text-primary">Enjoy</span> Your Stay</h1>
							<p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, eligendi laboriosam. Repellendus officia harum eaque.</p>
							<a className="btn" href="about.html">About Our Hotel</a>
						</div>
					</div>
				</div>
			</header>

			<section id="home-info" className="bg-dark">
				<div className="info-img"></div>
				<div className="info-content">
					<h2><span className="text-primary">The History</span> Of Our Hotel</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
						aliquam dolor alias iste autem, quaerat magni unde accusantium qui
						fuga placeat quidem quo pariatur, voluptatum, ea sequi? Corporis,
						explicabo quisquam dolor placeat praesentium nesciunt mollitia quos
						nobis natus voluptatum asperiores!
					</p>
					<a href="about.html" className="btn btn-light">Read More</a>
				</div>
			</section>

			<section id="features">
				<div className="box bg-light">
					<i className="fas fa-hotel fa-3x"></i>
					<h3>Great Location</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
				</div>
				<div className="box bg-primary">
					<i className="fas fa-utensils fa-3x"></i>
					<h3>Free Meals</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
				</div>
				<div className="box bg-light">
					<i className="fas fa-dumbbell fa-3x"></i>
					<h3>Fitness Room</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?</p>
				</div>
			</section>

		</div>
	);
}

export default Index;