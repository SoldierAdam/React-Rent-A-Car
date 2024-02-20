import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './CarCardList.css';
import CarCard from '../CarCard/CarCard';
import '../../pages/HomePage/HomePage.css';
import { useDispatch } from 'react-redux';
import { decreaseRequestCount, increaseRequestCount } from '../../store/slices/loadingSlice';
import SearchBar from '../SearchBar/SearchBar';
import SelectedDates from './SelectedDates';


import { GetAllCarResponse } from '../../models/cars/responses/getAllCarResponse';
import carService from '../../services/abstracts/CarService';
import { Car } from '../../models/model';

type FilterCriteria = {
	minDailyPrice: number;
	maxDailyPrice: number;
	selectedBrand?: string;
};


const CarCardList: React.FC = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState<GetAllCarResponse[] | null>(null);
	const [filter, setFilter] = useState<FilterCriteria>({
		minDailyPrice: 0,
		maxDailyPrice: 10000,
		selectedBrand: '',
	});
	const [minPriceInput, setMinPriceInput] = useState<number>(0);
	const [maxPriceInput, setMaxPriceInput] = useState<number>(10000);
	const [selectedBrandInput, setSelectedBrandInput] = useState<string>();

	const [sortOrder, setSortOrder] = useState<string>('');


	const [days, setDays] = useState(localStorage.getItem('days') || '');
	const location = localStorage.getItem('location') || '';
 
	useEffect(() => {
		const handleStorageChange = () => {
			setDays(localStorage.getItem('days') || '');
		}
		window.addEventListener('storage', handleStorageChange);
		return () => {
			window.removeEventListener('storage', handleStorageChange);
		}
	}
	, [days]);

    const removeSelected = () => {
        localStorage.setItem('pickupDate', '');
        localStorage.setItem('dropoffDate', '');
        localStorage.setItem('location', '');
        localStorage.setItem('days', '');
        window.location.reload(); // reload yapma
    }	

	const sortCars = (cars: GetAllCarResponse[]): GetAllCarResponse[] => {

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
				dispatch(increaseRequestCount());
				const response = await carService.getAll();
				setData(response.data.data);
				console.log(response.data);
			} catch (error) {
				console.error('There was an error!', error);
			}
			dispatch(decreaseRequestCount());
		};

		fetchData();
	}, []);

	const handleFilterChange = (minPriceInput, maxPriceInput, selectedBrandInput) => {
		setFilter({
			...filter,
			minDailyPrice: minPriceInput ?? 0,
			maxDailyPrice: maxPriceInput ?? 0,
			selectedBrand: selectedBrandInput ?? '',
		});
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

	const brandFilter = (data: GetAllCarResponse[]) => {
		const brandNames = data.map(car => car.model.brand.name);
		const uniqueBrandNames = brandNames.filter((value, index, self) => {
			return self.indexOf(value) === index;
		});

		return uniqueBrandNames;
	}

	const dropdownMenu = (
		<div className='sort-dropdown' style={{ fontSize: '20px' }}>
			<label htmlFor='sort-order' style={{ padding: '5px' }}>Sort by Price </label>
			<select id='sortOrder' onChange={(e) => setSortOrder(e.target.value)}>
				<option style={{ color: 'black', fontSize: '18px' }} value=''>Select</option>
				<option style={{ color: 'black', fontSize: '18px' }} value='asc'>Low to High</option>
				<option style={{ color: 'black', fontSize: '18px' }} value='desc'>High to Low</option>
			</select>
		</div>
	)

	const filterPanel = (
		<div className='filter-panel text-center'>

			<div className='filter-title'>Fiyat Aralığı</div>
			<div>
				<input type='number' onChange={(e) => setMinPriceInput(parseFloat(e.target.value))} />
				<br />
				<input type='number' className='filter-range-input' onChange={(e) => setMaxPriceInput(parseFloat(e.target.value))} />
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
			<button onClick={() => handleFilterChange(minPriceInput, maxPriceInput, selectedBrandInput)}>
				Filtrele
			</button>
		</div>
	);

	const sortedAndFilteredData = useMemo(() => {
		const filtered = filteredData ? filteredData : [];
		return sortCars(filtered);
	}, [filteredData, sortOrder]);


	const isLargeScreen = window.innerWidth > 1200;

	const SelectedLocation = (car: Car) => {
		if (!location || location === car.location)
		{
			return (
			<div className='col-9 col-sm-6 col-md-6 col-lg-4' key={car.id}>
			<CarCard car={car}/>
		</div>);
		}else 
			return null;
	}


	return (
		<>
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='pt-2'>
			<div className='container-fluid' style={{ padding: '10px' }}>
				<div className='row'>
					<div className='col-2'>
						<div className={`item-container ${isLargeScreen ? 'd-none d-lg-flex d-xlarge-block filter-panel-fixed' 
										: 'd-none d-lg-none '}`}>
							{filterPanel}
						</div>
					</div>

					<div className='col-8'>

						{ SelectedDates() ? <SelectedDates />
							: <SearchBar />
						}
						
						{/* filter panel yan da değil  */}
						<div className={`item-container d-none d-md-flex d-lg-none`}>
							{filterPanel}
						</div>

						<div className='col-12 d-flex justify-content-end'>
							{dropdownMenu}
						</div>
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
							{sortedAndFilteredData ? (
								sortedAndFilteredData.map((car: GetAllCarResponse) => (
									SelectedLocation(car)
								))
							) : (
								<p>Loading...</p>
							)}
						</div>
					</div>
					<div className='col-2'>
						{/* <VehicleSelector /> */}
					</div>
				</div>
			</div>
		</motion.div>
		</>
	);
};

export default CarCardList;

