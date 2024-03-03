import './Footer.css';
import Icon from '@mdi/react';
import { mdiTwitter, mdiFacebook, mdiYoutube, mdiLinkedin} from '@mdi/js';

function Footer() {
	return (
		<div className="footer-container">
			<footer className="footer bg-dark">
				<div className="social">
					<a href="#"><Icon path={mdiTwitter} size={2} /></a>
					<a href="#"><Icon path={mdiFacebook} size={2} /></a>
					<a href="#"><Icon path={mdiYoutube} size={2} /></a>
					<a href="#"><Icon path={mdiLinkedin} size={2} /></a>
				</div>
				<p>Copyright &copy; 2024 - CarRent USA, Inc. All Rights Reserved. </p>
				<div><img src={require("../../assets/images/navbarlogo.png")} className="logo" /></div>
			</footer>
		</div>
	)
}

export default Footer;