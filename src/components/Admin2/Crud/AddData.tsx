// import "../Admin.css"
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { FormikInputFunction } from "../../FormikInput/FormikInput";
import { ErrorMessage } from "formik";
import InputInformation from "../InputInformation";
import { toast } from "react-toastify";


type AddDataProps = {
	service: any;
	initialValues: any;
	validationSchema: any;
	FormikInformation: any;
}

const AddData = ({ service, initialValues, validationSchema, FormikInformation }: AddDataProps) => {
	
	var navigate = useNavigate();

	const handleSubmit = (values: any) => {
		service.add(values).then((response) => {
			toast.success("Added");
			navigate('/admin');
		});		
	};

	return (
		<div className='col-9'>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<Form>
					<div key={0} className='grid' style={{margin: 0}}>
						{FormikInformation.map((item, index) => (
							<div key={index}>
								<FormikInputFunction item={item} index={index} />
								<ErrorMessage name={item.name} component="div" />
							</div>
						))}
						<InputInformation service={service} />
					</div>
					<button type='submit' className='button' >
						Post
					</button>
				</Form>
			</Formik>
		</div>

	);
}

export default AddData;