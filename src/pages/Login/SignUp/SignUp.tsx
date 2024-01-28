import "./SignUp.css";
import UserService from "../../../services/abstracts/userService";
import SignUpInnerForm from "./SignUpInnerForm";
import { useState } from "react";
import { withFormik } from "formik";
import { basicSchemaSignUp } from "./SignUpValidation";


interface FormValues {
	email: string;
	userName: string;
	password: string;
}

interface MyFormprops {
	initialEmail: string;
	initialPassword: string;
	initialUserName: string;
	onSubmitSuccess: () => void;
}

const SignUpForm = withFormik<MyFormprops, FormValues>({
	mapPropsToValues: ({initialEmail, initialPassword, initialUserName}) => ({
		email: initialEmail,
		password: initialPassword,
		userName: initialUserName,
	}),
	validationSchema: basicSchemaSignUp,
	handleSubmit: async ( values, {setSubmitting, setFieldError, props}
	) => {
		console.log("Submitting form:", values)
		try {
			const response = await UserService.signUp(values.email, values.password, values.userName);
			console.log("Response:", response);
			props.onSubmitSuccess();
			console.log("Sign up successful"); 
		} catch (error) {
			console.error("Error during login:", error);
			setFieldError('general', 'Error during login');
		} finally {
			setSubmitting(false);
		}
	},
})(props => {
	const [isSubmitSuccessful, setSubmitSuccessful] = useState(false);
	return <SignUpInnerForm {...props} isSubmitSuccessful={isSubmitSuccessful} />;
});

export default SignUpForm;
