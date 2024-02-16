import "../Admin/Admin.css";
import Icon from '@mdi/react';
import AddCar from "./AddCar";
import UpdateCar from "./UpdateCar";
import Panel from "./AccordionPanel";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type Props = {}

function Admin({ }: Props) {

	const location = useLocation();

	useEffect(() => {
		localStorage.removeItem('car');
		localStorage.removeItem('models');
		localStorage.removeItem('colors');
	}, [location.pathname]);

	const header = () => {
		if (location.pathname === "/admin") {
			return (<h3>Car List</h3>)
		} else if (location.pathname === "/admin/customers") {
			return (<h3>Customer List</h3>)
		} else if (location.pathname === "/admin/rentals") {
			return (<h3>Rental List</h3>)
		}
	}

	const page = () => {
		if (location.pathname === "/admin")
		{
			return (
				<>
					<Panel title="Add Car" content={<AddCar />} />
					<Panel title="Update Car" content={<UpdateCar />} />
				</>
			)
		}	else if (location.pathname === "/admin/customers")
			return (<Panel title="Add Customer" content={<AddCar />} />)
		else if (location.pathname === "/admin/rentals")
			return (<Panel title="Add Rental" content={<AddCar />} />)
	}

	return (
		<div className="admin-page row">
			<div className="col-1"></div>
			<div className="col-3">
				<div>
					<Panel title="Car" content="Content 1" />
					<Panel title="Model" content="Content 2" />
					<Panel title="Brand" content="Content 3" />
				</div>
			</div>
			<div className="col-7">
				<div className="row">
					<div className="col-3">
						<div className="crud-header">
							{header()}
						</div>
					</div>
					<div className="row">
						<div>
							{page()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;