import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import {MenuItem, Dropdown, DropdownItem, DropdownMenu} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { Menu, MenuMenu } from 'semantic-ui-react';
// semantic ui
import "semantic-ui-css/semantic.min.css";



// user varsa user yazdır yoksa login yazdır
const loginVariable = (user: any, currentLocation: any) => {
	if (user.userName) {
		return <div className='menu-link'>
			<NavLink to="/profile" className={currentLocation.pathname === "/profile" ? "current" : ""} >
				{user.userName}
			</NavLink>
		</div>
	} else{
		return <div className='menu-link'>
			<NavLink to="/login" className={currentLocation.pathname === "/login" ? "current" : ""} >
				Login
			</NavLink>
		</div>
	}
}

const handleSignOut = () => {
	const dispatch = useDispatch();
	dispatch(logout());
}

const dropdownLogin = (user:any, currentLocation: any) => (
<Menu size='tiny'>

        <MenuMenu position='right'>
          <Dropdown item text='Language'>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Russian</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuMenu>
      </Menu>
)


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
				
						{dropdownLogin(user, currentLocation)}






						{/* <div className='menu-link'>
						<NavLink to="/basket" className={location.pathname === "/basket" ? "current" : ""} >
							<FontAwesomeIcon icon={faCartShopping as IconProp} />
						</NavLink>
					</div> */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
