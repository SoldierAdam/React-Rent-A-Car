import { useEffect } from "react";
import { withFormik } from "formik";
import InnerForm from "./LoginInnerForm";
import UserService from "../../../services/abstracts/userService";
import { basicSchema } from "./LoginValidation";
import { useDispatch } from 'react-redux';
import { login } from "../../../store/slices/userSlice"
import { useNavigate } from 'react-router-dom';
import tokenService from "../../../services/abstracts/tokenService";

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
    handleSubmit: async (values, { setSubmitting, setFieldError, setStatus }) => {
        try {
            const response = await UserService.loginUser(values.userName, values.password);
			if (response) {
                setStatus({ isSubmitSuccessful: true });
				console.log('responseToken:', response.token);
				tokenService.setToken(response.token);
				localStorage.setItem('userName', values.userName);
            } else {
                setFieldError('general', 'Login failed: No token received');
            }
        } catch (error) {
            setFieldError('general', `Error during login: ${error.message}`);
        } finally {
            setSubmitting(false);
        }
    },
})(props => {
    const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
    	if (props.status?.isSubmitSuccessful) {
       		dispatch(login(props.values.userName));
			navigate('/');
    	}
	}, [props.status, dispatch, navigate, props.values.userName]);

    return <InnerForm {...props} isSubmitSuccessful={props.status?.isSubmitSuccessful || false} />;
});

export default LoginForm;
