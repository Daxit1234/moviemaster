import React, { useContext, useEffect } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext'
import Header2 from '../../components/header2/Header2'

const Users = () => {
  const { allUsers ,getUsers ,deleteUser }=useContext(AdminContext)
  useEffect(()=>{
    getUsers()
  },[])

  let handleDeleteUser=(e)=>{
    // let id=e.target.getAttribute("id")
    // deleteUser(id)
    // getUsers()
  }
  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="User List" />
        <div className="d-flex justify-content-between">
          <div className="h3 opacity-25 m-3">User List</div>
        </div>
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>User.No</th>
              <th>User Name</th>
              <th>E-mail</th>
              <th>Delete</th>
            </tr>
            {allUsers?.map((item, index) => {
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
              
                  <td>
                  <button onClick={handleDeleteUser}  id={item._id}  className="btn-danger" type="button">Delete</button>
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

export default Users
