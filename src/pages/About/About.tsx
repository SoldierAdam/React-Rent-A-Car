import React from 'react';
import "./../../styles/style.css";

const About = () => {
  return (
    <div>
		<section id="about-info" className="bg-light py-3">
			<div className="container">
			<div className="info-left">
				<h1 className="l-heading"><span className="text-primary">About</span> Hotel BT</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis illo, similique labore voluptate nulla animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta autem vel nobis minima sit deleniti!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit voluptatem impedit voluptate. Doloribus, voluptas dolore! Cupiditate aliquid sequi deserunt.</p>
			</div>
			<div className="info-right">
			<img src={process.env.PUBLIC_URL + "images/photo-1.jpg"} alt="Hotel BT" className="about-img" />
			</div>
			</div>
		</section>

		<div className="clr"></div>

		<section id="testimonials" className="py-3">
			<div className="container">
			<h2 className="l-heading">What Our Guests Say</h2>
			<div className="testimonial bg-primary">
			<img src={process.env.PUBLIC_URL + "images/person-1.jpg"} alt="John Doe"/>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
			</div>

			<div className="testimonial bg-primary">
			<img src={process.env.PUBLIC_URL + '/images/person-2.jpg'} alt="Sara Williams" />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
				</div>
			</div>
		</section>


    </div>
  );
}

export default About;