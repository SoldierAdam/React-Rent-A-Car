import { Field, Form, FormikProps, withFormik,FormikHelpers } from "formik";
import { basicSchema } from "./LoginValidation";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import UserService from "../../services/abstracts/userService";


interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  title?: string;
  ref?: any;
}
interface MyFormprops {
  initialEmail: string;
  initialPassword: string;
  login?: any;
}
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    submitCount,
  } = props;

  const successMessage = (
    <div className="success-message">
      Login successful!
    </div>
  );
  const errorMessage = (
    <div className="error-message">
      Sign up failed! Please check your information and try again.
    </div>
  );
  
  
  
  return (
    
    <div className="container ">
      
          <Form  onSubmit={handleSubmit} className="form card">
          {submitCount > 0 && Object.keys(errors).length === 0 ? successMessage : submitCount > 0 && Object.keys(errors).length !== 0 && errorMessage}

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
        <div className="inputs">
          <div className="input">
            <MdEmail className="icon-email" />
            <Field
              className="input"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></Field>
          </div>
          {touched.email && errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}

          <div className="input">
            <RiLockPasswordFill className="icon-password" />
            <Field
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></Field>
          </div>
          {touched.password && errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <div className="forget-password">
          Forget Password?{" "}
          <Link className="forget-password-link" to="/">
            {" "}
            Click Here!
          </Link>
        </div>

        <div className="button">
          <button
            disabled={
              isSubmitting ||
              (errors.email && touched.email) ||
              !!(errors.password && touched.password)
            }
            type="submit"
            className="submit"
            
          >
            Login
          </button>
        </div>
      </Form>
    </div>
   
  );

};
const LoginForm = withFormik<MyFormprops, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail,
    password: props.initialPassword,
  }),
  validationSchema: basicSchema,
  handleSubmit: async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await UserService.loginUser(values.email, values.password);

      if (response.success) {
        console.log("Login successful");
       
      } else {
        console.error("Login failed:", response.message);
        
      }
    } catch (error) {
      console.error("Error during login:", error);
      
    } finally {
      setSubmitting(false); 
    }
  },
})(InnerForm);

const Login: React.FC<MyFormprops> = (props: MyFormprops) => {
  return (
    <div>
      <LoginForm {...props} />
    </div>
    
  );
};

export default Login;
