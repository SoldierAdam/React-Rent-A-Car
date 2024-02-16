import React, { useEffect, useState } from 'react'
import { validationSchema, FormikInformation, FormValues } from './InputInformation'
import { Formik, Form, Field } from 'formik'
import { FormikInputFunction } from '../FormikInput/FormikInput'
import FormikInput from '../FormikInput/FormikInput'
import { ErrorMessage } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { modelDropdown, colorDropdown } from './InputInformation'
import { local } from 'd3'

function UpdateCar() {
    var navigate = useNavigate();
    const dispatch = useDispatch();

    const [car, setCar] = useState({
        id: 0,
        kilometer: 0,
        plate: '',
        year: 0,
        dailyPrice: 0,
        minFindeksRate: 0,
        transmissionType: '',
        fuelType: '',
        airbag: true,
        drivingLicenseAge: 0,
        minCustomerAge: 0,
        seatCapacity: 0,
        imagePath: '',
    });

    const [loadCar, setLoadCar] = useState(true);

    useEffect(() => {
        if (loadCar) {
            setCar(JSON.parse(localStorage.getItem('car') || '{}'));
            setLoadCar(false);
        }
    }, [loadCar]);

    const [initialValues, setInitialValues] = useState<FormValues>({
        id: car.id || 0,
        kilometer: car.kilometer || 0,
        plate: car.plate || '',
        year: car.year || 0,
        dailyPrice: car.dailyPrice || 0,
        minFindeksRate: car.minFindeksRate || 0,
        transmissionType: car.transmissionType || '',
        fuelType: car.fuelType || '',
        airbag: car.airbag || true,
        drivingLicenseAge: car.drivingLicenseAge || 0,
        minCustomerAge: car.minCustomerAge || 0,
        seatCapacity: car.seatCapacity || 0,
        imagePath: car.imagePath || 'https://www.google.com',
    });

    useEffect(() => {
        if (car.id !== undefined)
            setFormVisible(true);
        else
            setFormVisible(false);
    }, [car.id]);

    // tüm modelleri ve renkleri getir
    useEffect(() => {
        axios.get('http://localhost:8080/api/models/getAll')
            .then(response => {
                console.log(response.data.data);
                localStorage.setItem('models', JSON.stringify(response.data.data));
            })
            .catch(error => {
                console.log(error);
            });
        axios.get('http://localhost:8080/api/colors/getAll')
            .then(response => {
                console.log(response.data.data);
                localStorage.setItem('colors', JSON.stringify(response.data.data));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // State to manage form visibility
    const [isFormVisible, setFormVisible] = useState(car.id !== undefined);

    const handleSubmit = (values: FormValues) => {
        console.log(values);
        axios.put('http://localhost:8080/api/cars/update', values)
            .then(response => {
                console.log(response);
                alert("Car updated successfully");
                localStorage.removeItem('car');
                setInitialValues(response.data.data);
            })
            .catch(error => {
                alert("Car update failed");
                console.log(error);
            });
    };

    interface plateValue {
        plate: string;
    }

    const plateHandle = (values: plateValue) => {
        console.log(values);
        axios.get('http://localhost:8080/api/cars/getByPlate?plate=' + values.plate)
            .then(response => {
                console.log("ben geldim", response.data.data);
                localStorage.removeItem('car');
                localStorage.setItem('car', JSON.stringify(response.data.data));
                alert("Car found successfully");
                // After car information is retrieved, update the car state and initial values
                setCar(response.data.data);
                setInitialValues(response.data.data);
                // Show the form
                setFormVisible(true);
            })
            .catch(error => {
                alert("Car not found");
                console.log(error);
            });
    };

    return (
        <div className='col-9'>

            <div >
                <Formik
                    initialValues={{ plate: '' }}
                    onSubmit={plateHandle}
                    enableReinitialize={true}
                >
                    <Form className='form-container'>
                        <h6>Güncellemek istediğiniz aracın plakasını giriniz</h6>
                        <FormikInput name="plate" type="text" placeholder="Plaka" icon={<i className="fas fa-car"></i>} />
                        <ErrorMessage name="plate" component="div" />
                        <button type='submit' className='next-button' >
                            Post
                        </button>
                    </Form>
                </Formik>
            </div>

            {isFormVisible && (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div key={0} className='grid-container'>
                            {FormikInformation.map((item, index) => (
                                <div key={index}>
                                    <FormikInputFunction item={item} index={index} />
                                    <ErrorMessage name={item.name} component="div" />
                                </div>
                            ))}
                            {modelDropdown}
                            {colorDropdown}
                        </div>
                        <div className='button'>
                            <button type='submit' className='next-button' >
                                Post
                            </button>
                        </div>
                    </Form>
                </Formik>
            )}
        </div>
    );
}

export default UpdateCar;
