import { Field } from 'formik';
import React from 'react'

type Props = {
  name: string;
  type: string;
  placeholder: string;
  icon: JSX.Element;

}

const FormikInput = (props: Props) => {
  return (
    <div className="input mb-3">
      {props.icon}
      <Field className="input" name={props.name} type={props.type} placeholder={props.placeholder} />
      
  </div>
  )
}

export default FormikInput

 

