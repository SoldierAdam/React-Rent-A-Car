import { object, number, string } from 'yup';
import { Field, ErrorMessage } from 'formik';
import AddData from './Crud/AddData';
import UpdateCar from './Crud/UpdateData';
import DeleteCar from './Crud/DeleteData';
import carService from '../../services/abstracts/CarService';
import modelService from '../../services/abstracts/modelService';
import brandService from '../../services/abstracts/brandService';
import UpdateData from './Crud/UpdateData';
import DeleteData from './Crud/DeleteData';
import { useEffect, useState } from 'react';



const InputInformation = (services: any) => {

	// name ve id braberinde tutulacak
	const [model, setModel] = useState<any>([]);
	const [color, setColor] = useState<any>([]);
	const [brand, setBrand] = useState<any>([]);


	useEffect(() => {
		let models = Array.isArray(JSON.parse(localStorage.getItem('models'))) ? JSON.parse(localStorage.getItem('models')) : [];
		let colors = Array.isArray(JSON.parse(localStorage.getItem('colors'))) ? JSON.parse(localStorage.getItem('colors')) : [];
		let brands = Array.isArray(JSON.parse(localStorage.getItem('brands'))) ? JSON.parse(localStorage.getItem('brands')) : [];

		setModel(models);
		setColor(colors);
		setBrand(brands);
	}, []);

	// Dropdown for models names
	const modelDropdown =
		<>
			<div className=''>
				<label htmlFor="selectedModel">Model:</label>
				<Field as="select" id="selectedModel" name="modelId">
					<option value="">Seçiniz</option>
					{model.map((model: any, index: any) => (
						<option key={index} value={model.id}>{model.name}</option>

					))}
				</Field>
				<ErrorMessage name="selectedModel" component="div" />
			</div>
		</>

	const colorDropdown =
		<>
			<div className=''>
				<label htmlFor="selectedColor">Renk:</label>
				<Field as="select" id="selectedColor" name="colorId">
					<option value="">Seçiniz</option>
					{color.map((color: any, index: any) => (
						<option key={index} value={color.id}>{color.name}</option>
					))}
				</Field>
				<ErrorMessage name="selectedColor" component="div" />
			</div>
		</>

	const brandDropdown =
		<>
			<div>
				<label htmlFor="selectedBrand">Marka:</label>
				<Field as="select" id="selectedBrand" name="brandId">
					<option value="">Seçiniz</option>
					{brand.map((brand: any, index: any) => (
						<option key={index} value={brand.id}>{brand.name}</option>
					))}
				</Field>
				<ErrorMessage name="selectedBrand" component="div" />
			</div>
		</>

	return (
		<div>
			{services.service.apiUrl === "cars" ? modelDropdown : null}
			{services.service.apiUrl === "cars" ? colorDropdown : null}
			{services.service.apiUrl === "models" ? brandDropdown : null}
		</div>
	)
}

export default InputInformation;


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

const initialValuesCar: FormValuesCar = {
	id: 0,
	kilometer: 1000,
	plate: '34ABC34',
	modelYear: 2021,
	dailyPrice: 100,
	minFindeksRate: 1000,
	transmissionType: 'Auto',
	fuelType: 'Diesel',
	airbag: true,
	drivingLicenseAge: 2,
	minCustomerAge: 18,
	seatCapacity: 5,
	imagePath: 'https://www.google.com',
	modelId: 0,
	colorId: 0,
};

const initialValuesModel: FormValuesModel = {
	id: 0,
	name: 'Astra',
};

const initialValuesBrand: FormValuesBrand = {
	id: 0,
	name: 'Opel',
};

export const contentConfig = {
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