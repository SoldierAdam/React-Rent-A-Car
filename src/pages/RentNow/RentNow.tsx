import React from 'react';
import CarDetails from './CarDetails';
import SelectedCarInfo from './SelectedCarInfo';
import { useState} from 'react';
import PaymentDetails from "./PaymentDetails"



export default function RentNow() {
	const [showPayment, setShowPayment] = useState(false);

	const handleButtonClick = () => {
	  setShowPayment(true);
	};

	return (
		<div className='row'>

			<SelectedCarInfo />
			{showPayment ? <PaymentDetails /> : <CarDetails onButtonClick={handleButtonClick} />}
		</div>
	);
}