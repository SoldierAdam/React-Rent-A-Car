import "./SignUp.css";
import UserService from "../../../services/abstracts/userService";
import SignUpInnerForm from "./SignUpInnerForm";
import { useEffect, useState } from "react";
import { withFormik } from "formik";
import { basicSchemaSignUp } from "./SignUpValidation";
import { Navigate, useNavigate } from "react-router-dom";
import { stat } from "fs";


interface FormValues {
	email: string;
	userName: string;
	password: string;
}

interface MyFormprops {
	initialEmail: string;
	initialPassword: string;
	initialUserName: string;
}

const SignUpForm = withFormik<MyFormprops, FormValues>({
	mapPropsToValues: ({initialEmail, initialPassword, initialUserName}) => ({
		email: initialEmail,
		password: initialPassword,
		userName: initialUserName,
	}),
	validationSchema: basicSchemaSignUp,
	handleSubmit: async ( values, {setSubmitting, setFieldError, setStatus, props}
	) => {
		console.log("Submitting form:", values)
		try {
			const response = await UserService.signUp(values.email, values.password, values.userName);
			console.log("Response:", response);
			console.log("Sign up successful");
			setStatus({isSubmitSuccessful: true})
		} catch (error) {
			console.error("Error during login:", error);
			setFieldError('general', 'Error during sign up');
		} finally {
			setSubmitting(false);
		}
	},
})(props => {
	const [isSubmitSuccessful, setSubmitSuccessful] = useState(false);
	const navigate = useNavigate();
	
	useEffect(() => {
			if (props.status?.isSubmitSuccessful) {
				console.log("Props:", props.status);
				setSubmitSuccessful(true);
				navigate('/login');
			}
		}, [isSubmitSuccessful, props.status]);
	
	return <SignUpInnerForm {...props} isSubmitSuccessful={isSubmitSuccessful} />;
});

export default SignUpForm;
