import React from 'react';
import './CarCard.css';
import { motion } from 'framer-motion'
import { Car } from '../../models/model';

interface CarListingProps {
	car: Car;
}

const vehicleFeatures =
	<>
		<br />
		<b className="list-title">Araç Özellikleri</b>
		<ul className="icon-list">
			<li>
				<i className="icon icon-people"></i>
				<span>5 Yetişkin</span>
			</li>
			<li>
				<i className="icon icon-big-bag"></i>
				<span>2 Büyük Bavul</span>
			</li>
			<li>
				<i className="icon icon-airbag"></i>
				<span>Yolcu Airbag</span>
			</li>
			<li>
				<i className="icon icon-abs"></i>
				<span>ABS</span>
			</li>
			<li>
				<i className="icon icon-fuel"></i>
				<span>Dizel/Benzin</span>
			</li>
			<li>
				<i className="icon icon-gear"></i>
				<span>Manuel</span>
			</li>
		</ul>
	</>

const rentConditions =
	<>
		<br />
		<b className="list-title">Kiralama Koşulları</b>
		<ul className="icon-list">
			<li>
				<i className="icon icon-calendar"></i>
				<span>21 Yaş Ve Üstü</span>
			</li>
			<li>
				<i className="icon icon-driver"></i>
				<span>Ehliyet Yaşı 1 ve Üzeri</span>
			</li>
			<li>
				<i className="icon icon-credit-card"></i>
				<span>1 Kredi Kartı</span>
			</li>
		</ul>
	</>

const priceCalculate = (price: number) => {
	const day = localStorage.getItem('days');
	day ? price = price * parseInt(day) : price = price;
	return price;
}



const CarCard: React.FC<CarListingProps> = ({ car }) => (
	<div className="car-listing">
		{car &&
			<div key={car.id} className="car-card">
				<motion.div whileHover={{ scale: 1.05 }}>
					<img src={car.imagePath} alt={`${car.model.name}`} className="car-image" />
					<div className="car-info">
						<b className="car-model">{car.model.brand.name} {car.model.name} {car.modelYear} </b>
						<span className="car-price">{priceCalculate(car.dailyPrice)} TL</span>
					</div>
					<button className="rent-button">
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

export default CarCard;
