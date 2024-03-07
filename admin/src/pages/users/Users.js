import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext'
import Header2 from '../../components/header2/Header2'
import TablePaginationDemo from '../../components/pagination/Paginathion'


const Users = () => {
  const { allUsers ,getUsers ,deleteUser ,totalUser}=useContext(AdminContext)
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(()=>{
    getUsers(page,rowsPerPage)
  },[page,rowsPerPage])

  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="User List" />
        <div className="cinema-list"  style={{height:"500px"}}>
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
