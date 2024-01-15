import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
	
	const location = useLocation();

  return (
	<nav id="navbar">
	<div className="container">
	  <h1 className="logo"><Link to="/">HBT</Link></h1>
	  <ul>
		<li>
      <NavLink to="/contact" className={location.pathname === "/contact" ? "current" : ""} >
        Contact
      </NavLink>
	</li>
	<li>
	  <NavLink to="/about" className={location.pathname === "/about" ? "current" : ""} >
		About
      </NavLink>
	</li>
	<li>
	  <NavLink to="/cars" className={location.pathname === "/cars" ? "current" : ""} >
		Cars
	  </NavLink>
    </li>
	  </ul>
	</div>
  </nav>
  )
}

export default Navbar;