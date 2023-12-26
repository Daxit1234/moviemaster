import React from 'react'
import  time from "./showtime.json"
import "./Showtime.css"
import { useNavigate } from 'react-router-dom'

function Showtime() {
  const Navigate=useNavigate();
  return (
    <div className='showtime-container'>
        {time.results.map((item)=>{
            return(
                <>
                <div className='showtime-box' onClick={()=> Navigate('/seats')}>
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
