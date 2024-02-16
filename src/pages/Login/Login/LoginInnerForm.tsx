import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Form, FormikProps, FormikErrors } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import FormikInput from '../../../components/FormikInput/FormikInput';


interface FormValues {
	userName: string;
	password: string;
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
	<div className="error-message">{message}</div>
);

const SuccessMessage: React.FC<{ message: string }> = ({ message }) => (
	<div className="success-message">{message}</div>
);

interface InnerFormProps extends FormikProps<FormValues> {
	isSubmitSuccessful: boolean;
  }
  
  const InnerForm: React.FC<InnerFormProps> = ({
	errors, touched, handleSubmit, isSubmitting, isSubmitSuccessful
  }) => {
	const [formSubmitted, setFormSubmitted] = useState(false);
  
	const header = (
	  <div className="header">
		<div className="text"><FaUser /></div>
		<div className="underline"></div>
		<div className="login">
		  Don't have an account?
		  <Link to="/signUp" className="login-button">Sign Up</Link>
		</div>
	  </div>
	);
  
	const SubmitMessage: React.FC<{ isSubmitSuccessful: boolean, errors: FormikErrors<FormValues> }> = ({ isSubmitSuccessful, errors }) => {
	  if (formSubmitted && isSubmitSuccessful) {
		return <SuccessMessage message="Login successful!" />
	  } else if (formSubmitted && Object.keys(errors).length !== 0) {
		return <ErrorMessage message="Login failed! Please check your information and try again." />
	  }
	  return null;
	};
  
	return (
	  <div className="container">
		<Form onSubmit={(e) => {
		  setFormSubmitted(true);
		  handleSubmit(e);
		}} className="form card">
		  {header}
		  <SubmitMessage isSubmitSuccessful={isSubmitSuccessful} errors={errors} />
  
		  <FormikInput name="userName" type="text" placeholder="username" icon={<MdEmail className="icon-email" />} />
		  {touched.userName && errors.userName && <ErrorMessage message={errors.userName} />}
  
		  <FormikInput name="password" type="password" placeholder="Password" icon={<RiLockPasswordFill className="icon-password" />} />
		  {touched.password && errors.password && <ErrorMessage message={errors.password} />}
  
		  <div className='parent-container'>
			<div className="forget-password">
			  Forget Password?{" "}
			  <Link className="forget-password-link" to="/forgot-password">Click Here!</Link>
			</div>
		  </div>
		  <div className="login">
			<button
			  disabled={isSubmitting || !!(errors.userName && touched.userName) || !!(errors.password && touched.password)}
			  type="submit"
			  className={`submit-button ${isSubmitting ? 'loading' : ''}`}
			>
			  {isSubmitting ? 'Logging In...' : 'Login'}
			</button>
		  </div>
		</Form>
	  </div>
	);
  };
  
  export default InnerForm;