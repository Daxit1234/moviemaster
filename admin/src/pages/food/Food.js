import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import Header2 from '../../components/header2/Header2'
import AddFoodModel from '../../components/cinemaModels/addFoodModel/AddFoodModel'
import AdminContext from '../../context/AdminContext'

const Food = () => {
  const {getFood,allFood,deleteFood}=useContext(AdminContext)
  const [role,setRole]=useState("add")
  // const [item,setItem]=useState({_id:"",cinemaName:"",address:"",city:"",locationUrl:""})
  useEffect(()=>{
    getFood()
  },[])
   
  let handleDeleteFood=(e)=>{
    let id=e.target.getAttribute("id")
    deleteFood(id)
    getFood()
  }
  return (
    <div className="d-flex">
    <SideBar />
    <div className="w-100">
      <Header2 page="Food List" />
      <div className="d-flex justify-content-between">
        <div className="h3 opacity-25 m-3">Food List</div>
        <div className="p-3">
          <button type="button" class="btn btn-primary btn-lg"   data-toggle="modal"
            data-target="#exampleModalCenter">
            Add Food
          </button>
        </div>
      </div>
      <div className="food-list">
         <table className="table w-100 overflow-auto table-striped">
          <tr className="table-title">
            <th>F.No</th>
            <th>Food Name</th>
            <th>Type</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Update</th>  
            <th>Delete</th>
          </tr>
          {allFood?.map((item, index) => {
            return (
              <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td className="p-1">
                  <img src={item.imageUrl} height={100} width={150} alt="not found" />
                </td>
                <td>
                  <button  className="btn-warning  mr-3" type="button">Edit</button></td><td>
                  {/* <button  id={item._id} 
                           cinemaName={item.cinemaName} 
                           city={item.city} 
                           address={item.address} 
                           locationUrl={item.locationUrl} 
                  data-toggle="modal" data-target="#exampleModalCenter" onClick={handleEditCinema} className="btn-warning  mr-3" type="button">Edit</button> */}
                 
                  <button onClick={handleDeleteFood}  id={item._id}  className="btn-danger" type="button">Delete</button>
                </td>
              </tr>
            );
          })}
        </table> 
      </div>
    </div>
    <AddFoodModel role={role}/>
  </div>
  )
}

export default Food
