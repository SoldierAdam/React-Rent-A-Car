import SearchBar from '../SearchBar/SearchBar';
import './SelectedDates.css';

const removeSelected = () => {
	localStorage.setItem('pickupDate', '');
	localStorage.setItem('dropoffDate', '');
	localStorage.setItem('location', '');
	localStorage.setItem('days', '');
	window.location.reload();
}


const SelectedDates = () => {
	const pickupDate = localStorage.getItem('pickupDate');
	const dropoffDate = localStorage.getItem('dropoffDate');

	if (pickupDate && dropoffDate) {
		return (
			<>
				<div className='selected-date'>
					<h5>Seçmiş olmuş olduğunuz {pickupDate} - {dropoffDate} tarihler arasındaki uygun arabalar listelenmektedir</h5>
					<button onClick={removeSelected} >Seçiminizi kaldırmak için tıklayınız</button>
				</div>
			</>
		)
	}
	else
		return null;
};

export default SelectedDates;