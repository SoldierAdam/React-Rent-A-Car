import React from 'react'
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './DropdownList.css'


type Props = {}

const DropdownList = (props: Props) => {
  return (
    <div className="dropdown-container">
   
    <NavDropdown
    id="nav-dropdown-dark-example"
    title="Dropdown"
    menuVariant="dark"
  >
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">
      Another action
    </NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    </NavDropdown>
  
    </div>
  )
}

export default DropdownList