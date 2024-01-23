import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();

  return (
    <nav id="navbar">
      <div className="navbar ">
        <div className="logo">
          <Link to="/" className="logo">
            CarRent
          </Link>
        </div>
        <div className="menu">
          <div className="menu-link">
            <NavLink
              to="/contact"
              className={location.pathname === "/contact" ? "current" : ""}
            >
              Contact
            </NavLink>
          </div>
          <div className="menu-link">
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? "current" : ""}
            >
              About
            </NavLink>
          </div>
          <div className="menu-link">
            <NavLink
              to="/cars"
              className={location.pathname === "/cars" ? "current" : ""}
            >
              Cars
            </NavLink>
          </div>
          <div className="menu-link">
            <NavLink
              to="/singUp"
              className={location.pathname === "/signUp" ? "current" : ""}
            >
              Sign Up
            </NavLink>
          </div>
          <div className="menu-link">
            <NavLink
              to="/login"
              className={location.pathname === "/login" ? "current" : ""}
            >
              Login
            </NavLink>
          </div>
          <div className="menu-link">
            <NavLink
              to="/basket"
              className={location.pathname === "/basket" ? "current" : ""}
            >
              <FontAwesomeIcon icon={faCartShopping as IconProp} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );

export default Navbar;
