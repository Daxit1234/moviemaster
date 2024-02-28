import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
// import "./AddCinema.css";
import AddCinemaModel from "../../components/cinemaModels/addCinemaModel/AddCinemaModel";
import AdminContext from "../../context/AdminContext";
import AddTimeModel from "../../components/cinemaModels/AddTimeModel/AddTimeModel";
const AddCinema = () => {
  const {getShows ,allShows,deleteTime}=useContext(AdminContext)
  const [role,setRole]=useState("add")
  const [item,setItem]=useState({_id:"",cinemaName:"",time:"",showType:""})
  useEffect(()=>{
    getShows()
  },[])
  let handleDeleteShow=(e)=>{
    let id=e.target.getAttribute("id")
    deleteTime(id)
    getShows()
  }
  let handleEditShow=(e)=>{
    let id=e.target.getAttribute("id")
    let cinemaName=e.target.getAttribute("cinemaName")
    let time=e.target.getAttribute("time")
    let showType=e.target.getAttribute("showType")
    setItem({_id:id,cinemaName:cinemaName,time:time,showType:showType})
    setRole("edit")
  }
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="Show List" />
        <div className="d-flex justify-content-between">
          <div className="h3 opacity-25 m-3">Show List</div>
          <div className="p-3">
            <button type="button" onClick={()=>setRole("add")} class="btn btn-primary btn-lg"   data-toggle="modal"
              data-target="#exampleModalCenter">
              Add Show 
            </button>
          </div>
        </div>
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>c.No</th>
              <th>Cinema Name</th>
              <th>Time</th>
              <th>ShowType</th>
              <th>Update</th>
            </tr>
            {allShows?.map((item, index) => { 
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{index + 1}</th>
                  <td>{item.cinemaId.cinemaName}</td>
                  <td>{item.time}</td>
                  <td>{item.showType}</td>
                  <td>
                    <button  id={item._id} 
                             cinemaName={item.cinemaId?.cinemaName} 
                             time={item.time} 
                             showType={item.showType} 
                    data-toggle="modal" data-target="#exampleModalCenter" onClick={handleEditShow} className="btn-warning  mr-3" type="button">Edit</button>
                    <button onClick={handleDeleteShow}  id={item._id}  className="btn-danger" type="button">Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <AddTimeModel  role={role} item={item} />
    </div>
  );
};

export default AddCinema;
