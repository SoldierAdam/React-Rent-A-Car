import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import './CarDetails.css';
import { useDispatch } from 'react-redux';
import { setCustomerInfo } from '../../store/rentNow/rentSlice';
import { CustomerFormValues, CustomerFormikInformation, CustomerValidationSchema } from './FormikInput';
import { FormikInput } from './FormikInput';



const CarDetails = ({ onButtonClick }) => {
	const dispatch = useDispatch();
	// const userInfo = useSelector((state: any) => state.user);

	const CustomerinitialValues: CustomerFormValues = {
		firstName: 'Bilal',
		lastName: 'Ekinci',
		identityNumber: '12345678901',
		birthDate: '1998-01-01',
		phoneNumber: '5555555555',
		email: 'sn.bilalekinci@gmail.com',
		drivingLicenseDate: '2021-01-01',
		address: 'istanbul/Üsküdar',
		city: 'istabul',
		zipCode: '333'
	};


	const handleSubmit = async (values: CustomerFormValues, formikHelpers: FormikHelpers<CustomerFormValues>) => {
		try {
			dispatch(setCustomerInfo(values));
			alert("Araba detayları başarıyla kaydedildi.");
			onButtonClick(); // Ödeme bilgileri formuna geç
		} catch (error) {
			alert("Bir hata oluştu: " + error.message);
		}
	}

	return (
		<div className='col-9'>
			<Formik
				initialValues={CustomerinitialValues}
				validationSchema={CustomerValidationSchema}
				onSubmit={handleSubmit}
			>
				{formikProps => {
					const { isValid, dirty, errors } = formikProps;
					console.log('Form errors', errors);
					return (
						<Form>
							<div key={0} className='grid-container'>
								{CustomerFormikInformation.map((item, index) => (
									<div key={index}>
										<FormikInput item={item} index={index} />
										<ErrorMessage name={item.name} component="div" />
									</div>
								))}							</div>
							<div className='button'>
								<button type='submit' className='next-button' >
									Ödeme Bilgilerini Gir
								</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};


export default CarDetails