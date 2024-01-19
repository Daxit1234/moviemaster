import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
import "./AddCinema.css";
import cinema from "./cinema.json";
import AddCinemaModel from "../../components/addCinemaModel/AddCinemaModel";
const AddCinema = () => {
  console.log(cinema);
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="Cinema List" />
        <div className="d-flex justify-content-between">
          <div className="h3 opacity-25 m-3">Cinema List</div>
          <div className="p-3">
            <button type="button" class="btn btn-primary btn-lg"   data-toggle="modal"
              data-target="#exampleModalCenter">
              Add Cinema
            </button>
          </div>
        </div>
        <div className="cinema-list">
          <table className="table w-100 overflow-auto table-striped">
            <tr className="table-title">
              <th>c.No</th>
              <th>Cinema Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Location</th>
            </tr>
            {cinema.results.map((item, index) => {
              return (
                <tr className={`${index % 2 === 0 ? "even-row" : "odd-row"}`}>
                  <th>{index + 1}</th>
                  <td>{item.cinema}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td className="p-1">
                    <iframe
                      src={item.location}
                      width="150"
                      height="70"
                      loading="lazy"
                      className="bg-dark"
                    ></iframe>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <AddCinemaModel />
    </div>
  );
};

export default AddCinema;
