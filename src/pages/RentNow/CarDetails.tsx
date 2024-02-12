import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import './CarDetails.css';
import { useDispatch } from 'react-redux';
import { setCustomerInfo } from '../../store/rentNow/rentSlice';

const CarDetails = ({onButtonClick}) => {
	const dispatch = useDispatch();

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

	const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {

		// Verilerin doğruluğunu kontrol et
		if (!values.birthDate || !values.firstName || !values.lastName || !values.tcNumber) {
			alert("Lütfen tüm alanları doldurunuz.");
			return;
		}

		try {
			dispatch(setCustomerInfo(values));
			alert("Araba detayları başarıyla kaydedildi.");
			// Sonraki form adımınız burada olacak

		} catch (error) {
			alert("Bir hata oluştu: " + error.message);
		}

		// Formik işlemlerini sıfırla
		actions.resetForm();
	}

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