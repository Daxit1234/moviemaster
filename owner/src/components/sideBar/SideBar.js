import React, { useContext } from "react";
import "./SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import AdminContext from "../../context/AdminContext";

const SideBar = () => {
  const navigate=useNavigate()
  const {obj}=useContext(AdminContext)
  const handleLogout = () => {
    // Remove all items from local storage
    localStorage.clear();

    // Navigate to "/login"
    navigate("/login");
  };
  return (
    <> 
      <div className="sidebar">
        <div className="admin-card d-flex ml-3">
            <div className="mr-3">
           <img src={avatar} alt="img" />
            </div>
            <div className="">
                <h6 className="text-light m-1">{obj.ownerName}</h6>
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
          <li  onClick={handleLogout}>
            <Link to="/login" ><i class="fa-solid fa-right-from-bracket"></i> Log Out</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
