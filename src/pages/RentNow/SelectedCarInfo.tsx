import { local } from "d3";
import React from "react";
import { useSelector } from "react-redux";

const SelectedCarInfo = () => {
  const car = useSelector((state: any) => state.car);
  const totalPrice = localStorage.getItem("total");
  const pickUpDate = localStorage.getItem("pickupDate");
  const dropoffDate = localStorage.getItem('dropoffDate');

  return (
    <div className="col-3">
      <aside className="fixed right-0 top-0 w-1/4 h-screen bg-white shadow-lg p-4 overflow-auto">
        <div>
          {/* Vehicle and Rental Information Section */}
          <h2 className="text-lg font-semibold mb-4">
            Araç ve Teslim Bilgileri
          </h2>
          <div className="header-car-detail">
            <div className="car-image">
              <img src={car.imagePath} alt={car.model.name} />
            </div>
            <h4 className="text-lg font-semibold">{car.model.brand.name}</h4>
            <h3 className="text-lg font-semibold">{car.model.name}</h3>
            <h3 className="text-lg font-semibold">{car.modelYear}</h3>
          </div>
          <div className="underline"></div>
          <div className="container-car-detail">
            <div className="row">
              <div className="col-sm">
                <b className="header-car-features">Araç Özellikleri</b>
                <li className="header-li">
                  <p>{car.fuelType}</p>
                  <p>{car.transmissionType}</p>
                  <p>{car.seatCapacity} Kişilik</p>
                  <p>{car.airbag ? "Airbag" : ""} </p>
                </li>
              </div>
              <div className="col-sm">
                <b className="header-car-features">Kiralama Koşulları</b>
                <li>
                  <p>{car.depositPrice} TL Depozito</p>
                  <p>{car.drivingLicenseAge} yıl ve üzeri</p>
                  <p>{car.minCustomerAge} yaş ve üzeri</p>
                  <p>Teslim Yeri: {car.location}</p>
                </li>
              </div>
            </div>
          </div>
          <div className="underline"></div>
          {/* Rental Time Information */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <h3 className="header-car-features">Araç Teslim Bilgileri</h3>
              <div className="underline"></div>
              <div className="car-rent-detail">
                <p className="text-sm">
                  <strong>Alış Tarihi : </strong>
                </p>
                <p className="text-sm">{pickUpDate}</p>
              </div>
            </div>
            <div className="car-rent-detail">
              <p className="text-sm">
                <strong>Teslim Tarihi : </strong>
              </p>
              <p className="text-sm">{dropoffDate}</p>
            </div>
            <div className="car-rent-detail">
              <p className="text-xs text-gray-600 mt-2">
                <strong>Alış Yeri :</strong> {car.location}
              </p>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        {/* Price Summary Section */}
        <div>
          <div className="mb-4">
            <h2 className="header-car-features">Toplam Tutar</h2>
            <div className="underline"></div>
            <div className="car-rent-detail">
              <p className="total-price"><strong>Toplam Tutar : </strong>{totalPrice} TL</p>
          
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SelectedCarInfo;
