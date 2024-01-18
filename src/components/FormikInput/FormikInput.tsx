import { Field } from 'formik';
import React from 'react'

type Props = {
   label: string;
   name: string;
   type?: string;

}

const FormikInput = (props: Props) => {
  return (
    <div className="input-group mb-3">
    <div className="input-group-text">
      <Field className="form-check-input mt-0" type="checkbox" name={props.name} aria-label={props.label}/>
    </div>
    <Field type={props.type || "text"} className="form-control" aria-label={props.label}/>
  </div>
  )
}

export default FormikInput