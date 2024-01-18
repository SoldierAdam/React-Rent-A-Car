import { Formik,Form } from 'formik'
import React from 'react'
import FormikInput from '../../components/FormikInput/FormikInput';
import "./SignIn.css";
type Props = {}

interface SignInForm{
  firstName: string;
  lastName: string;
  email: string;
  password: string;


}

const SignIn = (props: Props) => {
  const initialValues: SignInForm = {
    firstName: "",
    lastName: "",
    email: "",
    password:"",
  };


  return (
    <div className='container'>
      <Formik initialValues={initialValues} onSubmit={values => {
        console.log(values);
      }}>
      <Form>
        <FormikInput name='firstName' label='Name'></FormikInput>
        <FormikInput name='lastName' label='Lastname'></FormikInput>
        <FormikInput name='email' label='email'></FormikInput>
        <FormikInput name='password' label='password'></FormikInput>
        <button type="submit" className="btn btn-black">
						Login
					</button>
        </Form>

      </Formik>
    </div>
  )
}

export default SignIn;