import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import './CarDetails.css';
import { useDispatch } from 'react-redux';
import { setCustomerInfo } from '../../store/rentNow/rentSlice';
import { CustomerFormValues, CustomerFormikInformation, CustomerValidationSchema } from './FormikInput';
import { FormikInputFunction } from '../../components/FormikInput/FormikInput';
import { toast } from 'react-toastify';



const CarDetails = ({ onButtonClick }) => {
	const dispatch = useDispatch();
	// const userInfo = useSelector((state: any) => state.user);

	const CustomerinitialValues: CustomerFormValues = {
		firstName: 'zeynep',
		lastName: 'ozan',
		identityNumber: '11111111111',
		birthDate: new Date(),
		phoneNumber: '111111111',
		email: 'ozanzzeynep@gmail.com',
		drivingLicenseDate: new Date(),
		address: 'İstanbul',
		city: 'Üsküdar',
		zipCode: '111'
	};


	const handleSubmit = async (values: CustomerFormValues, formikHelpers: FormikHelpers<CustomerFormValues>) => {
		try {
			dispatch(setCustomerInfo(values));
			toast.success('Müşteri bilgileri kaydedildi');
			onButtonClick(); // Ödeme bilgileri formuna geç
		} catch (error) {
			toast.error('Müşteri bilgileri kaydedilirken hata oluştu');
		}
	}

	return (
		<div className='col-9'>
			<h1 className='title-customer'>Müşteri Bilgileri</h1>
			<Formik
				initialValues={CustomerinitialValues}
				validationSchema={CustomerValidationSchema}
				onSubmit={handleSubmit}
			>
				{formikProps => {
					const {errors } = formikProps;
					return (
						<Form>
							<div key={0} className='grid-container'>
								{CustomerFormikInformation.map((item, index) => (
									<div key={index}>
										<FormikInputFunction item={item} index={index} />
										{/* <ErrorMessage name={item.name} component="div" /> */}
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