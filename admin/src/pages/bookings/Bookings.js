import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext';
import Header2 from '../../components/header2/Header2';
import TablePaginationDemo from "../../components/pagination/Paginathion";

function Bookings() {
  const { getBooking, allBooking, totalBooking } =
  useContext(AdminContext);
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    getBooking(page, rowsPerPage);
  }, [page, rowsPerPage]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust format as needed
  };

  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="Booking List" />
        <div className="d-flex justify-content-between">
          <div className="h3 opacity-25 m-3">Booking List</div>
        </div>
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
              <tr className="table-title w-100">
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
                const currentIndex = index + 1 + page * rowsPerPage; // Calculate the current index

                return (
                  <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`} key={index}>
                    <td>{currentIndex}</td> {/* Render the calculated index */}
                    <td>{item.userName}</td>
                    <td>{item.cinemaName}dkvskdvskldmvkldsnl</td>
                    <td>{item.movieName}</td>
                    <td>{formatDate(item.date)}</td> {/* Format the date */}
                    <td>{item.showTime}</td>
                    <td>{item.showType}</td>
                    <td>{item.seats.map(i => i + " ")}</td>
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
