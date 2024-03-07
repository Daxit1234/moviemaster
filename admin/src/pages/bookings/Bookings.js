import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext';
import Header2 from '../../components/header2/Header2';
import TablePaginationDemo from "../../components/pagination/Paginathion";

function Bookings() {
  const { getBooking, allBooking, totalBooking } =
  useContext(AdminContext);
  
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  useEffect(() => {
    getBooking(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    
    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
  
    // Concatenate in the desired format
    const formattedDate = `${day} ${month} ${year}`;
    
    return formattedDate;
  };
  

  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="Booking List" />
        <div className="cinema-list"  style={{height:"500px"}}>
          <table className="table w-100  table-striped">
              <tr className="table-title">
                <th>B.No</th>
                <th>User</th>
                <th>Cinema</th>
                <th>Movie</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Seats</th>
                <th>Amount</th>
              </tr>
            <tbody> {/* Use tbody for table body */}
              {allBooking?.map((item, index) => {
                const currentIndex = index + 1 + page * rowsPerPage-rowsPerPage; // Calculate the current index

                return (
                  <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`} key={index}>
                    <td>{currentIndex}</td> {/* Render the calculated index */}
                    <td>{item.userName}</td>
                    <td>{item.cinemaName}</td>
                    <td>{item.movieName}</td>
                    <td>{formatDate(item.date)}</td> {/* Format the date */}
                    <td>{item.showTime}</td>
                    <td>{item.showType}</td>
                    <td className='text-left'>{item.seats.map(i =><strong>{i +" "}</strong> )}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.Amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <TablePaginationDemo
          set={{ page, rowsPerPage, setPage, setRowsPerPage }}
          count={totalBooking}
        />
      </div>
    </div>
  )
}

export default Bookings;
