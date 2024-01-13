import React, { useState ,useContext} from "react";
import "./Moviedates.css";
import MovieContext from "../../../context/Moviecontext";

const MovieDates = () => {
  const [selected,setSelected]= useState(new Date().toString())
  const {bookingDetails,setBookingDetails}=useContext(MovieContext);

  const today = new Date();
  const nextDates = [];
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    nextDates.push(nextDate);
  }
  let handleDate=(e)=>{
    setSelected(e.target.getAttribute("name"))
   let newDate= e.target.getAttribute("name").slice(0,16)
    setBookingDetails({...bookingDetails,date:newDate})
  }
  return (
    <>
      <div className="dateContainer">
        <div className="dateDetail">
          <div className="month">{today.toString().slice(4, 7)}</div>
          {nextDates.map((item) => {
            return (
              <button className={`dateBox ${selected.slice(0,4)===item.toString().slice(0,4)?"active":""}`}  name={item.toString()} onClick={handleDate} key={item.toString()}>
                {item.toString().slice(0,3)} <br />
                {item.toString().slice(8,11)}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieDates;
