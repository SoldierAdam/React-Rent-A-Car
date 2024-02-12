import React, { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import "../Admin/Admin.css";
import { Link, useNavigate } from "react-router-dom";

const AddCar = () => {

    var navigate = useNavigate();

    const initialValues = {
      carname: "",
      carbrand: "",
      carmodelid: "",
      carkilometer: 0,
      caryear: 0,
      dailyprice: 0,
      colorid: 0,
      carplate: "",
      carfueltype: "",
      cartransmission_type: "" 
    };

    const [car, setCar] = useState({
      carname: "",
      carbrand: "",
      carmodelid: "",
      carkilometer: 0,
      caryear: 0,
      dailyprice: 0,
      colorid: 0,
      carplate: "",
      carfueltype: "",
      cartransmission_type: ""
    });

    //

    const onInputChange = (e) => {
      setCar({ ...car, [e.target.name]: e.target.value });
    };


    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/cars/add", car);
      navigate("/cars");
    };
    

    const handleChange = (e) => {
    const value = e.target.value;
    setCar({
      ...car,
      [e.target.car]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
          carname: car.carname,
          carbrand: car.carbrand,
          dailyprice: car.dailyprice,
          carmodelid: car.carmodelid,
          carkilometer: car.carkilometer,
          caryear: car.caryear,
          colorid: car.colorid,
          carplate: car.carplate,
          carfueltype: car.carfueltype,
          cartransmission_type: car.cartransmission_type
      };
    };

    // useEffect(()=> {
    //   axios.post("http://localhost:8080/api/cars/add")
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
    // })

    const validationSchema = object({
      carname: string().required().min(2).max(50),
      carbrand: string().required().min(2).max(50),
      carmodelid: number().required().min().max(),
      carkilometer: number().required().min(0).max(500000).integer(),
      caryear: number().required().min(1900).max(2024).integer(),
      dailyprice: number().required().min(10).max(100000),
      colorid:  number().required().integer().min().max(),
      carplate: string().required().min(7).max(9),
      carfueltype: string().required().min(4).max(9),
      cartransmission_type: string().required().min(4).max(50),
    });

    
  return (
      <div className="container">
        <Formik initialValues={initialValues} onSubmit={(e) => onSubmit(e)} validationSchema={validationSchema}>
          <Form>
              <div className="mb-3">
                  <label className="form-label">Add Car Name</label>
                  <Field name="carname" type="text" className="form-control" />
                  <ErrorMessage name="carname">
                    {message => <p className="text-danger">{message}</p>}
                  </ErrorMessage>
              </div>
              <div className="mb-3">
                  <label className="form-label">Add Car Brand</label>
                  <Field name="carbrand" type="text" className="form-control"/>
                  <ErrorMessage name="carbrand">
                    {message => <p className="text-danger">{message}</p>}
                  </ErrorMessage>
              </div>
              <div className="mb-3">
                  <label className="form-label">Add Car Price</label>
                  <Field name="dailyprice" type="text" className="form-control"/>
                  <ErrorMessage name="dailyprice">
                    {message => <p className="text-danger">{message}</p>}
                  </ErrorMessage>
              </div>
              <div className="mb-3">
                  <label className="form-label">Car Model</label>
                  <Field name="carmodelid" type="text" className="form-control"/>
                  <ErrorMessage name="carmodelid">
                  {message => <p className="text-danger">{message}</p>}
                  </ErrorMessage>
              </div>
              <div className="mb-3">
                  <label className="form-label">Car Kilometer</label>
                  <Field name="carkilometer" type="text" className="form-control"/>
                  <ErrorMessage name="carkilometer">
                  {message => <p className="text-danger">{message}</p>}
                  </ErrorMessage>
              </div>
              <div className="mb-3">
                  <label className="form-label">Car Year</label>
                  <Field name="caryear" type="text" className="form-control"/>
                  <ErrorMessage name="caryear">
                  {message => <p className="text-danger">{message}</p>}
                  </ErrorMessage>
              </div>
              <div className="mb-3">
                  <label className="form-label">Car Color Id</label>
                  <Field name="colorid" type="text" as="select" className="form-select"/>
              </div>
              
              <button type="submit" className="btn btn-primary" onClick={() => {setCar(true)}}>Submit</button>
              <Link className="btn btn-outline-danger" to="/">Cancel</Link>
          </Form>
        </Formik>
      </div>
  )
}

export default AddCar