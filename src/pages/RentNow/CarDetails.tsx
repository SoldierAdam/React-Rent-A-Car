import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import './CarDetails.css';

const CarDetails = ({onButtonClick}) => {

	interface FormValues {
		firstName: string;
		lastName: string;
		tcNumber: string;
		birthDate: string;
	}

	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		tcNumber: '',
		birthDate: '',
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required('Ad alanı zorunludur'),
		lastName: Yup.string().required('Soyad alanı zorunludur'),
		tcNumber: Yup.string().required('TC kimlik no zorunludur').length(11, 'TC kimlik no 11 haneli olmalıdır'),
		birthDate: Yup.date().required('Doğum tarihi zorunludur'),
	});

	const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
		// Kullanıcı bilgilerini saklayın
		// Örneğin, Redux action dispatcher'ı kullanarak
		// dispatch(saveUserDetails(values));

		// Sonraki adıma geçiş veya başka bir işlem
		// Sonraki form adımınız burada olacak
	};

	const FormikInformation = [
		{
			label: 'Ad',
			name: 'firstName',
			type: 'text',
		},
		{
			label: 'Soyad',
			name: 'lastName',
			type: 'text',
		},
		{
			label: 'TC Kimlik No',
			name: 'tcNumber',
			type: 'text',
		},
		{
			label: 'Doğum Tarihi',
			name: 'birthDate',
			type: 'date',
		},
		{
			label: 'Telefon Numarası',
			name: 'phoneNumber',
			type: 'text',
		},
		{
			label: 'E-posta',
			name: 'email',
			type: 'email',
		},
		{
			label: 'Adres',
			name: 'address',
			type: 'text',
		},
		{
			label: 'Şehir',
			name: 'city',
			type: 'text',
		},
		{
			label: 'Posta Kodu',
			name: 'zipCode',
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
								Ödeme Bilgilerini Gir
							</button>
						</div>
					</Form>
				</Formik>
			</div>
	);
};


export default CarDetails