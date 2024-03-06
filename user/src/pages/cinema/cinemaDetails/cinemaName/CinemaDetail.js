import React, { useContext, useEffect, useState } from "react";
import "./CinemaDetails.css";
import Showtime from "../showTime/Showtime";
import MovieContext from "../../../../context/Moviecontext";
import MapModel from "../../../../components/Models/MapModel";
import cinemaNotFound from "../../../../assets/no-results.png"

function CinemaDetail() {
  const [show, setShow] = useState(false);
  const {getCinemas ,allCinema ,query,city}=useContext(MovieContext)
  useEffect(()=>{
    getCinemas(query)
    console.log(allCinema)
  },[query,city])

  function filterCinemasByCity(allCinema, city) {
    if (city==="allCity" || city==="") {
      return allCinema
    }
    return allCinema.filter(cinema => cinema.city.toLowerCase() === city.toLowerCase());
}

// Example: Filter cinemas by city "surat"
const newCinemas = filterCinemasByCity(allCinema, city);
  return (
    <div>
      {
        newCinemas?.length!==0?(
          newCinemas?.map((item) => {
            return (
              <div className="cinema-container" key={item._id}>
                <div className="cinema-info">
                  <span className="cinemaName">{item.cinemaName}</span>
                  <span className="cinema-address">
                    {item.address},{item.city}
                  </span>
                  <span data-toggle="modal" data-target="#exampleModalCenter" className="cinema-location" onClick={() => setShow(true)}>
                    <i className="fa-solid fa-location-dot"></i> Loc
                  </span>
                </div>
    
                <div className="time-info">
                  <Showtime cinemaid={item._id} name={item.cinemaName} address={ item.address + " " +item.city} />
                </div>
                <MapModel cinemaName={item.cinemaName} url={item.locationUrl} />
              </div>
            );
          })
        ):(
          <div className="notFoundImage">
            <img src={cinemaNotFound} alt="" />
            <h2>No Cinema Found</h2>
         </div>
        )
      }
   
    </div>
  );
}

export default CinemaDetail;
