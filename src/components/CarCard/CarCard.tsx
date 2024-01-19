import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


type Car = {
	id: number;
	imagePath: string;
	modelYear: number;
	modelName: string;
	colorName: string;
	dailyPrice: number;
}
type Props = {
	car: Car;
};

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
			// Eğer response.data içindeki data özelliği bir dizi ise, bu diziyi setData'ya atayın
			setData(response.data.data || []);
			console.log(response.data);
		  } catch (error) {
			console.error('There was an error!', error);
		  }
		};
	  
		fetchData();
	  }, []);
	  

function CarCard({ car }: Props) {
	return (
		<div key={car.id} className="col-md3l">
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
							{car.modelYear} {car.modelName} {car.colorName}
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
	)
}

export default CarCard