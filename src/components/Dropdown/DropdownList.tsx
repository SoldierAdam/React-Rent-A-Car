import { NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './DropdownList.css';
import tokenService from '../../services/abstracts/tokenService';


interface Props {
  user: any;
  currentLocation: any;
}

const logout = () => {
	tokenService.removeRefreshToken();
	tokenService.removeToken();
	localStorage.removeItem("userName");
}

const DropdownList = (props: Props) => {
  return (
    <div className="dropdown-container">
   
    <NavDropdown
    id="nav-dropdown-dark-example"
    title= {props.user ? props.user : "Login" }
    menuVariant="dark"
  >

	{props.user ? 
	<>
		<NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item> 
		<NavDropdown.Item href="/" onClick={()=>logout()} >Logout</NavDropdown.Item>
	</> :
	<>
		<NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
		<NavDropdown.Item as={NavLink} to="/signUp">Sign Up</NavDropdown.Item>
	</>
	}

	</NavDropdown>
    </div>
  )
}

export default DropdownList;

