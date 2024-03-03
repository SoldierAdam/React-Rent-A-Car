import BaseTable from './Table'

import carService from '../../services/abstracts/carService'
import brandService from '../../services/abstracts/brandService'
import modelService from '../../services/abstracts/modelService'

import AdminInfoBadges from './Badge'
import SideBar from './SideBar/SideBar'
import { useFetchData } from './UseFetchData'
import { useLocation } from 'react-router-dom'
import { TableCarInformation, TableBrandInformation, TableModelInformation, TableColorInformation, TableCustomerInformation, headers } from './tableInfo'
import { generateProps } from './props'
import colorService from '../../services/abstracts/colorService'
import customerService from '../../services/abstracts/customerService'
import rentalService from '../../services/abstracts/rentalService'

const Admin = () => {

	const { car, brand, model, color, customer } = useFetchData();
	const location = useLocation().pathname.split("/")[2];

	const carProps = generateProps(car, TableCarInformation, carService, headers[0].value);
	const brandProps = generateProps(brand, TableBrandInformation, brandService, headers[1].value);
	const modelProps = generateProps(model, TableModelInformation, modelService, headers[2].value);
	const colorProps = generateProps(color, TableColorInformation, colorService, headers[3].value);
	const customerProps = generateProps(customer, TableCustomerInformation, customerService, headers[4].value);
	const rentalProps = generateProps(customer, TableCustomerInformation, rentalService, headers[5].value);

	return (
		<div className='row'>
			<div className="col-1">
				<SideBar />
			</div>
			<div className="col-10" style={{paddingLeft: "10px"}}>
				<div className="row">
					{location === "cars" && <BaseTable {...carProps} />}
					{location === "brands" && <BaseTable {...brandProps} />}
					{location === "models" && <BaseTable {...modelProps} />}
					{location === "colors" && <BaseTable {...colorProps} />}
					{location === "customers" && <BaseTable {...customerProps} />}
					{location === "rentals" && <BaseTable {...rentalProps} />}
				</div>
			</div>

		</div>
	)
}

export default Admin

