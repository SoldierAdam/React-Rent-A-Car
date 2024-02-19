import React, { useEffect } from 'react'
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';

type Props = {}

const Customers = (props: Props) => {
  axiosInstance.get("/customers/getAll").then((response:any) => {
    console.log("customer listelendi", response);
  });

  useEffect(()=>{

  },[]);
  return (
    <div>Customers 

    </div>
  )
}

export default Customers