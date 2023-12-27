import React, { useState, useEffect } from "react";
import "./Seats.css";
import { useNavigate } from "react-router-dom";

function Seats() {
  //   const {booking,details,setDetails} = useContext(MovieContext);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  // const [color,setColor]=useState("")
  let seats = [
    {
      row: "A",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "B",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "C",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "D",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "E",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "F",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "G",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "H",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
    {
      row: "I",
      seatNo: [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 0, 13, 14, 15, 16],
    },
  ];
  useEffect(() => {
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      if (
        spans[i].getAttribute("name") === "A0" ||
        spans[i].getAttribute("name") === "B0" ||
        spans[i].getAttribute("name") === "C0" ||
        spans[i].getAttribute("name") === "D0" ||
        spans[i].getAttribute("name") === "E0" ||
        spans[i].getAttribute("name") === "F0" ||
        spans[i].getAttribute("name") === "G0" ||
        spans[i].getAttribute("name") === "H0" ||
        spans[i].getAttribute("name") === "I0"
      ) {
        spans[i].style.width = "100px";
        spans[i].style.visibility = "hidden";
      }
    }
  }, []);
  let selected = (e) => {
    if (status) {
      e.target.style.backgroundColor = "";
      setStatus(false);
    } else {
      e.target.style.backgroundColor = "#00b8f5";
      //   let temp=e.target.getAttribute("name")
      //   setDetails({...details,seat:[...details.seat,temp]})
      setStatus(true);
    }
  };
  // let handleBooking = () => {
  //   if (!localStorage.getItem("userDetails")) {
  //     navigate("/login");
  //   } else {
  //     const spans = document.getElementsByTagName("span");
  //     for (let i = 0; i < spans.length; i++) {
  //       spans[i].style.backgroundColor = "rgb(4,21,45)";
  //     }
  //       booking()/
  //       navigate("/bookedTikets")
  //   }
  // };
  return (
    <div className="screen-container">
      <div className="text-light con container">
        {seats.map((item) => {
          return (
            <>
              <div className="row seat-container">
                <h3 className="col-1">{item.row}</h3>
                {item.seatNo.map((e) => {
                  return (
                    <>
                      <span
                        className="chk text-center col"
                        onClick={selected}
                        name={item.row + e}
                      >
                        {item.row}
                        <br />
                        {e}
                      </span>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
        <div className="screen d-flex justify-content-center ">
          <p className="text-light" id="p">
            Screen
          </p>
        </div>
        <div className="d-flex status-container justify-content-center row">
          <div className="chk">
          </div>
          <p >Available</p>
          <div className=" chk" style={{backgroundColor:" #5c788a" ,border:"none"}}>
            {/* <span className=""></span>
            <p>Booked</p> */}
          </div>
          <p>Booked</p>

          <div className=" chk" style={{backgroundColor:"#00b8f5"}}>
            {/* <span></span>
            <p>Selected</p> */}
          </div>
          <p>Selected</p>

        </div>
        <div className="d-flex justify-content-center">
          <div className="book-btn">Book Now</div>
        </div>
      </div>
    </div>
  );
}

export default Seats;
