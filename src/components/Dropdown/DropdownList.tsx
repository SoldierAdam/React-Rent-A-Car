import { NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './DropdownList.css'


interface Props {
  user: any;
  currentLocation: any;
}

const DropdownList = (props: Props) => {
  return (
    <div className="dropdown-container">
   
    <NavDropdown
    id="nav-dropdown-dark-example"
    title= {props.user.userName ? props.user.userName : "Login" }
    menuVariant="dark"
  >

	{props.user.userName ? 
	<>
		<NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item> 
		<NavDropdown.Item href="/">Logout</NavDropdown.Item>
	</> :
	<>
		<NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
		<NavDropdown.Item as={NavLink} to="/signUp">Sign Up</NavDropdown.Item>
	</>
	}


    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">
      Another action
    </NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
     */}
	</NavDropdown>
    </div>
  )
}

export default DropdownList