import React from 'react'
import { useSelector } from 'react-redux';

const SelectedCarInfo = () => {
	const car = useSelector((state: any) => state.car);

	return (
		<div className='col-3'>
			<aside className="fixed right-0 top-0 w-1/4 h-screen bg-white shadow-lg p-4 overflow-auto">
				<div className="flex flex-col h-full justify-between">
					{/* Vehicle and Rental Information Section */}
					<div>
						<h2 className="text-lg font-semibold mb-4">Araç ve Teslim Bilgileri</h2>
						<div className="mb-6">

							<div className='car-image'>
								<img src={car.imagePath} alt={car.model.name} />
							</div>
							<h3 className="text-lg font-semibold">Renault Clio</h3>
						</div>
						<div className="underline"></div>
						{/* Car Details List */}
						<ul className="car-detail">

							<li className="flex justify-between">
								<span>Benzin ya da Dizel</span>
								<span>Manuel</span>
							</li>
							<li className="flex justify-between">
								<span>5 koltuklu</span>
								<span>2 valiz</span>
							</li>
							<li className="flex justify-between">
								<span>Depozito: 2500 TL</span>
							</li>
						</ul>
						<div className="underline"></div>
						{/* Rental Time Information */}
						<div className="mb-6">
							<div className="flex justify-between mb-2">
								<span className="text-sm font-semibold">Teslim Alış</span>
								<span className="text-sm">12 Şubat 2024 13:00</span>
							</div>
							<div className="flex justify-between">
								<span className="text-sm font-semibold">Teslim Etme</span>
								<span className="text-sm">15 Şubat 2024 10:00</span>
							</div>
							<p className="text-xs text-gray-600 mt-2">Sabiha Gökçen Havalimanı</p>
						</div>
					</div>
					<div className="underline"></div>
					{/* Price Summary Section */}
					<div>
						<div className="mb-4">
							<h2 className="text-lg font-semibold mb-2">Toplam Tutar</h2>
							<div className="flex justify-between">
								<span className="text-sm font-semibold">Kartınızdan Çekilecek Tutar</span>
								<span className="text-sm font-semibold">2.871,26 TL</span>
							</div>
							<p className="text-xs text-gray-600 mt-1">Rezervasyon Ücreti</p>
							<p className="text-xs text-gray-600 mt-1">2.871,26 TL</p>
						</div>

						<div className="text-center">
							<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
								Devam et
							</button>
						</div>
					</div>
				</div>
			</aside>
		</div>
	)
}

export default SelectedCarInfo