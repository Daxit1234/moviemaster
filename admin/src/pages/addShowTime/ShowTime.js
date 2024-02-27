import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../context/AdminContext";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
import "./ShowTime.css";
import Times from "./Times";
import AddTimeModel from "../../components/cinemaModels/AddTimeModel/AddTimeModel";

const ShowTime = () => {
  const { getCinemas, allCinema } = useContext(AdminContext);
  const [role,setRole]=useState("add")

  useEffect(() => {
    getCinemas();
  }, []);
  console.log(allCinema)
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="Show List" />
        <div className="container ">
          <div className="row">
            {allCinema?.map((i) => {
              return(
               <div className="col-4 cinema-time-card ">
                <div className="bg-dark text-light px-4" style={{fontSize:"20px"}}>
                <div>
                  {i.cinemaName}, {i.city}
                </div>
                <div>
                  {i.address}
                </div>
                </div>
                 <Times cinemaId={i._id}/>
                 <div className="add-button">
          <button type="button" onClick={()=>setRole("add")} class="btn btn-primary btn"   data-toggle="modal"
              data-target="#exampleModalCenter">
              Add Show 
            </button>
            
          </div>
                </div>
                
              )
            })}
          </div>
      <AddTimeModel  role={role} item="mskdm" />
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
