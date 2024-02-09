import * as yup from "yup";

const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const basicSchemaSignUp = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least one uppercase letter, one special character, and be 8-16 characters",
    })
    .required("Password is required"),
  userName: yup.string().required("Username is required"),	
});
