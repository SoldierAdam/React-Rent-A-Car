import React from 'react';
import { FormikProps, Form, Field } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './SignUp.css';

interface FormValues {
	userName: string;
	password: string;
	email: string;
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
	<div className="error-message">{message}</div>
);

const SuccessMessage: React.FC<{ message: string }> = ({ message }) => (
	<div className="success-message">{message}</div>
);


const FormField: React.FC<{ name: string; type: string; placeholder: string; icon: JSX.Element;}> = (
	{ name, type, placeholder, icon }) => (
	<div className="input">
		{icon}
		<Field className="input-field" name={name} type={type} placeholder={placeholder} />
	</div>
);

interface InnerFormProps extends FormikProps<FormValues> {
	isSubmitSuccessful: boolean;
}

const SignUpInnerForm: React.FC<InnerFormProps> = ({
	errors,
	touched,
	handleSubmit,
	isSubmitting,
	isSubmitSuccessful,
	submitCount
}) => {
	return (
		<div className="container">
			<Form onSubmit={handleSubmit} className="form card">
				<div className="header">
					<div className="text"><FaUser /></div>
					<div className="underline"></div>
					<div className="login">
						Already have an account?
						<Link to="/login" className="login-button">Log In</Link>
					</div>
				</div>

				{submitCount > 0 && isSubmitSuccessful && <SuccessMessage message="Sign up successful!" />}
				{submitCount > 0 && !isSubmitSuccessful && Object.keys(errors).length !== 0 && (
					<ErrorMessage message="Sign up failed! Please check your information and try again." />
				)}

				<FormField name="email" type="email" placeholder="Email" icon={<MdEmail className="icon-email" />} />
				{touched.email && errors.email && <ErrorMessage message={errors.email} />}

				<FormField name="userName" type="text" placeholder="Username" icon={<FaUser className="icon-email" />} />
				{touched.userName && errors.userName && <ErrorMessage message={errors.userName} />}

				<FormField name="password" type="password" placeholder="Password" icon={<RiLockPasswordFill className="icon-password" />} />
				{touched.password && errors.password && <ErrorMessage message={errors.password} />}

				<div className="sign-up">
                    <button
                        disabled={isSubmitting || 
							!!(errors.userName && touched.userName) || 
							!!(errors.password && touched.password) ||
							!!(errors.email && touched.email)}
                        type="submit"
                        className="submit-button"
                    >
                        Login
                    </button>
                </div>
			</Form>
		</div>
	);
};

export default SignUpInnerForm;