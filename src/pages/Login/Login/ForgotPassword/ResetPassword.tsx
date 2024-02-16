import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../../store/slices/resetPasswordSlice";
import { Bounce, toast } from "react-toastify";
import "./ResetPassword.css"

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifySuccess = (text: string) => {
    toast.success(text, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };
  const notifyError = (text: string) => {
    toast.error(text, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/password/reset-password?token=${token}&password=${values.newPassword}`
        );

        dispatch(resetPassword(values.newPassword));
        dispatch(resetPassword(values.confirmPassword));

        if (response.status === 200) {
          notifySuccess("Password changed successfully");
          navigate("/login");
        }
      } catch (error) {
        notifyError("The link has expired. Password change failed.") 
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="email-card">
            <p className="title-reset">Reset Password</p>

            <label className="input-title">
              New Password:
              <input
                className="input"
                type="password"
                placeholder="New Password"
                name="newPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
              />
            </label>
            {formik.touched.newPassword && formik.errors.newPassword && (
              <div className="error-message">{formik.errors.newPassword}</div>
            )}

            <label className="input-title">
              Confirm Password:
              <input
                className="input"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
            </label>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="error-message">{formik.errors.confirmPassword}</div>
            )}

            <button
              className={`button ${formik.isSubmitting ? "loading" : ""}`}
              type="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;