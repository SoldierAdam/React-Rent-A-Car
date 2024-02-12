import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './CarDetails.css'

const PaymentDetails = () => {

	interface FormValues {
		fullName: string;
		creditCardNumber: string;
		expirationTime: string;
	}

	const initialValues: FormValues = {
		fullName: '',
		creditCardNumber: '',
		expirationTime: ''
	}

	const validationSchema = Yup.object({
		fullName: Yup.string().required('Ad alanı zorunludur'),
		creditCardNumber: Yup.string().required('Kredi kartı numarası zorunludur').length(16, 'Kredi kartı numarası 16 haneli olmalıdır'),
		expirationTime: Yup.date().required('Son kullanma tarihi zorunludur'),
	});

	const handleSubmit = (values: FormValues, actions: any) => {
		// Kullanıcı bilgilerini saklayın
		// Örneğin, Redux action dispatcher'ı kullanarak
		// dispatch(saveUserDetails(values));
		
		// Sonraki adıma geçiş veya başka bir işlem
		// Sonraki form adımınız burada olacak
	}

	const FormikInformation = [
		{
			label: 'Kart Üzerindeki İsim',
			name: 'fullName',
			type: 'text',
		},
		{
			label: 'Kredi Kartı Numarası',
			name: 'creditCardNumber',
			type: 'text',
		},
		{
			label: 'Son Kullanma Tarihi',
			name: 'expirationTime',
			type: 'date',
		},
	]

  return (
	<div className='col-9'>
		<h2>Ödeme Bilgileri</h2>
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
			</Form>
		</Formik>
	</div>
  )
}

export default PaymentDetails;