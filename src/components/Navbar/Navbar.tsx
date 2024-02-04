import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DropdownList from "../Dropdown/DropdownList";
import "./Navbar.css";

function Navbar() {
	const currentLocation = useLocation();
	const user = useSelector((state: any) => state.user.user);
	// const user = localStorage.getItem('user');
	// console.log(user);
 
	return (
		<nav id="navbar">
			<div className='navbar'>
				{/* <div className="navbar-logo">
					<img src={require("../../assets/images/navbarlogo.png")} className="navbar-png"/>
				</div> */}
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

