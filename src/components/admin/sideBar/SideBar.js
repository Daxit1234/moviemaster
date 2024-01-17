import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/headerLogo-removebg-preview.png";
import avatar from "../../../assets/avatar.png";

const SideBar = () => {
  return (
    <>
      <div className="header">
        <img className="imglogo" src={logo} alt="dvd" />
      </div>
      <div className="sidebar">
        <div className="admin-card d-flex ml-3">
            <div className="mr-3">
           <img src={avatar} alt="img" />
            </div>
            <div className="">
                <h6 className="text-light m-1">Admin name</h6>
                <div className="d-flex mt-2">
                    <div className="status-dot bg-success mr-2 mt-2"></div>
                  <p className="text-light o-3">Online</p>
                </div>
            </div>
        </div>
        <ul>
          <li>
            <Link to="/admin/addcinema">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/addshowtime">Users</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
