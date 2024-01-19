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
    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <Formik initialValues={initialValues} onSubmit={values => {
        console.log(values);
      }}>
      <Form className="custom-form">
        <FormikInput name='firstName' label='Name'></FormikInput>
        <div className='mb-3'></div>
        <FormikInput name='lastName' label='Lastname'></FormikInput>
        <div className='mb-3'></div>
        <FormikInput name='email' label='Email'></FormikInput>
        <div className='mb-3'></div>
        <FormikInput name='password' label='Password'></FormikInput>
        <button type="button" className="btn btn-dark mt-3">Login</button>
        </Form>

      </Formik>
    </div>
  )
}

export default SignIn;