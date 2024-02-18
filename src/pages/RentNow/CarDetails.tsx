import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import './CarDetails.css';
import { useDispatch } from 'react-redux';
import { setCustomerInfo } from '../../store/rentNow/rentSlice';
import { CustomerFormValues, CustomerFormikInformation, CustomerValidationSchema } from './FormikInput';
import { FormikInputFunction } from '../../components/FormikInput/FormikInput';



const CarDetails = ({ onButtonClick }) => {
	const dispatch = useDispatch();
	// const userInfo = useSelector((state: any) => state.user);

	const CustomerinitialValues: CustomerFormValues = {
		firstName: 'zeynep',
		lastName: 'ozan',
		identityNumber: '11111111111',
		birthDate: '21/12/2001',
		phoneNumber: '111111111',
		email: 'ozanzzeynep@gmail.com',
		drivingLicenseDate: '22/01/2020',
		address: 'İstanbul',
		city: 'Üsküdar',
		zipCode: '111'
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
					const {errors } = formikProps;
					console.log('Form errors', errors);
					return (
						<Form>
							<div key={0} className='grid-container'>
								{CustomerFormikInformation.map((item, index) => (
									<div key={index}>
										<FormikInputFunction item={item} index={index} />
										<ErrorMessage name={item.name} component="div" />
									</div>
								))}	
								
												
								
								</div>

								<div className=''>
								<button type='submit' className='next-button-ödeme' >
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