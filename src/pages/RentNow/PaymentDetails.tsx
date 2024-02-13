import { Formik, Form } from 'formik';
import { FormikInput, CardFormValues, CardInitialValues, CardValidationSchema, CardFormikInformation } from './FormikInput';
import './CarDetails.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

function PaymentDetails({ onBackClick }) {

	// useSelector ile Redux store'dan veri alımı
	const customerInfoString = useSelector((state: any) => JSON.stringify(state.rent));
	const userInfo = useSelector((state: any) => state.user);

	// JSON string'ini nesneye çevirme
	const customerInfo = JSON.parse(customerInfoString);

	interface Customer {
		firstName: string;
		lastName: string;
		identityNumber: string;
		birthDate: string;
		city: string;
		address: string;
		email: string;
		drivingLicenseDate: string;
		postalCode: string;
		phoneNumber: string;
		username: number;
	}

	// Customer nesnesi oluşturma
	const createCustomerObject = (customerInfo: any, userInfo: any): Customer => {
		return {
			firstName: customerInfo.firstName || '',
			lastName: customerInfo.lastName || '',
			identityNumber: '99999999999',
			birthDate: customerInfo.birthDate || '',
			city: customerInfo.city || '',
			address: customerInfo.address || '',
			email: customerInfo.email || '',
			drivingLicenseDate: customerInfo.drivingLicenseDate || '',
			postalCode: customerInfo.postalCode || '111',
			phoneNumber: userInfo.phoneNumber || '1111111111',
			username: userInfo.userName || 1,
		};
	}

	// Yeni Customer nesnesi oluştur
	const customer = createCustomerObject(customerInfo, userInfo);

	console.log("Customer:", customer);
	// Axios ile API isteğini gönderme
	const handleSubmit = async () => {
		try {

			const response = await axios.post('http://localhost:8080/api/customers/add', customer, {
				headers: {
					'Content-Type': 'application/json'
				}
			})

			// const [response1, response2] = await Promise.all([
			// 	axios.post('http://localhost:8080/api/customers/add', customer, {
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	}),
			// 	axios.post('http://localhost:8080/api/rents/add', customer, {
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	})
			// ])

			// console.log("API Response 1:", response1.data);
			// console.log("API Response 2:", response2.data);
			alert("Müşteri başarıyla kaydedildi.");
		} catch (error) {
			console.error("API Error:", error.response ? error.response.data : error.message);
			alert("Müşteri kaydı sırasında bir hata oluştu.");
		}
	}

	return (
		<div className='col-9'>
			<h2>Ödeme Bilgileri</h2>
			<Formik
				initialValues={CardInitialValues}
				validationSchema={CardValidationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div key={0} className='grid-container'>
						{CardFormikInformation.map((item, index) => (FormikInput({ item, index })))}
					</div>
					<div className='button'>
						<button type='button' className='next-button' onClick={onBackClick}>
							Müşteri Bilgilerine Geri Dön
						</button>
						<button type='submit' className='next-button'>
							Ödeme Yap
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default PaymentDetails;