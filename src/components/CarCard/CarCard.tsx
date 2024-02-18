import React from "react";
import "./CarCard.css";
import { motion } from "framer-motion";
import { Car } from "../../models/model";
import { useDispatch } from "react-redux";
import { setCar } from "../../store/car/carSlice";
import { useNavigate } from "react-router-dom";
import { FaPerson } from "react-icons/fa6";
import { BsSafeFill } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";

interface CarListingProps {
  car: Car;
}

export const priceCalculate = (price: number) => {
  const day = localStorage.getItem("days");
  day ? (price = price * parseInt(day)) : (price = price);
  localStorage.setItem("price", price.toString());
  return price;
};

const totalPrice = (dailyPrice: number) => {
  const day = localStorage.getItem("days");
  return parseInt(day) * dailyPrice;
};

const CarCard: React.FC<CarListingProps> = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickFunc = () => {
    if (!localStorage.getItem("location")) {
      alert("Lütfen Seçim yapınız!!");
      return;
    }

    const total = totalPrice(car.dailyPrice);
    localStorage.setItem('total',total.toString());
    dispatch(setCar(car));
    localStorage.setItem("car", JSON.stringify(car));
    navigate("/rentNow");
  };
  return (
    <div className="car-listing">
      {car && (
        <div key={car.id} className="car-card">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img
              src={car.imagePath}
              alt={`${car.model.name}`}
              className="carCard-image"
            />
            <div className="car-info">
              <b className="car-model">
                {car.model.brand.name} {car.model.name} {car.modelYear}{" "}
              </b>
              <span className="car-price">
                {priceCalculate(car.dailyPrice)} TL
              </span>
            </div>
            <button className="rent-button" onClick={handleClickFunc}>
              <span>Hemen Kirala</span>
            </button>
            <div className="item-container d-none d-lg-flex d-xlarge-block ">
              <div className="item col-6">
                <b className="list-title">Araç Özellikleri</b>
                <ol className="icon-list">
                  <li className="features">
                    <div className="icon-with-text">
                      <FaPerson />
                      <p>{car.seatCapacity} Kişilik</p>
                    </div>
                  </li>
                  <li className="features">
                    <div className="icon-with-text">
                      <BsSafeFill />
                      <p>{car.airbag ? "Airbag" : ""} </p>
                    </div>
                  </li>
                  <li className="features">
                    <div className="icon-with-text">
                      <GiGearStick />
                      <p>{car.transmissionType}</p>
                    </div>
                  </li>
                  <li className="features">
                    <div className="icon-with-text">
                      <BsFillFuelPumpFill />
                      <p>{car.fuelType}</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="item col-6">
                <b className="list-title">Kiralama Koşulları</b>
                <ol className="icon-list">
                  <li className="features">
                    <div className="icon-with-text">
                      <FaMoneyCheckAlt className="depozisite-icon" />
                      <p className="deposite"> {car.depositPrice} TL</p>
                    </div>
                  </li>
                  <li className="features">
                    <div className="icon-with-text">
                      <MdPerson />
                      <p>{car.minCustomerAge} ve Üstü</p>
                    </div>
                  </li>
                  <li className="features">
                    <div className="icon-with-text">
                      <FaAddressCard className="icon" />
                      <p>{car.drivingLicenseAge} ve Üzeri</p>
                    </div>
                  </li>

                  <li className="location">
                    <div className="icon-with-text">
                      <IoLocation />
                      <p>{car.location} </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
