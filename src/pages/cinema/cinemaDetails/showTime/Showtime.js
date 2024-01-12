import React,{useContext} from 'react'
import  time from "./showtime.json"
import "./Showtime.css"
import { useNavigate } from 'react-router-dom'
import MovieContext from '../../../../context/Moviecontext';

function Showtime() {
  const Navigate=useNavigate();
  const {bookingDetails,setBookingDetails}=useContext(MovieContext);

  let handleSetShow=(cid,tid)=>{
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      showId: tid,
      cinemaId: cid,
    }));
    console.log(bookingDetails)
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
