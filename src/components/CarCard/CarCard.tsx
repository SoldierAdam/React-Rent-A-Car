import React from 'react';
import './CarCard.css';

type Car = {
	id: number;
	imagePath: string;
	modelYear: number;
	modelName: string;
	colorName: string;
	dailyPrice: number;
}

interface CarListingProps {
	car: Car;
}

const CarCard: React.FC<CarListingProps> = ({ car }) => (
	<div className="car-listing">
		{car &&
			<div key={car.id} className="car-card">
				<b className="car-model">{car.modelName}</b>

				<img src={car.imagePath} alt={`${car.modelName}`} className="car-image" />
				<div className="car-info">
					<p className="car-year">{car.modelYear}</p>
					<p className="car-price">{car.dailyPrice} TL</p>
					<div className='item-container' >
						<div className="item">
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
						</div>
						<div className="item">
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
						</div>
					</div>
				</div>
			</div>
		}
	</div>

);

export default CarCard;





// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'


// type Car = {
// 	id: number;
// 	imagePath: string;
// 	modelYear: number;
// 	modelName: string;
// 	colorName: string;
// 	dailyPrice: number;
// }
// type Props = {
// 	car: Car;
// };

// function CarCard({ car }: Props) {
// 	return (
// 		<div key={car.id} className="col-md3l">
// 			<motion.div whileHover={{ scale: 1.05 }}>
// 				<div className="card">
// 					<img
// 						src={car?.imagePath}
// 						alt={`Car Image - ${car.imagePath}`}
// 						className="card-img-top"
// 						style={{ objectFit: 'cover', height: '200px' }}
// 					/>
// 					<div className="card-body">
// 						<h5 className="card-title">
// 							{car.modelYear} {car.modelName} {car.colorName}
// 						</h5>
// 						<div className="d-flex justify-content-end">
// 							<Link to="/" className="btn btn-lg btn-outline-success" style={{ marginRight: '20px' }}>
// 								Book Now <br /> {car.dailyPrice}₺
// 							</Link>
// 							<button className="btn btn-lg btn-outline-danger mr-5">DETAY</button>
// 						</div>
// 					</div>
// 				</div>
// 			</motion.div>
// 		</div>
// 	)
// }

// export default CarCard