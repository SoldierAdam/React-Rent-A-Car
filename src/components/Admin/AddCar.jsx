import React, { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import "../Admin/Admin.css";

const AddCar = () => {

    const initialValues = {
        carname: "",
        carbrand: "",
        carmodel: "",
        carkilometer: 0,
        caryear: 0,
        dailyprice: 0,
        colorid: 0
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

  const [modalOpen, setModalOpen] = useState({
    carname: "",
    carbrand: "",
    carmodel: "",
    carkilometer: 0,
    caryear: 0,
    dailyprice: 0,
    colorid: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setModalOpen({
      ...modalOpen,
      [e.target.CarName]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        carname: modalOpen.carname,
        carbrand: modalOpen.carbrand,
        dailyprice: modalOpen.dailyprice,
        carmodel: modalOpen.carmodel,
        carkilometer: modalOpen.carkilometer,
        caryear: modalOpen.caryear,
        colorid: modalOpen.colorid
    };
  };

    useEffect(()=> {
      axios.post("http://localhost:8080/api/cars/add")
      .then(res => console.log(res))
      .catch(err => console.log(err));
    })

  return (
      <div className="container">
        <Formik initialValues={initialValues} onSubmit={(values) => {console.log(values)}} validationSchema={validationSchema}>
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
              
              <button type="submit" className="btn btn-primary" onClick={() => {setModalOpen(true)}}>Submit</button>
          </Form>
        </Formik>
      </div>
  )
}

export default AddCar