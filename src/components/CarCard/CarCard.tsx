import React from 'react';
import './CarCard.css';
import { Button, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'
import  { Car, Model, Brand, Color}  from '../../models/model';

interface CarListingProps {
	car: Car;
}

const vehicleFeatures =
	<>
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
		<b className="list-title text-center">Kiralama Koşulları</b>
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



const CarCard: React.FC<CarListingProps> = ({ car }) => (
	<div className="car-listing">
		{car &&
			<div key={car.id} className="car-card">
				<b className="car-model">{car.model.brand.name}</b>
				<button className="rent-button">
					<span>Hemen Kirala</span>
					<i className="icon icon-arrow-right"></i>
				</button>
				<motion.div whileHover={{ scale: 1.05 }}>
					<img src={car.imagePath} alt={`${car.model.name}`} className="car-image" />
					<div className="car-info">
						<p className='car-name'>{car.model.name} {car.modelYear}</p>
						<p className="car-price">{car.dailyPrice} TL</p>
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
					</div>
				</motion.div>
			</div>
		}
	</div>

);

export default CarCard;
