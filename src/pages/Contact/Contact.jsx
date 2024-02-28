import "../Contact/Contact.css";
import Icon from '@mdi/react';
import { mdiTwitter, mdiFacebook, mdiYoutube, mdiLinkedin, mdiWeb, mdiEmail, mdiPhone } from '@mdi/js';
import { Bounce, toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik } from 'formik';
import * as Yup from 'yup';


const Contact = () => {

    const notifySuccess = () => {
        toast.success("Now Send Successful", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dwup2pg', 'template_7u7g2s8', form.current, {
        publicKey: 'YUZF43AvM8GQqmMAE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const ContactValidationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required!"),
    email: Yup.string().email("Please enter a valid email information").min(2, "Too Short!").max(50, "Too Long!").required("Required!"),
    message: Yup.string().min(2, "Too Short!").max(500, "Too Long!").required("Required!")
  })

    return (
        <>
        <Formik initialValues={{ name: '', email: '', message: '' }} ContactValidationSchema={ContactValidationSchema}>
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
                                        <form ref={form} onSubmit={sendEmail} method="post" id="contact-form">
                                            <div className="row clearfix">
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="text" name="name" placeholder="Name"/>
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input type="email" name="email" placeholder="Email"/>
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <button onClick={notifySuccess} type="submit" className="theme-btn btn-style-one">Send Now</button>
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
                                        <li><Icon path={mdiPhone} size={1} /> 0212 526 55 88 </li>
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
            </Formik>
            </>
    );
}


export default Contact;