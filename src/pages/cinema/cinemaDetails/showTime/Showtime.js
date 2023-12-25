import React from 'react'
import  time from "./showtime.json"
import "./Showtime.css"

function Showtime() {
    console.log(time)
  return (
    <div className='showtime-container'>
        {time.results.map((item)=>{
            return(
                <>
                <div className='showtime-box'>
                   <span className="time-title"> {item.time}</span>
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Showtime
