import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../context/AdminContext";
import SideBar from "../../components/sideBar/SideBar";
import Header2 from "../../components/header2/Header2";
import "./ShowTime.css";
import Times from "./Times";
import TablePaginationDemo from "../../components/pagination/Paginathion";

const ShowTime = () => {
  const { totalCinema ,getCinemas, allCinema,deleteTime } = useContext(AdminContext);
  const [status, setStatus] = useState(false);
  const [selectedTime, setSelectedTime] = useState([]);
  const [cid,setCid]=useState("")
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    getCinemas(page, rowsPerPage);
  }, [page, rowsPerPage]);
  
  let selected = (e) => {
    let temp=e.target.getAttribute("name")
    if (status) {
      e.target.style.backgroundColor = "rgb(237,240,247)";
      let newArray=selectedTime.filter(i=>i!==temp);
      setSelectedTime(newArray)
      setStatus(false);
    } else {
      e.target.style.backgroundColor = "rgb(59,138,186)";
      setSelectedTime([...selectedTime,temp])
      setStatus(true);
    }
  };
  let deleteShow=()=>{
    selectedTime.map((i)=>{
      deleteTime(i)
    })
    window.location.reload();
  }
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Header2 page="Show List" />
        <div className="mx-2 mb-3 container-showtime">
          <div className="row">
            {allCinema?.map((i) => {
              return(
               <div className="col-4 cinema-time-card ">
                <div className="bg-dark text-light px-4" style={{fontSize:"20px"}}>
                <div>
                  {i.cinemaName}, {i.city}
                </div>
                <div>
                  {i.address}
                </div>
                </div>
                 <Times cinemaId={i._id} selected={selected}/>
                 <div className="add-button">
                  
          <button type="button" onClick={deleteShow} class="btn mx-3 btn-danger btn-sm" 
              >
              Delete 
            </button>   
          </div>
                </div>
                
              )
            })}
          </div>
        </div>
        <TablePaginationDemo
          set={{ page, rowsPerPage, setPage, setRowsPerPage }}
          count={totalCinema}
        />
      </div>
    </div>
  );
};

export default ShowTime;
