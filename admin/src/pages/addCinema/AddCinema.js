import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
import "./AddCinema.css";
import AdminContext from "../../context/AdminContext";
import TablePaginationDemo from "../../components/pagination/Paginathion";
const AddCinema = () => {
  const { getCinemas, allCinema, deleteCinema, totalCinema } =
    useContext(AdminContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    getCinemas(page, rowsPerPage);
  }, [page, rowsPerPage]);

  let handleDeleteCinema = (e) => {
    let id = e.target.getAttribute("id");
    deleteCinema(id);
    getCinemas();
  };

  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="Cinema List" />
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>c.No</th>
              <th>Cinema Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Location</th>
              <th>Delete</th>
            </tr>
            {allCinema?.map((item, index) => {
              const currentIndex = index + 1 + page * rowsPerPage; // Calculate the current index

              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{currentIndex}</th> {/* Render the calculated index */}
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
      
                    <button
                      onClick={handleDeleteCinema}
                      id={item._id}
                      className="btn-danger"
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <TablePaginationDemo
          set={{ page, rowsPerPage, setPage, setRowsPerPage }}
          count={totalCinema}
        />
      </div>
    </div>
  );
};

export default AddCinema;
