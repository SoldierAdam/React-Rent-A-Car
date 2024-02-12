import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './CarDetails.css'

function PaymentDetails({ onBackClick }) {

	interface FormValues {
		fullName: string;
		creditCardNumber: string;
		expirationTime: Date;
		cvv: number
	}

	const initialValues: FormValues = {
		fullName: '',
		creditCardNumber: '',
		expirationTime: new Date(),
		cvv: 0
	}

	const validationSchema = Yup.object({
		fullName: Yup.string().required('Ad alanı zorunludur'),
		creditCardNumber: Yup.string().required('Kredi kartı numarası zorunludur').length(16, 'Kredi kartı numarası 16 haneli olmalıdır'),
		expirationTime: Yup.date().required('Son kullanma tarihi zorunludur'),
		cvv: Yup.number().required('CVV zorunludur').min(100, 'CVV 3 haneli olmalıdır').max(999, 'CVV 3 haneli olmalıdır')
	});

	const handleSubmit = async (values: FormValues, actions: any) => {
		// Verilerin doğruluğunu kontrol et
		if (!values.fullName || !values.creditCardNumber || !values.expirationTime || !values.cvv) {
			alert("Lütfen tüm alanları doldurunuz.");
			return;
		}

		// Verileri ödeme API'sine gönder
		try {
			const response = await fetch("http://localhost:8080/api/customers/add", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(values)
			});

			// API'den gelen yanıtı kontrol et
			if (response.ok) {
				alert("Ödeme başarıyla gerçekleştirildi.");
			} else {
				alert("Ödeme işlemi başarısız oldu. Lütfen bilgilerinizi kontrol ediniz.");
			}
		} catch (error) {
			alert("Bir hata oluştu: " + error.message);
		}

		// Formik işlemlerini sıfırla
		actions.resetForm();
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
		{
			label: 'CVV',
			name: 'cvv',
			type: 'number',
		}
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
				<div className='button'>
					<button type='submit' className='next-button' onClick={onBackClick}>
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