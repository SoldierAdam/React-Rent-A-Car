import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './../../styles/style.css'


function CarCard() {
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

	const [data, setData] = useState<Car[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:8080/api/cars/getAll');
				setData(response.data);
				console.log(response.data);
			} catch (error) {
				console.error('There was an error!', error);
			}
		};

		fetchData();
	}, []);

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-2">
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
					{data ? data.map((car: Car) => (
						<div key={car.id} className="mb-3 col">
							<motion.div whileHover={{ scale: 1.05 }}>
								<div className="card">
									<img
										src={car?.imagePath}
										alt={`Car Image - ${car.imagePath}`}
										className="card-img-top"
										style={{ objectFit: 'cover', height: '200px' }}
									/>
									<div className="card-body">
										<h5 className="card-title">
											{/* {car.modelYear} {car.model.brand.name} {car.model.name} */}
										</h5>
										<div className="d-flex justify-content-end">
											<Link to="/" className="btn btn-lg btn-outline-success" style={{ marginRight: '20px' }}>
												Book Now <br /> {car.dailyPrice}₺
											</Link>
											<button className="btn btn-lg btn-outline-danger mr-5">DETAY</button>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					)) :
						<p>Loading...</p>
					}
				</div>
			</div>
		</motion.div>
	);
}

export default CarCard;





// <div>
// {data ? (
//   <div className="container" >
// 	<div className="row">
// 	  {data.map((car: Car) => (
// 		<div className="col">
// 		  <div className="card">
// 			<img src={car.imagePath} className="card-img-top" alt={car.modelName} />
// 			<div className="card-body">
// 			  <h5 className="card-title">{car.modelName}</h5>
// 				<p className="card-text">Color: {car.colorName}</p>
// 					<ul>
// 						<li>Kilometer: {car.kilometer}</li>
// 						<li>Plate: {car.plate}</li>
// 						<li>Model Year: {car.modelYear}</li>
// 						<li>Daily Price: {car.dailyPrice}</li>
// 						<li>Min Findeks Rate: {car.minFindeksRate}</li>
// 					</ul>
// 				</div>
// 		  </div>
// 		</div>
// 	  ))}
// 	</div>
//   </div>
// ) : (
//   <p>Loading...</p>
// )}
// </div>