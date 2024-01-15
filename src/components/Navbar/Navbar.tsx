import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
	<nav id="navbar">
	<div className="container">
	  <h1 className="logo"><a href="index.html">HBT</a></h1>
	  <ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link className="current" to="/contact">Contact</Link></li>
	  </ul>
	</div>
  </nav>
  )
}

export default Navbar;