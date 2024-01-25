import { Form, FormikProps, withFormik } from "formik";
import { basicSchema } from "./LoginValidation";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Login.css";


interface FormValues {
  email?: string;
  password?: string;
}

interface OtherProps {
  title?: string;
  ref?: any;
}
interface MyFormprops {
  initialiEmail?: string;
  initialPassword?: string;
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
            <FaUser />
          </div>
          <div className="underline"></div>

          <div className="sign-up">
            Don't have an account?
            <Link to="/singUp" className="sing-up-button">Sign Up</Link>
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
    email: props.initialiEmail,
    password: props.initialPassword,
  }),
  validationSchema: basicSchema,
  handleSubmit({ email, password }: FormValues) {
    console.log("Email", email);
    console.log("Password", password);
  },
})(InnerForm);

const Login: React.FC<{}> = (props: any) => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
