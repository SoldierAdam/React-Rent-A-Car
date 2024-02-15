import "../About/About.css";
import {Link}  from "react-router-dom";

const About = () => {
	return (
		<div>
			<div className="container">

				<div className="about">
					<div className="left">
						<h1>About us</h1>
						<hr />
						<p>Welcome to [Company Name], your premier destination for convenient and reliable car rentals. At [Company Name], we understand the importance of having access to quality vehicles when you need them most. Whether you're traveling for business or pleasure, we are committed to providing you with top-notch service and a diverse selection of vehicles to suit your needs.</p>
						<p>At the heart of our service is our dedication to customer satisfaction. Our team works tirelessly to ensure that every aspect of your rental experience is smooth and hassle-free. From the moment you make your reservation to the time you return your vehicle, we strive to exceed your expectations at every turn.With a wide range of vehicles including compact cars, sedans, SUVs, and luxury vehicles, we have something for every traveler and every occasion. Whether you need a fuel-efficient car for a weekend getaway or a spacious SUV for a family road trip, we have the perfect vehicle for you.</p>
					</div>
					<div className="right">
						<img src="" />
					</div>
					<div className="clear"></div>
				</div>

				<div className="mission">
					<div className="left">
						<img src="" />
					</div>
					<div className="right">
						<h1>Mission Statement</h1>
						<hr />
						<p></p>
						<p>At [Company Name], we prioritize transparency and integrity in all our dealings. Our pricing is competitive and upfront, with no hidden fees or surprises. We believe in making the rental process simple and straightforward, so you can focus on enjoying your journey.

Thank you for choosing [Company Name] for your car rental needs. We look forward to serving you and providing you with a memorable and enjoyable travel experience.</p>
                        <p>For inquiries or reservations, please contact us at <Link to="/contact" className="login-button">Contact </Link></p>
					</div>
					<div className="clear"></div>
				</div>

					<div className="our-team">
						<h1>Our Team<hr/></h1>
					</div>
				<div className="team">

					<div className="card">
						<div className="circle-container">
						</div>
						<h2>Bilal Ekinci</h2>
						<h4>Corporate Partner</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>

					<div className="card">
						<div className="circle-container">
						</div>
						<h2>Ayşenur Şaşmaz</h2>
						<h4>Corporate Partner</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>

					<div className="card">
						<div className="circle-container">
						</div>
						<h2>Zeynep Ozan</h2>
						<h4>Corporate Partner</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>

					<div className="card">
						<div className="circle-container">
						</div>
						<h2>Erman İskender</h2>
						<h4>Corporate Partner</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>

					<div className="card">
						<div className="circle-container">
						</div>
						<h2>A. Cemil Vançelik</h2>
						<h4>Corporate Partner</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>

				</div>

			</div>
		</div>
	);
}

export default About;