import * as yup from "yup";

const passwordRules =
/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
//"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"

export const basicSchema = yup.object().shape({
  userName: yup.string().required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "one uppercase letter, one special character, must be 8-16 characters",
    })
    .required("Required"),
});
