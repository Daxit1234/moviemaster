import React,{useState} from 'react'
import cinemas from "./cinema.json";
import "./CinemaDetails.css"
import Showtime from '../showTime/Showtime';

function CinemaDetail() {
  const [show, setShow] = useState(false);
  return (
    <div >
        {
            cinemas.results.map((item)=>{
                return(
             <div className="cinema-container">
                <div className='cinema-info'>
                    <span className='cinemaName'>{item.cinema}</span>
                    <span className='cinema-address'>{item.address},{item.city}</span>
                    <span className='cinema-location' onClick={()=>setShow(true)}>
                    <i class="fa-solid fa-location-dot"></i>  Loc
                    </span>
                </div>
            
               <div className='time-info'>
                  <Showtime/>
               </div>
               <div className="mappopup" style={show?{display:"block"}:{display:"none"}}>
               <div className="opacityLayer"></div>
                <div className='d-flex justify-content-between bg-light text-dark'>
                <span className=''>{item.cinema}</span>
                <span className='' onClick={() => setShow(false)}>close</span>
                </div>
               <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3719.908895480864!2d72.8596944!3d21.195777800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzQ0LjgiTiA3MsKwNTEnMzQuOSJF!5e0!3m2!1sen!2sin!4v1703519430253!5m2!1sen!2sin" loading="lazy"></iframe>
               </div>
             </div>

                )
            })
        }
    </div>
  )
}

export default CinemaDetail
