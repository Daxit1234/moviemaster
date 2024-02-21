import React, { useContext, useEffect } from "react";
import "./Dashboard.css";
import SideBar from "../../components/sideBar/SideBar";
import { useLocation } from "react-router-dom";
import Header2 from "../../components/header2/Header2";
import AdminContext from "../../context/AdminContext";

function Dashboard() {
  const location = useLocation();
  const { getShows,getCinemas,getFood,getUsers,allShows,totalCinema,totalFood,totalUser}=useContext(AdminContext);
  useEffect(()=>{
    getShows()
    getCinemas()
    getUsers()
    getFood()
  },[])
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className=" w-100">
        <Header2  page="DashBoard"/>
        <div className="counting-box">
          <div className="users m-3 counting-item">
            <div>
              <div className="count-no" >{totalUser}</div>
              <div  className="title-item">Users</div>
            </div>
            <div className="d-flex">
            <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div className="cinema m-3 counting-item">
            <div>
            <div className="count-no">{totalCinema}</div>
              <div className="title-item">Cinema</div>
            </div>
            <div className="d-flex">
            <i class="fa-solid fa-chart-simple"></i>
            </div>
          </div>
          <div className="shows m-3 counting-item">
            <div>
            <div className="count-no">{allShows?.length || 0}</div>
              <div className="title-item">Shows</div>
            </div>
            <div className="d-flex">
            <i class="fa-solid fa-video"></i>
            </div>
          </div>
          <div className="booking m-3 counting-item">
            <div>
            <div className="count-no">24</div>
              <div className="title-item">Bookings</div>
            </div>
            <div className="d-flex">
            <i class="fa-solid fa-chart-pie"></i>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
