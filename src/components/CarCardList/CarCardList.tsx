import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { m, motion } from 'framer-motion';
import './CarCardList.css';
import CarCard from '../CarCard/CarCard';
import '../../pages/HomePage/HomePage.css';
import { Car } from '../../models/model';
import { useDispatch } from 'react-redux';
import { decreaseRequestCount, increaseRequestCount } from '../../store/loading/loadingSlice';

type FilterCriteria = {
	minDailyPrice: number;
	maxDailyPrice: number;
	selectedBrand?: string;
};

const CarCardList: React.FC = () => {
	// const dispatch = useDispatch();
	const [data, setData] = useState<Car[] | null>(null);
	const [filter, setFilter] = useState<FilterCriteria>({
		minDailyPrice: 0,
		maxDailyPrice: 10000,
		selectedBrand: '',
	});
	const [minPriceInput, setMinPriceInput] = useState<number>();
	const [maxPriceInput, setMaxPriceInput] = useState<number>();
	const [selectedBrandInput, setSelectedBrandInput] = useState<string>();

	const [sortOrder, setSortOrder] = useState<string>('');

	const sortCars = (cars: Car[]): Car[] => {
		if (sortOrder === 'asc') {
			return [...cars].sort((a, b) => a.dailyPrice - b.dailyPrice);
		} else if (sortOrder === 'desc') {
			return [...cars].sort((a, b) => b.dailyPrice - a.dailyPrice);
		}
		return cars;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				// dispatch(increaseRequestCount());
				const response = await axios.get('http://localhost:8080/api/cars/getAll');
				setData(response.data.data);
				console.log(response.data);
			} catch (error) {
				console.error('There was an error!', error);
			}
			// dispatch(decreaseRequestCount());
		};

		fetchData();
	}, []);

		//eklenecek
		// useEffect(() => {
			// 	carService.getAll().then(response => console.log(response));
			// }, []);

	const handleFilterChange = (newFilter: FilterCriteria) => {
		setFilter(newFilter);
	};

	const filteredData = useMemo(() => {
		if (!data) return null;

		return data.filter(
			(car) =>
				car.dailyPrice >= filter.minDailyPrice &&
				car.dailyPrice <= filter.maxDailyPrice &&
				(filter.selectedBrand ? car.model.brand.name === filter.selectedBrand || filter.selectedBrand === "All Brand" : true)
		);
	}, [data, filter]);

	const brandFilter = (data: Car[]) => {
		const brandNames = data.map(car => car.model.brand.name);
		const uniqueBrandNames = brandNames.filter((value, index, self) => {
			return self.indexOf(value) === index;
		});
		console.log(uniqueBrandNames);

		return uniqueBrandNames;
	}

	const dropdownMenu = (
		<div className='sort-dropdown' style={{ fontSize: '20px' }}>
			<label htmlFor='sortOrder' style={{ padding: '5px' }}>Sort by Price </label>
			<select id='sortOrder' onChange={(e) => setSortOrder(e.target.value)}>
				<option style={{ color: 'black', fontSize: '18px' }} value=''>Select</option>
				<option style={{ color: 'black', fontSize: '18px' }} value='asc'>Low to High</option>
				<option style={{ color: 'black', fontSize: '18px' }} value='desc'>High to Low</option>
			</select>
		</div>
	)

	const filterPanel = (
		<div className='filter-panel'>
			<div className='filter-title'>Fiyat Aralığı</div>
			<div className='number-range'>
				<input type='number' onChange={(e) => setMinPriceInput(parseFloat(e.target.value))} />
				<input type='number' onChange={(e) => setMaxPriceInput(parseFloat(e.target.value))} />
			</div>
			<br />
			<div className='filter-title'>Marka</div>
			<div className='filter-range-inputs'>
				<select onChange={(e) => setSelectedBrandInput(e.target.value)}>
					<option value="All Brand">Tüm Markalar</option>
					{brandFilter(data || []).map((brandName, index) => (
						<option key={index} value={brandName}>
							{brandName}
						</option>
					))}
				</select>
			</div>
			<button
				onClick={() =>
					setFilter({
						...filter,
						minDailyPrice: minPriceInput ?? 0,
						maxDailyPrice: maxPriceInput ?? 0,
						selectedBrand: selectedBrandInput ?? '',
					})
				}
			>
				Filtrele
			</button>
		</div>
	);

	const sortedAndFilteredData = useMemo(() => {
		const filtered = filteredData ? filteredData : [];
		return sortCars(filtered);
	}, [filteredData, sortOrder]);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='pt-2'>
			<div className='container-fluid' style={{ padding: '10px' }}>
				<div className='row'>
					<div className='col-2'>
						<div className='col-1'></div>
						<div className='item-container d-none d-lg-flex d-xlarge-block '>  {/*doesn't appear on small screens */}
							{filterPanel}
						</div>
					</div>

					<div className='item-container d-none d-md-flex d-lg-none align-items-center justify-content-center'> {/*doesn't appear on small screens */}
						{filterPanel}
					</div>

					<div className='col-8'>
						<div className='col-12 d-flex justify-content-end'>
							{dropdownMenu}
						</div>
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
							{sortedAndFilteredData ? (
								sortedAndFilteredData.map((car: Car) => (
									<div className='col-9 col-sm-6 col-md-6 col-lg-4' key={car.id}>
										<CarCard car={car} />
									</div>
								))
							) : (
								<p>Loading...</p>
							)}
						</div>
					</div>
					<div className='col-1'></div>
				</div>
			</div>
		</motion.div>
	);
};

export default CarCardList;

