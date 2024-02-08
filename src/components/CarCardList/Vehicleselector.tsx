import React from 'react';
import './VehicleSelector.css';
import sedanImage from '../../assets/images/sedan-car-model.png';
import suvImage from '../../assets/images/suv-car-model.png';
import coupeImage from '../../assets/images/coupe-car-model.png';


// SVG İkonlar için ayrı komponentler
const SedanIcon = () => (
	<img src={sedanImage} alt="Description" width="50" height="50" />
);

const SUVIcon = () => (
	<img src={suvImage} alt="Description" width="50" height="50" />
);

const CoupeIcon = () => (
	<img src={coupeImage} alt="Description" width="50" height="50" />
);

const ConvertibleIcon = () => (
	<img src={suvImage} alt="Description" width="50" height="50" />
);

// Diğer SVG ikonlarını da benzer şekilde ekleyebilirsiniz.

// Araç tipi butonları için ayrı komponentlersu
const SedanButton = () => (
	<button className="vehicleButton">
		<div className="iconWrapper"><SedanIcon /></div>
		<div className="label">  Sedan </div>
	</button>
);

const SUVButton = () => (
	<button className="vehicleButton">
		<div className="iconWrapper"><SUVIcon /></div>
		<div className="label text-center"> SUV </div>
	</button>
);

const CoupeButton = () => (
	<button className="vehicleButton">
		<div className="iconWrapper"><CoupeIcon /></div>
		<div className="label"> Coupe</div>
	</button>
);

const ConvertibleButton = () => (
	<button className="vehicleButton">
		<div className="iconWrapper"><ConvertibleIcon /></div>
		<div className="label">Convertible </div>
	</button>
);

// Family car, Station wagon, Guaranteed model, Electric vehicle, Luxury vehicle için buton komponentleri

// Tüm araç seçim butonlarını içeren ana komponent
const VehicleSelector = () => {
	return (
		<div className="vehicleSelector">
			<SedanButton />
			<SUVButton />
			<CoupeButton />
			<ConvertibleButton />
		</div>
	);
}

export default VehicleSelector;