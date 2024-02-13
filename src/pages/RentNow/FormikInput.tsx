import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export interface CustomerFormValues {
	firstName: string;
	lastName: string;
	identityNumber: string;
	birthDate: string;
	phoneNumber: string;
	email: string;
	drivingLicenseDate: string;
	address: string;
	city: string;
	zipCode: string;
}

export interface CardFormValues {
	fullName: string;
	creditCardNumber: string;
	expirationTime: Date;
	cvv: number
}

export const CardInitialValues: CardFormValues = {
	fullName: '',
	creditCardNumber: '',
	expirationTime: new Date(),
	cvv: 0
}

export const CustomerFormikInformation = [
	{     label: 'Ad', name: 'firstName', type: 'text'                              },
	{     label: 'Soyad', name: 'lastName', type: 'text'                 			},
	{     label: 'TC Kimlik No', name: 'identityNumber', type: 'text'    			},
	{     label: 'Doğum Tarihi', name: 'birthDate', type: 'date'         			},
	{     label: 'Telefon Numarası', name: 'phoneNumber', type: 'text'   			},
	{     label: 'E-posta', name: 'email', type: 'text'                 			},
	{	  label: 'Sürücü Belgesi Tarihi', name: 'drivingLicenseDate', type: 'date'	},
	{     label: 'Adres', name: 'address', type: 'text'                  			},
	{     label: 'Şehir', name: 'city', type: 'text'                     			},
	{     label: 'Posta Kodu', name: 'zipCode', type: 'text'             			}
];

export const CardFormikInformation = [
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


export const CustomerValidationSchema = Yup.object({
	firstName: Yup.string().required('Ad alanı zorunludur'),
	lastName: Yup.string().required('Soyad alanı zorunludur'),
	identityNumber: Yup.string().required('TC kimlik no zorunludur').length(11, 'TC kimlik no 11 haneli olmalıdır'),
	birthDate: Yup.date().required('Doğum tarihi zorunludur'),
	phoneNumber: Yup.string().required('Telefon numarası zorunludur'),
	email: Yup.string().required('E-posta zorunludur'),
	address: Yup.string().required('Adres zorunludur'),
	city: Yup.string().required('Şehir zorunludur'),
	zipCode: Yup.string().required('Posta kodu zorunludur')
});

export const CardValidationSchema = Yup.object({
	fullName: Yup.string().required('Ad alanı zorunludur'),
	creditCardNumber: Yup.string().required('Kredi kartı numarası zorunludur').length(16, 'Kredi kartı numarası 16 haneli olmalıdır'),
	expirationTime: Yup.date().required('Son kullanma tarihi zorunludur'),
	cvv: Yup.number().required('CVV zorunludur').min(100, 'CVV 3 haneli olmalıdır').max(999, 'CVV 3 haneli olmalıdır')
});

export const FormikInput = ({ item, index }: any) => {

	return (
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
			<div className='error-message'>
				<ErrorMessage name={item.name} />
			</div>
		</div>
		</>
	)
}
