import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { m, motion } from 'framer-motion';
import './CarCardList.css'
import SideBar from './SideBar';
import DataChart from './DataChart';
import RangeBar from './RangeBar';
import CarCard from '../CarCard/CarCard';
import '../../pages/HomePage/HomePage.css'
import { Car, Model, Brand, Color } from '../../models/model';

type FilterCriteria = {
	minDailyPrice: number;
	maxDailyPrice: number;
};

const CarCardList: React.FC = () => {

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


	// içerisine data'yı alacak bir fonksiyon yazılacak
	// data içerisindeki brandName'leri alıp bir array'e atacak
		// array içerisindeki brandName'lerden unique olanları alıp bir array'e atacak
		// array içerisindeki unique brandName'lerden bir select oluşturacak
		// select içerisindeki option'lara unique brandName'leri yazacak
		// select'i return edecek
	const brandFilter = (data: Car[]) => {
		const brandNames = data.map(car => car.model.brand.name);
		const uniqueBrandNames = brandNames.filter((value, index, self) => {
			return self.indexOf(value) === index;
		  });
		  console.log(uniqueBrandNames);
		const select = 
		<select>
			{uniqueBrandNames.map((brandName, index) => <option key={index} value={brandName}>{brandName}</option>)}
		</select>
		return select;

	}

	const filterPanel =
		<div className='filter-panel'>
			<div className='filter-title'>Fiyat Aralığı</div>
			<div className='filter-range-inputs'>
				<input type="number" onChange={(e) => setMinPriceInput(parseFloat(e.target.value))} />
				<input type="number" onChange={(e) => setMaxPriceInput(parseFloat(e.target.value))} />
			</div>
			<button onClick={() => setFilter({ ...filter, minDailyPrice: minPriceInput ?? 0, maxDailyPrice: maxPriceInput ?? 0 })}>Filtrele</button>

			<div className='filter-title'>Marka</div>
			<div className='filter-range-inputs'>
					{brandFilter(data || [])}
			</div>
			<button>Filtrele</button>







		</div>


	useEffect(() => {
		console.log(data);
		console.log(filteredData);
	}, [data, filteredData]);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-2">
			<div className='container-fluid' style={{ padding: '10px' }}>
				<div className='row'>
					<div className='col-2'>
						<div className='col-1'></div>
						{filterPanel}
					</div>

					<div className='col-8'>
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
							{
								filteredData
									? filteredData.map((car: Car) => (
										<div className="col-9 col-sm-6 col-md-6 col-lg-4">
											<CarCard car={car} />
										</div>
									))
									: <p>Loading...</p>
							}
						</div>
					</div>
					<div className='col-1'></div>
				</div>
			</div>
		</motion.div>
	);
}

export default CarCardList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { m, motion } from 'framer-motion';
// import './../../styles/style.css'
// import SideBar from './SideBar';
// import DataChart from './DataChart';
// import RangeBar from './RangeBar';
// import CarCard from '../CarCard/CarCard';

// type Car = {
// 	id: number;
// 	kilometer: number;
// 	plate: string;
// 	modelYear: number;
// 	dailyPrice: number;
// 	minFindeksRate: number;
// 	imagePath: string;
// 	modelName: string;
// 	colorName: string;
// };

// type FilterCriteria = {
// 	minDailyPrice: number;
// 	maxDailyPrice: number;
// };

// const CarCardList: React.FC = () => {
// 	type Car = {
// 		id: number;
// 		kilometer: number;
// 		plate: string;
// 		modelYear: number;
// 		dailyPrice: number;
// 		minFindeksRate: number;
// 		imagePath: string;
// 		modelName: string;
// 		colorName: string;
// 		brandName: string;
// 	};

// 	const [data, setData] = useState<Car[] | null>(null);
// 	const [filter, setFilter] = useState<FilterCriteria>({ minDailyPrice: 0, maxDailyPrice: 1000 });
// 	const [minPriceInput, setMinPriceInput] = useState<number>();
// 	const [maxPriceInput, setMaxPriceInput] = useState<number>();


// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get('http://localhost:8080/api/cars/getAll');
// 				setData(response.data.data);
// 				console.log(response.data);
// 			} catch (error) {
// 				console.error('There was an error!', error);
// 			}
// 		};

// 		fetchData();
// 	}, []);



// 	const handleFilterChange = (newFilter: FilterCriteria) => {
// 		setFilter(newFilter);
// 	}


// 	const filteredData = Array.isArray(data) ? data.filter(car => car.dailyPrice >= filter.minDailyPrice && car.dailyPrice <= filter.maxDailyPrice) : [];

// 	useEffect(() => {
// 		console.log(data);
// 		console.log(filteredData);
// 	}, [data, filteredData]);


// 	return (
// 		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-2">
// 			<div className='container'>
// 				<div className='row'>
// 					<div className='col-1'>
// 						<div className='row'>
// 							<input type="number" onChange={(e) => setMinPriceInput(parseFloat(e.target.value))} />
// 							<input type="number" onChange={(e) => setMaxPriceInput(parseFloat(e.target.value))} />
// 							<button onClick={() => setFilter({ ...filter, minDailyPrice: minPriceInput ?? 0, maxDailyPrice: maxPriceInput ?? 0 })}>Filtrele</button>
// 						</div>
// 					</div>
// 					<div className='col-11'>

// 						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
// 							{
// 								filteredData
// 									? filteredData.map((car: Car) => (
// 										<div className="col mb-4">
// 											<CarCard car={car} />
// 										</div>
// 									))
// 									: <p>Loading...</p>
// 							}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// }

// export default CarCardList;




// // <div className='container'>
// // {/* <div className='col'>
// // 	<div className='row'> */}
// // 	{/* <DataChart data={data || []} />  */}
// // {/* <RangeBar data={data || []} onFilterChange={handleFilterChange} /> */}

// // </div>

// // 	<div className='row'>
// // 		{/*
// //  */}
// // {/* </div>
// // </div> */}


// // {/* <SideBar /> } */}