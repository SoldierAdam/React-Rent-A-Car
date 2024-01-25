import { Form, FormikProps, withFormik } from "formik";
import { basicSchemaSignUp } from "./SignUpValidation";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import "./SignUp.css";
import { Link } from "react-router-dom";

interface FormValues {
  email?: string;
  password?: string;
  role?: string;
}

interface OtherProps {
  title1?: string;
  ref?: any;
}
interface MyFormprops {
  initialiEmail?: string;
  initialPassword?: string;
  initialRole?: string;
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
  } = props;

  return (
    <div className="container ">
      <Form onSubmit={handleSubmit} className="form card">
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
    email: props.initialiEmail,
    password: props.initialPassword,
    role: props.initialRole,
  }),
  validationSchema: basicSchemaSignUp,
  handleSubmit({ email, password, role }: FormValues) {
    console.log("Email", email);
    console.log("Password", password);
    console.log("Role", role);
  },
})(InnerForm);

const SignUp: React.FC<{}> = (props: any) => {
  return (
    <div>
      <SignUpForm/>
    </div>
  );
};

export default SignUp;
