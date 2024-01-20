import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
import "./AddCinema.css";
import AddCinemaModel from "../../components/cinemaModels/addCinemaModel/AddCinemaModel";
import AdminContext from "../../context/AdminContext";
const AddCinema = () => {
  const {getCinemas ,allCinema,deleteCinema}=useContext(AdminContext)
  const [role,setRole]=useState("add")
  const [item,setItem]=useState({_id:"",cinemaName:"",address:"",city:"",locationUrl:""})
  useEffect(()=>{
    getCinemas()
  },[])

  let handleDeleteCinema=(e)=>{
    let id=e.target.getAttribute("id")
    deleteCinema(id)
    getCinemas()
  }
  let handleEditCinema=(e)=>{
    let id=e.target.getAttribute("id")
    let cinemaName=e.target.getAttribute("cinemaName")
    let city=e.target.getAttribute("city")
    let address=e.target.getAttribute("address")
    let locationUrl=e.target.getAttribute("locationUrl")
    setItem({_id:id,cinemaName:cinemaName,city:city,address:address,locationUrl:locationUrl})
    setRole("edit")
  }
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="Cinema List" />
        <div className="d-flex justify-content-between">
          <div className="h3 opacity-25 m-3">Cinema List</div>
          <div className="p-3">
            <button type="button" onClick={()=>setRole("add")} class="btn btn-primary btn-lg"   data-toggle="modal"
              data-target="#exampleModalCenter">
              Add Cinema
            </button>
          </div>
        </div>
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>c.No</th>
              <th>Cinema Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Location</th>
              <th>Update</th>
            </tr>
            {allCinema?.map((item, index) => {
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{index + 1}</th>
                  <td>{item.cinemaName}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td className="p-1">
                    <iframe
                      src={item.locationUrl}
                      width="150"
                      height="70"
                      loading="lazy"
                      className="bg-dark"
                    ></iframe>
                  </td>
                  <td>
                    <button  id={item._id} 
                             cinemaName={item.cinemaName} 
                             city={item.city} 
                             address={item.address} 
                             locationUrl={item.locationUrl} 
                    data-toggle="modal" data-target="#exampleModalCenter" onClick={handleEditCinema} className="btn-warning  mr-3" type="button">Edit</button>
                    <button onClick={handleDeleteCinema}  id={item._id}  className="btn-danger" type="button">Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <AddCinemaModel role={role} item={item}/>
    </div>
  );
};

export default AddCinema;
