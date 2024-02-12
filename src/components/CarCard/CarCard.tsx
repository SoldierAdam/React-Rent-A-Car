import React from 'react';
import './CarCard.css';
import { motion } from 'framer-motion'
import { Car } from '../../models/model';
import { useDispatch } from 'react-redux';
import { setCar } from '../../store/car/carSlice';
import { useNavigate } from 'react-router-dom';
import { local } from 'd3';

interface CarListingProps {
	car: Car;
}

const features = [
	{adult: 5, icon: 'people', text: '5 Yetişkin'},
	{bag: 2, icon: 'big-bag', text: '2 Büyük Bavul'},
	{airbag: true, icon: 'airbag', text: 'Yolcu Airbag'},
	{abs: true, icon: 'abs', text: 'ABS'},
	{fuel: 'diesel', icon: 'fuel', text: 'Dizel/Benzin'},
	{gear: 'manual', icon: 'gear', text: 'Manuel'}
]


const vehicleFeatures =
	<>
		<br />
		<b className="list-title">Araç Özellikleri</b>
		<ul className="icon-list">
			{features.map((feature, index) => (
				<li key={index}>
					<i className={`icon icon-${Object.values(feature)[1]}`}></i>
					<span>{Object.values(feature)[2]}</span>
				</li>
			))}
		</ul>
	</>

const Conditions = [
	{age: 21, icon: 'calendar', text: '21 Yaş Ve Üstü'},
	{driverAge: 1, icon: 'driver', text: 'Ehliyet Yaşı 1 ve Üzeri'},
	{creditCard: 1, icon: 'credit-card', text: '1 Kredi Kartı'}
]

const rentConditions =
	<>
		<br />
		<b className="list-title">Kiralama Koşulları</b>
		<ul className="icon-list">
			{Conditions.map((condition, index) => (
				<li key={index}>
					<i className={`icon icon-${Object.values(condition)[1]}`}></i>
					<span>{Object.values(condition)[2]}</span>
				</li>
			))}
		</ul>
	</>

const priceCalculate = (price: number) => {
	const day = localStorage.getItem('days');
	day ? price = price * parseInt(day) : price = price;
	return price;
}



const CarCard: React.FC<CarListingProps> = ({ car }) => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClickFunc = () => {
		dispatch(setCar(car));
		localStorage.setItem('car', JSON.stringify(car));
		navigate('/rentNow');
	}
	return (
		<div className="car-listing">
			{car &&
				<div key={car.id} className="car-card">
					<motion.div whileHover={{ scale: 1.05 }}>
						<img src={car.imagePath} alt={`${car.model.name}`} className="carCard-image" />
						<div className="car-info">
							<b className="car-model">{car.model.brand.name} {car.model.name} {car.modelYear} </b>
							<span className="car-price">{priceCalculate(car.dailyPrice)} TL</span>
						</div>
						<button className="rent-button" onClick={handleClickFunc}>
							<span>Hemen Kirala</span>
							<i className="icon icon-arrow-right"></i>
						</button>
						<div className='item-container d-none d-lg-flex d-xlarge-block ' >
							<div className="item col-6">
								{vehicleFeatures}
							</div>
							<div className="item col-6">
								{rentConditions}
							</div>
						</div>
						<div className='item-container d-none d-md-flex d-lg-none ' >
							<div className="item col-6">
								{rentConditions}
							</div>
						</div>
					</motion.div>
				</div>
			}
		</div>
	);
}


export default CarCard;
