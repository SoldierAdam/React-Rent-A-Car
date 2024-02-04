import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

import DropdownList from "../Dropdown/DropdownList";


function Navbar() {
	const currentLocation = useLocation();
	const user = useSelector((state: any) => state.user);
	console.log(user);

 
	return (
		<nav id="navbar">
			<div className='navbar'>
				<div className="logo"><Link to="/" className='logo'>CarRent</Link></div>
				<div className='menu'>
					<div className='menu-link'>
						<NavLink to="/contact" className={currentLocation.pathname === "/contact" ? "current" : ""} >
							Contact
						</NavLink>
					</div>
					<div className='menu-link'>
						<NavLink to="/about" className={currentLocation.pathname === "/about" ? "current" : ""} >
							About
						</NavLink>
					</div>
					<div className='menu-link'>
						<NavLink to="/cars" className={currentLocation.pathname === "/cars" ? "current" : ""} >
							Cars
						</NavLink>
					</div>
					<div className='menu-link'>
						<DropdownList user={user} currentLocation={currentLocation} />
					</div>
				
				</div>
			</div>
		</nav>
	)
}

export default Navbar

