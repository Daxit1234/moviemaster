import React, { useState, useEffect,useContext } from "react";
import "./Seats.css";
import MovieContext from "../../context/Moviecontext";
import { useNavigate, useParams } from 'react-router-dom';

function Seats() {
  const {bookingDetails,setBookingDetails,bookedSeats,obj}=useContext(MovieContext);
  const [status, setStatus] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  let navigate=useNavigate()
  const { showPrice }=useParams()

  let seats = [
    {
      row: showPrice.split(",")[0],
      seatNo: [],
    },
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
      row:showPrice.split(",")[1],
      seatNo: [],
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
      row:showPrice.split(",")[2],
      seatNo: [],
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
    if (obj.email==="") {
      navigate('/login')
    }
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
      if( bookedSeats?.includes(spans[i].getAttribute("name"))){
         spans[i].style.pointerEvents = "none";
        spans[i].style.backgroundColor = " #5c788a";
      }
    }

  }, [bookedSeats]);

  let selected = async (e) => {
    let temp = e.target.getAttribute("name");
    let isSelected = selectedSeats.includes(temp); // Check if the seat is already selected
    if (isSelected) {
      e.target.style.backgroundColor = "";
      let newArray = selectedSeats.filter(i => i !== temp);
      setSelectedSeats(newArray);
    } else {
      e.target.style.backgroundColor = "#00b8f5";
      setSelectedSeats([...selectedSeats, temp]);
    }
  };
  

  let handleBooking =async () => {
    let amount=0;
   await selectedSeats.map((i)=>{
      if(i.slice(0,1)==="A" || i.slice(0,1)==="B" ||i.slice(0,1)==="C"){
        amount=amount+parseInt(showPrice.split(",")[0])
      }
      if(i.slice(0,1)==="D" || i.slice(0,1)==="E" ||i.slice(0,1)==="F"){
        amount=amount+parseInt(showPrice.split(",")[1])
      }
      if(i.slice(0,1)==="G" || i.slice(0,1)==="H" ||i.slice(0,1)==="I"){
        amount=amount+parseInt(showPrice.split(",")[2])
      }
    })
    console.log(amount)
   await setBookingDetails({...bookingDetails,
      seats:selectedSeats,
      totalAmount:amount,
    })
     navigate("/food")
  };
  return (
    <div className="screen-container">
      
   {
    selectedSeats.length > 0 ? 
      <div  className={`d-flex justify-content-center`}>
         <div className="d-flex justify-content-between book-container">
          <div className="">
          {/* <h5 className="text-light" id="" onClick={handleBooking}> ₹{displayamount}</h5> */}
          <p className="text-light">No Of Ticket {selectedSeats.length}</p>
          <p className="text-light">{selectedSeats.map(i=><span className="mr-1">{i+" "}</span> )} </p>
          </div>
          <div>
          <div className="book-btn" id="booking-btn" onClick={handleBooking}>Book Now</div>
          </div>
        </div>
      </div>
      :<></>
   } 
    
      <div className="text-light con container">
        {seats.map((item) => {
          return (
            <>
              <div className="row seat-container">
                {
                  item.seatNo.length!==0 ?
                  <h3 className="col-1 text-center">{item.row}</h3>
                  :
                  <h5 className="text-center price-title">₹ {item.row} </h5>

                }
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
     
      </div>
    </div>
  );
}

export default Seats;
