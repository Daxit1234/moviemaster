import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
// import "./AddCinema.css";
import AddCinemaModel from "../../components/cinemaModels/addCinemaModel/AddCinemaModel";
import AdminContext from "../../context/AdminContext";
const AddCinema = () => {
  const {getShows ,allShows,deleteCinema}=useContext(AdminContext)
  const [role,setRole]=useState("add")
  const [item,setItem]=useState({_id:"",cinemaName:"",address:"",city:"",locationUrl:""})
  useEffect(()=>{
    getShows()
  },[])
  console.log(allShows)
  let handleDeleteCinema=(e)=>{
    let id=e.target.getAttribute("id")
    deleteCinema(id)
    getShows()
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
