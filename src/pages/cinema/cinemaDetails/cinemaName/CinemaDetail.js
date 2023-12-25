import React from 'react'
import cinemas from "./cinema.json";
import "./CinemaDetails.css"
import Showtime from '../showTime/Showtime';

function CinemaDetail() {
    console.log(cinemas)
  return (
    <div >
        {
            cinemas.results.map((item)=>{
                return(
             <div className="cinema-container">
                <div className='cinema-info'>
                    <span className='cinemaName'>{item.cinema},{item.address}</span>
                    <span className='cinema-location'>
                        info
                    </span>
                </div>
            
               <div className='time-info'>
                  <Showtime/>
               </div>
             </div>

                )
            })
        }
    </div>
  )
}

export default CinemaDetail
