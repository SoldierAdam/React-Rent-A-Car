import { Field } from 'formik';
import React from 'react'
import { ErrorMessage } from 'formik';

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

export const FormikInputFunction = ({ item, index }: any) => {
		return (
			<>
			<div key={index} className='formik-input'>
				<label htmlFor={item.name} className='form-label'>
					{item.label}
				</label>
				<Field
					type={item.type}
					className='form-control'
					id={item.name}
					name={item.name}
				/>
				<div className='error-message'>
					<ErrorMessage name={item.name} />
				</div>
			</div>
			</>
		)
	}


export default FormikInput

 

