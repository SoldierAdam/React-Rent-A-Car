import * as yup from "yup"

const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const basicSchema = yup.object().shape({
    newPassword: yup.string().min(8).matches(passwordRules,{
        message:"one uppercase letter, one special character, must be 8-16 characters",
    }),
    confirmPassword: yup.string().min(8).matches(passwordRules,{
        message:"one uppercase letter, one special character, must be 8-16 characters",
    })
    .required("Required"),
})
