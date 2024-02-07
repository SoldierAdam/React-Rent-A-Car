import React, { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

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

  const [state, setState] = useState({
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
    setState({
      ...state,
      [e.target.CarName]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        carname: state.carname,
        carbrand: state.carbrand,
        dailyprice: state.dailyprice,
        carmodel: state.carmodel,
        carkilometer: state.carkilometer,
        caryear: state.caryear,
        colorid: state.colorid
    };

    axios.post("http://localhost:8080/api/cars/add")
      .then((response) => {
        console.log(response.status, response.data);
      })
      .catch((error) => {
        console.error("Error occurred while adding car:", error);
      });
  };
  return (
      <div className="container">
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          <Form>
              <div class="mb-3">
                  <label class="form-label">Add Car Name</label>
                  <Field name="carname" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <div class="mb-3">
                  <label class="form-label">Add Car Brand</label>
                  <Field name="carbrand" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <div class="mb-3">
                  <label class="form-label">Add Car Price</label>
                  <Field name="carprice" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <div class="mb-3">
                  <label class="form-label">Car Model</label>
                  <Field name="carmodel" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <div class="mb-3">
                  <label class="form-label">Car Kilometer</label>
                  <Field name="carkilometer" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <div class="mb-3">
                  <label class="form-label">Car Year</label>
                  <Field name="caryear" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <div class="mb-3">
                  <label class="form-label">Car Color Id</label>
                  <Field name="colorid" type="text" class="form-control" onChange={handleChange} value={state}/>
              </div>
              <button type="submit" class="btn btn-primary">Add</button>
          </Form>
        </Formik>
      </div>
  )
}

export default AddCar