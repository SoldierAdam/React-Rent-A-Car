import React, { useEffect } from 'react'
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';

type Props = {}

const Customer = (props: Props) => {
useEffect( () => {
    axiosInstance.get("customer").then(response => {
        console.log(response);
    } )
},[]);
  return (
    <div>Customer</div>
  )
}

export default Customer