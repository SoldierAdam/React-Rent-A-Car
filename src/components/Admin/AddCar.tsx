import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import "../Admin/Admin.css";
import { Link, useNavigate } from "react-router-dom";

const AddCar = () => {

	var navigate = useNavigate();

	interface FormValues {
		brand: string;
		model: string;
		year: number;
		price: number;
		image: string;
	}

	const initialValues: FormValues = {
		brand: '',
		model: '',
		year: 0,
		price: 0,
		image: '',
	};

	const validationSchema = object({
		brand: string().required('Brand is required'),
		model: string().required('Model is required'),
		year: number().required('Year is required'),
		price: number().required('Price is required'),
		image: string().required('Image is required'),
	});

	const handleSubmit = (values: FormValues) => {
		axios.post('http://localhost:8080/cars/add', values)
			.then(response => {
				console.log(response);
				navigate('/admin');
			})
			.catch(error => {
				console.log(error);
			});
	};

	const onButtonClick = () => {
		navigate('/admin/payment');
	};

	const FormikInformation = [
		{
			label: 'Brand',
			name: 'brand',
			type: 'text',
		},
		{
			label: 'Model',
			name: 'model',
			type: 'text',
		},
		{
			label: 'Year',
			name: 'year',
			type: 'number',
		},
		{
			label: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			label: 'Image',
			name: 'image',
			type: 'text',
		},
	];

	return (
		<div className='col-9'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div className='grid-container'>
						{FormikInformation.map((item, index) => (
							<>
								<div key={index} className='formik-input'>
									<label htmlFor={item.name} className='form-label'>
										{item.label}
									</label>
									<Field
										type={item.type}
										className='form-control'
										id={item.name}
										name={item.name}
									/>
								</div>
							</>
						))}
					</div>
					<div className='button'>
						<button type='submit' className='next-button' onClick={onButtonClick}>
							Post
						</button>
					</div>
				</Form>
			</Formik>
		</div>

	);
}

export default AddCar;