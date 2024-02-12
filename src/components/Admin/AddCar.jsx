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
        carmodel: "",
        carkilometer: 0,
        caryear: 0,
        dailyprice: 0,
        colorid: 0
    };

    const [car, setCar] = useState({
      carname: "",
      carbrand: "",
      carmodel: "",
      carkilometer: 0,
      caryear: 0,
      dailyprice: 0,
      colorid: 0,
    });

    //
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


    const validationSchema = object({
      carname: string().required().min(2).max(50),
      carbrand: string().required().min(2).max(50),
      carmodel: string().required().min(1).max(50),
      carkilometer: number().required().min(0).max(500000).integer(),
      caryear: number().required().min(1900).max(2024).integer(),
      dailyprice: number().required().min(10).max(100000),
      colorid:  number().required().integer().min(1).max()
    });





  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        carname: car.carname,
        carbrand: car.carbrand,
        dailyprice: car.dailyprice,
        carmodel: car.carmodel,
        carkilometer: car.carkilometer,
        caryear: car.caryear,
        colorid: car.colorid
    };
  };

    useEffect(()=> {
      axios.post("http://localhost:8080/api/cars/add")
      .then(res => console.log(res))
      .catch(err => console.log(err));
    })

  return (
      <div className="container">
        <Formik initialValues={initialValues} onSubmit={(e) => onSubmit(e)} validationSchema={validationSchema}>
          <Form>
              <div className="mb-3">
                  <label className="form-label">Add Car Name</label>
                  <Field name="carname" type="text" className="form-control"/>
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
                  <Field name="carmodel" type="text" className="form-control"/>
                  <ErrorMessage name="carmodel">
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