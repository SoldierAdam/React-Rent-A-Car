import "./../../styles/style.css";

const Contact = () => {
	return (
		<div>
			<section id="contact-form" className="py-3">
				<div className="container">
					<h1 className="l-heading"><span className="text-primary">Contact</span> Us</h1>
					<p>Please fill out the form below to contact us</p>
					<form action="process.php">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" />
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message"></textarea>
						</div>
						<button type="submit" className="btn">Submit</button>
					</form>
				</div>
			</section>

			<section id="contact-info" className="bg-dark">
				<div className="container">
					<div className="box">
						<i className="fas fa-hotel fa-3x"></i>
						<h3>Location</h3>
						<p>50 Main st, Boston MA</p>
					</div>
					<div className="box">
						<i className="fas fa-phone fa-3x"></i>
						<h3>Phone Number</h3>
						<p>(617) 555-5555</p>
					</div>
					<div className="box">
						<i className="fas fa-envelope fa-3x"></i>
						<h3>Email Address</h3>
						<p>frontdesk@hotelbt.co</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;