import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { FormikInputFunction } from '../../FormikInput/FormikInput'
import FormikInput from '../../FormikInput/FormikInput'
import { ErrorMessage } from 'formik'
import axios from 'axios'
import  InputInformation from '../InputInformation'


type UpdateDataProps = {
	service: any;
	initialValues: any;
	validationSchema: any;
	FormikInformation: any;
}


const UpdateData = ({ service, initialValues, validationSchema, FormikInformation }: UpdateDataProps) => {

    const [car, setCar] = useState<typeof initialValues>(initialValues);

    const [loadCar, setLoadCar] = useState(true);

    useEffect(() => {
        if (loadCar) {
            setCar(JSON.parse(localStorage.getItem('car') || '{}'));
            setLoadCar(false);
        }
    }, [loadCar]);

	

    // const [initialValues, setInitialValues] = useState<FormValues>({
    //     id: car.id || 0,
    //     kilometer: car.kilometer || 0,
    //     plate: car.plate || '',
    //     modelYear: car.modelYear || 0,
    //     dailyPrice: car.dailyPrice || 0,
    //     minFindeksRate: car.minFindeksRate || 0,
    //     transmissionType: car.transmissionType || '',
    //     fuelType: car.fuelType || '',
    //     airbag: car.airbag || true,
    //     drivingLicenseAge: car.drivingLicenseAge || 0,
    //     minCustomerAge: car.minCustomerAge || 0,
    //     seatCapacity: car.seatCapacity || 0,
    //     imagePath: car.imagePath || 'https://www.google.com',
    // });

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
    const [isFormVisible, setFormVisible] = useState(false);

    const handleSubmit = (values: any) => {
		values.id = car.id || 0;
		values.colorId = parseInt(values.colorId);
		values.modelId = parseInt(values.modelId);
        console.log(values);
        axios.put('http://localhost:8080/api/cars/update', values)
            .then(response => {
                console.log(response);
                alert("Car updated successfully");
                localStorage.removeItem('car');
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
		setFormVisible(false);
        axios.get('http://localhost:8080/api/cars/getByPlate?plate=' + values.plate)
            .then(response => {
				setLoadCar(true);
                localStorage.removeItem('car');
                localStorage.setItem('car', JSON.stringify(response.data.data));
                alert("Car found successfully");
                setCar(response.data.data);
                setFormVisible(true);
            })
            .catch(error => {
                alert("Car not found");
                console.log(error);
            });
    };

	const prompt = <>
		{(service.apiUrl === 'cars') &&
			 <h6>Güncellemek istediğiniz aracın plakasını giriniz</h6>}
		{(service.apiUrl === 'brands') &&
			 <h6>Güncellemek istediğiniz markanın adını giriniz</h6>}
		{(service.apiUrl === 'models') &&
			 <h6>Güncellemek istediğiniz modelin adını giriniz</h6>}
	</>

    return (
        <div className='col-9'>

            <div >
                <Formik
                    initialValues={{ plate: '' }}
                    onSubmit={plateHandle}
                    enableReinitialize={true}
                >
                    <Form className='form-container'>
                    	{prompt}
                        <FormikInput name="plate" type="text" placeholder="Değeri giriniz" icon={<i className="fas fa-car"></i>} />
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
                            <InputInformation />
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

export default UpdateData;