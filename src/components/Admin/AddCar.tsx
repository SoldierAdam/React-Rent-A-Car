import axios from "axios";
import { Form, Formik } from "formik";
import { number, object, string } from "yup";
import "../Admin/Admin.css";
import { useNavigate } from "react-router-dom";
import { FormikInputFunction } from "../../components/FormikInput/FormikInput";
import { ErrorMessage } from "formik";
import { FormValues, validationSchema, FormikInformation } from "./InputInformation";


const AddCar = () => {

	var navigate = useNavigate();

	const initialValues: FormValues = {
		id: 0,
		kilometer: 1000,
		plate: '34ABC34',
		year: 2021,
		dailyPrice: 100,
		minFindeksRate: 1000,
		transmissionType: 'Auto',
		fuelType: 'Diesel',
		airbag: true,
		drivingLicenseAge: 2,
		minCustomerAge: 18,
		seatCapacity: 5,
		imagePath: 'https://www.google.com',
		// modelId: 1,
		// colorId: 1
	};

	const handleSubmit = (values: FormValues) => {
		console.log(values);
		axios.post('http://localhost:8080/api/cars/add', values)
			.then(response => {
				console.log(response);
				alert("Car added successfully");
				// navigate('/admin');
			})
			.catch(error => {
				console.log(error);
			});
	};


	return (
		<div className='col-9'>
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
						))}							</div>
					<div className='button'>
						<button type='submit' className='next-button' >
							Post
						</button>
					</div>
				</Form>
			</Formik>
		</div>

	);
}

export default AddCar;