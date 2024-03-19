import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/headerLogo-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [login,setLogin]=useState(false)
  let location=useLocation();
 console.log(location.pathname)
  useEffect(()=>{
    if (localStorage.getItem("userData")) {
      setLogin(true)
    }
  },[setLogin])
  let logout = () => {
    localStorage.removeItem("userData");
    setLogin(false)
  };
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
              <li className="nav-item ">
                <Link className={`nav-link ${location.pathname=="/" || location.pathname.slice(0,8)=="/details" || location.pathname.slice(0,7)=="/cinema" || location.pathname.slice(0,7)=="/food" || location.pathname.slice(0,8)=="/payment" || location.pathname.slice(0,6)=="/seats" ? "text-primary" :""}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname=="/about" && "text-primary"}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname=="/contact" && "text-primary"}`} to="/contact">
                  Contact
                </Link>
              </li>
              {!login ? (
                <div>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname=="/login"&& "text-primary"}`} to="/login">
                      Login
                    </Link>
                  </li>
                </div>
              ) : (
                <>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname=="/bookings"&& "text-primary"}`} to="/bookings">
                  Bookings
                </Link>
              </li>
                <div>
                  <li className="nav-item">
                    <Link onClick={logout} className={`nav-link ${location.pathname=="/login"&& "text-primary"}`} to="/login">
                      Log Out
                    </Link>
                  </li>
                </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
