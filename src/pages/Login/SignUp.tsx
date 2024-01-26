import { Form, FormikProps, withFormik,FormikHelpers} from "formik";
import { basicSchemaSignUp } from "./SignUpValidation";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import "./SignUp.css";
import { Link } from "react-router-dom";
import UserService from "../../services/abstracts/userService";

interface FormValues {
  email: string;
  password: string;
  role: string[];
}

interface OtherProps {
  title1?: string;
  ref?: any;
}
interface MyFormprops {
  initialEmail: string;
  initialPassword: string;
  initialRole:[];
  login?: any;
}
const successMessage = (
  <div className="success-message">
    Sign up successful!
  </div>
);

const errorMessage = (
  <div className="error-message">
    Sign up failed! Please check your information and try again.
  </div>
);





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

  return (
    <div className="container ">
      <Form onSubmit={handleSubmit} className="form card">
        {/* Başarı mesajını göster */}
        {submitCount > 0 && Object.keys(errors).length === 0 ? successMessage : submitCount > 0 && Object.keys(errors).length !== 0 && errorMessage}


        <div className="header">
          <div className="text">
            <FaUserPlus />
          </div>
          <div className="underline"></div>
          <div className="login">
            Already have an account?
            <Link to="/login" className="login-button">Log In</Link>
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <MdEmail className="icon-email" />
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
          </div>
          {touched.email && errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          <div className="input">
            <RiLockPasswordFill className="icon-password" />
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></input>
          </div>
          {touched.password && errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}

          <div className="input">
            <FaUser className="icon-user" />
            <input
              className="input"
              name="role"
              type="role"
              placeholder="Role"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
            ></input>
          </div>
          {touched.role && errors.role && (
              <div className="invalid-feedback">{errors.role}</div>
            )}
        </div>

        <div className="button">
          <button
            disabled={
              isSubmitting ||
              (errors.email && touched.email) ||
              !!(errors.password && touched.password) ||
              !!(errors.role && touched.role)
            }
            type="submit"
            className="submit"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </div>
  );
};
const SignUpForm = withFormik<MyFormprops, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail,
    password: props.initialPassword,
    role: props.initialRole,
  }),
  validationSchema: basicSchemaSignUp,
  handleSubmit: async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await UserService.signUp(values.email, values.password,values.role);

      if (response.success) {
        console.log("Sign up successful");
       
      } else {
        console.error("Sign up failed:", response.message);
        
      }
    } catch (error) {
      console.error("Error during login:", error);
      
    } finally {
      setSubmitting(false); 
    }
  },
})(InnerForm);

const SignUp: React.FC<MyFormprops> = (props: MyFormprops) => {
  return (
    <div>
      <SignUpForm {...props}/>
    </div>
  );
};

export default SignUp;
