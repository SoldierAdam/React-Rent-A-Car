import React from 'react';
import CarDetails from './CarDetails';
import SelectedCarInfo from './SelectedCarInfo';
import { useState} from 'react';
import PaymentDetails from './PaymentDetails';
import { useDispatch } from 'react-redux';
import { setCustomerInfo } from '../../store/rentNow/rentSlice';



export default function RentNow() {
	const [showPayment, setShowPayment] = useState(false);
	const dispatch = useDispatch();

	const handleButtonClick = () => {
	  setShowPayment(true);
	};

	const handleBackClick = () => {
		setShowPayment(false);
		dispatch(setCustomerInfo(null));
	};

    return (
        <div className='row'>
            <SelectedCarInfo />
            {showPayment ? <PaymentDetails onBackClick={handleBackClick} /> : <CarDetails onButtonClick={handleButtonClick} />}
        </div>
    );
}