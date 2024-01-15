import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div >
      {data ? (
        data.map((car: Car, index: number) => (
			<div className="container">
			<div className="row">
				{data.map((car: Car) => (
				<div className="col-sm">
					<div className="card">
					<img src={car.imagePath} className="card-img-top" alt={car.modelName} />
					<div className="card-body">
						<h5 className="card-title">{car.modelName}</h5>
						<p className="card-text">Color: {car.colorName}</p>
						<ul>
						<li>Kilometer: {car.kilometer}</li>
						<li>Plate: {car.plate}</li>
						<li>Model Year: {car.modelYear}</li>
						<li>Daily Price: {car.dailyPrice}</li>
						<li>Min Findeks Rate: {car.minFindeksRate}</li>
						</ul>
					</div>
					</div>
				</div>
				))}
			</div>
			</div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CarCard;
