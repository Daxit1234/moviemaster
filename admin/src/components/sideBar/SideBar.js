import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const SideBar = () => {
  return (
    <> 
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
            <Link to="/"><i class="fa-solid fa-house"></i> Dashboard</Link>
          </li>
          <li>
            <Link to="/cinemas"><i class="fa-solid fa-film"></i>Movie Cinemas</Link>
          </li>
          <li>
            <Link to="/showtimes"><i class="fa-solid fa-calendar-days"></i>Show Times</Link>
          </li>
          <li>
            <Link to="/users"><i class="fa-solid fa-user"></i>Users</Link>
          </li>
          <li>
            <Link to="/bookings"><i class="fa-solid fa-ticket"></i>Bookings</Link>
          </li>
          <li>
            <Link to="/foods"><i class="fa-solid fa-mug-saucer"></i> Foods</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
