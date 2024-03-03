
import { Field, ErrorMessage } from 'formik';
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

	const modelDropdown =
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

	const colorDropdown =
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

	const brandDropdown =
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

	const dropdowns = [];

	if (services.service.apiUrl === "cars") {
		dropdowns.push(modelDropdown);
		dropdowns.push(colorDropdown);
	}
	if (services.service.apiUrl === "models") {
		dropdowns.push(brandDropdown);
	}

	return <>{dropdowns}</>;
}

export default InputInformation;