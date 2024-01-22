import { Field } from 'formik';
import React from 'react'

type Props = {
   label: string;
   name: string;
   type?: string;

}

const FormikInput = (props: Props) => {
  return (
    <div className="input-group flex-nowrap">
    <span className="input-group-text" id="addon-wrapping">{props.label}</span>
    <Field type={props.type || "text"} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
  </div>
  )
}

export default FormikInput