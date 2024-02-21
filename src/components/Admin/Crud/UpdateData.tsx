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
	const [model, setModel] = useState<typeof initialValues>(initialValues);
	const [color, setColor] = useState<typeof initialValues>(initialValues);

    const [loadCar, setLoadCar] = useState(true);

    useEffect(() => {
        if (loadCar) {
            setCar(JSON.parse(localStorage.getItem('car') || '{}'));
            setLoadCar(false);
			// setFormVisible(true);
        }
    }, [loadCar]);


    // State to manage form visibility
    const [isFormVisible, setFormVisible] = useState(false);

    const handleSubmit = (values: any) => {
		values.id = car.id || 0;
		values.colorId = parseInt(values.colorId);
		values.modelId = parseInt(values.modelId);
        console.log(values);
		service.update(values);
    };

    interface plateValue {
        plate: string;
    }

    const plateHandle = (values: plateValue) => {
        console.log(values);
		setFormVisible(false);
		service.getByPlateOrName(values.plate).then((response: any) => {
			setLoadCar(true);
			setCar(response.data.data);
			setFormVisible(true);
		}
		).catch((error: any) => {
			alert("Car not found");
			console.log(error);
		});
    };

	console.log('service', service.apiUrl);
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
                    <Form className='form-container'  style={{margin: 0}}>
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
                        <div key={0} className='grid-container'  style={{margin: 0}}>
                            {FormikInformation.map((item, index) => (
                                <div key={index}>
                                    <FormikInputFunction item={item} index={index} />
                                    <ErrorMessage name={item.name} component="div" />
                                </div>
                            ))}
                            <InputInformation service={service} />
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