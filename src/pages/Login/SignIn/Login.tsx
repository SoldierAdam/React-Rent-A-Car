import React, { useState } from "react";
import { withFormik } from "formik";
import InnerForm from "./LoginInnerForm";
import UserService from "../../../services/abstracts/userService";
import { basicSchema } from "./LoginValidation";
import { useDispatch } from 'react-redux';
import { login } from '../../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { local } from "d3-selection";

interface FormValues {
    userName: string;
    password: string;
}

interface MyFormProps {
    initialUserName: string;
    initialPassword: string;
}

const LoginForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: ({ initialUserName, initialPassword }) => ({
        userName: initialUserName, password: initialPassword}),
    validationSchema: basicSchema,
    handleSubmit: async (values, { setSubmitting, setFieldError, setStatus, props }) => {
        try {
            const token = await UserService.loginUser(values.userName, values.password);
            if (token) {
                setStatus({ isSubmitSuccessful: true }); // Set status here
				localStorage.setItem('token', token);
				localStorage.setItem('userName', values.userName);
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
    const dispatch = useDispatch();
	const navigate = useNavigate();


    // Check the submission status using props.status
    if (props.status?.isSubmitSuccessful) {
        dispatch(login(props.values.userName));
		navigate('/');
    }

    return <InnerForm {...props} isSubmitSuccessful={props.status?.isSubmitSuccessful || false} />;
});

export default LoginForm;
