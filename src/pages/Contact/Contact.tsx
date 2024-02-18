import "../Contact/Contact.css";
import Icon from '@mdi/react';
import { mdiTwitter, mdiFacebook, mdiYoutube, mdiLinkedin, mdiWeb, mdiEmail, mdiPhone} from '@mdi/js';

const Contact = () => {
	return (
		<>
		 <section className="contact-page-section">
      <div className="container">
          <div className="sec-title">
              <div className="title">Contact Us</div>
                <h2>Let's Get in Touch.</h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                
                    <div className="form-column col-md-8 col-sm-12 col-xs-12">
                      <div className="inner-column">
                          
                            <div className="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="name" value="" placeholder="Name" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="email" name="email" value="" placeholder="Email" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="subject" value="" placeholder="Subject" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="phone" value="" placeholder="Phone" required/>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                            <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className="info-column col-md-4 col-sm-12 col-xs-12">
                      <div className="inner-column">
                          <h2>Contact Info</h2>
                            <ul className="list-info">
                              <li><Icon path={mdiWeb} size={1} /> No:15 Şişli/İstanbul</li>
                                <li><Icon path={mdiEmail} size={1} /> rentacarpair9@gmail.com</li>
                                <li><Icon path={mdiPhone} size={1} /> 02125265588</li>
                            </ul>
                            <ul className="social-icon-four">
                                <li className="follow">Follow on: </li>
                                <li><a href="#"><Icon path={mdiTwitter} size={2} /></a></li>
                                <li><a href="#"><Icon path={mdiFacebook} size={2} /></a></li>
                                <li><a href="#"><Icon path={mdiYoutube} size={2} /></a></li>
                                <li><a href="#"><Icon path={mdiLinkedin} size={2} /></a></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
		</>
	);
}

export default Contact;