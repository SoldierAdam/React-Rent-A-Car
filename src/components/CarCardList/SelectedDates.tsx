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
	const location = localStorage.getItem('location');

	if (pickupDate && dropoffDate ) {
		return (
			<>
				<div className='selected-date'>
					<h5>Seçmiş olmuş olduğunuz {pickupDate} - {dropoffDate} tarihleri arasında ve {location} ilindeki uygun arabalar listelenmektedir</h5>
					<button onClick={removeSelected} >Seçiminizi kaldırmak için tıklayınız</button>
				</div>
			</>
		)
	}
	else
		return null;
};

export default SelectedDates;