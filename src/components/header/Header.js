import React from "react";
import "./Header.css";
import logo from "../../assets/headerLogo-removebg-preview.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <img className="imglogo" src={logo} alt="dvd" />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/contact">
                  Contect
                </Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
