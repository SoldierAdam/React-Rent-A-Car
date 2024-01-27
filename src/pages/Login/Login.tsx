import { Field, Form, FormikProps, withFormik, FormikHelpers } from "formik";
import { basicSchema } from "./LoginValidation";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import UserService from "../../services/abstracts/userService";

interface FormValues {
	userName: string;
	password: string;
}

interface OtherProps {
	title?: string;
	ref?: any;
}
interface MyFormprops {
	initialUserName: string;
	initialPassword: string;
	login?: any;
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
	<div className="error-message">{message}</div>
  );
  
  const SuccessMessage: React.FC<{ message: string }> = ({ message }) => (
	<div className="success-message">{message}</div>
  );
  
  const FormField: React.FC<{
	name: string;
	type: string;
	placeholder: string;
	icon: JSX.Element;
  }> = ({ name, type, placeholder, icon }) => (
	<div className="input">
	  {icon}
	  <Field className="input" name={name} type={type} placeholder={placeholder} />
	</div>
  );
  

  const InnerForm: React.FC<OtherProps & FormikProps<FormValues>> = (props) => {
	const { values, errors, touched, handleSubmit, isSubmitting, submitCount } = props;
  
	return (
	  <div className="container">
		<Form onSubmit={handleSubmit} className="form card">
		  {submitCount > 0 && Object.keys(errors).length === 0 && (
			<SuccessMessage message="Login successful!" />
		  )}
		  {submitCount > 0 && Object.keys(errors).length !== 0 && (
			<ErrorMessage message="Sign up failed! Please check your information and try again." />
		  )}
  
		  <div className="header">
			<div className="text">
			  <FaUser />
			</div>
			<div className="underline"></div>
			<div className="sign-up">
			  Don't have an account?
			  <Link to="/signUp" className="sign-up-button">Sign Up</Link>
			</div>
		  </div>
  
		  <FormField name="userName" type="text" placeholder="username" icon={<MdEmail className="icon-email" />} />
		  {touched.userName && errors.userName && <ErrorMessage message={errors.userName} />}
  
		  <FormField name="password" type="password" placeholder="Password" icon={<RiLockPasswordFill className="icon-password" />}/>
		  {touched.password && errors.password && <ErrorMessage message={errors.password} />}
  
		  <div className="forget-password">
			Forget Password?{" "}
			<Link className="forget-password-link" to="/">Click Here!</Link>
		  </div>
  
		  <div className="button">
			<button disabled={isSubmitting || !!Object.keys(errors).length} type="submit" className="submit">
			  Login
			</button>
		  </div>
		</Form>
	  </div>
	);
  };
  

const LoginForm = withFormik<MyFormprops, FormValues>({
	mapPropsToValues: (props) => ({
	  userName: props.initialUserName,
	  password: props.initialPassword,
	}), 
	handleSubmit: async (
	  values: FormValues,
	  { setSubmitting }: FormikHelpers<FormValues>
	) => {
	  try {
		const token = await UserService.loginUser(values.userName, values.password);
		if (token) {
		  console.log("Login successful, Token:", token);
		  // Burada giriş başarılı işlemleri yapabilirsiniz (token ile)
		} else {
		  console.error("Login failed: No token received");
		}
	  } catch (error) {
		console.error("Error during login:", error);
	  } finally {
		setSubmitting(false);
	  }
	}
  })(InnerForm);
  
  export default LoginForm;
  











