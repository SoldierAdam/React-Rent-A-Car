import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { m, motion } from 'framer-motion';
import './../../styles/style.css'
import { Button } from 'react-bootstrap';
import SideBar from './SideBar';
import DataChart from './DataChart';
import RangeBar from './RangeBar';
import CarCard from '../CarCard/CarCard';

type Car = {
	id: number;
	kilometer: number;
	plate: string;
	modelYear: number;
	dailyPrice: number;
	minFindeksRate: number;
	imagePath: string;
	modelName: string;
	colorName: string;
};

type FilterCriteria = {
	minDailyPrice: number;
	maxDailyPrice: number;
};

const CarCardList: React.FC = () => {
	type Car = {
		id: number;
		kilometer: number;
		plate: string;
		modelYear: number;
		dailyPrice: number;
		minFindeksRate: number;
		imagePath: string;
		modelName: string;
		colorName: string;
		brandName: string;
	};

	const [data, setData] = useState<Car[] | null>(null);
	const [filter, setFilter] = useState<FilterCriteria>({ minDailyPrice: 0, maxDailyPrice: 1000 });
	const [minPriceInput, setMinPriceInput] = useState<number>();
	const [maxPriceInput, setMaxPriceInput] = useState<number>();


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/cars/getAll');
				setData(response.data.data);
				console.log(response.data);
			} catch (error) {
				console.error('There was an error!', error);
			}
		};

		fetchData();
	}, []);



	const handleFilterChange = (newFilter: FilterCriteria) => {
		setFilter(newFilter);
	}


	const filteredData = Array.isArray(data) ? data.filter(car => car.dailyPrice >= filter.minDailyPrice && car.dailyPrice <= filter.maxDailyPrice) : [];

	useEffect(() => {
		console.log(data);
		console.log(filteredData);
	}, [data, filteredData]);


	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-2">
			 <div className='container'>
				{/* <div className='col'>
					<div className='row'> */}
						{/* <DataChart data={data || []} />  */}
					{/* <RangeBar data={data || []} onFilterChange={handleFilterChange} /> */}
					
						</div>

						<div className='row'>
							{/* <input type="number" onChange={(e) => setMinPriceInput(parseFloat(e.target.value))} />
							<input type="number" onChange={(e) => setMaxPriceInput(parseFloat(e.target.value))} />
							<Button onClick={() => setFilter({ ...filter, minDailyPrice: minPriceInput ?? 0, maxDailyPrice: maxPriceInput ?? 0 })}>Filtrele</Button>
					 */}
					{/* </div>
				</div> */}
	

				{/* <SideBar /> } */}

				<div className="row">
					<div className='container'>

						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
							{
								filteredData
									? filteredData.map((car: Car) => (<CarCard car={car} />))
									: <p>Loading...</p>
							}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default CarCardList;