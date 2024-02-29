import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext'
import Header2 from '../../components/header2/Header2'
import TablePaginationDemo from '../../components/pagination/Paginathion'


const Owner = () => {
  const { allOwner ,getOwner,deleteOwner}=useContext(AdminContext)

  useEffect(()=>{
    getOwner()
  },[])

  let addOwner=()=>{
    let ownerName=prompt("enter Owner Name :")
    console.log(ownerName)
  }
  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="User List" />
        <div className="d-flex justify-content-between">
        <div className="h3 opacity-25 m-3">Owner List</div>
        <div className="p-1">
          <button type="button" onClick={addOwner} className="btn btn-primary btn-lg"  >
            Add Owner
          </button>
        </div>
      </div>
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>Owner.No</th>
              <th>owner Name</th>
              <th>E-mail</th>
              <th>owner ID</th>
              <th>Status</th>
            </tr>
            {allOwner?.map((item, index) => {
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{index+1}</th>
                  <td>{item.ownerName}</td>
                  <td>{item.email}</td>
                  <td>{item._id}</td>
                  <td>
                  <button  id={item._id}  className="btn-success btn-sm" type="button">Active</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Owner
