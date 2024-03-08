import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext'
import Header2 from '../../components/header2/Header2'
import TablePaginationDemo from '../../components/pagination/Paginathion'


const Users = () => {
  const { allUsers ,getUsers ,deleteUser ,totalUser}=useContext(AdminContext)
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [query,setQuery]=useState("")

  useEffect(()=>{
    getUsers(page,rowsPerPage,query)
  },[page,rowsPerPage,query])

  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="User List" />
        <div className="mr-3 d-flex justify-content-end">
        <i  className="fa-solid fa-magnifying-glass mr-3" style={{fontSize:"25px",alignSelf:"center"}}></i>
          <input type="text" placeholder="Search User" onChange={(e)=>setQuery(e.target.value)} className="form-control w-25 " />
        </div>
        <div className="cinema-list"  style={{height:"466px"}}>
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>User.No</th>
              <th>User Name</th>
              <th>E-mail</th>
              <th>Status</th>
            </tr>
            {allUsers?.map((item, index) => {
                 const currentIndex = index + 1 + page * rowsPerPage-rowsPerPage;
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{currentIndex}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
              
                  <td>
                  <button id={item._id}  className="btn-success btn-sm" type="button">Actice</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      <TablePaginationDemo set={{ page, rowsPerPage, setPage, setRowsPerPage }}
      count={totalUser} />
      </div>
    </div>
  )
}

export default Users
