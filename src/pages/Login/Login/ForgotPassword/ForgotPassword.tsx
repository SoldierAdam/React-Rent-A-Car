import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../../../store/slices/forgetPasswordSlice";
import axios from "axios";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPassword.css"

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("email: ", email);
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/api/password/send-email?email=${email}`
      );

      dispatch(forgetPassword(email));

      if (response.status === 200) {
        notifySuccess("The password reset link was sent successfully");
        navigate("/login");
      }
    } catch (error) {
      notifyError("Email address not found");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="email-card">
            <p className="title-forget">Forget Password</p>
            <p>Enter email address</p>
            <label>
              E-Mail:
              <input
                className="input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button
              className={`button ${isLoading ? "loading" : ""}`}
              onClick={handleButtonClick}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
