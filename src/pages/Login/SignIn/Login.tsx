import React, { useState } from "react";
import { withFormik, FormikProps } from "formik";
import InnerForm from "./LoginInnerForm";
import UserService from "../../../services/abstracts/userService";
import { basicSchema } from "./LoginValidation";

interface FormValues {
	userName: string;
	password: string;
}

interface MyFormProps {
    initialUserName: string;
    initialPassword: string;
    onSubmitSuccess: () => void;
}

const LoginForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: ({ initialUserName, initialPassword }) => ({
        userName: initialUserName,
        password: initialPassword,
    }),
	// validationSchema: basicSchema,
    handleSubmit: async (values, { setSubmitting, setFieldError, props }
		) => {
        try {
            const token = await UserService.loginUser(values.userName, values.password);
            if (token) {
                props.onSubmitSuccess();
                // TODO: Handle token (e.g., store in context or local storage)
            } else {
                setFieldError('general', 'Login failed: No token received');
            }
        } catch (error) {
            setFieldError('general', 'Error during login');
        } finally {
            setSubmitting(false);
        }
    },
})(props => {
    const [isSubmitSuccessful, setSubmitSuccessful] = useState(false);
    return <InnerForm {...props} isSubmitSuccessful={isSubmitSuccessful} />;
});

export default LoginForm;
