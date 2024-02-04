import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './DropdownList.css';

interface Props {
  user: any;
  currentLocation: any;
}

const DropdownList = (props: Props) => {
  return (
    <div className="dropdown-container">
      <NavDropdown title={props.user.userName ? props.user.userName : "Login"} id="nav-dropdown-dark-example" menuVariant="dark">
        {props.user.userName ? 
          <>
            <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item> 
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </> :
          <>
            <NavDropdown.Item as={NavLink} to="/login" >Login</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/signUp">Sign Up</NavDropdown.Item>
          </>
        }
      </NavDropdown>
    </div>
  )
}

export default DropdownList;

