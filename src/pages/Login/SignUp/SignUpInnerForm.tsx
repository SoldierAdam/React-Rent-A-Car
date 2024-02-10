import React from 'react';
import { FormikProps, Form } from 'formik';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import FormikInput from '../../../components/FormikInput/FormikInput';

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
			<Form onSubmit={handleSubmit} className="form-card">
				<div className="header">
					<div className="text"><FaUser /></div>
					<div className="underline"></div>
					<div className="login mb-3">
						Already have an account?
						<Link to="/login" className="login-button">Login</Link>
					</div>
				</div>

				{submitCount > 0 && isSubmitSuccessful && <SuccessMessage message="Sign up successful!" />}
				{submitCount > 0 && !isSubmitSuccessful && Object.keys(errors).length !== 0 && (
					<ErrorMessage message="Sign up failed! Please check your information and try again." />
				)}

				<FormikInput name="email" type="email" placeholder="Email" icon={<MdEmail className="icon-email" />} />
				{touched.email && errors.email && <ErrorMessage message={errors.email} />}
				

				<FormikInput name="userName" type="text" placeholder="Username" icon={<FaUser className="icon-email" />} />
				{touched.userName && errors.userName && <ErrorMessage message={errors.userName} />}

				<FormikInput name="password" type="password" placeholder="Password" icon={<RiLockPasswordFill className="icon-password" />} />
				{touched.password && errors.password && <ErrorMessage message={errors.password} />}
				<div className="sign-up mb-3">
					<button
						disabled={isSubmitting || !!(errors.userName && touched.userName) || !!(errors.password && touched.password) || !!(errors.email && touched.email)}
						type="submit"
						className={`submit-button ${isSubmitting ? 'loading' : ''}`}
					>
						{isSubmitting ? 'Logging In...' : 'Sign Up'}
					</button>
				</div>

			</Form>
		</div>
	);
};

export default SignUpInnerForm;