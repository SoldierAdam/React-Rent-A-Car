import AddData from './Crud/AddData';
import carService from '../../services/abstracts/carService';
import modelService from '../../services/abstracts/modelService';
import brandService from '../../services/abstracts/brandService';
import { number, object, string } from 'yup';
import UpdateData from './Crud/UpdateData';
import DeleteData from './Crud/DeleteData';

const RenderSelectedContent = (selectedContent: string | null) => {


	 const contentConfig = {
		'Add Car': {
			component: AddData,
			service: carService,
			initialValues: initialValuesCar,
			validationSchema: validationSchemaCar,
			FormikInformation: FormikInformationCar
		},
		'Add Model': {
			component: AddData,
			service: modelService,
			initialValues: initialValuesModel,
			validationSchema: validationSchemaModel,
			FormikInformation: FormikInformationModel
		},
		'Add Brand': {
			component: AddData,
			service: brandService,
			initialValues: initialValuesBrand,
			validationSchema: validationSchemaBrand,
			FormikInformation: FormikInformationBrand
		},
		'Update Car': {
			component: UpdateData,
			service: carService,
			initialValues: initialValuesCar,
			validationSchema: validationSchemaCar,
			FormikInformation: FormikInformationCar
		},
		'Update Model': {
			component: UpdateData,
			service: modelService,
			initialValues: initialValuesModel,
			validationSchema: validationSchemaModel,
			FormikInformation: FormikInformationModel
		},
		'Update Brand': {
			component: UpdateData,
			service: brandService,
			initialValues: initialValuesBrand,
			validationSchema: validationSchemaBrand,
			FormikInformation: FormikInformationBrand
		},
		'Delete Model': {
			component: DeleteData,
			service: modelService
		},
		'Delete Car': {
			component: DeleteData,
			service: carService
		},
		'Delete Brand': {
			component: DeleteData,
			service: brandService
		}
	};

	const config = contentConfig[selectedContent];
	if (!config) {
		return null;
	}
	const Component = config.component;
	return <Component {...config} />;
};

export default RenderSelectedContent;



export interface FormValuesCar {
	id?: number;
	kilometer: number;
	plate: string;
	modelYear: number;
	dailyPrice: number;
	minFindeksRate: number;
	transmissionType: string;
	fuelType: string;
	airbag: boolean;
	drivingLicenseAge: number;
	minCustomerAge: number;
	seatCapacity: number;
	imagePath: string;
	modelId: number;
	colorId: number;
}

const initialValuesCar: FormValuesCar = {
	kilometer: 0,
	plate: '',
	modelYear: 0,
	dailyPrice: 0,
	minFindeksRate: 0,
	transmissionType: '',
	fuelType: '',
	airbag: false,
	drivingLicenseAge: 0,
	minCustomerAge: 0,
	seatCapacity: 0,
	imagePath: '',
	modelId: 0,
	colorId: 0,
};

export interface FormValuesModel {
	id: number;
	name: string;
}

export interface FormValuesBrand {
	id: number;
	name: string;
}


export const validationSchemaModel = object({
	name: string().required('Name is required'),
});

export const validationSchemaBrand = object({
	name: string().required('Name is required'),
});

export const validationSchemaCar = object({
	kilometer: number().required('Kilometer is required'),
	plate: string().required('Plate is required'),
	modelYear: number().required('Year is required'),
	dailyPrice: number().required('Daily Price is required'),
	minFindeksRate: number().required('Min Findeks Rate is required'),
	transmissionType: string().required('Transmission Type is required'),
	fuelType: string().required('Fuel Type is required'),
	airbag: string().required('Airbag is required'),
	drivingLicenseAge: number().required('Driving License Age is required'),
	minCustomerAge: number().required('Min Customer Age is required'),
	seatCapacity: number().required('Seat Capacity is required'),
	imagePath: string().required('Image Path is required'),
	modelId: number().required('Model Id is required'),
	colorId: number().required('Color Id is required'),
});


export const FormikInformationCar = [
	{ label: 'Kilometer', name: 'kilometer', type: 'number' },
	{ label: 'Plate', name: 'plate', type: 'text' },
	{ label: 'Year', name: 'modelYear', type: 'number' },
	{ label: 'Daily Price', name: 'dailyPrice', type: 'number' },
	{ label: 'Min Findeks Rate', name: 'minFindeksRate', type: 'number' },
	{ label: 'Transmission', name: 'transmissionType', type: 'text' },
	{ label: 'Fuel Type', name: 'fuelType', type: 'text' },
	{ label: 'Airbag', name: 'airbag', type: 'text' },
	{ label: 'Driving License Age', name: 'drivingLicenseAge', type: 'number' },
	{ label: 'Min Customer Age', name: 'minCustomerAge', type: 'number' },
	{ label: 'Seat Capacity', name: 'seatCapacity', type: 'number' },
	{ label: 'Image Path', name: 'imagePath', type: 'text' },
	// { label: 'Model Id', name: 'modelId', type: 'number' },
	// { label: 'Color Id', name: 'colorId', type: 'number' }
];

export const FormikInformationModel = [
	{ label: 'Name', name: 'name', type: 'text' },
];

export const FormikInformationBrand = [
	{ label: 'Name', name: 'name', type: 'text' },
];

export const FormikInformationColor = [
	{ label: 'Name', name: 'name', type: 'text' },
];

const initialValuesModel: FormValuesModel = {
	id: 0,
	name: '',
};

const initialValuesBrand: FormValuesBrand = {
	id: 0,
	name: '',
};
