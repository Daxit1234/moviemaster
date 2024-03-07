import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import AdminContext from '../../context/AdminContext';
import Header2 from '../../components/header2/Header2';
import TablePaginationDemo from "../../components/pagination/Paginathion";

function Payment() {
    const [payment, setPayment] = useState([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPayment, setTotalPayment] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let responce = await fetch(
            `http://localhost:8080/payment/getpayment?page=${page}&pageSize=${rowsPerPage}`
          );
          let data = await responce.json();
          setPayment(data.results);
          setTotalPayment(data.totalData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [setPayment, page, rowsPerPage]);
  return (
    <div className='d-flex'>
      <SideBar/>
      <div className="w-100">
        <Header2 page="Payment List" />
        <div className="cinema-list"  style={{height:"500px"}}>
          <table className="table w-100  table-striped">
              <tr className="table-title">
                <th>p.No</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>Payment ID</th>
                <th>Amount</th>
              </tr>
            <tbody> {/* Use tbody for table body */}
              {payment?.map((item, index) => {
                const currentIndex = index + 1 + page * rowsPerPage-rowsPerPage; // Calculate the current index

                return (
                  <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`} key={index}>
                    <td>{currentIndex}</td> {/* Render the calculated index */}
                    <td>{item.contactNo}</td>
                    <td>{item.email}</td>
                    <td>{item.paymentId}</td>
                    <td>{item.totalAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <TablePaginationDemo
          set={{ page, rowsPerPage, setPage, setRowsPerPage }}
          count={totalPayment}
        />
      </div>
    </div>
  )
}

export default Payment;
