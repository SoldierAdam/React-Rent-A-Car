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

	const handleBackClick = () => {
		setShowPayment(false);
	};

    return (
        <div className='row'>
            <SelectedCarInfo />
            {showPayment ? <PaymentDetails onBackClick={handleBackClick} /> : <CarDetails onButtonClick={handleButtonClick} />}
        </div>
    );
}