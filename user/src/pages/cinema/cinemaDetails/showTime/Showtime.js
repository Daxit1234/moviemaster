import React,{useContext} from 'react'
import  time from "./showtime.json"
import "./Showtime.css"
import { useNavigate } from 'react-router-dom'
import MovieContext from '../../../../context/Moviecontext';

function Showtime() {
  const Navigate=useNavigate();
  const {bookingDetails,setBookingDetails ,setBookedSeats}=useContext(MovieContext);

  let handleSetShow=async(cid,tid)=>{
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      showId: "65a28767eeafe22cbdf56d25",   //change with tid
      cinemaId: "65a28751eeafe22cbdf56d23",  //change with cid
    }));
    
        const response = await fetch("http://localhost:8080/bookedSeats/getseat", {
          method: "POST",
          // Make sure to use the correct headers if needed
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "cinemaId":"65a28751eeafe22cbdf56d23",   //change with cid
            "showId":"65a28767eeafe22cbdf56d25",    //change with sid
            "movieId":bookingDetails.movieId,
            "date":bookingDetails.date
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setBookedSeats(data); // Assuming data is an array of booked seats
          localStorage.setItem("bookedSeats",data)
        } else {
          console.error("Failed to fetch booked seats");
        }
    Navigate('/seats')
  }
  return (
    <div className='showtime-container'>
        {time?.results.map((item)=>{
            return(
                <>
                <div className='showtime-box' onClick={()=>handleSetShow(item?.Cinemaid,item?._id)}>
                   <span className="time-title"> {item.time}</span><br />
                   <div className='d-flex justify-content-center'>
                   <span className="show-type"> {item.show_type}</span>
                   </div>
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Showtime
