import { object, number, string } from 'yup';
import { Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useEffect } from 'react';

let models = Array.isArray(JSON.parse(localStorage.getItem('models'))) ? JSON.parse(localStorage.getItem('models')) : [];
let colors = Array.isArray(JSON.parse(localStorage.getItem('colors'))) ? JSON.parse(localStorage.getItem('colors')) : [];

//model nameleri al listeye koy
let modelNames = [];
models.map((model: any) => {
	modelNames.push(model.name);
});

//renkleri al listeye koy
let colorNames = [];
colors.map((color: any) => {
	colorNames.push(color.name);
});


// Dropdown for models names
export const modelDropdown =
	<>
		<div>
			<label htmlFor="selectedModel">Model:</label>
			<Field as="select" id="selectedModel" name="selectedModel">
				<option value="">Seçiniz</option>
				{modelNames.map((model: any, index: any) => (
					<option key={index} value={model}>{model}</option>
				))}
			</Field>
			<ErrorMessage name="selectedModel" component="div" />
		</div>
	</>

// Dropdown for colors names
export const colorDropdown =
	<>
	<div>
		<label htmlFor="selectedColor">Renk:</label>
		<Field as="select" id="selectedColor" name="selectedColor">
			<option value="">Seçiniz</option>
			{colorNames.map((color: any, index: any) => (
				<option key={index} value={color}>{color}</option>
			))}
		</Field>
		<ErrorMessage name="selectedColor" component="div" />
	</div>
	</>


export interface FormValues {
	id: number;
	kilometer: number;
	plate: string;
	year: number;
	dailyPrice: number;
	minFindeksRate: number;
	transmissionType: string;
	fuelType: string;
	airbag: boolean;
	drivingLicenseAge: number;
	minCustomerAge: number;
	seatCapacity: number;
	imagePath: string;
	// modelId: number;
	// colorId: number;
}

export const validationSchema = object({
	kilometer: number().required('Kilometer is required'),
	plate: string().required('Plate is required'),
	year: number().required('Year is required'),
	dailyPrice: number().required('Daily Price is required'),
	minFindeksRate: number().required('Min Findeks Rate is required'),
	transmissionType: string().required('Transmission Type is required'),
	fuelType: string().required('Fuel Type is required'),
	airbag: string().required('Airbag is required'),
	drivingLicenseAge: number().required('Driving License Age is required'),
	minCustomerAge: number().required('Min Customer Age is required'),
	seatCapacity: number().required('Seat Capacity is required'),
	imagePath: string().required('Image Path is required'),
	// modelId: number().required('Model Id is required'),
	// colorId: number().required('Color Id is required'),
});


export const FormikInformation = [
	{ label: 'Kilometer', name: 'kilometer', type: 'number' },
	{ label: 'Plate', name: 'plate', type: 'text' },
	{ label: 'Year', name: 'year', type: 'number' },
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