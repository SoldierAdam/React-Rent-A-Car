import { Formik, Form, ErrorMessage } from 'formik'
import FormikInput from '../../FormikInput/FormikInput'

type DeleteDataProps = {
	service: any;
}

const DeleteData = ({ service }: DeleteDataProps) => {


	interface plateValue {
        plate: string;
    }
	const plateHandle = (values: plateValue) => {
		service.deleteByPlate(values.plate)
    };

	console.log(service.apiUrl);

	const prompt = <>
	{(service.apiUrl === 'cars') &&
		 <h6>Silmek istediğiniz aracın plakasını giriniz</h6>}
	{(service.apiUrl === 'brands') &&
		 <h6>Silmek istediğiniz markanın adını giriniz</h6>}
	{(service.apiUrl === 'models') &&
		 <h6>Silmek istediğiniz modelin adını giriniz</h6>}
	</>

	return (
		<div className='col-9'>
			<div >
				<Formik
					initialValues={{ plate: '' }}
					onSubmit={plateHandle}
					enableReinitialize={true}
				>
					<Form className='form-container'>
						{prompt}
						<FormikInput name="plate" type="text" placeholder="Plaka" icon={<i className="fas fa-car"></i>} />
						<ErrorMessage name="plate" component="div" />
						<button type='submit' className='next-button' >
							Post
						</button>
					</Form>
				</Formik>
			</div>
		</div >
	)
}

export default DeleteData;