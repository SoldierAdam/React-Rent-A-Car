// useFetchData.ts
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseRequestCount, increaseRequestCount } from '../../store/slices/loadingSlice';
import carService from '../../services/abstracts/carService';
import brandService from '../../services/abstracts/brandService';
import modelService from '../../services/abstracts/modelService';
import colorService from '../../services/abstracts/colorService';
import customerService from '../../services/abstracts/customerService';
import rentalService from '../../services/abstracts/rentalService';
import { index } from 'd3';

export const useFetchData = () => {
  const [car, setCar] = useState([]);
  const [brand, setBrand] = useState([]);
  const [model, setModel] = useState([]);
  const [color, setColor] = useState([]);
  const [customer, setCustomer] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(increaseRequestCount());
        
		const services = [carService, brandService, modelService, colorService, customerService, rentalService];
		const setters = [setCar, setBrand, setModel, setColor, setCustomer];

		const responses = await Promise.all(services.map((service) => service.getAll()));

		responses.forEach((response, index) => {
			setters[index](response.data.data);
		});
	  } catch (error) {
		console.error(error);
	  }
	  dispatch(decreaseRequestCount());
	}
	fetchData();
  }, []);

  return { car, brand, model, color, customer };
};